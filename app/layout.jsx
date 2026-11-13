import "./globals.css";
import "./site.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  metadataBase: new URL(
    "https://website-portofolio-lac-pi.vercel.app",
  ),
  title: "Candra Putra : Fullstack Web Developer",
  description:
    "Portofolio Candra Putra Pratama, mahasiswa D4 Teknik Informatika PENS. Membangun sistem web dengan Next.js, REST API, dan basis data relasional. Tersedia magang mulai 6 Januari 2027, WFO Surabaya/Sidoarjo.",
  keywords: [
    "Candra Putra",
    "Web Developer Intern",
    "Backend Developer",
    "Next.js",
    "ASP.NET Core",
    "PostgreSQL",
    "PENS Surabaya",
  ],
  authors: [{ name: "Candra Putra" }],
  openGraph: {
    title: "Candra Putra : Fullstack Web Developer",
    description:
      "Mahasiswa D4 Teknik Informatika PENS. Next.js, REST API, dan basis data relasional. Tersedia magang mulai 6 Januari 2027.",
    type: "website",
    locale: "id_ID",
    images: [{ url: "/images/profile.png", alt: "Candra Putra Pratama" }],
  },
  twitter: {
    card: "summary",
    title: "Candra Putra : Fullstack Web Developer",
    images: ["/images/profile.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,800&family=IBM+Plex+Sans:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
