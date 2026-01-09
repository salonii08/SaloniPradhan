import nodemailer from "nodemailer";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // 1. Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, //  Gmail address
        pass: process.env.EMAIL_PASS, //  Gmail app password
      },
    });

    // 2. Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender info
      to: process.env.EMAIL_USER, // your inbox
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <h3>📩 New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}