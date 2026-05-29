"use client";

// ============================================================
// PAGE.TSX — Halaman Utama (Single-Page Portfolio)
// ============================================================
// Semua section dikumpulkan di sini secara berurutan.
// Untuk menambah section baru:
//   1. Buat komponen baru di /src/components/NamaSection.tsx
//   2. Import di bawah
//   3. Tambahkan <NamaSection /> di dalam <main> sesuai urutan
// ============================================================

import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

// Dynamic imports to optimize initial bundle size and make page loads fast (lightweight)
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const About = dynamic(() => import("@/components/About"), { ssr: false });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false });
const Journey = dynamic(() => import("@/components/Journey"), { ssr: false });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

// ============================================================
// INNER PAGE — Komponen dalam yang menggunakan context tema
// ============================================================
function PageContent() {
  // Ambil state dark mode & language dari ThemeProvider
  const { isDark, toggleDark, lang, toggleLang } = useTheme();

  return (
    // ── WRAPPER UTAMA ─────────────────────────────────────────
    // min-h-screen: pastikan halaman selalu tinggi penuh
    // bg-white dark:bg-black: warna dasar halaman
    <div className="relative w-full min-h-screen bg-white dark:bg-black overflow-x-hidden transition-colors duration-300">

      {/* ── NAVBAR ─────────────────────────────────────────────
          Sticky di atas, menerima props dark mode & bahasa
          Untuk dark mode auto (berdasarkan OS), hapus isDark/toggleDark
          dan ganti dengan prefers-color-scheme di globals.css
          ──────────────────────────────────────────────────── */}
      <Navbar
        isDark={isDark}
        toggleDark={toggleDark}
        lang={lang}
        toggleLang={toggleLang}
      />

      {/* ── MAIN CONTENT ────────────────────────────────────────
          pt-20 = memberi ruang sebesar tinggi Navbar (80px = 20 * 4px)
          ──────────────────────────────────────────────────── */}
      <main className="pt-20">

        {/* ── 1. HERO SECTION ────────────────────────────────── */}
        {/* Nama besar, floating chips, dan bottom bar */}
        <Hero />

        {/* ── 2. ABOUT SECTION ───────────────────────────────── */}
        {/* Bento grid: bio, profil, pendidikan, tech stack */}
        <About />

        {/* ── 3. PROJECTS SECTION ────────────────────────────── */}
        {/* Daftar proyek dengan metrics dan screenshot */}
        <Projects />

        {/* ── 4. JOURNEY SECTION ─────────────────────────────── */}
        {/* Timeline pengalaman & pendidikan dengan tab switcher */}
        <Journey />

        {/* ── 5. CONTACT SECTION ─────────────────────────────── */}
        {/* Form kontak, social links, dan footer */}
        <Contact />

        {/* ──────────────────────────────────────────────────────
            ── UNTUK MENAMBAH SECTION BARU: ──
            import NamaSection from "@/components/NamaSection";
            lalu tambahkan di sini:
            <NamaSection />
            ────────────────────────────────────────────────── */}

      </main>
    </div>
  );
}

// ============================================================
// HOME — Export utama halaman
// ThemeProvider membungkus segalanya agar dark mode berfungsi
// ============================================================
export default function Home() {
  return (
    <ThemeProvider>
      <PageContent />
    </ThemeProvider>
  );
}
