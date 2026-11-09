"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, FileDown, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-line bg-surface/50 backdrop-blur-md py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Brand & Copyright */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <div className="w-6 h-6 rounded-md bg-text text-surface font-bold text-xs flex items-center justify-center font-mono">
              C
            </div>
            <span className="font-semibold text-sm text-text">
              Candra Putra Pratama
            </span>
            <span className="text-xs text-muted/60">•</span>
            <span className="text-xs text-muted">Fullstack Web Developer</span>
          </div>
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Candra Putra Pratama. All rights reserved.
          </p>
        </div>

        {/* Quick Links & Socials */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-medium text-muted">
          <a
            href="mailto:candraputrap46@gmail.com"
            className="flex items-center gap-1.5 hover:text-text transition-colors"
            title="Kirim Email ke Candra"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/CandraPutraPratama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text transition-colors"
            title="Profil GitHub"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/candra-putra-pratama"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text transition-colors"
            title="Profil LinkedIn"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-text transition-colors"
            title="Unduh Resume PDF"
          >
            <FileDown size={14} />
            <span>Resume</span>
          </a>
          <Link
            href="/work"
            className="hover:text-text transition-colors font-mono"
            title="Lihat Semua Proyek"
          >
            Arsip Proyek →
          </Link>
          <button
            type="button"
            onClick={scrollToTop}
            className="p-1.5 rounded-lg border border-line bg-surface-2 text-muted hover:text-text transition-colors"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

