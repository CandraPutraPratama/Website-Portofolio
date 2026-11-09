"use client";

import React, { useState } from "react";
import { TESTIMONIALS_DATA } from "../data/testimonials";
import Reveal from "./Reveal";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = TESTIMONIALS_DATA.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const current = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="section relative">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5 text-amber-400" />
              <span>Social Proof & Endorsements</span>
            </div>
            <h2 className="section-title">Recommendations & Mentorship</h2>
            <p className="section-desc max-w-2xl">
              Ulasan autentik dari pembimbing industri, rekan kolaborasi PBL PENS,
              dan mitra operasional mengenai etos kerja dan kompetensi rekayasa.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-end">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-xl border border-line bg-surface hover:bg-surface-2 text-muted hover:text-text transition-all active:scale-95"
              aria-label="Rekomendasi sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-3 py-1 font-mono text-xs text-muted">
              {activeIndex + 1} / {total}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-xl border border-line bg-surface hover:bg-surface-2 text-muted hover:text-text transition-all active:scale-95"
              aria-label="Rekomendasi berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Featured Testimonial Card */}
      <Reveal delay={100}>
        <div
          className="relative p-7 sm:p-10 rounded-3xl bg-surface border border-line shadow-xl overflow-hidden transition-all duration-300"
          style={{
            background:
              "linear-gradient(135deg, var(--surface) 0%, rgba(var(--surface-rgb), 0.9) 100%)",
          }}
        >
          {/* Subtle Quote Watermark */}
          <Quote className="absolute right-6 bottom-6 w-32 h-32 text-text/3 pointer-events-none select-none" />

          <div className="relative z-10 flex flex-col justify-between gap-8">
            {/* Quote Body */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Endorsement</span>
                </span>
                <span className="text-xs text-muted font-mono">
                  {current.relationship}
                </span>
              </div>

              <blockquote className="text-base sm:text-xl lg:text-2xl font-normal text-text leading-relaxed tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex flex-wrap gap-2 mt-4">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-surface-2 text-muted border border-line"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-line">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-text text-surface flex items-center justify-center font-bold text-sm font-mono shadow-md">
                  {current.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-bold text-text leading-tight">
                    {current.author}
                  </h4>
                  <p className="text-xs text-muted mt-0.5">
                    {current.role} •{" "}
                    <span className="text-text/80">{current.organization}</span>
                  </p>
                </div>
              </div>

              {/* Progress dots */}
              <div className="hidden sm:flex items-center gap-1.5">
                {TESTIMONIALS_DATA.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeIndex
                        ? "w-6 bg-text"
                        : "w-1.5 bg-line hover:bg-muted"
                    }`}
                    aria-label={`Buka testimoni ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

