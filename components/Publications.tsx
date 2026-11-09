"use client";

import React, { useState } from "react";
import { PUBLICATIONS_DATA, PublicationItem } from "../data/publications";
import Reveal from "./Reveal";
import {
  FileText,
  Calendar,
  Tag,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Award,
  X,
  Github,
} from "lucide-react";

export default function Publications() {
  const [filterYear, setFilterYear] = useState<string>("All");
  const [selectedPub, setSelectedPub] = useState<PublicationItem | null>(null);

  const years = ["All", "2026", "2025"];

  const filtered = PUBLICATIONS_DATA.filter((item) => {
    if (filterYear === "All") return true;
    return String(item.year) === filterYear;
  });

  return (
    <section id="publications" className="section relative">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
              <BookOpen className="w-3.5 h-3.5 text-violet-400" />
              <span>Academic & Applied Studies</span>
            </div>
            <h2 className="section-title">Publications & Research</h2>
            <p className="section-desc max-w-2xl">
              Kajian rekayasa sistem, analisis arsitektur konkurensi, dan riset
              berbasis proyek (PBL) di Politeknik Elektronika Negeri Surabaya.
            </p>
          </div>

          {/* Year Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-line shrink-0 self-start sm:self-end">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setFilterYear(y)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  filterYear === y
                    ? "bg-surface text-text shadow-xs font-semibold"
                    : "text-muted hover:text-text"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Publications Cards Grid */}
      <div className="grid grid-cols-1 gap-5">
        {filtered.map((pub, idx) => (
          <Reveal key={pub.id} delay={idx * 60}>
            <div
              className="group p-6 sm:p-7 rounded-2xl bg-surface border border-line hover:border-text/30 transition-all duration-300 hover:shadow-lg"
              style={{
                background:
                  "linear-gradient(180deg, var(--surface) 0%, rgba(var(--surface-rgb), 0.8) 100%)",
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-surface-2 text-muted border border-line">
                      <Calendar className="w-3 h-3" />
                      {pub.year}
                    </span>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium">
                      {pub.type}
                    </span>
                    <span className="text-xs text-muted/80">
                      {pub.venue}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-text group-hover:text-violet-400 transition-colors leading-snug">
                    {pub.title}
                  </h3>

                  {/* Abstract Preview */}
                  <p className="text-sm text-muted leading-relaxed line-clamp-3">
                    {pub.abstract}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {pub.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-2/80 text-muted border border-line/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Metrics & Action Side */}
                <div className="md:w-64 shrink-0 flex flex-col justify-between gap-4 md:border-l md:border-line md:pl-6 pt-3 md:pt-0 border-t border-line md:border-t-0">
                  {pub.metrics && pub.metrics.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted">
                        Key Empirical Result:
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                        {pub.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-2.5 rounded-xl bg-surface-2/60 border border-line text-left"
                          >
                            <div className="text-xs font-bold text-emerald-400 font-mono">
                              {m.value}
                            </div>
                            <div className="text-[10px] text-muted">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPub(pub)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-surface-2 text-text border border-line hover:bg-surface-2/80 hover:border-text/30 transition-all"
                    >
                      <FileText className="w-3.5 h-3.5 text-violet-400" />
                      <span>Ringkasan Riset</span>
                    </button>

                    {pub.paperUrl && (
                      <a
                        href={pub.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-surface-2 text-muted hover:text-text border border-line hover:border-text/30 transition-colors"
                        title="Buka Platform / Paper Terkait"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}

                    {pub.githubUrl && (
                      <a
                        href={pub.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-surface-2 text-muted hover:text-text border border-line hover:border-text/30 transition-colors"
                        title="Lihat Repositori GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Publication Abstract Modal */}
      {selectedPub && (
        <div
          className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPub(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl bg-surface border border-line rounded-2xl shadow-2xl p-6 sm:p-8 animate-scaleUp overflow-y-auto max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-violet-400 font-medium">
                  {selectedPub.type} • {selectedPub.year}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-text mt-1">
                  {selectedPub.title}
                </h3>
                <p className="text-xs text-muted mt-1">{selectedPub.venue}</p>
              </div>
              <button
                onClick={() => setSelectedPub(null)}
                className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-text/90 leading-relaxed border-t border-line pt-4">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                  Abstrak & Latar Belakang:
                </h4>
                <p className="p-4 rounded-xl bg-surface-2/60 border border-line text-xs sm:text-sm text-muted">
                  {selectedPub.abstract}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                  Penulis & Kontributor:
                </h4>
                <p className="text-xs font-medium text-text">
                  {selectedPub.authors.join(", ")}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                  Kata Kunci & Teknologi:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPub.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-surface-2 text-text border border-line"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-line flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedPub(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium text-muted hover:text-text"
              >
                Tutup
              </button>
              {selectedPub.paperUrl && (
                <a
                  href={selectedPub.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-text text-surface hover:opacity-90 transition-opacity"
                >
                  <span>Buka Halaman Live</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

