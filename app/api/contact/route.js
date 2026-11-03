import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    console.log("[CONTACT_FORM_SUBMISSION]", {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // If an optional external webhook is configured (e.g. Discord, Telegram, Google Sheet):
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
      } catch (err) {
        console.error("Failed to forward contact form to webhook:", err);
      }
    }

    return NextResponse.json({ ok: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
