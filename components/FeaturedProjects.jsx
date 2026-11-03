"use client";

import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/projects";
import { ExternalLink, ArrowRight, Layers, Sparkles, Building2, ShieldCheck } from "lucide-react";

export default function FeaturedProjects() {
  const jasdor = PROJECTS.find((p) => p.id === "jasdor");
  const budgex = PROJECTS.find((p) => p.id === "budgex");

  return (
    <section id="work" className="py-24 px-5 max-w-5xl mx-auto w-full">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
              // KARYA UNGGULAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-text">
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
              Sistem produksi dan arsitektur enterprise yang telah beroperasi dan
              tervalidasi.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-text hover:text-emerald-500 transition-colors py-2 group"
          >
            Buka Technical Archive (8 Proyek){" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Reveal>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Project 1: Jasdor (Large Heroic Bento) */}
        {jasdor && (
          <div className="md:col-span-12 p-8 md:p-10 rounded-3xl bg-surface border border-line shadow-sm hover:border-text/20 transition-all flex flex-col justify-between relative overflow-hidden">
            <Reveal delay={100}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted font-bold">
                    PROYEK #{jasdor.num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    {jasdor.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted">
                  Tahun {jasdor.year}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-text mb-3">
                    {jasdor.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    {jasdor.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {jasdor.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-surface-2 border border-line font-mono text-xs text-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Box */}
                <div className="lg:col-span-4 p-5 rounded-2xl bg-surface-2 border border-line flex flex-col justify-center space-y-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Key Highlights:
                  </span>
                  {jasdor.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 font-mono text-xs text-text font-semibold"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-line flex items-center justify-between">
                <span className="text-xs font-mono text-muted">
                  Peran: {jasdor.role}
                </span>
                <a
                  href={jasdor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-text hover:text-emerald-500 transition-colors"
                >
                  Kunjungi Website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        )}

        {/* Project 2: BudgEx (Enterprise Bento) */}
        {budgex && (
          <div className="md:col-span-12 p-8 md:p-10 rounded-3xl bg-surface border border-line shadow-sm hover:border-text/20 transition-all flex flex-col justify-between relative overflow-hidden">
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted font-bold">
                    PROYEK #{budgex.num}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 border border-blue-500/30 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    {budgex.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted">
                  Tahun {budgex.year}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-text mb-3">
                    {budgex.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed mb-6">
                    {budgex.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {budgex.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-lg bg-surface-2 border border-line font-mono text-xs text-text"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Box */}
                <div className="lg:col-span-4 p-5 rounded-2xl bg-surface-2 border border-line flex flex-col justify-center space-y-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    Architecture Highlights:
                  </span>
                  {budgex.metrics.map((m) => (
                    <div
                      key={m}
                      className="flex items-center gap-2 font-mono text-xs text-text font-semibold"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-line flex items-center justify-between">
                <span className="text-xs font-mono text-muted">
                  Peran: {budgex.role}
                </span>
                <a
                  href={budgex.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-text hover:text-blue-500 transition-colors"
                >
                  Lihat Repository GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          </div>
        )}
      </div>

      {/* Direct CTA Banner to Technical Archive */}
      <Reveal delay={300} className="mt-8">
        <div className="p-6 rounded-2xl bg-surface-2 border border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-muted" />
            <span className="text-sm font-medium text-text">
              Ingin melihat 6 proyek sistem lainnya (Data Pegawai, POS Kasir, Inventaris, RoomBook)?
            </span>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-text text-bg font-mono text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Buka Technical Archive &rarr;
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
