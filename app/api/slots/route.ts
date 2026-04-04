import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function GET() {
  try {
    // Return slots for next 15 days
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    // Convert to ISO to query Firebase natively
    const isoDate = now.toISOString();

    const slotsSnap = await db.collection('slots').get();

    const slots = slotsSnap.docs
      .map((doc: any) => ({ id: doc.id, ...doc.data() }))
      .filter((doc: any) => new Date(doc.date) >= now)
      .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 100);
    
    return NextResponse.json({ slots });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
