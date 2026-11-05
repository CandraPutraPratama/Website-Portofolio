"use client";

import React from "react";
import Reveal from "./Reveal";
import { SKILLS_GROUPED } from "../data/skills";
import { GraduationCap, MapPin, Mail, Github, Linkedin, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-5 max-w-5xl mx-auto w-full">
      <Reveal>
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            // TENTANG SAYA
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-text">
            About Me
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Profile Details Card */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-surface border border-line shadow-sm">
          <Reveal delay={150}>
            {/* Visual Header / Avatar Placeholder */}
            <div className="relative w-full h-48 rounded-xl bg-gradient-to-tr from-surface-2 to-bg border border-line flex flex-col justify-center items-center mb-6 overflow-hidden">
              <div className="w-20 h-20 rounded-full bg-surface border border-line flex items-center justify-center shadow-md mb-3 text-2xl font-black font-display text-text">
                CP
              </div>
              <span className="font-display font-bold text-base text-text">
                Candra Putra Pratama
              </span>
              <span className="font-mono text-xs text-muted">
                Junior Web & Backend Developer
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-muted mb-6">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-emerald-500" />
                <span>D4 Teknik Informatika &bull; PENS Surabaya</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-muted" />
                <span>Surabaya, Jawa Timur, Indonesia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Terminal className="w-4 h-4 text-muted" />
                <span>IPK: 3.76 / 4.00 (Semester 5)</span>
              </div>
            </div>

            <div className="pt-5 border-t border-line flex items-center gap-4">
              <a
                href="https://github.com/CandraPutraPratama"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-surface-2 border border-line text-muted hover:text-text transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/candra-putra"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-surface-2 border border-line text-muted hover:text-text transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:candraputrap46@gmail.com"
                className="p-2 rounded-lg bg-surface-2 border border-line text-muted hover:text-text transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Narrative & Grouped Skills */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <Reveal delay={200}>
            <div className="p-7 rounded-2xl bg-surface border border-line shadow-sm">
              <h3 className="font-display font-bold text-xl text-text mb-3">
                Membangun Solusi Berorientasi Pengguna & Keandalan Backend
              </h3>
              <p className="text-sm sm:text-base text-muted leading-relaxed mb-4">
                Saya adalah mahasiswa D4 Teknik Informatika Politeknik Elektronika Negeri Surabaya (PENS) dengan IPK 3.76, berfokus pada Web & Backend Development. Selain aktif dalam kepanitiaan kampus serta meraih prestasi akademik Dean's Honor, saya telah merancang dan membangun 5+ sistem web terstruktur berbasis basis data relasional: mulai dari arsitektur backend korporat BudgEx (alur approval 3 tingkat dengan ASP.NET Core & PostgreSQL) hingga platform produksi Jasdor (PWA multi-brand terhubung ke 3 brand dan 2.000+ outlet).
              </p>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Saya memiliki antusiasme tinggi untuk terus belajar, memperdalam praktik rekayasa perangkat lunak industri, dan siap berkontribusi langsung lewat program magang di tim engineering profesional.
              </p>
            </div>
          </Reveal>

          {/* Grouped Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILLS_GROUPED.map((grp, idx) => (
              <Reveal key={grp.group} delay={250 + idx * 50}>
                <div className="p-5 rounded-2xl bg-surface border border-line h-full flex flex-col justify-between">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                      {grp.group}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {grp.items.map((it) => (
                        <span
                          key={it}
                          className="px-2.5 py-1 rounded-md bg-surface-2 border border-line font-mono text-[11px] text-text"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
