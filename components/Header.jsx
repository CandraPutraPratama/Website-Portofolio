"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "What I Can Do", href: "/#what-i-can-do" },
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#work" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 py-3 pointer-events-none">
      <div
        className={`nav-bar pointer-events-auto flex items-center justify-between w-full max-w-5xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "scrolled" : "bg-transparent"
        }`}
      >
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-black tracking-tight font-display hover:opacity-80 transition-opacity"
        >
          candra<span className="text-emerald-500">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-mono">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-text transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-text text-bg hover:opacity-90 transition-all font-mono tracking-wide"
          >
            Rekrut Saya <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-line bg-surface hover:bg-surface-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-text" />
            ) : (
              <Menu className="w-4 h-4 text-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed inset-x-4 top-20 bg-surface/95 backdrop-blur-xl border border-line rounded-2xl p-5 shadow-2xl flex flex-col gap-4 font-mono text-sm animate-in fade-in slide-in-from-top-4 duration-200">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-2.5 rounded-xl bg-text text-bg font-semibold font-mono text-xs uppercase"
          >
            Rekrut Saya &rarr;
          </Link>
        </div>
      )}
    </header>
  );
}
