"use client";

import React, { useState } from "react";
import Reveal from "./Reveal";
import { Camera, Calendar } from "lucide-react";

const MILESTONES = [
  {
    year: "2026",
    title: "Ekspansi Sistem & Proyek Mandiri",
    desc: "Pengembangan Jasdor Kopi Cima dan proyek mandiri lainnya.",
    images: [
      { src: "/images/journey/jf12026.jpg", alt: "Journey 2026 Foto 1" },
      { src: "/images/journey/jf22026.jpg", alt: "Journey 2026 Foto 2" },
      { src: "/images/journey/jf312026.png", alt: "Journey 2026 Foto 3" },
    ],
  },
  {
    year: "2025",
    title: "Pengembangan 5 Sistem Web & PBL PENS",
    desc: "Perancangan backend BudgEx dan 5 sistem aplikasi web bisnis relasional.",
    images: [
      { src: "/images/journey/jf12025.jpg", alt: "Journey 2025 Foto 1" },
      { src: "/images/journey/jf22025.jpg", alt: "Journey 2025 Foto 2" },
      { src: "/images/journey/jf32025.jpg", alt: "Journey 2025 Foto 3" },
    ],
  },
  {
    year: "2024",
    title: "Fondasi Studi D4 Teknik Informatika PENS",
    desc: "Awal perjalanan perkuliahan dan pendalaman algoritma, struktur data, dan pemrograman web.",
    images: [
      { src: "/images/journey/jf12024.jpg", alt: "Journey 2024 Foto 1" },
      { src: "/images/journey/jf22024.jpg", alt: "Journey 2024 Foto 2" },
      { src: "/images/journey/jf32024.jpg", alt: "Journey 2024 Foto 3" },
    ],
  },
];

export default function MilestonesGallery() {
  const [selectedYear, setSelectedYear] = useState("Semua");

  const filtered = selectedYear === "Semua"
    ? MILESTONES
    : MILESTONES.filter((m) => m.year === selectedYear);

  return (
    <section className="section py-16 sm:py-20 border-t border-line">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
              <Camera className="w-3.5 h-3.5 text-sky-400" />
              <span>Dokumentasi Perjalanan</span>
            </div>
            <h2 className="section-title text-2xl sm:text-3xl font-bold tracking-tight text-text mb-2">
              Milestones &amp; Journey Gallery
            </h2>
            <p className="section-desc text-muted text-sm max-w-xl">
              Dokumentasi aktivitas studi dan pengembangan proyek di PENS.
            </p>
          </div>

          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-2 border border-line shrink-0">
            {["Semua", "2026", "2025", "2024"].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedYear === y
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

      <div className="space-y-12">
        {filtered.map((group, gIdx) => (
          <Reveal key={group.year} delay={gIdx * 60}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-surface-2 text-text font-bold border border-line">
                  {group.year}
                </span>
                <span className="text-sm font-semibold text-text">
                  {group.title}
                </span>
                <span className="text-xs text-muted hidden sm:inline">
                  — {group.desc}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {group.images.map((img, i) => (
                  <div
                    key={img.src}
                    className="group relative aspect-4/3 rounded-xl overflow-hidden bg-surface-2 border border-line hover:border-text/30 transition-all shadow-xs"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-[11px] font-mono text-white/90">
                        {group.year} • Dokumentasi #{i + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

