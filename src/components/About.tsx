"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ProfileCard from "./ProfileCard";
import { GraduationCap, Terminal, Download, Cpu } from "lucide-react";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiPhp, SiSharp,
  SiNextdotjs, SiReact, SiLaravel, SiTailwindcss, SiBootstrap,
  SiDotnet, SiFlutter,
  SiGit, SiGithub, SiPostman, SiVite
} from "react-icons/si";
import { FaDatabase, FaLaptopCode } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

const FigmaOriginalIcon = ({ className }: { className?: string }) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 130" className={className}>
    <path className="fill-current group-hover:fill-[#0acf83] transition-colors duration-300" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0" />
    <path className="fill-current group-hover:fill-[#a259ff] transition-colors duration-300" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0" />
    <path className="fill-current group-hover:fill-[#f24e1e] transition-colors duration-300" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0" />
    <path className="fill-current group-hover:fill-[#ff7262] transition-colors duration-300" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0" />
    <path className="fill-current group-hover:fill-[#1abcfe] transition-colors duration-300" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0" />
  </svg>
);

// ============================================================
// DATA — Tech Stack
// ============================================================
const techStack = {
  core: [
    { name: "HTML5", icon: SiHtml5, colorClass: "hover:border-[#E34F26] hover:text-[#E34F26]" },
    { name: "CSS3", icon: SiCss, colorClass: "hover:border-[#1572B6] hover:text-[#1572B6]" },
    { name: "JavaScript", icon: SiJavascript, colorClass: "hover:border-[#F7DF1E] hover:text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, colorClass: "hover:border-[#3178C6] hover:text-[#3178C6]" },
    { name: "PHP", icon: SiPhp, colorClass: "hover:border-[#777BB4] hover:text-[#777BB4]" },
    { name: "C#", icon: SiSharp, colorClass: "hover:border-[#9B4F96] hover:text-[#9B4F96]" },
    { name: "SQL", icon: FaDatabase, colorClass: "hover:border-[#4479A1] hover:text-[#4479A1]" },
  ],
  frameworks: [
    { name: "Next.js", icon: SiNextdotjs, colorClass: "hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white" },
    { name: "React", icon: SiReact, colorClass: "hover:border-[#61DAFB] hover:text-[#61DAFB]" },
    { name: "Laravel", icon: SiLaravel, colorClass: "hover:border-[#FF2D20] hover:text-[#FF2D20]" },
    { name: "ASP.NET Core", icon: SiDotnet, colorClass: "hover:border-[#512BD4] hover:text-[#512BD4]" },
    { name: "Flutter", icon: SiFlutter, colorClass: "hover:border-[#02569B] hover:text-[#02569B]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, colorClass: "hover:border-[#06B6D4] hover:text-[#06B6D4]" },
    { name: "Bootstrap", icon: SiBootstrap, colorClass: "hover:border-[#7952B3] hover:text-[#7952B3]" },
  ],
  tools: [
    { name: "Git", icon: SiGit, colorClass: "hover:border-[#F05032] hover:text-[#F05032]" },
    { name: "GitHub", icon: SiGithub, colorClass: "hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white" },
    { name: "Figma", icon: FigmaOriginalIcon, colorClass: "hover:border-[#F24E1E] hover:text-[#F24E1E]" },
    { name: "Postman", icon: SiPostman, colorClass: "hover:border-[#FF6C37] hover:text-[#FF6C37]" },
    { name: "Vite", icon: SiVite, colorClass: "hover:border-[#646CFF] hover:text-[#646CFF]" },
  ],
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const BentoCard = ({
  children,
  className = "",
  index = 0,
}: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    custom={index}
    className={`relative border-2 border-black dark:border-neutral-700 rounded-2xl p-6 flex flex-col justify-between
      hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]
      transition-shadow duration-300 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);

// ============================================================
// ABOUT COMPONENT
// ============================================================
const About = () => {
  const { lang } = useTheme();
  const t = translations[lang].about;

  return (
    <section
      id="about"
      className="w-full px-4 sm:px-6 pt-12 pb-20 md:pt-16 md:pb-32 bg-white dark:bg-black text-black dark:text-white font-mono transition-colors duration-300 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── HEADING ── */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12 text-center md:text-left"
        >
          {t.heading}
        </motion.h2>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* ── CARD 1: BIO ── */}
          <BentoCard index={0} className="md:col-span-2 bg-white dark:bg-neutral-900 min-h-[280px] md:min-h-[300px]">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black text-2xl animate-pulse">
                👋
              </div>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight uppercase">
                {t.greeting}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed font-sans">
                {t.bio1}
                <br /><br />
                {t.bio2}
              </p>
              <div className="pt-2">
                <a
                  href="/cv.pdf"
                  download
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow"
                >
                  <Download aria-hidden="true" className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{t.downloadCv}</span>
                </a>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 2: PROFILE CARD ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            custom={1}
            className="md:col-span-1 min-h-[340px] overflow-visible flex items-center justify-center"
          >
            <ProfileCard
              name="Candra Putra"
              title="Junior Web Developer"
              handle="candraaaptra"
              status={t.statusOnline}
              contactText={t.contactBtn}
              avatarUrl="/profil-hero.png"
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => {
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: "smooth" });
                }
              }}
              behindGlowEnabled={true}
              behindGlowColor="rgba(125, 190, 255, 0.4)"
              innerGradient="linear-gradient(145deg, rgba(0, 0, 0, 0.95) 0%, rgba(25, 25, 25, 0.98) 100%)"
              className="w-full h-full"
            />
          </motion.div>

          {/* ── CARD 3: EDUCATION ── */}
          <BentoCard index={2} className="md:col-span-1 bg-neutral-50 dark:bg-neutral-900">
            <div className="flex flex-col h-full justify-between gap-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white dark:bg-neutral-800 border border-black dark:border-neutral-700 rounded-full shadow-sm">
                  <GraduationCap className="w-6 h-6" aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold border border-black dark:border-white px-2.5 py-1 rounded-full bg-black dark:bg-white text-white dark:text-black uppercase">
                  {t.eduYear}
                </span>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase mb-1">
                    {t.eduUni}
                  </p>
                  <h3 className="font-bold text-lg uppercase leading-tight">
                    {t.eduMajor}
                  </h3>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase">
                    {t.relevantCourses}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Pemrograman Web",
                      "Sistem Basis Data",
                      "Rekayasa Perangkat Lunak",
                      "OOP",
                      "Struktur Data",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-[9px] font-semibold text-neutral-700 dark:text-neutral-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-neutral-200 dark:border-neutral-700">
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-black">3.76</span>
                  <div className="flex flex-col justify-end pb-1">
                    <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-blue-400 leading-tight">
                      {t.gpaBadge}
                    </span>
                    <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400">
                      {t.gpaScale}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 4: TECH STACK ── */}
          <BentoCard index={3} className="md:col-span-2 bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-3 mb-6 border-b border-black/10 dark:border-white/10 pb-4">
              <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-lg">
                <Terminal className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight">
                {t.techStackTitle}
              </h3>
            </div>
            <div className="flex flex-col gap-5">
              {/* Core Languages */}
              <div>
                <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  {t.coreLang}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.core.map((tech) => (
                    <div
                      key={tech.name}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md transition-all duration-300 cursor-default ${tech.colorClass}`}
                    >
                      <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <tech.icon
                          aria-hidden="true"
                          className={`transition-transform duration-300 group-hover:scale-125 ${
                            tech.name === "PHP" ? "w-5 h-5" : "w-3.5 h-3.5"
                          }`}
                        />
                      </div>
                      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 tracking-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Frameworks & UI */}
              <div>
                <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  {t.frameworks}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.frameworks.map((tech) => (
                    <div
                      key={tech.name}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md transition-all duration-300 cursor-default ${tech.colorClass}`}
                    >
                      <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <tech.icon
                          aria-hidden="true"
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125"
                        />
                      </div>
                      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 tracking-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tools & Ecosystem */}
              <div>
                <h4 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                  {t.tools}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.tools.map((tech) => (
                    <div
                      key={tech.name}
                      className={`group flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-md transition-all duration-300 cursor-default ${tech.colorClass}`}
                    >
                      <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        <tech.icon
                          aria-hidden="true"
                          className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-125"
                        />
                      </div>
                      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 tracking-tight">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 5: PHILOSOPHY ── */}
          <BentoCard index={4} className="md:col-span-3 bg-neutral-50 dark:bg-neutral-900 min-h-[200px]">
            <div className="absolute top-2 right-2 md:-top-10 md:-right-4 text-[5rem] md:text-[12rem] font-serif text-black/5 dark:text-white/5 pointer-events-none select-none z-0 leading-none">
              &quot;
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch relative z-10 h-full">
              <div className="flex-shrink-0 flex flex-col items-center justify-center w-full md:w-1/3 text-center md:text-left md:items-start border-b-2 md:border-b-0 md:border-r-2 border-black/10 dark:border-white/10 pb-6 md:pb-0 md:pr-10">
                <div className="p-4 bg-black dark:bg-white text-white dark:text-black rounded-full mb-4 shadow">
                  <Cpu aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-3xl font-black uppercase leading-tight tracking-tight">
                  {t.philosophyTitle}
                </h3>
              </div>
              <div className="flex-1 flex flex-col justify-center w-full">
                <p className="text-xs md:text-base lg:text-lg text-neutral-800 dark:text-neutral-300 leading-relaxed text-center md:text-left font-sans">
                  {t.philosophyDesc}
                </p>
                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="text-[8px] md:text-[10px] font-black px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full uppercase tracking-widest">
                    {t.tagSystemThinker}
                  </span>
                  <span className="text-[8px] md:text-[10px] font-black px-3 py-1 bg-white dark:bg-transparent border border-black dark:border-white text-black dark:text-white rounded-full uppercase tracking-widest">
                    {t.tagProblemSolver}
                  </span>
                </div>
              </div>
            </div>
          </BentoCard>

          {/* ── CARD 6: FOCUS ── */}
          <BentoCard index={5} className="md:col-span-3 bg-neutral-900 dark:bg-neutral-900 text-white border-neutral-700">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center h-full">
              <div>
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
                  {t.focusTitle}
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed font-sans">
                  {t.focusDesc}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-start md:justify-end flex-wrap">
                {[
                  {
                    label: t.focusItem1,
                    icon: (
                      <FaLaptopCode
                        aria-hidden="true"
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      />
                    ),
                  },
                  {
                    label: t.focusItem2,
                    icon: (
                      <FaDatabase
                        aria-hidden="true"
                        className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                      />
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 px-4 md:px-5 py-3 border border-neutral-700 rounded-xl bg-neutral-800/80 hover:border-white transition-colors duration-300 group"
                  >
                    <span className="text-neutral-400 group-hover:text-white transition-colors flex-shrink-0">
                      {item.icon}
                    </span>
                    <span className="font-bold text-xs md:text-sm tracking-wide">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default About;
