"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { MapPin, CodeXml, Terminal, Laptop, GraduationCap, X } from "lucide-react";
import TiltedCard from "./TiltedCard";
import Folder from "./Folder";
import ScrollReveal from "./ScrollReveal";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

// ============================================================
// DATA — Timeline Items
// ============================================================
const journeyItems = [
  {
    id: 1,
    year: "2026",
    badge: "PROFESSIONAL",
    role: "JUNIOR WEB & FRONTEND DEVELOPER",
    roleEn: "JUNIOR WEB & FRONTEND DEVELOPER",
    company: "SEMESTER 5",
    description: "Membangun dan mengoperasikan produk web production (Jasdor) sekaligus mengerjakan backend sistem anggaran (BudgEx) dalam tim. Berfokus pada arsitektur sistem, integrasi API, dan kode yang siap production.",
    descriptionEn: "Building and operating a live production web application (Jasdor) while developing the backend for an enterprise budgeting system (BudgEx) with a multi-tier approval workflow. Focused on system architecture, API integration, and production-ready code.",
    tags: ["NEXT.JS", "ASP.NET CORE", "TYPESCRIPT", "GITHUB"],
    align: "right", // Card is on the right, year is on the left
    showFolder: true,
    folderLabel: "ARSIP PROYEK",
    folderSublabel: "Klik Folder",
    images: ["/journey/jf12026.jpg", "/journey/jf22026.jpg", "/journey/jf312026.png"]
  },
  {
    id: 2,
    year: "2025",
    badge: "AKADEMIK",
    role: "WEB DEVELOPMENT",
    roleEn: "WEB DEVELOPMENT",
    company: "SEMESTER 2/3",
    description: "Mengembangkan pemahaman awal tentang perancangan sistem web, pengelolaan data, dan logika aplikasi. Mulai terbiasa membuat project sederhana untuk melatih problem solving, struktur kode, dan alur kerja pengembangan perangkat lunak.",
    descriptionEn: "Developed core understanding of web system design, data management, and application logic. Built structured projects to practice algorithmic problem-solving and software development workflows.",
    tags: ["HTML/CSS", "PHP BASIC", "DATABASE ARCHITECTURE", "PROBLEM SOLVING"],
    align: "left", // Card is on the left, year is on the right
    showFolder: true,
    folderLabel: "ARSIP PROYEK",
    folderSublabel: "Klik Folder",
    images: ["/journey/jf12025.jpg", "/journey/jf22025.jpg", "/journey/jf32025.jpg"]
  },
  {
    id: 3,
    year: "2024",
    badge: "AKADEMIK",
    role: "D4 TEKNIK INFORMATIKA",
    roleEn: "APPLIED INFORMATICS ENGINEERING",
    company: "POLITEKNIK ELEKTRONIKA NEGERI SURABAYA",
    description: "Mempelajari dasar yang kuat dalam pengembangan perangkat lunak, pemrograman, basis data, serta perancangan sistem berbasis teknologi. Terbiasa menganalisis kebutuhan, menyusun alur sistem, dan membangun solusi digital yang fungsional.",
    descriptionEn: "Acquired a strong foundation in software engineering, programming paradigms, relational database systems, and software architecture at PENS. Skilled in analyzing requirements and building functional digital solutions.",
    tags: ["SOFTWARE DEVELOPMENT", "DATABASE SYSTEM", "SYSTEM ANALYSIS"],
    align: "right",
    showFolder: true,
    folderLabel: "ARSIP PROYEK",
    folderSublabel: "Klik Folder",
    images: ["/journey/jf12024.jpg", "/journey/jf22024.jpg", "/journey/jf32024.jpg"]
  }
];

const getYearIcon = (year: string) => {
  switch (year) {
    case "2026":
      return <CodeXml className="w-5 h-5 md:w-6 md:h-6" />;
    case "2025":
      return <Terminal className="w-5 h-5 md:w-6 md:h-6" />;
    case "2024":
    default:
      return <Laptop className="w-5 h-5 md:w-6 md:h-6" />;
  }
};

