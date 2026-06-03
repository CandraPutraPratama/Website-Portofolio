import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, captchaToken } = body;

    // 1. Validasi parameter wajib di server-side
    if (!name || !email || !message || !captchaToken) {
      return NextResponse.json(
        { success: false, error: "Semua parameter wajib (nama, email, pesan, captchaToken) harus diisi!" },
        { status: 400 }
      );
    }

    // 2. Ambil Secret Key dari environment variable (fallback ke testing key)
    const secretKey = process.env.TURNSTILE_SECRET_KEY || "1x00000000000000000000000000000000AA";

    // 3. Buat payload verifikasi dengan format x-www-form-urlencoded
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", captchaToken);

    // 4. Kirim request POST ke endpoint verifikasi Cloudflare Turnstile
    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const verifyResult = await verifyResponse.json();

    // 5. Cek apakah verifikasi dari Cloudflare sukses
    if (!verifyResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Verifikasi captcha gagal! Anda terdeteksi sebagai bot.", 
          details: verifyResult["error-codes"] 
        },
        { status: 400 }
      );
    }

    // 6. Jika verifikasi sukses, kirim email menggunakan Resend
    console.log("Turnstile Verification Success for:", { name, email, subject, message });

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey === "re_your_api_key_here") {
      console.warn("RESEND_API_KEY tidak didefinisikan atau masih berupa placeholder. Melewati pengiriman email.");
      return NextResponse.json(
        { 
          success: true, 
          message: "Verifikasi sukses! (API Key Resend belum diisi di .env.local, pesan dicetak di konsol backend)." 
        },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);
    const emailResult = await resend.emails.send({
      from: "Website Portfolio <onboarding@resend.dev>",
      to: "candraputrap46@gmail.com",
      replyTo: email,
      subject: `Kontak Baru: ${subject || "Tidak Ada Subjek"}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #111; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px; margin-top: 0;">Pesan Baru dari Form Kontak Portofolio</h2>
          <p style="margin: 10px 0;"><strong>Nama Pengirim:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email Pengirim:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Subjek:</strong> ${subject || "-"}</p>
          <p style="margin: 20px 0 10px 0;"><strong>Isi Pesan:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #333; white-space: pre-wrap; font-family: monospace; font-size: 14px; line-height: 1.6; color: #444;">
${message}
          </div>
          <hr style="border: 0; border-top: 1px solid #eee; margin-top: 25px; margin-bottom: 15px;" />
          <p style="font-size: 11px; color: #999; margin: 0; text-align: center;">Email ini dikirim otomatis oleh backend portofolio Next.js Anda.</p>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Gagal mengirim email menggunakan Resend:", emailResult.error);
      return NextResponse.json(
        { success: false, error: `Gagal mengirim email: ${emailResult.error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Pesan berhasil dikirim dan terverifikasi secara aman!" 
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error("Error pada Route Handler Contact:", error);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan internal pada server." },
      { status: 500 }
    );
  }
}
