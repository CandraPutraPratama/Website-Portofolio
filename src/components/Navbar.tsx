"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

// ============================================================
// TIPE DATA
// ============================================================
interface NavbarProps {
  // Props untuk dark mode & language dari parent (layout)
  isDark: boolean;
  toggleDark: () => void;
  lang: "US" | "ID";
  toggleLang: () => void;
}

// ============================================================
// DATA — Link navigasi
// Tambah/hapus link di sini untuk menambah section baru
// ============================================================
const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Proyek", href: "#projects" },
  { name: "Perjalanan", href: "#journey" },
  { name: "Kontak", href: "#contact" },
];

// ============================================================
// LOGO SVG
// Ganti seluruh SVG ini dengan logo Anda sendiri
// ============================================================
const Logo = () => (
  <img
    src="/logo.svg"
    alt="Logo"
    width={60}
    height={60}
    className="h-15 w-auto object-contain dark:invert transition-all duration-300"
  />
);

// ============================================================
// NAVBAR COMPONENT
// ============================================================
const Navbar = ({ isDark, toggleDark, lang, toggleLang }: NavbarProps) => {
  // State untuk buka/tutup menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // ── NAVBAR WRAPPER ────────────────────────────────────────
    // fixed top-0 = menempel di paling atas
    // z-50 = di atas semua konten
    // backdrop-blur = efek blur bg (glassmorphism ringan)
    // Untuk membuat Navbar transparan, hapus bg-white dan tambah bg-transparent
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800 font-mono transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

        {/* ── LOGO ─────────────────────────────────────────────
            Ganti <Logo /> dengan <img> atau komponen logo Anda
            ──────────────────────────────────────────────────── */}
        <div className="flex-shrink-0 z-20">
          <a href="#home">
            <Logo />
          </a>
        </div>

        {/* ── NAVIGASI DESKTOP (hidden di mobile) ──────────────
            Untuk menambah animasi hover dari ReactBits,
            bungkus setiap <a> dengan komponen animasi yang diinginkan
            ──────────────────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              // ── ANIMASI HOVER LINK DESKTOP: ganti di sini ──
              whileHover={{ y: -2, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* ── KONTROL KANAN: Dark Mode + Bahasa + Hamburger ──── */}
        <div className="flex items-center gap-2 md:gap-4 z-20">

          {/* ── TOMBOL DARK MODE ─────────────────────────────────
              Untuk ganti ikon atau menambah animasi, edit di sini
              ──────────────────────────────────────────────────── */}
          <button
            onClick={toggleDark}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* ── TOMBOL TOGGLE BAHASA (US / ID) ───────────────────
              Untuk membuat benar-benar berfungsi (ubah teks),
              sambungkan dengan i18n atau state konten di page.tsx
              ──────────────────────────────────────────────────── */}
          <button
            onClick={toggleLang}
            aria-label="Toggle Language"
            className="relative flex items-center w-20 h-10 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full p-1 cursor-pointer transition-colors duration-300"
          >
            {/* ── Lingkaran putih yang bergeser ── */}
            <div
              className={`absolute top-1 bottom-1 w-9 bg-white dark:bg-neutral-800 shadow border border-neutral-200 dark:border-neutral-700 rounded-full transition-transform duration-300 ease-in-out ${lang === "ID" ? "translate-x-9" : "translate-x-0"}`}
            />
            <div className="w-full flex justify-between px-2 text-sm z-10 relative pointer-events-none">
              <span className={`transition-opacity duration-300 ${lang === "US" ? "opacity-100" : "opacity-40 grayscale"}`}>🇺🇸</span>
              <span className={`transition-opacity duration-300 ${lang === "ID" ? "opacity-100" : "opacity-40 grayscale"}`}>🇮🇩</span>
            </div>
          </button>

          {/* ── HAMBURGER BUTTON (mobile only) ───────────────────
              Terlihat hanya di layar kecil (md:hidden)
              ──────────────────────────────────────────────────── */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Buka menu navigasi"
            className="p-2 text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 rounded-full transition-colors md:hidden"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" strokeWidth={2.5} /> : <Menu className="w-7 h-7" strokeWidth={2} />}
          </button>

        </div>
      </div>

      {/* ── MOBILE MENU DROPDOWN ──────────────────────────────────
          absolute = melayang di atas konten, tidak mendorong halaman
          AnimatePresence = animasi masuk/keluar dengan framer-motion
          Untuk ganti animasi slide, ubah variants di bawah ini
          ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            // ── ANIMASI MOBILE MENU: ganti initial/animate/exit di sini ──
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
                  // ── ANIMASI HOVER LINK MOBILE: ganti di sini ──
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-4 text-base font-bold uppercase tracking-widest text-black dark:text-white hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
