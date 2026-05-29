"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// ============================================================
// THEME CONTEXT
// Menyimpan state dark mode dan language secara global
// sehingga bisa diakses dari semua komponen (Navbar, dll)
// ============================================================
interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
  lang: "US" | "ID";
  toggleLang: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleDark: () => {},
  lang: "ID",
  toggleLang: () => {},
});

// Hook untuk menggunakan ThemeContext di komponen manapun
export const useTheme = () => useContext(ThemeContext);

// ============================================================
// THEME PROVIDER COMPONENT
// Bungkus seluruh layout dengan ini agar dark mode berfungsi
// ============================================================
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<"US" | "ID">("ID");

  // Cek preferensi tema dan bahasa dari localStorage saat pertama load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
    const savedLang = localStorage.getItem("lang") as "US" | "ID";
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleDark = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === "US" ? "ID" : "US";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, lang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
};
