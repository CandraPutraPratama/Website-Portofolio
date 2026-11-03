"use client";

import React from "react";
import Reveal from "./Reveal";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const EXPERIENCES = [
  {
    year: "2026",
    period: "Semester 5 &bull; Sekarang",
    title: "Junior Web & Backend Developer",
    subtitle: "Jasdor (Live Production PWA) & BudgEx (API Tim)",
    desc: "Membangun dan mengoperasikan produk web production Jasdor (analogi TIX ID untuk F&B: 3 brand kopi, 2.000+ outlet terintegrasi, antrean real-time, dan checkout WhatsApp). Bersamaan dengan itu, merancang arsitektur backend sistem anggaran perusahaan BudgEx dengan alur persetujuan 3 tingkat berbasis ASP.NET Core & PostgreSQL.",
    skills: ["Next.js", "TypeScript", "ASP.NET Core", "C#", "PostgreSQL", "PWA"],
    badge: "Active Production",
    badgeColor: "emerald",
  },
  {
    year: "2025",
    period: "Semester 2 &ndash; 3",
    title: "Web Development & Relational Database",
    subtitle: "Pengembangan Sistem Enterprise & Bisnis",
    desc: "Mendalami perancangan sistem web terstruktur, normalisasi basis data relasional, dan implementasi logika bisnis nyata lewat 5 proyek aplikasi mandiri: Sistem Data Pegawai, Manajemen Inventaris Gudang, Kasir POS, Manajemen Keuangan Pribadi, dan RoomBook.",
    skills: ["PHP", "PostgreSQL", "MySQL", "Query Builder", "Bootstrap", "Chart.js"],
    badge: "5 Systems Built",
    badgeColor: "blue",
  },
  {
    year: "2024",
    period: "Semester 1",
    title: "D4 Teknik Informatika",
    subtitle: "Politeknik Elektronika Negeri Surabaya (PENS)",
    desc: "Memulai studi sarjana terapan di kampus vokasi teknologi terbaik Indonesia. Membangun fondasi kuat dalam rekayasa perangkat lunak, algoritma pemrograman, struktur data, analisis kebutuhan sistem, dan kolaborasi tim menggunakan Git.",
    skills: ["Software Engineering", "Algorithms", "Database Fundamentals", "Git"],
    badge: "IPK 3.76",
    badgeColor: "amber",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 max-w-5xl mx-auto w-full">
      <Reveal>
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            // PERJALANAN & PENGALAMAN
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-text">
            Experience & Journey
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
            Linimasa rekayasa software dari fondasi akademik hingga peluncuran
            sistem ke lingkungan produksi aktif.
          </p>
        </div>
      </Reveal>

      {/* Timeline List */}
      <div className="relative border-l border-line ml-4 md:ml-6 space-y-12">
        {EXPERIENCES.map((exp, idx) => (
          <div key={exp.year} className="relative pl-7 md:pl-10">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-emerald-500 shadow-sm" />

            <Reveal delay={100 + idx * 75}>
              <div className="p-6 md:p-8 rounded-2xl bg-surface border border-line shadow-sm hover:border-text/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5 text-muted" />
                    <span dangerouslySetInnerHTML={{ __html: exp.period }} />
                  </div>
                  <span
                    className={`font-mono text-[11px] px-2.5 py-0.5 rounded-full font-semibold border ${
                      exp.badgeColor === "emerald"
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                        : exp.badgeColor === "blue"
                        ? "bg-blue-500/10 border-blue-500/30 text-blue-600 dark:text-blue-400"
                        : "bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400"
                    }`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-display text-text">
                  {exp.title}
                </h3>
                <h4 className="text-xs sm:text-sm font-mono text-muted mb-4">
                  {exp.subtitle}
                </h4>

                <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                  {exp.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-line">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-2 border border-line font-mono text-[11px] text-text"
                    >
                      <ChevronRight className="w-3 h-3 text-muted" /> {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
