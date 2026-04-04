import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App password
  },
});

export async function sendOtpEmail(to: string, otp: string) {
  const mailOptions = {
    from: `"Theatre-Place" <${process.env.EMAIL_USER}>`,
    to,
    subject: `Your Booking Verification Code is ${otp}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px;">
        <h2>Verify Your Booking</h2>
        <p>Your one-time password (OTP) for confirming your Theatre-Place class booking is:</p>
        <h1 style="color: #FFB100; letter-spacing: 3px;">${otp}</h1>
        <p>Do not share this OTP with anyone.</p>
        <br/>
        <p>Best regards,<br/>Gourinath Banerjee & Team</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
