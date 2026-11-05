"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "", style = {} }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      className={`relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:bg-surface-2 border border-line ${className}`}
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      style={style}
    >
      <div className={`transition-transform duration-500 ease-in-out ${dark ? "rotate-180 scale-100" : "rotate-0 scale-100"}`}>
        {dark ? (
          <Sun className="w-4 h-4 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 text-zinc-700" />
        )}
      </div>
    </button>
  );
}
