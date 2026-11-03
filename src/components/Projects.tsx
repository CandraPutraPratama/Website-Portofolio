"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";
import Reveal from "./Reveal";

interface Project {
  name: string;
  href: string;
  external: boolean;
  img: string;
  live?: boolean;
  category: string;
  categoryEn: string;
  stack: string;
  year: string;
}

const projects: Project[] = [
  {
    name: "Jasdor",
    href: "https://jasdor.cimagroup.my.id/",
    external: true,
    img: "/projects/jasdor.svg",
    live: true,
    category: "Live Production • PWA",
    categoryEn: "Live Production • PWA",
    stack: "Next.js • TypeScript",
    year: "2026",
  },
  {
    name: "BudgEx",
    href: "#arsip",
    external: false,
    img: "/projects/budgex.svg",
    category: "Backend API • Proyek Tim",
    categoryEn: "Backend API • Team Project",
    stack: "ASP.NET Core • PostgreSQL",
    year: "2025–26",
  },
  {
    name: "Portofolio",
    href: "https://website-portofolio-lac-pi.vercel.app",
    external: true,
    img: "/profil-hero.png",
    category: "Aplikasi Web",
    categoryEn: "Web App",
    stack: "Next.js 16 • React 19",
    year: "2026",
  },
  {
    name: "Data Pegawai",
    href: "https://github.com/CandraPutraPratama/sistem-manajemen-data-pegawai",
    external: true,
    img: "/projects/project1.png",
    category: "Full-Stack",
    categoryEn: "Full-Stack",
    stack: "PHP • PostgreSQL",
    year: "2025",
  },
  {
    name: "Inventaris",
    href: "https://github.com/CandraPutraPratama/sistem-inventaris-barang",
    external: true,
    img: "/projects/project2.png",
    category: "Full-Stack",
    categoryEn: "Full-Stack",
    stack: "PHP • PostgreSQL",
    year: "2025",
  },
  {
    name: "Kasir",
    href: "https://github.com/CandraPutraPratama",
    external: true,
    img: "/projects/project3.png",
    category: "Full-Stack",
    categoryEn: "Full-Stack",
    stack: "PHP • PostgreSQL",
    year: "2025",
  },
  {
    name: "Keuangan Pribadi",
    href: "https://github.com/CandraPutraPratama",
    external: true,
    img: "/projects/project4.png",
    category: "Full-Stack",
    categoryEn: "Full-Stack",
    stack: "PHP • PostgreSQL",
    year: "2025",
  },
  {
    name: "RoomBook",
    href: "https://github.com/CandraPutraPratama",
    external: true,
    img: "/projects/projek51.png",
    category: "Full-Stack",
    categoryEn: "Full-Stack",
    stack: "PHP • PostgreSQL",
    year: "2025",
  },
];

export default function Projects() {
  const { lang } = useTheme();
  const t = translations[lang];
  const en = lang === "US";

  return (
    <section id="proyek" aria-label={t.nav.projects}>
      {/* ---- Selected work: names as one paragraph ---- */}
      <div className="px-5 py-24 md:px-8 md:py-32">
        <h2 className="sr-only">{t.nav.projects}</h2>
        <Reveal>
          <p className="max-w-7xl text-[clamp(1.4rem,3.2vw,2.1rem)] font-medium leading-[1.4] tracking-tight">
            <span className="text-ink">{t.work.lead} </span>
            {projects.map((p, i) => (
              <span key={p.name}>
                <a
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noreferrer" : undefined}
                  className="group text-muted transition-colors duration-300 hover:text-ink"
                >
                  {p.name}
                  <span
                    aria-hidden
                    className="mx-[0.18em] inline-block h-[0.72em] w-[1.12em] origin-left overflow-hidden align-baseline transition-transform duration-300 group-hover:scale-[1.6]"
                  >
                    <Image
                      src={p.img}
                      alt=""
                      width={90}
                      height={58}
                      className="h-full w-full object-cover"
                    />
                  </span>
                  {p.live && (
                    <span className="ml-1 inline-block -translate-y-[0.4em] rounded-full bg-accent px-2 py-[0.15em] align-baseline text-[0.3em] font-bold tracking-[0.08em] text-accent-ink">
                      {t.work.liveTag}
                    </span>
                  )}
                </a>
                {i < projects.length - 1 && <span className="text-muted">, </span>}
              </span>
            ))}
            <span className="text-ink">.</span>
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 text-[15px] text-muted">{t.work.countLabel}</p>
        </Reveal>
      </div>

      {/* ---- Archive: line-up at one type size ---- */}
      <div id="arsip" className="bg-field1 px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
            {t.archive.heading}
          </p>
        </Reveal>
        <div className="mt-8">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={Math.min(i * 0.04, 0.2)}>
              <a
                href={p.href}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noreferrer" : undefined}
                className="group block py-4 md:grid md:grid-cols-12 md:items-baseline md:gap-x-4 md:py-5"
              >
                <span className="block text-[1.35rem] font-medium tracking-tight transition-colors group-hover:text-accent md:col-span-5 md:text-[clamp(1.1rem,2.1vw,1.55rem)]">
                  {p.name}
                  {p.live && (
                    <span className="ml-2 -translate-y-[0.3em] rounded-full bg-accent px-2 py-[0.15em] align-baseline text-[0.42em] font-bold tracking-[0.08em] text-accent-ink">
                      {t.work.liveTag}
                    </span>
                  )}
                </span>
                <span className="mt-1 block text-sm text-muted md:hidden">
                  {en ? p.categoryEn : p.category} · {p.stack} · {p.year}
                </span>
                <span className="hidden text-muted md:col-span-3 md:block md:text-[clamp(1.1rem,2.1vw,1.55rem)]">
                  {en ? p.categoryEn : p.category}
                </span>
                <span className="hidden tabular-nums text-muted md:col-span-1 md:block md:text-right md:text-[clamp(1.1rem,2.1vw,1.55rem)]">
                  {p.year}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
