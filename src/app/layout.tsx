import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ============================================================
// FONT — Geist Sans & Geist Mono
// Ganti atau tambah font di sini (dari next/font/google)
// ============================================================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ============================================================
// METADATA — SEO
// Ganti semua konten di sini dengan data Anda sendiri
// ============================================================
export const metadata: Metadata = {
  // ── GANTI JUDUL DAN DESKRIPSI DI SINI ──
  title: "Candra Putra | Web Developer",
  description:
    "Portfolio profesional Candra Putra. Junior Web Developer spesialis sistem informasi web dan aplikasi mobile.",
  keywords: ["Candra Putra", "Web Developer", "Next.js", "Laravel", "Portfolio"],
  authors: [{ name: "Candra Putra" }],
  openGraph: {
    title: "Candra Putra | Portfolio",
    description: "Membangun solusi sistem informasi end-to-end dengan fokus pada akurasi data dan efisiensi operasional.",
    url: "https://website-portofolio-lac-pi.vercel.app",
    siteName: "Candra Putra Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

// ============================================================
// ROOT LAYOUT
// Layout ini membungkus SEMUA halaman.
// ThemeProvider diimport secara dinamis (client component)
// ── CATATAN: ThemeProvider ada di page.tsx karena layout ini adalah Server Component ──
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      {/* suppressHydrationWarning: menghindari warning dark mode dari localStorage */}
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
