"use client";

import Image from "next/image";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import { translations, EMAIL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from "@/lib/translations";
import Reveal from "./Reveal";

export default function About() {
  const { lang } = useTheme();
  const t = translations[lang].about;

  const socials = [
    { href: GITHUB_URL, label: "GitHub", Icon: FaGithub },
    { href: LINKEDIN_URL, label: "LinkedIn", Icon: FaLinkedin },
    { href: INSTAGRAM_URL, label: "Instagram", Icon: FaInstagram },
    { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail },
  ];

  return (
    <section id="tentang" aria-label="Tentang" className="px-5 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 md:grid-cols-12 md:gap-8">
        {/* Statement + bio */}
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="max-w-[24ch] text-[clamp(1.5rem,1.1rem+2vw,2.25rem)] font-bold leading-[1.18] tracking-tight">
              {t.statement}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-[62ch] text-ink/90">{t.bio1}</p>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 max-w-[62ch] text-ink/90">{t.bio2}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10">
              <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
                {t.focusTitle}
              </p>
              <ul className="mt-4 space-y-2.5">
                {[t.focusItem1, t.focusItem2].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/90">
                    <span aria-hidden className="mt-[9px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Profile card */}
        <div className="md:col-span-5">
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col bg-surface p-6 md:p-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-accent">
                <Image
                  src="/profil-hero.png"
                  alt="Foto formal Candra Putra"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="mt-6">
                <p className="text-xl font-extrabold tracking-tight">{t.cardName}</p>
                <p className="mt-1 text-[15px] text-muted">{t.cardRole}</p>
              </div>
              <dl className="mt-6 space-y-3 text-[15px]">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="shrink-0 text-accent" aria-hidden />
                  <dd className="text-ink/90">{t.cardLocation}</dd>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap size={16} className="shrink-0 text-accent" aria-hidden />
                  <dd className="text-ink/90">
                    {t.cardGpa} · {t.cardSemester}
                  </dd>
                </div>
              </dl>
              <div className="mt-auto flex gap-2 pt-8">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noreferrer"
                    aria-label={label}
                    className="p-2.5 text-ink/70 transition-colors hover:text-accent"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
