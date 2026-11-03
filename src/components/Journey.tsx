"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";
import Reveal from "./Reveal";

const photos = [
  "/journey/jf12026.jpg",
  "/journey/jf22026.jpg",
  "/journey/jf312026.png",
  "/journey/jf12025.jpg",
  "/journey/jf22025.jpg",
  "/journey/jf32025.jpg",
  "/journey/jf12024.jpg",
  "/journey/jf22024.jpg",
  "/journey/jf32024.jpg",
];

const years = [
  {
    year: "2026",
    role: "Junior Web & Backend Developer",
    place: "Semester 5",
    desc: "Membangun dan mengoperasikan produk web production (Jasdor) sekaligus mengerjakan backend sistem anggaran (BudgEx) dalam tim.",
    descEn:
      "Building and operating a live production web app (Jasdor) while developing the backend of a budgeting system (BudgEx) in a team.",
    tags: ["Next.js", "ASP.NET Core", "TypeScript"],
  },
  {
    year: "2025",
    role: "Web Development",
    place: "Semester 2/3",
    desc: "Mendalami perancangan sistem web, pengelolaan data, dan logika aplikasi lewat proyek-proyek terstruktur.",
    descEn:
      "Deepened web system design, data management, and application logic through structured projects.",
    tags: ["PHP", "PostgreSQL", "Problem Solving"],
  },
  {
    year: "2024",
    role: "D4 Teknik Informatika",
    place: "PENS Surabaya",
    desc: "Fondasi rekayasa perangkat lunak, pemrograman, basis data, dan analisis kebutuhan sistem.",
    descEn:
      "Foundations of software engineering, programming, databases, and system requirement analysis.",
    tags: ["Software Dev", "Database", "System Analysis"],
  },
];

export default function Journey() {
  const { lang } = useTheme();
  const t = translations[lang].journey;
  const en = lang === "US";

  return (
    <section id="perjalanan" aria-label={t.heading} className="py-24 md:py-32">
      <div className="flex items-baseline gap-4 px-5 md:px-8">
        <Reveal>
          <h2 className="text-[clamp(2rem,1.3rem+3.2vw,4rem)] font-extrabold tracking-tight">
            {t.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <span className="text-xl text-muted">{photos.length}</span>
        </Reveal>
      </div>

      {/* Photo strip */}
      <Reveal delay={0.1}>
        <div
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-[5vw] overflow-x-auto px-5 md:px-8"
          role="list"
          aria-label="Dokumentasi perjalanan"
        >
          {photos.map((src, i) => (
            <div
              key={src}
              role="listitem"
              className="relative aspect-[3/4] w-[52vw] shrink-0 snap-start overflow-hidden bg-surface sm:w-[34vw] md:w-[17vw]"
            >
              <Image
                src={src}
                alt={`Dokumentasi perjalanan ${i + 1}`}
                fill
                sizes="(max-width: 768px) 52vw, 17vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Reveal>

      {/* Year blocks */}
      <div className="mt-20 space-y-14 px-5 md:mt-24 md:px-8">
        {years.map((y) => (
          <div key={y.year} className="grid gap-4 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <p
                aria-hidden
                className="text-monument text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-none tracking-tight"
              >
                {y.year}
              </p>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal delay={0.06}>
                <p className="text-xl font-bold tracking-tight">{y.role}</p>
                <p className="mt-1 text-[15px] text-muted">{y.place}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-4 max-w-[62ch] text-ink/90">{en ? y.descEn : y.desc}</p>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-4 text-sm text-muted">{y.tags.join(" · ")}</p>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
