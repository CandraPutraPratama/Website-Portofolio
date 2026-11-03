"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [clipStyle, setClipStyle] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (
        stored === "dark" ||
        (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setDark(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const applyTheme = (next) => {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {}
  };

  const toggleTheme = (e) => {
    if (animating) return;
    const next = !dark;

    let x = window.innerWidth / 2;
    let y = 0;
    if (e && e.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      x = rect.left + rect.width / 2;
      y = rect.top + rect.height / 2;
    }

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme(next);
      return;
    }

    // Native View Transitions API
    if (typeof document !== "undefined" && document.startViewTransition) {
      document.documentElement.style.setProperty("--vt-x", `${x}px`);
      document.documentElement.style.setProperty("--vt-y", `${y}px`);
      document.documentElement.style.setProperty("--vt-r", `${maxRadius}px`);
      document.documentElement.classList.add("vt-disable-anim", "vt-wipe-active");

      const transition = document.startViewTransition(() => {
        flushSync(() => applyTheme(next));
      });

      transition.finished
        .catch(() => {})
        .finally(() => {
          document.documentElement.classList.remove(
            "vt-disable-anim",
            "vt-wipe-active"
          );
        });
      return;
    }

    // Fallback animation for browsers without startViewTransition
    setAnimating(true);
    const targetBg = next ? "#0f1115" : "#d9dadd";
    setClipStyle({
      position: "fixed",
      inset: 0,
      zIndex: 9999,
      pointerEvents: "none",
      background: targetBg,
      clipPath: `circle(0px at ${x}px ${y}px)`,
      transition: `clip-path 0.5s cubic-bezier(0.4, 0, 0.2, 1)`,
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setClipStyle((prev) => ({
          ...prev,
          clipPath: `circle(${maxRadius}px at ${x}px ${y}px)`,
        }));
      });
    });

    setTimeout(() => {
      applyTheme(next);
      setTimeout(() => {
        setClipStyle({});
        setAnimating(false);
      }, 50);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
      {animating && (
        <div
          className="theme-transition-circle"
          style={clipStyle}
          aria-hidden="true"
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return {
      dark: false,
      toggleTheme: () => {},
    };
  }
  return ctx;
}
