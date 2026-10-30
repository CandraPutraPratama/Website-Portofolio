"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, CodeXml, Asterisk } from "lucide-react";
import dynamic from "next/dynamic";
const FallingText = dynamic(() => import("@/components/FallingText"), { ssr: false });
import Typewriter from "./Typewriter";

// ============================================================
// DATA — Floating chips di sekitar nama besar
// ============================================================
// Posisi menggunakan `top` dari atas section agar berada di tengah-tengah
// antara navbar dan teks nama.
// Setiap chip: text, type, right/left (%), top (%), rotate
// ============================================================
const floatingChips = [
  { icon: <Asterisk strokeWidth={3} className="w-10 h-10 md:w-12 md:h-12" />, type: "circle", right: null, left: "10%", top: "12%", rotate: 0 },
  { icon: <CodeXml strokeWidth={2.5} className="w-8 h-8 md:w-10 md:h-10" />, type: "circle-dark", right: null, left: "20%", top: "15%", rotate: -4 },
  { text: "UI/UX", type: "pill", right: null, left: "35%", top: "5%", rotate: -8 },
  { text: "CLEAN DESIGN", type: "pill-flat", right: null, left: "55%", top: "25%", rotate: 5 },
  { text: "FRONTEND LEARNER", type: "pill", right: null, left: "70%", top: "10%", rotate: -6 },
  { text: "JUNIOR WEB DEVELOPER", type: "pill", right: null, left: "80%", top: "30%", rotate: 3 },
  { text: "TEKNIK INFORMATIKA", type: "pill-flat", right: null, left: "85%", top: "15%", rotate: -12 },
];

// ============================================================
// DATA — Teks kode di bawah nama
// Ubah isi teks ini sesuai cerita Anda
// ============================================================
const CODE_TEXT = `const INITIALIZE_SYSTEM = async () => { const Developer = { ID: "CANDRA_PUTRA", Origin: "Surabaya_Indonesia", Role: "Junior_Web_Developer", Mindset: "Systematic_Thinking_With_Visual_Sensitivity" }; await System.load("Next.js", "React", "TypeScript", "Tailwind_CSS", "Framer_Motion"); if (Project.isComplex) return Developer.solveWith(Physics + Logic + Experience); const Mission = "Crafting digital experiences that feel alive, intentional, and intuitive."; const magic = Developer.create({ clarity: true, aesthetics: "Bold_but_Purposeful", interaction: "Smooth", motion: "Physics_Inspired" }); return magic.deploy(); }; // Status: ONLINE | Mode: OPEN_TO_WORK <END_OF_SCRIPT>`;

