"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

const links = [
  { href: "#tentang", key: "about" },
  { href: "#proyek", key: "projects" },
  { href: "#perjalanan", key: "journey" },
  { href: "#kontak", key: "contact" },
] as const;

export default function Navbar() {
  const { lang, toggleLang } = useTheme();
  const t = translations[lang].nav;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-ground" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="flex h-16 md:h-20 items-center justify-between px-5 md:px-8"
      >
        <a
          href="#top"
          className="text-xl font-extrabold tracking-tight"
          aria-label="Candra Putra — kembali ke atas"
        >
          candra<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-ink/80 transition-colors hover:text-accent"
            >
              {t[l.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <button
            onClick={toggleLang}
            aria-label={t.langLabel}
            className="text-[13px] font-bold tracking-wide text-muted transition-colors hover:text-ink"
          >
            {lang === "ID" ? "EN" : "ID"}
          </button>
          <a
            href="#kontak"
            className="hidden sm:inline-block rounded-full bg-accent px-5 py-2.5 text-[15px] font-bold text-accent-ink transition-transform hover:scale-105 active:scale-95"
          >
            {t.hireMe}
          </a>
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-ground px-5 pb-8 pt-2">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-bold tracking-tight transition-colors hover:text-accent"
              >
                {t[l.key]}
              </a>
            ))}
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-center text-lg font-bold text-accent-ink"
            >
              {t.hireMe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
