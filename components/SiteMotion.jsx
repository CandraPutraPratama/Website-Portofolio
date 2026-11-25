"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Pause, Play } from "lucide-react";

/**
 * Motion layer for the home page.
 * - scroll reveal for [data-reveal] (each element animates once)
 * - timeline progress line (--prog on .r-journey)
 * - a pause control for the looping animations (marquee, scroll hint)
 * Everything is skipped under prefers-reduced-motion, and without JS the
 * content simply stays visible (the hidden states only exist under html.js).
 */
export default function SiteMotion() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [host, setHost] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const root = document.querySelector(".r-root");
    if (!root) return;
    setHost(root.querySelector(".r-hero-stage"));

    const journey = root.querySelector(".r-journey");

    if (mq.matches) {
      root.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-in"));
      journey && journey.style.setProperty("--prog", "1");
      return;
    }

    let alive = true;

    // One position-based pass, run on mount, after layout settles, on scroll and
    // on resize. No IntersectionObserver: it never delivered a callback for
    // direct links to a section (#tentang), which left the section invisible.
    const sweep = () => {
      if (!alive) return;
      const h = window.innerHeight;
      root.querySelectorAll("[data-reveal]:not(.is-in)").forEach((el) => {
        if (el.getBoundingClientRect().top < h * 0.94) el.classList.add("is-in");
      });
      if (journey) {
        const r = journey.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (h * 0.65 - r.top) / r.height));
        journey.style.setProperty("--prog", p.toFixed(3));
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        sweep();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    sweep();
    const timers = [150, 600, 1500].map((ms) => setTimeout(sweep, ms));

    return () => {
      alive = false;
      timers.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(".r-root");
    if (root) root.classList.toggle("is-paused", paused);
  }, [paused]);

  if (reduced || !host) return null;

  return createPortal(
    <button
      type="button"
      className="r-pause"
      aria-pressed={paused}
      onClick={() => setPaused((v) => !v)}
    >
      {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      <span>{paused ? "Putar animasi" : "Jeda animasi"}</span>
    </button>,
    host,
  );
}