// ============================================================
// HERO COMPONENT
// ============================================================
const Hero = () => {
  const [today, setToday] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).toUpperCase();
    setToday(formatted);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    // ── SECTION WRAPPER ──────────────────────────────────────
    // h-[100dvh] = tinggi penuh layar
    // flex flex-col justify-end = semua konten "dorong ke bawah"
    // ──────────────────────────────────────────────────────── //
    <section
      id="home"
      className="relative w-full h-[calc(100dvh-5rem)] bg-white dark:bg-black font-mono overflow-hidden flex flex-col justify-end transition-colors duration-300 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
    >

      {/* ── AREA ANIMASI FISIKA (FALLING CHIPS) ─────────────
          flex-1 mengisi sisa ruang dari atas layar sampai
          teks besar, sehingga batas dinding/lantainya pas.
          ──────────────────────────────────────────────────── */}
      {isDesktop && (
        <div className="flex-1 w-full relative z-40 pointer-events-auto">
          <FallingText
            gravity={1.2}
            mouseConstraintStiffness={0.2}
            trigger="hover"
          >
            {floatingChips.map((chip, index) => (
              <div
                key={index}
                className="falling-item inline-block w-max h-max cursor-grab active:cursor-grabbing select-none z-10 pointer-events-auto touch-none absolute"
                style={{
                  left: chip.left ?? undefined,
                  right: chip.right ?? undefined,
                  top: chip.top,
                }}
              >
                <div
                  className={`flex items-center justify-center whitespace-nowrap font-bold border-2 border-black dark:border-white leading-none
                    transition-transform duration-300 ease-out hover:scale-110
                    ${chip.type.includes("flat") ? "" : "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]"}
                    ${chip.type === "circle"
                      ? "rounded-full w-16 h-16 bg-white dark:bg-black text-black dark:text-white"
                      : chip.type === "circle-dark"
                        ? "rounded-full w-16 h-16 bg-black dark:bg-white text-white dark:text-black"
                        : chip.type === "pill-flat"
                          ? "rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase tracking-wide"
                          : "rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base bg-white dark:bg-black text-black dark:text-white uppercase tracking-wide"
                    }`}
                >
                  {chip.icon || chip.text}
                </div>
              </div>
            ))}
          </FallingText>
        </div>
      )}

      {/* ── AREA NAMA BESAR ────────────────────────────────────
          Wrapper relatif untuk nama besar dan kode teks di bawahnya
          ──────────────────────────────────────────────────── */}
      <div className="relative w-full mb-16 md:mb-24" style={{ paddingBottom: "72px", marginTop: "-4vw" /* pendorong batas physics */ }}>

        {/* ── NAMA BESAR ───────────────────────────────────────────
            text-[14vw] = teks besar mengisi lebar layar
            leading-none = tidak ada jarak baris ekstra
            z-10 = di bawah chips (chips pakai z-20)
            
            Untuk tambah animasi split-text / typewriter dari ReactBits:
            bungkus teks di dalam tag ini dengan komponen ReactBits
            ──────────────────────────────────────────────────── */}
        <motion.h1
          // ── ANIMASI NAMA: ganti di sini ──
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          // Menggunakan flex dan justify-center agar otomatis tengah sempurna
          // Gunakan gap-4 atau gap-8 untuk mengatur jarak antar kata
          className="relative z-10 select-none w-full flex justify-center items-center gap-4 md:gap-8 text-[10vw] sm:text-[10vw] md:text-[15vw] leading-none font-black tracking-tighter text-black dark:text-white uppercase transition-colors duration-300"
        >
          {/* ── GANTI NAMA DI SINI ── */}
          <span className="pr-[0.05em]">Candra</span>
          <span className="pr-[0.05em]">Putra</span>
        </motion.h1>

        {/* ── CODE TEXT SNIPPET ──────────────────────────────────
            Teks kecil semi-transparan di bawah nama.
            max-w-4xl = batasi lebar agar teks wrap jadi ~3-4 baris
            ──────────────────────────────────────────────────── */}
        <div className="w-full flex justify-center">
          <Typewriter
            text={CODE_TEXT}
            className="relative z-10 mt-4 md:mt-6 w-[90%] md:w-[85%] opacity-20 dark:opacity-25 text-[7px] md:text-[10px] text-black dark:text-white font-mono leading-relaxed [text-align-last:center] text-justify"
            delay={60}
          />
        </div>

      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────────
          4 kolom: Open to Work | Lokasi | Tanggal | Scroll Down
          absolute bottom-0 = menempel di bawah section
          Untuk tambah marquee dari ReactBits: bungkus salah satu kolom
          ──────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 w-full z-30"
      >
        <div className="w-full border-t-2 border-b-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white font-mono text-[10px] md:text-sm uppercase tracking-wider transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-black dark:divide-neutral-700">

            {/* Kolom 1: Open to Work */}
            <div className="p-3 md:p-4 flex items-center justify-center md:justify-start gap-2 md:gap-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="font-bold">Menerima Tawaran Kerja</span>
            </div>

            {/* Kolom 2: Lokasi — GANTI KOTA DI SINI */}
            <div className="p-3 md:p-4 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span>BERBASIS DI SURABAYA, ID</span>
            </div>

            {/* Kolom 3: Tanggal otomatis */}
            <div className="p-3 md:p-4 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="flex gap-2">
                <span className="font-bold">HARI INI:</span>
                <span>{today}</span>
              </span>
            </div>

            {/* Kolom 4: Scroll Down */}
            <a
              href="#about"
              className="p-3 md:p-4 flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer animate-pulse"
            >
              <span>GULIR KE BAWAH</span>
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
            </a>

          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
