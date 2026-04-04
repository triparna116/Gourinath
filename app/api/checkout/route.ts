import { NextResponse } from 'next/server';
import { razorpay } from '@/lib/razorpay';
import { db } from '@/lib/firebase-admin';

export async function POST(req: Request) {
  try {
    const { name, email, phone, packageId, amount, totalClasses } = await req.json();

    if (!name || !email || !phone || !packageId || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Strict Razorpay Gateway Creation
    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`
    };
    
    const order = await razorpay.orders.create(options);
    if (!order) {
      return NextResponse.json({ error: 'Failed to create Razorpay secure order' }, { status: 500 });
    }

    // Save initial order in Firestore
    await db.collection('orders').doc(order.id).set({
      orderId: order.id,
      name,
      email,
      phone,
      packageId,
      amount,
      totalClasses,
      status: 'init',
      createdAt: new Date().toISOString()
    });

    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
