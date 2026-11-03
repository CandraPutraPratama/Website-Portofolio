"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, FolderGit2, Sparkles, GraduationCap, Trophy, Coffee } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { lang } = useTheme();
  const t = translations[lang].hero;
  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString(lang === "US" ? "en-US" : "id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).toUpperCase();
    setToday(formatted);
  }, [lang]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[calc(100dvh-4rem)] md:min-h-[calc(100dvh-5rem)] bg-white dark:bg-black font-mono overflow-hidden flex flex-col justify-between transition-colors duration-300"
    >
      {/* ── BACKGROUND LAYER 1: Subtle Technical Grid ── */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] z-0" />

      {/* ── BACKGROUND LAYER 2: Concentric Radar Rings (Richard Miculob style) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-full border border-black/5 dark:border-white/5 animate-pulse" />
        <div className="absolute w-[540px] h-[540px] md:w-[660px] md:h-[660px] rounded-full border border-black/5 dark:border-white/5" />
        <div className="absolute w-[760px] h-[760px] md:w-[920px] md:h-[920px] rounded-full border border-dashed border-black/5 dark:border-white/5" />
      </div>

      {/* ── BACKGROUND LAYER 3: Giant Running Outline Marquee (Depth Layer Behind Portrait) ── */}
      <div className="absolute top-[28%] md:top-[30%] -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none z-10 select-none opacity-40 dark:opacity-35">
        <div className="animate-marquee-smooth text-neutral-900 dark:text-neutral-100 font-black tracking-tighter text-[13vw] sm:text-[11vw] md:text-[9.5vw] uppercase whitespace-nowrap leading-none">
          <span className="outline-text-stroke px-6">CANDRA PUTRA PRATAMA ✦ D4 INFORMATIKA PENS ✦ JUNIOR WEB DEVELOPER ✦</span>
          <span className="outline-text-stroke px-6">CANDRA PUTRA PRATAMA ✦ D4 INFORMATIKA PENS ✦ JUNIOR WEB DEVELOPER ✦</span>
        </div>
      </div>

      {/* ── MAIN HERO CONTENT & FOREGROUND PORTRAIT ── */}
      <div className="relative z-20 max-w-6xl mx-auto w-full px-4 pt-4 md:pt-8 pb-10 flex-1 flex flex-col items-center justify-center">

        {/* ── STATUS PILL (Top Header) ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/15 dark:border-white/20 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm text-black dark:text-white text-[10px] md:text-xs font-black tracking-widest uppercase shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            {t.badge}
          </span>
        </motion.div>

        {/* ── 3D DEPTH PORTRAIT CUTOUT WITH FLOATING BADGES ── */}
        <div className="relative w-full max-w-md flex items-center justify-center my-2 sm:my-4">
          
          {/* Subtle Ambient Radial Glow behind portrait */}
          <div className="absolute inset-0 bg-radial from-blue-500/10 via-emerald-500/5 to-transparent blur-2xl pointer-events-none rounded-full" />

          {/* Floating Badge 1: PENS Surabaya (Top-Left) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden sm:flex absolute -left-4 md:-left-12 top-6 z-30 items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] text-[10px] font-black uppercase tracking-wider"
          >
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span>PENS • SEMESTER 5</span>
          </motion.div>

          {/* Floating Badge 2: IPK 3.76 (Top-Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden sm:flex absolute -right-4 md:-right-10 top-12 z-30 items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] text-[10px] font-black uppercase tracking-wider"
          >
            <Trophy className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>IPK 3.76 / 4.00</span>
          </motion.div>

          {/* Floating Badge 3: Jasdor Live Production (Bottom-Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="hidden md:flex absolute -right-8 bottom-4 z-30 items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] text-[10px] font-black uppercase tracking-wider"
          >
            <Coffee className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>JASDOR • LIVE PWA</span>
          </motion.div>

          {/* Cutout Formal Portrait (Front Layer over Marquee text) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-72 md:h-84 flex items-end justify-center z-20 pointer-events-none"
          >
            <Image
              src="/profil-hero.png"
              alt="Candra Putra"
              fill
              priority
              sizes="(max-width: 768px) 250px, 320px"
              className="object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.25)] pointer-events-auto"
            />
          </motion.div>
        </div>

        {/* ── CANDIDATE HEADLINE & VALUE PROPOSITION (Syafri #1 + Gibran #7 style) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-col items-center text-center mt-2 max-w-3xl px-2"
        >
          {/* Main Name Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-black dark:text-white leading-none">
            CANDRA PUTRA
          </h1>

          {/* Professional Role Title */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs sm:text-sm md:text-base font-black uppercase tracking-widest text-neutral-800 dark:text-neutral-200">
              {t.role}
            </span>
          </div>

          {/* Academic Credential */}
          <p className="text-[10px] sm:text-xs md:text-sm font-bold text-neutral-500 dark:text-neutral-400 mt-1 uppercase tracking-wider">
            {t.institution}
          </p>

          {/* Concise Recruiter Elevator Pitch */}
          <p className="text-xs sm:text-sm md:text-base text-neutral-700 dark:text-neutral-300 mt-3 max-w-xl font-sans leading-relaxed text-center">
            {t.pitch}
          </p>
        </motion.div>

        {/* ── HIGH-CONVERSION PRIMARY CALL-TO-ACTIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6 z-30"
        >
          {/* Direct Resume Download */}
          <a
            href="/cv.pdf"
            download
            className="group relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-black dark:bg-white text-white dark:text-black text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadCv}</span>
          </a>

          {/* Explore Projects Button */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white dark:bg-neutral-900 text-black dark:text-white border-2 border-black dark:border-white text-xs md:text-sm font-black uppercase tracking-wider rounded-xl transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:scale-105 active:scale-95 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{t.viewProjects}</span>
          </a>

          {/* Contact Me Button */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-3 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>{t.contactMe}</span>
            <ArrowDown className="w-3.5 h-3.5 -rotate-90" />
          </a>
        </motion.div>

      </div>

      {/* ── BOTTOM BAR TICKER ────────────────────────────────────── */}
      <div className="w-full z-30">
        <div className="w-full border-t-2 border-b-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-950 text-black dark:text-white font-mono text-[10px] md:text-xs uppercase tracking-wider transition-colors duration-300">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-y-2 md:divide-y-0 divide-black dark:divide-neutral-700">

            {/* Kolom 1: Status Magang */}
            <div className="p-3 md:p-3.5 flex items-center justify-center md:justify-start gap-2 md:gap-3 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
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
      </div>
    </section>
  );
};

export default Hero;
