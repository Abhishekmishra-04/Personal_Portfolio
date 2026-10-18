import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // 1. Validation: Check required fields
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your full name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter your email address." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address (e.g. name@example.com)." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return NextResponse.json(
        { success: false, error: "Please enter a subject for your message." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please enter a message with at least 5 characters." },
        { status: 400 }
      );
    }

    const trimmedData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };

    // Log the message to server console for immediate tracking
    console.log("==========================================");
    console.log("📨 NEW CONTACT FORM SUBMISSION RECEIVED");
    console.log(`From:    ${trimmedData.name} <${trimmedData.email}>`);
    console.log(`Subject: ${trimmedData.subject}`);
    console.log(`Date:    ${trimmedData.timestamp}`);
    console.log("Message Content:");
    console.log(trimmedData.message);
    console.log("==========================================");

    // Optional: If a custom webhook or Formspree ID is set in environment variables
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    const formspreeKey = process.env.FORMSPREE_KEY;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(trimmedData),
        });
      } catch (err) {
        console.error("Failed to forward contact form to webhook:", err);
      }
    } else if (formspreeKey) {
      try {
        await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(trimmedData),
        });
      } catch (err) {
        console.error("Failed to forward contact form to Formspree:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully! Abhishek will get back to you shortly.",
        data: trimmedData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while sending your message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
