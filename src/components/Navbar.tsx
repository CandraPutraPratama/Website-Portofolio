"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, FileDown } from "lucide-react";
import { translations, Language } from "@/lib/translations";

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
  lang: Language;
  toggleLang: () => void;
}

const Navbar = ({ isDark, toggleDark, lang, toggleLang }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  const handleToggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const doc = document as any;
    if (!doc.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      toggleDark();
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = doc.startViewTransition(() => {
      toggleDark();
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  };

  const navLinks = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.projects, href: "#projects" },
    { name: t.journey, href: "#journey" },
    { name: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 md:backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 font-mono transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between relative">
        {/* ── LOGO ── */}
        <div className="flex-shrink-0 z-20">
          <a href="#home" className="flex items-center gap-2 group">
            <img
              src="/logo.svg"
              alt="Logo Candra Putra"
              width={50}
              height={50}
              className="h-9 md:h-12 w-auto object-contain dark:invert transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* ── NAVIGASI DESKTOP ── */}
        <div className="hidden md:flex items-center gap-7 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs font-bold uppercase tracking-widest text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* ── KONTROL KANAN ── */}
        <div className="flex items-center gap-2 md:gap-3 z-20">
          {/* Tombol Cepat Download CV (Desktop) */}
          <a
            href="/cv.pdf"
            download
            aria-label="Unduh CV"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black text-[11px] font-bold uppercase tracking-wider hover:opacity-85 transition-opacity"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV</span>
          </a>

          {/* Tombol Dark Mode (Circular Wave View Transition) */}
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle Theme"
            className="p-2 md:p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Moon className="w-3.5 h-3.5 md:w-4 md:h-4" />}
          </button>

          {/* Tombol Toggle Bahasa (US / ID) */}
          <button
            onClick={toggleLang}
            aria-label={`Ganti bahasa (Sekarang: ${lang === "ID" ? "Bahasa Indonesia" : "English"})`}
            className="relative flex items-center w-16 h-8 md:w-20 md:h-10 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-1 cursor-pointer transition-colors duration-300"
          >
            <div
              className={`absolute top-1 bottom-1 w-7 md:w-9 bg-white dark:bg-neutral-800 shadow border border-neutral-200 dark:border-neutral-700 rounded-full transition-transform duration-300 ease-in-out ${
                lang === "ID" ? "translate-x-7 md:translate-x-9" : "translate-x-0"
              }`}
            />
            <div className="w-full flex justify-between px-1.5 md:px-2 text-xs md:text-sm z-10 relative pointer-events-none">
              <span className={`transition-opacity duration-300 ${lang === "US" ? "opacity-100" : "opacity-40 grayscale"}`}>
                🇺🇸
              </span>
              <span className={`transition-opacity duration-300 ${lang === "ID" ? "opacity-100" : "opacity-40 grayscale"}`}>
                🇮🇩
              </span>
            </div>
          </button>

          {/* Hamburger Button (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="p-1.5 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black shadow-xl"
          >
            <div className="px-6 py-4 flex flex-col divide-y divide-neutral-100 dark:divide-neutral-900">
              {navLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3.5 text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 pb-2">
                <a
                  href="/cv.pdf"
                  download
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-bold uppercase tracking-widest"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Unduh CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
