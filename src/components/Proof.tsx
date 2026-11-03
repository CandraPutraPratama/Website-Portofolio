"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";
import Reveal from "./Reveal";

/** Proof — the stack as one sentence; one name lit at a time, cycling. */
export default function Proof() {
  const { lang } = useTheme();
  const t = translations[lang].proof;
  const reduce = useReducedMotion();
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setLit((i) => (i + 1) % t.stack.length),
      2000
    );
    return () => clearInterval(id);
  }, [reduce, t.stack.length]);

  return (
    <section aria-label="Tech stack" className="px-5 py-24 md:px-8 md:py-36">
      <Reveal>
        <p className="max-w-6xl text-[clamp(1.5rem,3.4vw,2.25rem)] font-medium leading-[1.3] tracking-tight">
          <span className="text-ink">{t.lead} </span>
          {t.stack.map((name, i) => (
            <span key={name}>
              <span
                className={`transition-colors duration-500 ${
                  i === lit ? "text-ink" : "text-muted"
                }`}
              >
                {name}
              </span>
              {i < t.stack.length - 1 ? (
                <span className="text-muted">, </span>
              ) : (
                <span className="text-ink">.</span>
              )}
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  );
}
