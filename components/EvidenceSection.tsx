"use client";

import React from "react";
import Reveal from "./Reveal";
import { METRICS_DATA } from "../data/metrics";
import { COLLABORATIONS_DATA } from "../data/collaborations";
import {
  GraduationCap,
  Building2,
  Coffee,
  Users,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Institution: GraduationCap,
  "Industry Partner": Building2,
  "Product Ecosystem": Coffee,
  "Student Organization": Users,
};

export default function EvidenceSection() {
  return (
    <section id="evidence" className="section relative py-16 sm:py-20">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Bukti Rekayasa &amp; Dampak Terukur</span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
            What the Work Moved
          </h2>
          <p className="section-desc text-muted text-sm sm:text-base leading-relaxed">
            Metrik nyata dari platform produksi live, pengujian basis data relasional, dan institusi yang mempercayai kemampuan rekayasa saya.
          </p>
        </div>
      </Reveal>

      {/* 1. Trusted By & Collaborations Grid */}
      <Reveal delay={40}>
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-surface/40 border border-line backdrop-blur-xs">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left shrink-0">
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted/70 block">
                Trusted By &amp; Collaborations
              </span>
              <span className="text-xs font-medium text-text/80">
                Institusi, Mitra Industri &amp; Komunitas
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {COLLABORATIONS_DATA.map((collab) => {
                const Icon = CATEGORY_ICONS[collab.category] || ShieldCheck;
                return (
                  <div
                    key={collab.id}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-2/70 border border-line hover:border-text/30 transition-colors"
                    title={`${collab.name} — ${collab.description}`}
                  >
                    <Icon className="w-3.5 h-3.5 text-muted" />
                    <span className="text-xs font-semibold text-text/90">
                      {collab.name}
                    </span>
                    <span className="text-[10px] text-muted font-mono">
                      ({collab.badge})
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      {/* 2. Quantifiable Impact & Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {METRICS_DATA.map((metric, idx) => (
          <Reveal key={metric.id} delay={60 + idx * 40}>
            <div className="group h-full p-6 sm:p-7 rounded-2xl bg-surface border border-line hover:border-text/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                {/* Metric Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-surface-2 text-muted border border-line font-medium">
                    {metric.tag}
                  </span>
                  <TrendingUp className="w-4 h-4 text-emerald-400/80 group-hover:text-emerald-400 transition-colors" />
                </div>

                {/* Big Metric Number */}
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-text">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="text-sm sm:text-base font-mono text-muted font-medium">
                      {metric.suffix}
                    </span>
                  )}
                </div>

                {/* Metric Title & Sublabel */}
                <div className="space-y-1 mb-3">
                  <h3 className="text-sm sm:text-base font-bold text-text group-hover:text-emerald-400 transition-colors">
                    {metric.label}
                  </h3>
                  <div className="text-xs font-mono text-muted/90">
                    {metric.sublabel}
                  </div>
                </div>

                {/* Metric Description */}
                <p className="text-xs text-muted leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {/* Verified Source / Methodology Note */}
              <div className="mt-5 pt-3 border-t border-line/60">
                <div className="flex items-start gap-1.5 text-[11px] text-muted/80 font-mono leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1" />
                  <span className="break-words">{metric.methodology}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

