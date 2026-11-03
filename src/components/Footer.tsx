"use client";

import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useTheme();
  const t = translations[lang].footer;

  return (
    <footer aria-label="Footer">
      {/* The name returns at full width, inverse colours */}
      <div className="overflow-hidden bg-accent py-5 text-accent-ink md:py-8">
        <p
          aria-hidden
          className="whitespace-nowrap text-center text-[13.5vw] font-extrabold leading-[0.9] tracking-[-0.04em]"
        >
          CANDRA PUTRA
        </p>
      </div>
      <div className="flex flex-col gap-2 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-8">
        <p>© 2026 Candra Putra · {t.rights}</p>
        <p>{t.builtWith}</p>
      </div>
    </footer>
  );
}
