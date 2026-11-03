"use client";

import React from "react";
import Reveal from "./Reveal";
import { WHAT_I_CAN_DO } from "../data/skills";
import { Code2, Server, Award, Sparkles, Check } from "lucide-react";

export default function WhatICanDo() {
  return (
    <section id="what-i-can-do" className="py-24 px-5 max-w-5xl mx-auto w-full">
      <Reveal>
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            // KEMAMPUAN TEKNIS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-text">
            What I Can Do
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
            Keahlian praktis yang telah teruji lewat sistem produksi nyata dan
            rekayasa backend berstandar industri.
          </p>
        </div>
      </Reveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Large Bento Card */}
        <div className="md:col-span-12 lg:col-span-8 p-7 rounded-2xl bg-surface border border-line flex flex-col justify-between shadow-sm hover:border-text/20 transition-all duration-300">
          <Reveal delay={100}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-surface-2 border border-line text-text inline-flex">
                  <Code2 className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs text-muted uppercase">
                  Core Focus
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-text mb-3">
                {WHAT_I_CAN_DO[0].title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {WHAT_I_CAN_DO[0].description}
              </p>
            </div>
            <div>
              <div className="text-xs font-mono text-muted mb-3 uppercase tracking-wider">
                Tech Stack & Tools:
              </div>
              <div className="flex flex-wrap gap-2">
                {WHAT_I_CAN_DO[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-surface-2 border border-line font-mono text-xs text-text"
                  >
                    <Check className="w-3 h-3 text-emerald-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Medium Bento Card 1: Production Highlights */}
        <div className="md:col-span-6 lg:col-span-4 p-7 rounded-2xl bg-surface border border-line flex flex-col justify-between shadow-sm hover:border-text/20 transition-all duration-300">
          <Reveal delay={200}>
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-2.5 rounded-xl bg-surface-2 border border-line text-emerald-500 inline-flex">
                  <Server className="w-5 h-5" />
                </span>
                <span className="font-mono text-xs text-emerald-500 font-semibold uppercase">
                  Live Impact
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-text mb-2">
                {WHAT_I_CAN_DO[1].title}
              </h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed mb-6">
                {WHAT_I_CAN_DO[1].description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {WHAT_I_CAN_DO[1].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-surface-2 border border-line font-mono text-[11px] text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Medium Bento Card 2: Academic Excellence */}
        <div className="md:col-span-6 lg:col-span-12 p-7 rounded-2xl bg-surface border border-line flex flex-col md:flex-row md:items-center justify-between shadow-sm hover:border-text/20 transition-all duration-300 gap-6">
          <Reveal delay={300} className="w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-2 rounded-lg bg-surface-2 border border-line text-amber-500 inline-flex">
                    <Award className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-xs text-muted uppercase">
                    PENS Surabaya &bull; Semester 5
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold font-display text-text mb-2">
                  {WHAT_I_CAN_DO[2].title}
                </h3>
                <p className="text-muted text-xs sm:text-sm leading-relaxed">
                  {WHAT_I_CAN_DO[2].description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end">
                {WHAT_I_CAN_DO[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-2 border border-line font-mono text-xs font-semibold text-text"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
