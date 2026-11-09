import { NextResponse } from "next/server";

async function sendTelegram({ name, email, message }) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return null;

  const text = `Pesan baru dari portofolio\n\nNama: ${name}\nEmail: ${email}\n\n${message}`;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: text.slice(0, 4000) }),
  });
  if (!res.ok) throw new Error(`Telegram responded ${res.status}`);
  return true;
}

async function sendWebhook({ name, email, message }) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return null;

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  return true;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    const payload = { name, email, message };

    let delivered = null;
    try {
      delivered = (await sendTelegram(payload)) || (await sendWebhook(payload));
    } catch (err) {
      console.error("Failed to deliver contact message:", err);
      return NextResponse.json({ error: "Delivery failed." }, { status: 502 });
    }

    if (!delivered) {
      console.log("[CONTACT_FORM_SUBMISSION]", {
        ...payload,
        timestamp: new Date().toISOString(),
      });
      // Without a configured channel the message would only land in server logs and be lost.
      if (process.env.NODE_ENV === "production") {
        return NextResponse.json(
          { error: "Contact delivery is not configured." },
          { status: 503 },
        );
      }
    }

    return NextResponse.json({
      ok: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
