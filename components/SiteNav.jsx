"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const LINKS = [
  ["proyek", "Proyek"],
  ["keahlian", "Keahlian"],
  ["tentang", "Tentang"],
  ["perjalanan", "Perjalanan"],
  ["kontak", "Kontak"],
];

export default function SiteNav() {
  const { dark, toggleTheme } = useTheme();
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = LINKS.map(([id]) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`r-nav${scrolled ? " is-scrolled" : ""}`}>
      <a className="r-nav-brand" href="#main" aria-label="Candra Putra Pratama, ke atas">
        <span className="r-nav-mark" aria-hidden="true" />
        <span className="r-nav-name">Candra Putra</span>
      </a>

      <nav id="menu-bagian" className={`r-nav-links${open ? " is-open" : ""}`} aria-label="Bagian halaman">
        <ul>
          {LINKS.map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="r-nav-actions">
        <button
          type="button"
          className="r-nav-btn r-nav-icon"
          onClick={toggleTheme}
          aria-label={dark ? "Ganti ke tema terang" : "Ganti ke tema gelap"}
        >
          {dark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
        </button>
        <a className="r-nav-cta" href="#kontak">
          Hubungi
        </a>
        <button
          type="button"
          className="r-nav-btn r-nav-icon r-nav-menu"
          aria-expanded={open}
          aria-controls="menu-bagian"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
