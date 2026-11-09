"use client";

import React from "react";
import { METRICS_DATA } from "../data/metrics";
import Reveal from "./Reveal";
import { TrendingUp, Layers, CheckCircle, Database, Award, Activity } from "lucide-react";

const ICONS = [Layers, Award, Activity, Database, CheckCircle, TrendingUp];

export default function ImpactMetrics() {
  return (
    <section id="metrics" className="section relative overflow-hidden">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>What the Work Moved</span>
            </div>
            <h2 className="section-title">Quantifiable Impact & Metrics</h2>
            <p className="section-desc max-w-2xl">
              Tolok ukur kuantitatif dari keandalan arsitektur, optimasi database,
              dan eksekusi platform produksi yang telah teruji di dunia nyata.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Grid of Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {METRICS_DATA.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <Reveal key={item.id} delay={index * 50}>
              <div
                className="group relative p-6 rounded-2xl bg-surface border border-line hover:border-text/30 transition-all duration-300 flex flex-col justify-between h-full hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(180deg, var(--surface) 0%, rgba(var(--surface-rgb), 0.7) 100%)",
                }}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted px-2.5 py-1 rounded-md bg-surface-2 border border-line">
                    {item.tag}
                  </span>
                  <div className="p-2 rounded-xl bg-surface-2 text-muted group-hover:text-text group-hover:bg-text/10 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Big Number Display */}
                <div className="my-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text font-mono tabular-nums">
                      {item.value}
                    </span>
                    {item.suffix && (
                      <span className="text-sm sm:text-base font-semibold text-muted">
                        {item.suffix}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-text mt-1.5 group-hover:text-emerald-400 transition-colors">
                    {item.label}
                  </h3>
                  <div className="text-xs font-medium text-muted/80 mt-0.5">
                    {item.sublabel}
                  </div>
                </div>

                {/* Description & Footer Trend */}
                <div className="pt-4 mt-2 border-t border-line/60">
                  <p className="text-xs text-muted leading-relaxed">
                    {item.description}
                  </p>
                  {item.trend && (
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-medium">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      <span>{item.trend}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

