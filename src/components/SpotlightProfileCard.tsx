"use client";

import React, { useRef, useState, MouseEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";

interface SpotlightProfileCardProps {
  name?: string;
  role?: string;
  handle?: string;
  status?: string;
  contactText?: string;
  avatarUrl?: string;
  onContactClick?: () => void;
  className?: string;
}

export default function SpotlightProfileCard({
  name = "Candra Putra",
  role = "Junior Web Developer",
  handle = "candraaaptra",
  status = "Siap Magang",
  contactText = "Rekrut Saya",
  avatarUrl = "/profil-hero.png",
  onContactClick,
  className = "",
}: SpotlightProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden rounded-2xl border-2 border-black dark:border-neutral-700 bg-white dark:bg-neutral-900 p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[9px_9px_0px_0px_rgba(255,255,255,0.25)] transition-all duration-300 flex flex-col justify-between ${className}`}
    >
      {/* ── INTERACTIVE SPOTLIGHT OVERLAY (Radial glow follows cursor on hover) ── */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered
            ? `radial-gradient(320px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 75%)`
            : "none",
        }}
        aria-hidden="true"
      />

      {/* ── SUBTLE BORDER SPOTLIGHT (Border illuminates near cursor) ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-blue-500/40 dark:border-blue-400/30"
        style={{
          maskImage: isHovered
            ? `radial-gradient(220px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : "none",
          WebkitMaskImage: isHovered
            ? `radial-gradient(220px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
            : "none",
        }}
        aria-hidden="true"
      />

      {/* ── CARD HEADER: BADGE & ONLINE STATUS ── */}
      <div className="relative z-10 flex items-center justify-between gap-2 border-b border-black/10 dark:border-neutral-800 pb-4">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-[10px] font-black uppercase tracking-widest">
          <Sparkles className="w-3 h-3" />
          <span>PASS ID</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-600 dark:text-emerald-400 text-[11px] font-bold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span>{status}</span>
        </div>
      </div>

      {/* ── CARD BODY: AVATAR & IDENTITY ── */}
      <div className="relative z-10 my-6 flex flex-col items-center text-center">
        {/* Avatar with Neobrutalist frame */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] mb-4 bg-neutral-100 dark:bg-neutral-800 transition-transform duration-300 group-hover:scale-105">
          <Image
            src={avatarUrl}
            alt={name}
            fill
            sizes="120px"
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Candidate Name & Role */}
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black dark:text-white leading-tight">
          {name}
        </h3>
        <p className="text-xs sm:text-sm font-bold text-neutral-600 dark:text-neutral-400 mt-1 uppercase tracking-wide">
          {role}
        </p>

        {/* Handle Badge */}
        <a
          href="https://github.com/CandraPutraPratama"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-neutral-700 text-xs font-mono transition-colors"
        >
          <SiGithub className="w-3.5 h-3.5" />
          <span>@{handle}</span>
        </a>
      </div>

      {/* ── CARD FOOTER: REPUTATION STATS & CTA ── */}
      <div className="relative z-10 space-y-4 pt-4 border-t border-black/10 dark:border-neutral-800">
        <div className="grid grid-cols-3 divide-x divide-black/10 dark:divide-neutral-800 text-center text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400">
          <div>
            <span className="block text-sm font-black text-black dark:text-white">3.76</span>
            <span>IPK PENS</span>
          </div>
          <div>
            <span className="block text-sm font-black text-black dark:text-white">SEM 5</span>
            <span>INFORMATIKA</span>
          </div>
          <div>
            <span className="block text-sm font-black text-black dark:text-white">READY</span>
            <span>MAGANG</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onContactClick}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-black dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 shadow hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span>{contactText}</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
