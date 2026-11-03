"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { CARDS } from "../data/skills";
import Reveal from "./Reveal";
import TypewriterTitle from "./TypewriterTitle";
import { ArrowDownRight, FileText, CheckCircle2 } from "lucide-react";

// Fixed chaotic rotation & offset so each card retains a realistic physical paper look
const CARD_SCATTER = [
  { rot: -4.5, tx: -6, ty: 2 },
  { rot: 3.2, tx: 5, ty: -3 },
  { rot: -2.8, tx: -4, ty: 4 },
  { rot: 4.8, tx: 6, ty: -2 },
  { rot: -3.6, tx: -5, ty: 3 },
  { rot: 2.5, tx: 4, ty: -4 },
  { rot: -5.0, tx: -7, ty: 2 },
  { rot: 3.8, tx: 5, ty: -3 },
];

export default function Hero() {
  const [cardIndex, setCardIndex] = useState(0);
  const [cardPaused, setCardPaused] = useState(false);

  // Auto-cycle cards every 4 seconds unless hovered
  useEffect(() => {
    if (cardPaused) return;
    const interval = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % CARDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cardPaused]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center items-center px-5 pt-28 pb-16 overflow-hidden max-w-5xl mx-auto w-full"
    >
      <div className="w-full flex flex-col items-start text-left">
        {/* Availability Badge */}
        <Reveal delay={100}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-surface/80 backdrop-blur-sm text-xs font-mono text-muted mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Internship &bull; Surabaya, Indonesia</span>
          </div>
        </Reveal>

        {/* Main Hero Header & Interactive Card Deck */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-8">
          <div className="lg:col-span-8 flex flex-col items-start">
            <Reveal delay={200}>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-text leading-[1.08] mb-4">
                CANDRA PUTRA
              </h1>
            </Reveal>

            <TypewriterTitle
              text="Junior Web & Backend Developer"
              className="text-lg sm:text-2xl font-mono text-muted mb-5 tracking-tight"
            />

            <Reveal delay={300}>
              <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8">
                Mahasiswa semester 5 D4 Teknik Informatika PENS (IPK 3.76).
                Membangun software yang dipakai orang betulan:{" "}
                <span className="text-text font-semibold">Jasdor</span> (PWA
                live production, 3 brand, 2.000+ outlet) dan backend{" "}
                <span className="text-text font-semibold">BudgEx</span> (ASP.NET
                Core + PostgreSQL).
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={400}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-text text-bg font-mono text-xs font-semibold hover:opacity-90 transition-all shadow-md"
                >
                  Lihat Proyek <ArrowDownRight className="w-4 h-4" />
                </Link>

                <a
                  href="mailto:candraputrap46@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line bg-surface hover:bg-surface-2 font-mono text-xs font-medium text-text transition-all"
                >
                  <FileText className="w-4 h-4 text-muted" /> Kontak Langsung
                </a>
              </div>
            </Reveal>
          </div>

          {/* 3D Interactive Traits Deck */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center w-full">
            <Reveal delay={350}>
              <div className="flex flex-col items-center lg:items-end">
                <div
                  className="card-stack-container"
                  onClick={() =>
                    setCardIndex((prev) => (prev + 1) % CARDS.length)
                  }
                  onMouseEnter={() => setCardPaused(true)}
                  onMouseLeave={() => setCardPaused(false)}
                  title="Klik untuk flip kartu"
                >
                  {CARDS.map((trait, i) => {
                    const offset =
                      (i - cardIndex + CARDS.length) % CARDS.length;
                    // Only render the front 3 cards and the exiting one
                    if (offset > 2 && offset !== CARDS.length - 1) return null;

                    const isFront = offset === 0;
                    const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
                    const sc = isFront ? 1 : 1 - offset * 0.05;
                    const ty = isFront
                      ? scatter.ty
                      : scatter.ty - offset * 12;
                    const tx = isFront
                      ? scatter.tx
                      : scatter.tx + offset * 6;
                    const rot = isFront
                      ? scatter.rot
                      : scatter.rot + offset * 2;
                    const op = isFront ? 1 : 0.85 - offset * 0.2;

                    return (
                      <div
                        key={trait}
                        className={`card-stack-card ${
                          isFront ? "card-stack-card-front" : ""
                        }`}
                        style={{
                          "--sc": sc,
                          "--tx": `${tx}px`,
                          "--ty": `${ty}px`,
                          "--rot": `${rot}deg`,
                          "--op": op,
                          zIndex: CARDS.length - offset,
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="card-stack-label">
                            CORE STRENGTH #{i + 1}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        </div>
                        <div className="card-stack-value my-auto">{trait}</div>
                        <div className="text-[10px] font-mono text-muted text-right">
                          Klik untuk ganti &rarr;
                        </div>
                      </div>
                    );
                  })}
                </div>
                <span className="text-[11px] font-mono text-muted mt-3">
                  (Klik tumpukan kartu untuk flip)
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quick Highlights Strip */}
        <Reveal delay={500} className="w-full">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-line">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted">AKADEMIK</span>
              <span className="font-display font-bold text-base text-text">
                IPK 3.76 / 4.00
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted">KAMPUS</span>
              <span className="font-display font-bold text-base text-text">
                PENS Surabaya
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted">JASDOR PWA</span>
              <span className="font-display font-bold text-base text-emerald-600 dark:text-emerald-400">
                2.000+ Outlet
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs text-muted">STATUS</span>
              <span className="font-display font-bold text-base text-text">
                Siap Magang Smt 6
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
