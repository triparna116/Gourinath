import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function POST(req: Request) {
  try {
    const { orderId, slotId, email, otp } = await req.json();

    if (!orderId || !slotId || !otp) {
      return NextResponse.json({ error: 'Missing information' }, { status: 400 });
    }

    // In a real application, you would verify the OTP here. 
    // Since we are running in local simulation, we accept any OTP.

    // 1. Fetch Order
    const orderRef = db.collection('orders').doc(orderId);
    const orderDoc = await orderRef.get();
    
    if (!orderDoc.exists) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }
    
    const orderData = orderDoc.data();
    const currentBooked = orderData.classesBooked || 0;

    if (currentBooked >= orderData.totalClasses) {
      return NextResponse.json({ error: 'Class limit reached for this package' }, { status: 400 });
    }

    // 2. Fetch Slot
    const slotRef = db.collection('slots').doc(slotId);
    const slotDoc = await slotRef.get();
    
    if (!slotDoc.exists) {
      return NextResponse.json({ error: 'Slot not found' }, { status: 404 });
    }

    const slotData = slotDoc.data();
    const capacity = slotData.currentCapacity || 0;

    if (capacity >= slotData.maxCapacity) {
      return NextResponse.json({ error: 'Slot is full' }, { status: 400 });
    }

    // 3. Update Databsae (Increment capacities)
    await orderRef.update({ classesBooked: currentBooked + 1 });
    await slotRef.update({ currentCapacity: capacity + 1 });

    // 4. Save Booking record
    await db.collection('bookings').add({
      orderId,
      slotId,
      userId: email,
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error('Booking confirmation err', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
