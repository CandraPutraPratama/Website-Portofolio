import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Candra Putra : Junior Web & Backend Developer",
  description:
    "Portofolio Candra Putra Pratama, mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Aktif dalam kepanitiaan dan berpengalaman membangun 5+ sistem web terstruktur. Antusias untuk belajar dan magang di tim engineering profesional.",
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
    title: "Candra Putra : Junior Web & Backend Developer",
    description:
      "Mahasiswa D4 Teknik Informatika PENS (IPK 3.76). Aktif kepanitiaan dan berpengalaman membangun 5+ sistem web terstruktur. Antusias magang di tim engineering profesional.",
    type: "website",
    locale: "id_ID",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
