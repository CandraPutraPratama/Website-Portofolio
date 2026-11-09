"use client";

import React from "react";
import Reveal from "./Reveal";
import {
  GraduationCap,
  Award,
  Building2,
  CheckCircle2,
} from "lucide-react";

export default function ExperienceCertifications() {
  return (
    <section id="experience" className="section relative py-16 sm:py-20">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Rekam Jejak Nyata</span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
            Pengalaman Industri &amp; Capaian Akademik
          </h2>
          <p className="section-desc text-muted text-sm sm:text-base leading-relaxed">
            Pengalaman magang profesional di BUMN kebandarudaraan dan konsistensi rekam jejak akademik di Politeknik Elektronika Negeri Surabaya.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: PT Angkasa Pura I Bandara Internasional Juanda */}
        <Reveal delay={60}>
          <div className="h-full p-7 sm:p-8 rounded-2xl bg-surface border border-line flex flex-col justify-between hover:border-text/30 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Building2 size={20} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-2 text-muted border border-line">
                  Mei 2023 – Nov 2023
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-1">
                  PT Angkasa Pura I (Persero)
                </h3>
                <div className="text-xs font-mono text-amber-400 font-medium">
                  Stakeholder Relation Section • Bandara Internasional Juanda
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Magang industri 6 bulan di Stakeholder Relation Section Bandara Juanda dengan predikat memuaskan. Bertanggung jawab dalam tata kelola komunikasi eksternal korporat, pemantauan kepuasan pengguna jasa kebandarudaraan, dan koordinasi operasional lintas divisi.
              </p>

              {/* Certifications (Teks tanpa link mati karena file PDF belum di-upload) */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-text/80">
                  Sertifikat &amp; Penghargaan Resmi:
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Sertifikat PKL Stakeholder Relation Bandara Juanda</span>
                  </div>
                  <div className="text-[11px] text-muted pl-6">
                    Predikat Sangat Memuaskan dengan nilai akhir 87,86 (evaluasi performa praktik kerja lapangan).
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Sertifikat Penghargaan Latihan PKD ke-108</span>
                  </div>
                  <div className="text-[11px] text-muted pl-6">
                    Peserta aktif Operasional Simulasi Penanggulangan Keadaan Darurat di Bandara Internasional Juanda (Mei 2023).
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60 text-[11px] text-muted font-mono">
              Verifikasi: Sertifikat asli tercatat di arsip resmi PT Angkasa Pura I
            </div>
          </div>
        </Reveal>

        {/* Card 2: Politeknik Elektronika Negeri Surabaya (PENS) */}
        <Reveal delay={120}>
          <div className="h-full p-7 sm:p-8 rounded-2xl bg-surface border border-line flex flex-col justify-between hover:border-text/30 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <GraduationCap size={20} />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-surface-2 text-muted border border-line">
                  2024 – Sekarang
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-text mb-1">
                  Politeknik Elektronika Negeri Surabaya (PENS)
                </h3>
                <div className="text-xs font-mono text-emerald-400 font-medium">
                  D4 Teknik Informatika • Semester 5
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed">
                Menempuh studi sarjana terapan dengan fokus intensif pada rekayasa perangkat lunak, perancangan skema basis data relasional normalisasi 3NF, arsitektur web modern, dan sistem terdistribusi.
              </p>

              {/* Academic Highlights */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-text/80">
                  Capaian &amp; Peran Akademik:
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Dean&apos;s Honor Capaian Akademik</span>
                  </div>
                  <div className="text-[11px] text-muted pl-6">
                    Konsistensi capaian akademik berpredikat kehormatan di departemen Teknik Informatika PENS.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-surface-2 border border-line space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Backend &amp; Database Developer Tim PBL</span>
                  </div>
                  <div className="text-[11px] text-muted pl-6">
                    Mengembangkan skema database dan alur otorisasi multi-role untuk sistem approval anggaran BudgEx.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line/60 text-[11px] text-muted font-mono">
              Status: Mahasiswa Aktif Semester 5 • Siap Magang Industri mulai 6 Jan 2027
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
