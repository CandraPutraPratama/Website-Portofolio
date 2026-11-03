"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, CodeXml, Asterisk, Download, FolderGit2 } from "lucide-react";
import dynamic from "next/dynamic";
const FallingText = dynamic(() => import("@/components/FallingText"), { ssr: false });
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

// ============================================================
// DATA — Floating chips di sekitar nama besar
// ============================================================
const floatingChips = [
  { icon: <Asterisk strokeWidth={3} className="w-8 h-8 md:w-10 md:h-10" />, type: "circle", right: null, left: "10%", top: "12%", rotate: 0 },
  { icon: <CodeXml strokeWidth={2.5} className="w-7 h-7 md:w-9 md:h-9" />, type: "circle-dark", right: null, left: "20%", top: "15%", rotate: -4 },
  { text: "UI/UX", type: "pill", right: null, left: "35%", top: "5%", rotate: -8 },
  { text: "NEXT.JS 16", type: "pill-flat", right: null, left: "55%", top: "22%", rotate: 5 },
  { text: "REACT 19", type: "pill", right: null, left: "70%", top: "10%", rotate: -6 },
  { text: "WEB DEV INTERN", type: "pill", right: null, left: "80%", top: "28%", rotate: 3 },
  { text: "PENS SURABAYA", type: "pill-flat", right: null, left: "85%", top: "15%", rotate: -12 },
];

// ============================================================
// HERO COMPONENT
// ============================================================
const Hero = () => {
  const { lang } = useTheme();
  const t = translations[lang].hero;
  const [today, setToday] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString(lang === "US" ? "en-US" : "id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).toUpperCase();
    setToday(formatted);
  }, [lang]);

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
    <section
      id="home"
      className="relative w-full min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] bg-white dark:bg-black font-mono overflow-hidden flex flex-col justify-between transition-colors duration-300 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
    >
      {/* ── AREA ANIMASI FISIKA (FALLING CHIPS DESKTOP) ──────── */}
      {isDesktop && (
        <div className="w-full h-32 relative z-30 pointer-events-auto">
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
                    transition-transform duration-300 ease-out hover:scale-105
                    ${chip.type.includes("flat") ? "" : "shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.4)]"}
                    ${chip.type === "circle"
                      ? "rounded-full w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-black text-black dark:text-white"
                      : chip.type === "circle-dark"
                        ? "rounded-full w-12 h-12 md:w-14 md:h-14 bg-black dark:bg-white text-white dark:text-black"
                        : chip.type === "pill-flat"
                          ? "rounded-full px-5 py-2.5 text-xs md:text-sm bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black uppercase tracking-wide"
                          : "rounded-full px-5 py-2.5 text-xs md:text-sm bg-white dark:bg-black text-black dark:text-white uppercase tracking-wide"
                    }`}
                >
                  {chip.icon || chip.text}
                </div>
              </div>
            ))}
          </FallingText>
        </div>
      )}

      {/* ── AREA KONTEN UTAMA HERO ────────────────────────────── */}
      <div className="relative w-full flex-1 flex flex-col justify-center items-center px-4 py-8 md:py-12 z-20">
        
        {/* ── Status Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 md:mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-neutral-200 text-[10px] md:text-xs font-bold tracking-widest uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t.badge}
          </span>
        </motion.div>

        {/* ── Nama Besar ── */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative select-none w-full flex justify-center items-center gap-2 sm:gap-4 md:gap-8 text-[15vw] sm:text-[13vw] md:text-[12vw] leading-none font-black tracking-tighter text-black dark:text-white uppercase transition-colors duration-300"
        >
          <span className="pr-[0.03em]">{t.nameFirst}</span>
          <span className="pr-[0.03em]">{t.nameLast}</span>
        </motion.h1>

        {/* ── Sub-Headline: Peran & Institusi ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col items-center text-center mt-3 md:mt-5 max-w-2xl px-2"
        >
          <h2 className="text-sm sm:text-base md:text-xl font-black uppercase tracking-wider text-black dark:text-white">
            {t.role}
          </h2>
          <p className="text-[11px] sm:text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wide">
            {t.institution}
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-neutral-300 mt-3 max-w-xl font-sans leading-relaxed text-center">
            {t.pitch}
          </p>
        </motion.div>

        {/* ── PRIMARY CALL-TO-ACTION (CTA) BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6 md:mt-8 z-30"
        >
          {/* Tombol Unduh CV */}
          <a
            href="/cv.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Tombol Lihat Proyek */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white dark:bg-neutral-900 text-black dark:text-white border-2 border-black dark:border-white text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)]"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{t.viewProjects}</span>
          </a>

          {/* Tombol Kontak */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <span>{t.contactMe}</span>
            <ArrowDown className="w-3.5 h-3.5 -rotate-90" />
          </a>
        </motion.div>

      </div>

      {/* ── BOTTOM BAR TICKER ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full z-30"
      >
        <div className="w-full border-t-2 border-b-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white font-mono text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-black dark:divide-neutral-700">

            {/* Kolom 1: Status Magang */}
            <div className="p-3 md:p-3.5 flex items-center justify-center md:justify-start gap-2 md:gap-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="font-bold text-center leading-tight">{t.openToWork}</span>
            </div>

            {/* Kolom 2: Lokasi */}
            <div className="p-3 md:p-3.5 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="text-center leading-tight font-bold">{t.location}</span>
            </div>

            {/* Kolom 3: Tanggal otomatis */}
            <div className="p-3 md:p-3.5 flex items-center justify-center md:justify-start hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="flex flex-wrap gap-1 justify-center md:justify-start">
                <span className="font-bold">{t.todayLabel}</span>
                <span>{today}</span>
              </span>
            </div>

            {/* Kolom 4: Scroll Down */}
            <a
              href="#about"
              className="group p-3 md:p-3.5 flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer"
            >
              <span className="font-bold">{t.scrollDown}</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform duration-300" aria-hidden="true" />
            </a>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
