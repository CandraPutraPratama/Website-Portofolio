import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://candraputra.vercel.app"),
  title: "Candra Putra | Web & Frontend Developer Intern",
  description:
    "Portofolio profesional Candra Putra, Mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Spesialis pengembangan aplikasi web modern (Next.js, React, TypeScript) dan sistem basis data terstruktur (PostgreSQL, PHP).",
  keywords: [
    "Candra Putra",
    "Web Developer Intern",
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "PENS Surabaya",
    "Portofolio Magang",
  ],
  authors: [{ name: "Candra Putra", url: "https://candraputra.vercel.app" }],
  creator: "Candra Putra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Candra Putra | Web & Frontend Developer Intern",
    description:
      "Mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Membangun solusi web modern dan sistem informasi terstruktur dengan Next.js, React, dan PostgreSQL.",
    url: "https://candraputra.vercel.app",
    siteName: "Candra Putra Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/profil-hero.png",
        width: 1200,
        height: 630,
        alt: "Candra Putra - Web & Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candra Putra | Web & Frontend Developer Intern",
    description:
      "Portofolio profesional Candra Putra, Mahasiswa D4 Teknik Informatika PENS (IPK 3.76).",
    images: ["/profil-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
