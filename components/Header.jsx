"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUp, ArrowUpRight, FileDown, Search } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";

export default function Header({ alwaysShowBackToTop = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setShowBackToTop(alwaysShowBackToTop || window.scrollY > 350);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [alwaysShowBackToTop]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickAway = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`nav-bar ${scrolled ? "scrolled" : ""} ${
          menuOpen ? "nav-bar--expanded" : ""
        }`}
      >
        <div className="nav-mobile-header">
          <a href="/" className="nav-left flex items-center gap-2.5">
            <div className="nav-logo">C</div>
            <div className="nav-brand">Candra Putra</div>
          </a>
          <button
            onClick={() => setSearchOpen(true)}
            className="md:hidden p-2 rounded-full border border-line bg-surface-2 text-muted hover:text-text transition-colors"
            aria-label="Cari Cepat (Ctrl+K)"
            style={{ position: "relative", zIndex: 210, marginRight: 4 }}
          >
            <Search size={15} />
          </button>
          <ThemeToggle
            className="md:hidden nav-theme-toggle"
            style={{ position: "relative", zIndex: 210 }}
          />
          <button
            className="md:hidden nav-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              position: "relative",
              zIndex: 210,
            }}
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            <div className="nav-mobile-menu-inner">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="nav-link flex items-center justify-between text-left"
              >
                <span className="flex items-center gap-2">
                  <Search size={14} />
                  <span>Pencarian Cepat</span>
                </span>
                <kbd className="px-1.5 py-0.5 text-xs font-mono bg-surface-2 border border-line rounded">⌘K</kbd>
              </button>
              <a href="/#evidence" className="nav-link" onClick={() => setMenuOpen(false)}>
                Bukti & Dampak
              </a>
              <a href="/#work" className="nav-link" onClick={() => setMenuOpen(false)}>
                Proyek Pilihan
              </a>
              <a
                href="/#skills"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Skill Inti
              </a>
              <a
                href="/#experience"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Pengalaman & Sertifikasi
              </a>
              <a
                href="/work"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Arsip Proyek Lengkap
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link nav-link--resume"
                onClick={() => setMenuOpen(false)}
              >
                <FileDown size={14} style={{ display: "inline-block", marginRight: 6, verticalAlign: "middle" }} />
                <span>Resume (PDF)</span>
              </a>
              <a
                href="/#contact"
                className="nav-cta nav-cta--mobile"
                onClick={() => setMenuOpen(false)}
              >
                <span>Hubungi Saya</span>
                <ArrowUpRight size={14} className="nav-cta-icon" />
              </a>
            </div>
          </div>
        )}

        <div className="nav-center hidden md:flex items-center gap-6">
          <a href="/#evidence" className="nav-link">
            Bukti
          </a>
          <a href="/#work" className="nav-link">
            Proyek
          </a>
          <a href="/#skills" className="nav-link">
            Skill
          </a>
          <a href="/#experience" className="nav-link">
            Pengalaman
          </a>
        </div>

        <div className="nav-right hidden md:flex items-center gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="nav-search-btn inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-line bg-surface-2/60 text-muted hover:text-text hover:border-text/30 transition-all text-xs font-mono"
            title="Cari proyek, stack, prestasi... (Ctrl+K)"
            aria-label="Buka pencarian cepat"
          >
            <Search size={13} />
            <span className="hidden xl:inline text-xs">Cari</span>
            <kbd className="px-1.5 py-0.5 text-xs font-mono bg-surface border border-line rounded text-muted">
              ⌘K
            </kbd>
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn hidden md:inline-flex"
            title="Download CV / Resume (PDF)"
          >
            <FileDown size={13} className="nav-resume-icon" />
            <span>Resume</span>
          </a>
          <ThemeToggle
            className="nav-theme-toggle hidden md:inline-flex"
          />
          <a href="/#contact" className="nav-cta hidden md:inline-flex">
            <span>Hubungi Saya</span>
            <ArrowUpRight size={14} className="nav-cta-icon" />
          </a>
        </div>
      </nav>

      <CommandPalette
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

      {showBackToTop && !menuOpen && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
