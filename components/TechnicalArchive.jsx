"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import { ExternalLink, ArrowLeft, ArrowUpRight } from "lucide-react";

export default function TechnicalArchive() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === "all") return true;
    if (filter === "production") return p.category.includes("PRODUCTION");
    if (filter === "enterprise") return p.category.includes("ENTERPRISE");
    if (filter === "fullstack") return p.category.includes("FULL-STACK");
    return true;
  });

  return (
    <div className="py-28 px-5 max-w-5xl mx-auto w-full">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-text transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-line">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2 block">
            // ARSIP LENGKAP
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-text">
            Technical Archive
          </h1>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
            Daftar lengkap seluruh perangkat lunak, sistem web, dan eksperimen
            teknis yang pernah saya bangun (2024 &ndash; 2026).
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {["all", "production", "enterprise", "fullstack"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-full font-mono text-xs capitalize transition-all ${
                filter === f
                  ? "bg-text text-bg font-semibold shadow-sm"
                  : "bg-surface-2 border border-line text-muted hover:text-text"
              }`}
            >
              {f === "all" ? "Semua (8)" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Table-style Archive List */}
      <div className="w-full divide-y divide-line">
        {/* Table Header */}
        <div className="hidden md:grid grid-cols-12 py-3 px-4 font-mono text-xs text-muted uppercase tracking-wider">
          <div className="col-span-1">Tahun</div>
          <div className="col-span-4">Proyek & Deskripsi</div>
          <div className="col-span-3">Kategori</div>
          <div className="col-span-3">Teknologi</div>
          <div className="col-span-1 text-right">Tautan</div>
        </div>

        {/* Rows */}
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            className="grid grid-cols-1 md:grid-cols-12 py-6 px-4 items-start md:items-center gap-3 hover:bg-surface-2/60 transition-colors rounded-xl"
          >
            {/* Year */}
            <div className="md:col-span-1 font-mono text-xs text-muted">
              {p.year}
            </div>

            {/* Title & Desc */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-base text-text">
                  {p.title}
                </h3>
                {p.featured && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500" title="Featured Project" />
                )}
              </div>
              <p className="text-xs text-muted line-clamp-2 mt-1">
                {p.desc}
              </p>
            </div>

            {/* Category */}
            <div className="md:col-span-3 font-mono text-xs">
              <span className="px-2.5 py-1 rounded-md bg-surface border border-line text-muted inline-block">
                {p.category}
              </span>
            </div>

            {/* Tech Stack */}
            <div className="md:col-span-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface border border-line text-text"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Link */}
            <div className="md:col-span-1 flex md:justify-end">
              <a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-text hover:text-emerald-500 font-semibold transition-colors"
                aria-label={`Open link for ${p.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
