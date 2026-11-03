"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";
import Reveal from "./Reveal";

export default function Hero() {
  const { lang } = useTheme();
  const t = translations[lang].hero;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yName = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Candra Putra — hero"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Label */}
      <div className="relative z-20 pt-24 text-center md:pt-28">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 text-[15px] font-medium text-ink/90 md:text-base">
            <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
            {t.helloLabel}
          </p>
        </Reveal>
      </div>

      {/* Monument + portrait */}
      <div className="relative flex-1">
        <motion.h1
          {...anim(0.1)}
          style={reduce ? undefined : { y: yName }}
          className="text-monument absolute inset-x-0 top-[2%] z-0 whitespace-nowrap text-center text-[clamp(3.5rem,17vw,20rem)] font-extrabold leading-[0.85] tracking-[-0.04em]"
        >
          CANDRA PUTRA
        </motion.h1>

        <motion.div
          {...anim(0.25)}
          style={reduce ? undefined : { y: yPhoto }}
          className="absolute inset-x-0 bottom-0 z-10 flex justify-center"
        >
          <div className="relative h-[50svh] w-full max-w-[560px] md:h-[56svh]">
            <Image
              src="/profil-hero.png"
              alt="Foto formal Candra Putra"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Floating proof chips */}
        <motion.div
          {...anim(0.45)}
          className="absolute left-[5%] top-[36%] z-20 hidden sm:block"
        >
          <span className="rounded-full border border-ink/20 bg-ground px-4 py-2 text-[13px] font-bold tracking-wide">
            {t.gpaChip}
          </span>
        </motion.div>
        <motion.div
          {...anim(0.55)}
          className="absolute right-[5%] top-[52%] z-20 hidden sm:block"
        >
          <span className="rounded-full border border-accent/70 bg-ground px-4 py-2 text-[13px] font-bold tracking-wide text-accent">
            {t.jasdorChip}
          </span>
        </motion.div>
      </div>

      {/* Vertical scroll cue */}
      <div className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 md:right-8 lg:block">
        <span className="text-xs font-medium tracking-[0.35em] text-muted [writing-mode:vertical-rl]">
          {t.scroll}
        </span>
      </div>

      {/* Bottom row: support + actions */}
      <div className="relative z-20 flex flex-col gap-6 px-5 pb-8 md:flex-row md:items-end md:justify-between md:px-8 md:pb-10">
        <motion.p
          {...anim(0.65)}
          className="max-w-[32ch] text-[15px] leading-relaxed text-ink/85 md:text-base"
        >
          {t.support}{" "}
          <span className="text-muted">{t.availability}</span>
        </motion.p>
        <motion.div {...anim(0.75)} className="flex flex-wrap gap-3">
          <a
            href="/cv.pdf"
            download
            className="rounded-full bg-accent px-6 py-3 text-[15px] font-bold text-accent-ink transition-transform hover:scale-105 active:scale-95"
          >
            {t.downloadCv}
          </a>
          <a
            href="#proyek"
            className="rounded-full border border-ink/25 px-6 py-3 text-[15px] font-bold transition-colors hover:border-accent hover:text-accent"
          >
            {t.viewProjects}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
