import { NextResponse } from "next/server";

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

    // 6. Jika verifikasi sukses
    console.log("Turnstile Verification Success for:", { name, email, subject, message });

    // TODO: Integrasikan dengan sistem pengiriman email nyata di sini jika dibutuhkan (misal: Nodemailer, Resend, dll.)

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
