import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://website-portofolio-lac-pi.vercel.app"),
  title: "Candra Putra — Junior Web & Backend Developer",
  description:
    "Portofolio Candra Putra, mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Membangun software yang dipakai orang betulan: Jasdor (live production, 3 brand, 2000+ outlet) dan backend BudgEx (ASP.NET Core + PostgreSQL). Terbuka untuk magang.",
  keywords: [
    "Candra Putra",
    "Web Developer Intern",
    "Backend Developer",
    "Next.js",
    "ASP.NET Core",
    "PENS Surabaya",
    "Portofolio Magang",
  ],
  authors: [{ name: "Candra Putra", url: "https://website-portofolio-lac-pi.vercel.app" }],
  creator: "Candra Putra",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Candra Putra — Junior Web & Backend Developer",
    description:
      "Mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Membangun software yang dipakai orang betulan. Terbuka untuk magang.",
    url: "https://website-portofolio-lac-pi.vercel.app",
    siteName: "Candra Putra Portfolio",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/profil-hero.png",
        width: 1200,
        height: 630,
        alt: "Candra Putra - Web & Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candra Putra — Junior Web & Backend Developer",
    description:
      "Portofolio Candra Putra, mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Terbuka untuk magang.",
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
    <html lang="id" className={`${hanken.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="antialiased">
        {children}
      </body>
    </html>
  );
}
