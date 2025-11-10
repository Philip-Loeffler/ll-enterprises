import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate the input
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("Resend API key not configured");

      // FOR TESTING: Just log the form data and return success
      console.log("📧 Contact Form Submission (Resend not configured):");
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Message:", message);

      return NextResponse.json(
        { message: "Message received! (Email service not configured)" },
        { status: 200 }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    // TODO: Replace 'onboarding@resend.dev' with your verified domain email
    // After you verify your domain in Resend, update the 'from' field
    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Default Resend domain for testing
      to: process.env.EMAIL_TO || "philiploeffler@gmail.com",
      replyTo: email, // Allow direct reply to the form submitter
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    console.log("✅ Email sent successfully via Resend:", data);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send email. Please try again later.";

    if (error.message) {
      console.error("Detailed error:", error.message);
      // Don't expose internal errors to users
      if (error.message.includes("API key")) {
        errorMessage =
          "Email service configuration error. Please contact support.";
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
