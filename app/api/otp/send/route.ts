import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Since we are running locally without email passwords, we skip Nodemailer.
    // In production, you would import nodemailer and send the OTP here.
    return NextResponse.json({ success: true, message: 'OTP simulated successfully' });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
