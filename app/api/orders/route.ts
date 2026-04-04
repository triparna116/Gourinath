import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase-admin';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 });

    const ordersSnapshot = await db.collection('orders')
      .where('email', '==', email)
      .get();

    const orders = ordersSnapshot.docs
      .map((doc: any) => ({ id: doc.id, ...doc.data() }))
      .filter((doc: any) => doc.status === 'confirm');

    return NextResponse.json({ orders });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
