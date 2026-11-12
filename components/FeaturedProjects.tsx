"use client";

import React, { useState } from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import ProjectShareModal from "./ProjectShareModal";
import {
  ExternalLink,
  Github,
  Share2,
  FolderGit2,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function FeaturedProjects() {
  const [sharingProject, setSharingProject] = useState(null);

  const jasdorData = {
    title: "Jasdor Kopi Cima",
    category: "Proyek Mandiri • Live",
    desc: "Aplikasi pemesanan F&B hemat untuk mahasiswa dan komunitas. Menampilkan promo tiga brand kopi (Kopi Kenangan, Fore Coffee, TOMORO Coffee) dengan antrean pesanan dan checkout lewat WhatsApp.",
    liveUrl: "https://jasdor.cimagroup.my.id",
    githubUrl: "https://github.com/CandraPutraPratama/jasdorkopicima",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "PWA", "WhatsApp"],
  };

  const budgexData = {
    title: "BudgEx - Sistem Persetujuan Anggaran",
    category: "Backend API • Tim PBL PENS",
    desc: "Sistem alur persetujuan anggaran berjenjang dengan review antar departemen, validasi batas plafon tahunan, dan jejak audit.",
    liveUrl: null,
    githubUrl: null,
    tech: ["ASP.NET Core", "C#", "PostgreSQL", "REST API", "Clean Architecture"],
  };

  return (
    <section id="work" className="section relative py-16 sm:py-20">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Karya Pilihan</span>
            </div>
            <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight text-text mb-3">
              Proyek Pilihan
            </h2>
            <p className="section-desc text-muted text-sm sm:text-base max-w-2xl leading-relaxed">
              Dua proyek utama: aplikasi pemesanan yang sudah dipakai pelanggan sungguhan, dan backend sistem persetujuan anggaran yang dikerjakan dalam tim.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted hover:text-text transition-colors self-start sm:self-end border border-line px-3.5 py-2 rounded-xl bg-surface-2"
          >
            <span>Lihat Semua Proyek</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </Reveal>

      {/* Featured 2 Cards Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* Card 1: Jasdor Kopi Cima */}
        <Reveal delay={60}>
          <div className="group h-full p-7 sm:p-8 rounded-2xl bg-surface border border-line hover:border-text/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl">
            <div className="space-y-5">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
                <span className="text-xs font-mono text-muted">
                  Lead Developer &amp; Creator
                </span>
              </div>

              {/* Title & Preview Image */}
              <div>
                <h3 className="text-2xl font-bold text-text group-hover:text-emerald-400 transition-colors mb-2">
                  Jasdor Kopi Cima
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Aplikasi pemesanan F&amp;B hemat untuk mahasiswa dan komunitas, dirancang dan dikelola secara mandiri. Menampilkan katalog promo Kopi Kenangan, Fore Coffee, dan TOMORO Coffee dalam satu PWA dengan antrean pesanan dan checkout WhatsApp.
                </p>
              </div>

              {/* Key Engineering Highlights */}
              <div className="space-y-2 py-1">
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Promo beberapa brand F&amp;B dalam satu antarmuka</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Antrean pesanan di sisi klien dengan localStorage</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Pembayaran QRIS dan checkout pesanan lewat WhatsApp</span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {["Next.js 14", "TypeScript", "Tailwind CSS", "PWA", "WhatsApp"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-2 text-muted border border-line"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-line">
              <a
                href="https://jasdor.cimagroup.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-text text-surface font-semibold text-xs hover:opacity-90 transition-opacity"
                title="Buka Aplikasi Jasdor (Live Demo)"
              >
                <span>Live Demo</span>
                <ExternalLink size={13} />
              </a>

              <a
                href="https://github.com/CandraPutraPratama/jasdorkopicima"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-2 text-text border border-line font-medium text-xs hover:border-text/30 transition-colors"
                title="Lihat Repositori Source Code Jasdor"
              >
                <Github size={13} />
                <span>Source Code</span>
              </a>

              <button
                type="button"
                onClick={() => setSharingProject(jasdorData)}
                className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-surface-2 text-muted hover:text-text border border-line hover:border-text/30 transition-colors ml-auto"
                title="Bagikan Proyek Jasdor"
                aria-label="Bagikan Proyek Jasdor"
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Card 2: BudgEx Budget Approval Flow */}
        <Reveal delay={120}>
          <div className="group h-full p-7 sm:p-8 rounded-2xl bg-surface border border-line hover:border-text/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl">
            <div className="space-y-5">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Layers className="w-3.5 h-3.5 text-blue-400" />
                  Backend API
                </span>
                <span className="text-xs font-mono text-muted">
                  Backend &amp; Database Developer
                </span>
              </div>

              {/* Title & Preview Image */}
              <div>
                <h3 className="text-2xl font-bold text-text group-hover:text-blue-400 transition-colors mb-2">
                  BudgEx - Persetujuan Anggaran
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Backend alur persetujuan anggaran berjenjang dengan review antar departemen, validasi batas plafon tahunan, dan pencatatan jejak audit. Proyek tim Project-Based Learning (PBL) di PENS.
                </p>
              </div>

              {/* Key Engineering Highlights */}
              <div className="space-y-2 py-1">
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>State machine persetujuan bertingkat konsisten &amp; transaksional</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Penanganan pengajuan anggaran yang masuk bersamaan</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-text/90 font-medium">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Jejak audit menyeluruh (audit trail) untuk akuntabilitas status</span>
                </div>
              </div>

              {/* Visual Architecture & Approval Workflow Pipeline */}
              <div className="p-3 rounded-xl bg-surface-2 border border-line space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-muted">
                  <span className="font-semibold text-text/80">Approval Workflow &amp; Audit Trail</span>
                  <span className="text-blue-400 font-semibold">PostgreSQL ACID</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono overflow-x-auto pb-0.5 text-text/80">
                  <span className="px-2 py-0.5 rounded bg-surface border border-line shrink-0">
                    1. Pengajuan Unit
                  </span>
                  <span className="text-muted/60 shrink-0">→</span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-line shrink-0">
                    2. Validasi Plafon
                  </span>
                  <span className="text-muted/60 shrink-0">→</span>
                  <span className="px-2 py-0.5 rounded bg-surface border border-line shrink-0">
                    3. Otorisasi Bertingkat
                  </span>
                  <span className="text-muted/60 shrink-0">→</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0 font-semibold">
                    4. Audit Logged
                  </span>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                {["ASP.NET Core", "C#", "PostgreSQL", "REST API", "Clean Architecture"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-2 text-muted border border-line"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-line">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-2 border border-line text-xs font-mono text-muted">
                <ShieldCheck size={14} className="text-blue-400" />
                <span>PBL PENS (Private Organization Repo)</span>
              </div>

              <button
                type="button"
                onClick={() => setSharingProject(budgexData)}
                className="inline-flex items-center gap-1.5 p-2 rounded-xl bg-surface-2 text-muted hover:text-text border border-line hover:border-text/30 transition-colors ml-auto"
                title="Bagikan Proyek BudgEx"
                aria-label="Bagikan Proyek BudgEx"
              >
                <Share2 size={14} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Clean Callout to /work */}
      <Reveal delay={160}>
        <div className="mt-10 p-6 rounded-2xl bg-surface-2/60 border border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-text">
              Proyek lainnya
            </h4>
            <p className="text-xs text-muted">
              Inventaris Gudang, Data Pegawai, Kasir POS, Keuangan Pribadi, dan RoomBook ada di arsip proyek.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-text text-surface font-semibold text-xs hover:opacity-90 transition-opacity shrink-0"
          >
            <span>Buka Arsip Proyek (5+)</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </Reveal>

      {sharingProject && (
        <ProjectShareModal
          project={sharingProject}
          isOpen={Boolean(sharingProject)}
          onClose={() => setSharingProject(null)}
        />
      )}
    </section>
  );
}