// ============================================================
// JOURNEY COMPONENT
// ============================================================
const Journey = () => {
  const { lang } = useTheme();
  const t = translations[lang].journey;
  const containerRef = useRef<HTMLDivElement>(null);

  // Tracks scroll progress inside the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Smooth out the scroll progress using spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  // Maps smooth progress (0 to 1) to height percentage (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const [activeProgress, setActiveProgress] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [thresholds, setThresholds] = useState<number[]>([0.15, 0.5, 0.85]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedImage(null);
      }
    };
    if (zoomedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [zoomedImage]);

  // Disable body scroll when zoomed image modal is open
  useEffect(() => {
    if (zoomedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [zoomedImage]);

  // Subscribe to smooth scroll progress updates
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      setActiveProgress(latest);
    });
    return () => unsubscribe();
  }, [smoothProgress]);

  // Measure dot thresholds relative to container height dynamically
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRect.height;
      if (containerHeight === 0) return;

      const dotElements = containerRef.current.querySelectorAll(".timeline-dot-target");
      const newThresholds: number[] = [];

      dotElements.forEach((dotEl) => {
        const dotRect = dotEl.getBoundingClientRect();
        const relativeTop = dotRect.top - containerRect.top;
        newThresholds.push(relativeTop / containerHeight);
      });

      if (newThresholds.length > 0) {
        setThresholds(newThresholds);
      }
    };

    // Delay measure slightly to allow DOM layout to settle
    const timer = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const getDotState = (idx: number, progress: number) => {
    const currentThreshold = thresholds[idx] ?? 0;
    const nextThreshold = thresholds[idx + 1] ?? 1.1;

    if (progress < currentThreshold) {
      return "future";
    } else if (progress >= currentThreshold && progress < nextThreshold) {
      return "active";
    } else {
      return "past";
    }
  };



  return (
    // ── SECTION WRAPPER ───────────────────────────────────────
    // Includes neobrutalist grid background pattern
    <section
      id="journey"
      className="relative w-full px-4 sm:px-6 py-16 md:py-32 bg-white dark:bg-black text-black dark:text-white font-mono overflow-hidden transition-colors duration-300 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
    >
      <div className="max-w-5xl mx-auto relative">

        {/* ── HEADING ────────────────────────────────────────── */}
        <div className="flex flex-col items-center mb-12 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-center relative z-10 select-none text-black dark:text-white"
          >
            {t.headingPrefix}{" "}
            <span className="relative inline-block">
              {t.headingHighlight}
              <span className="absolute bottom-1.5 md:bottom-2 left-0 right-0 h-3 md:h-5 bg-neutral-200/80 dark:bg-neutral-800/80 -z-10" />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 max-w-lg text-center leading-relaxed px-2"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* ── TIMELINE CONTAINER ──────────────────────────────── */}
        <div ref={containerRef} className="relative w-full">
          {/* Timeline Line Wrapper (bounds track and progress line to stop before the bottom) */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-16 w-0.5 md:-translate-x-1/2 z-10 pointer-events-none">
            {/* Vertical Center Line Track (Static background) */}
            <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800" />

            {/* Animated Vertical Progress Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-black dark:bg-white origin-top shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            >
              {/* Head indicator (circle at the bottom of the progressive line) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black shadow-sm" />
            </motion.div>
          </div>

          {/* Timeline Items */}
          <div className="flex flex-col w-full">
            {journeyItems.map((item, idx) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group/row relative w-full mb-12 md:mb-20 last:mb-0"
                >


                  {/* Responsive Grid Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 w-full pl-14 md:pl-0">

                    {/* LEFT COLUMN (Desktop) / TOP (Mobile) */}
                    <div className={`w-full flex flex-col items-center justify-center ${item.align === "right"
                      ? "md:order-1"
                      : "md:order-2"
                      }`}>
                      <ScrollReveal
                        isContainer={true}
                        baseOpacity={0.15}
                        blurStrength={4}
                        enableBlur={true}
                        containerClassName="w-full flex flex-col items-center justify-center"
                      >
                        <div className="flex flex-col items-center group/archive w-full relative">
                          {/* Year wrapper with hover floating animation */}
                          <div className="relative cursor-default mb-4 transition-transform duration-500 group-hover/archive:-translate-y-2">
                            <span
                              className="text-7xl sm:text-8xl md:text-[100px] font-black text-transparent select-none transition-all duration-500 leading-none inline-block year-stroke group-hover/archive:scale-108 group-hover/archive:tracking-[0.15em] origin-center"
                              style={{
                                WebkitTextStroke: "2px var(--year-stroke)",
                                color: "transparent",
                              }}
                            >
                              {item.year}
                            </span>
                            {/* Centered code/icon badge */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ perspective: "1000px" }}>
                              <div className="p-2.5 md:p-3 bg-black dark:bg-white text-white dark:text-black rounded-xl shadow-[4px_4px_0px_0px_rgba(200,200,200,0.4)] dark:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover/archive:scale-110">
                                {getYearIcon(item.year)}
                              </div>
                            </div>
                          </div>

                          {/* 3D Folder documentation (if active) */}
                          {item.showFolder && (() => {
                            const folderImages = item.images || [];

                            const papers = folderImages.map((imgSrc, i) => (
                              <div
                                key={i}
                                role="button"
                                tabIndex={0}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setZoomedImage(imgSrc);
                                }}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setZoomedImage(imgSrc);
                                  }
                                }}
                                aria-label={`Perbesar gambar dokumentasi proyek ${i + 1}`}
                                className="relative w-full h-full cursor-zoom-in group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white rounded-lg"
                              >
                                <Image
                                  src={imgSrc}
                                  alt={`Dokumentasi kegiatan ${item.year} — foto ${i + 1}`}
                                  fill
                                  sizes="120px"
                                  className="object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500"
                                />
                              </div>
                            ));

                            return (
                              <div className="flex flex-col items-center mt-4 transition-all duration-500 z-20">
                                <div className="py-4 md:py-6 scale-90 md:scale-100">
                                  <Folder
                                    size={1.1}
                                    items={papers}
                                    className="cursor-pointer"
                                  />
                                </div>

                                {/* Label */}
                                <div className="mt-4 flex flex-col items-center gap-1 transition-opacity duration-500 opacity-50 group-hover/archive:opacity-100 font-mono">
                                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black dark:text-white">
                                    {t.archiveLabel}
                                  </span>
                                  <div className="h-[1px] w-8 bg-black/20 dark:bg-white/20"></div>
                                  <span className="text-[9px] font-bold text-neutral-400">
                                    {t.archiveSublabel}
                                  </span>
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </ScrollReveal>
                    </div>

                    {/* RIGHT COLUMN (Desktop) / BOTTOM (Mobile) */}
                    <div className={`w-full relative ${item.align === "right"
                      ? "md:order-2"
                      : "md:order-1"
                      }`}>
                      {/* Timeline Dot Wrapper */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 w-[18px] h-[18px] z-30
                          left-[-32px] -translate-x-1/2
                          ${item.align === "right" ? "md:left-[-32px]" : "md:left-auto md:right-[-32px] md:translate-x-1/2"}
                        `}
                      >
                        {/* Timeline Dot with ScrollReveal */}
                        <ScrollReveal
                          isContainer={true}
                          baseOpacity={0.2}
                          enableBlur={false}
                          containerClassName={`timeline-dot-target w-full h-full rounded-full border-[3px] transition-[background-color,border-color,transform] duration-300
                            bg-white border-black dark:bg-black dark:border-white
                            group-hover/row:!bg-black group-hover/row:!border-black group-hover/row:!opacity-100 group-hover/row:scale-110
                            dark:group-hover/row:!bg-white dark:group-hover/row:!border-white
                            ${getDotState(idx, activeProgress) !== "future"
                              ? "bg-black border-black dark:bg-white dark:border-white scale-110"
                              : "scale-100"
                            }
                          `}
                        >
                          <div />
                        </ScrollReveal>
                      </div>
                      {/* Card Content with Neobrutalist design + 3D Tilt Hover Animation */}
                      <TiltedCard
                        containerHeight="auto"
                        containerWidth="100%"
                        imageHeight="auto"
                        imageWidth="100%"
                        rotateAmplitude={8}
                        scaleOnHover={1.02}
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                        className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-neutral-700 rounded-2xl p-5 md:p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] dark:shadow-[5px_5px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[7px_7px_0px_0px_rgba(255,255,255,0.25)] transition-shadow duration-300 w-full"
                      >
                        {/* Badge */}
                        <div className="px-3.5 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[9px] tracking-widest w-fit mb-4">
                          {item.badge}
                        </div>

                        {/* Role Title */}
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black dark:text-white leading-tight mb-1">
                          {lang === "US" ? item.roleEn : item.role}
                        </h3>

                        {/* Company/Institution with Pin Icon */}
                        <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-4">
                          <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="uppercase">{item.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 font-sans">
                          {lang === "US" ? item.descriptionEn : item.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-[9px] font-bold px-2.5 py-1.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </TiltedCard>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* ── IMAGE LIGHTBOX / ZOOM OVERLAY ──────────────────── */}
      <AnimatePresence>
        {zoomedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md cursor-zoom-out"
            onClick={() => setZoomedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-black/50 hover:bg-black/80 border border-neutral-800 hover:border-neutral-500 text-white rounded-full flex items-center justify-center transition-all cursor-pointer z-50 outline-none hover:scale-110 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 28 }}
              className="relative max-w-[90vw] max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={zoomedImage}
                  alt={t.zoomImageAria}
                  fill
                  sizes="(max-width: 1200px) 90vw, 1200px"
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journey;
