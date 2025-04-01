import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Nodemailer transport configuration
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "siimasamson79@gmail.com", // Change this to your email
        pass: "ohbt ogrw leet ycyb", // Use an App Password (not your regular password)
      },
    });

    // Email options
    let mailOptions = {
      from: email,
      to: "siimasamson79@gmail.com", // Your email
      subject: "New Contact Form Message",
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
