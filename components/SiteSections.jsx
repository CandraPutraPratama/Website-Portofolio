import React from "react";
import {
  Briefcase,
  Code2,
  Database,
  GraduationCap,
  MapPin,
  Server,
} from "lucide-react";
import { PROJECTS } from "../data/projects";
import PhotoFolder from "./PhotoFolder";

const BUDGEX_PREFIX = "BudgEx";

const TOOLS = [
  ["Next.js", "/images/logos/tech/nextjs.svg"],
  ["TypeScript", "/images/logos/tech/typescript.svg"],
  ["React", "/images/logos/tech/react.svg"],
  ["Tailwind CSS", "/images/logos/tech/tailwindcss.svg"],
  ["ASP.NET Core", "/images/logos/tech/dotnetcore.svg"],
  ["C#", "/images/logos/tech/csharp.svg"],
  ["PHP", "/images/logos/tech/php.svg"],
  ["Laravel", "/images/logos/tech/laravel.svg"],
  ["PostgreSQL", "/images/logos/tech/postgresql.svg"],
  ["HTML", "/images/logos/tech/html5.svg"],
  ["CSS", "/images/logos/tech/css3.svg"],
  ["JavaScript", "/images/logos/tech/javascript.svg"],
  ["Git", "/images/logos/tech/git.svg"],
  ["Docker", "/images/logos/tech/docker.svg"],
  ["Postman", "/images/logos/tech/postman.svg"],
];

const SKILL_GROUPS = [
  {
    n: "01",
    title: "Backend dan basis data",
    text: "Merancang skema relasional, alur persetujuan, dan API yang menjaga data tetap konsisten.",
    tags: [
      "ASP.NET Core",
      "C#",
      "PHP",
      "Laravel (dasar)",
      "REST API",
      "PostgreSQL",
      "Supabase",
      "Skema relasional",
      "State machine",
    ],
  },
  {
    n: "02",
    title: "Frontend dan deployment",
    text: "Membangun antarmuka responsif dan mengirimnya ke produksi.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "Cloudflare Workers",
      "Vercel",
      "Git dan GitHub",
      "Postman",
      "Docker (dasar)",
    ],
  },
];

const BUDGEX_STEPS = [
  ["Pengajuan", "dari unit kerja"],
  ["Validasi plafon", "batas anggaran tahunan"],
  ["Otorisasi bertingkat", "oleh beberapa peran"],
  ["Catatan audit", "setiap perubahan status"],
];

const STATS = [
  ["Pesanan Jasdor", "1.600+", { count: 1600, suffix: "+" }],
  ["IPK", "3,76", { count: 3.76, decimals: 2 }],
];

const photo = (n, year, file) => ({
  src: `/images/journey/${file}`,
  alt: `Foto dokumentasi ${year}, ${n}`,
});

const JOURNEY = [
  {
    year: "2026",
    kind: "Proyek mandiri",
    title: "Lead developer, Jasdor Kopi Cima",
    Icon: Code2,
    where: "Live di jasdor.cimagroup.my.id",
    text: "Merancang dan menjalankan aplikasi jasa order kopi sampai menerima lebih dari 1.600 pesanan. Backend di Cloudflare Workers dengan Supabase, panel admin, notifikasi Telegram, dan lebih dari 600 test otomatis.",
    tags: ["Next.js", "Supabase", "Cloudflare Workers", "QRIS"],
    photos: [
      photo(1, 2026, "jf12026.jpg"),
      photo(2, 2026, "jf22026.jpg"),
      photo(3, 2026, "jf312026.png"),
    ],
  },
  {
    year: "2026",
    kind: "Latihan",
    title: "Lima aplikasi PHP dan PostgreSQL",
    Icon: Database,
    where: "Data pegawai, inventaris, kasir, keuangan pribadi, reservasi ruangan",
    text: "Aplikasi CRUD yang saya buat untuk melatih perancangan basis data relasional, autentikasi sederhana, dan laporan.",
    tags: ["PHP", "PostgreSQL", "PDO", "Bootstrap"],
  },
  {
    year: "2025",
    kind: "Proyek tim",
    title: "Backend dan basis data, BudgEx",
    Icon: Server,
    where: "Tim PBL, PENS",
    text: "Mengerjakan skema basis data dan alur persetujuan anggaran berjenjang untuk beberapa peran, dengan catatan audit di setiap perubahan status.",
    tags: ["ASP.NET Core", "C#", "PostgreSQL", "REST API"],
    photos: [
      photo(1, 2025, "jf12025.jpg"),
      photo(2, 2025, "jf22025.jpg"),
      photo(3, 2025, "jf32025.jpg"),
    ],
  },
  {
    year: "2024",
    kind: "Akademik",
    title: "D4 Teknik Informatika",
    Icon: GraduationCap,
    where: "Politeknik Elektronika Negeri Surabaya",
    text: "Mulai kuliah di PENS. IPK 3,76 dari 4,00 sampai semester 5, dengan fokus pada pengembangan web dan basis data.",
    tags: ["Pemrograman web", "Basis data", "Algoritma"],
    photos: [
      photo(1, 2024, "jf12024.jpg"),
      photo(2, 2024, "jf22024.jpg"),
      photo(3, 2024, "jf32024.jpg"),
    ],
  },
  {
    year: "2023",
    kind: "PKL",
    title: "Stakeholder Relation Section",
    Icon: Briefcase,
    where: "PT Angkasa Pura I, Bandara Internasional Juanda",
    text: "PKL enam bulan (Januari sampai Juni 2023) sebagai siswa Multimedia SMK Negeri 3 Surabaya, bukan peran teknis. Nilai rata-rata 87,86. Ikut latihan penanggulangan keadaan darurat (PKD) ke-108 pada 17 Mei 2023.",
    tags: ["PKL", "Stakeholder relation", "PKD ke-108"],
  },
];

export function Hero() {
  return (
    <section className="r-hero" aria-labelledby="h-hero">
      <div className="r-hero-stage">
        <h1 className="r-hero-name r-display" id="h-hero">
          <span className="r-marquee">
            <span>Candra Putra Pratama</span>
            <span aria-hidden="true">Candra Putra Pratama</span>
            <span aria-hidden="true">Candra Putra Pratama</span>
            <span aria-hidden="true">Candra Putra Pratama</span>
          </span>
        </h1>
        <div className="r-hero-photo">
          <div className="r-hero-figure">
            <img
              src="/images/profile-hero.webp"
              alt="Foto Candra Putra Pratama"
              width="640"
              height="800"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
      <div className="r-scroll" aria-hidden="true">
        <span>Gulir</span>
        <i />
      </div>
      <div className="r-hero-copy">
        <div className="r-hero-actions" style={{ "--i": 1 }}>
          <a className="r-btn" href="/resume.pdf" download="Resume_Candra_Putra.pdf">
            Unduh CV
          </a>
          <a className="r-btn r-btn--ghost" href="#proyek">
            Lihat proyek
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ id, title, text }) {
  return (
    <div className="r-head" data-reveal>
      <h2 className="r-h2" id={id}>
        {title}
      </h2>
      {text ? <p className="r-sub">{text}</p> : null}
    </div>
  );
}

export function Work() {
  const jasdor = PROJECTS.find((p) => p.title === "Jasdor Kopi Cima");
  const budgex = PROJECTS.find((p) => p.title.startsWith(BUDGEX_PREFIX));
  const others = PROJECTS.filter(
    (p) => p.title !== "Jasdor Kopi Cima" && !p.title.startsWith(BUDGEX_PREFIX),
  );

  return (
    <section id="proyek" className="r-section" aria-labelledby="h-proyek">
      <SectionHead
        id="h-proyek"
        title="Proyek pilihan"
        text="Dua proyek utama, lalu proyek latihan yang saya buat sepanjang kuliah."
      />

      <div className="r-work">
        <article className="r-card r-card--lead" data-reveal>
          <div className="r-card-body">
            <p className="r-meta">2026, proyek mandiri</p>
            <h3 className="r-h3">Jasdor Kopi Cima</h3>
            <p className="r-p">
              Aplikasi jasa order kopi untuk mahasiswa dan komunitas. Customer
              memilih outlet dan menu dari tiga brand, membayar lewat QRIS, lalu
              pesanan dikonfirmasi lewat WhatsApp. Layanan independen, bukan
              mitra resmi brand.
            </p>
            <ul className="r-facts">
              <li>Lebih dari 1.600 pesanan masuk lewat aplikasi ini.</li>
              <li>
                Backend di Cloudflare Workers dengan Supabase (PostgreSQL), rate
                limiting, dan lebih dari 600 test otomatis.
              </li>
              <li>Panel admin dan notifikasi pesanan lewat Telegram.</li>
            </ul>
            <ul className="r-tags">
              {jasdor.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="r-links">
              <a href={jasdor.liveUrl} target="_blank" rel="noopener noreferrer">
                Buka aplikasi
              </a>
              <a href={jasdor.githubUrl} target="_blank" rel="noopener noreferrer">
                Lihat kode
              </a>
            </div>
          </div>
        </article>

        <article className="r-card r-card--lead" data-reveal style={{ "--d": "120ms" }}>
          <div className="r-card-body">
            <p className="r-meta">2025 sampai 2026, tim PBL PENS</p>
            <h3 className="r-h3">BudgEx</h3>
            <p className="r-p">
              Sistem persetujuan anggaran berjenjang. Saya mengerjakan skema
              basis data dan alur persetujuan multi-role. Alurnya:
            </p>
            <ol className="r-steps">
              {BUDGEX_STEPS.map(([name, note]) => (
                <li key={name}>
                  <strong>{name}</strong> <span>{note}</span>
                </li>
              ))}
            </ol>
            <p className="r-p">
              Persetujuan dibuat sebagai state machine supaya data tetap
              konsisten saat dokumen direview bersamaan.
            </p>
            <ul className="r-tags">
              {budgex.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="r-note">Repositori ada di organisasi kampus dan bersifat privat.</p>
          </div>
        </article>
      </div>

      <h3 className="r-h3 r-h3--gap">Proyek lainnya</h3>
      <ul className="r-grid">
        {others.map((p, i) => (
          <li
            key={p.title}
            className="r-card r-card--small"
            data-reveal
            style={{ "--d": `${(i % 3) * 90}ms` }}
          >
            <p className="r-meta">{p.year}</p>
            <h4 className="r-h4">{p.title}</h4>
            <p className="r-p r-p--small">{p.desc}</p>
            <ul className="r-tags">
              {p.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="r-links">
              <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                Lihat kode
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="r-links r-links--end">
        <a href="/work">Lihat arsip proyek lengkap</a>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="keahlian" className="r-section" aria-labelledby="h-keahlian">
      <SectionHead
        id="h-keahlian"
        title="Keahlian"
        text="Teknologi yang sudah saya pakai di proyek, bukan sekadar daftar."
      />
      <div className="r-skills">
        <ul className="r-tools" aria-label="Teknologi yang dipakai">
          {TOOLS.map(([name, src], i) => (
            <li key={name} className="r-tool" data-reveal style={{ "--d": `${i * 40}ms` }}>
              <img src={src} alt="" width="32" height="32" loading="lazy" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
        <div className="r-groups">
          {SKILL_GROUPS.map((g, i) => (
            <article key={g.n} className="r-card" data-reveal style={{ "--d": `${i * 120}ms` }}>
              <p className="r-num">{g.n}</p>
              <h3 className="r-h3">{g.title}</h3>
              <p className="r-p">{g.text}</p>
              <ul className="r-tags">
                {g.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="tentang" className="r-section" aria-labelledby="h-tentang">
      <div data-reveal>
        <p className="r-eyebrow">Tentang saya</p>
        <h2 className="r-about-title" id="h-tentang">
          <span>Problem Solver.</span> <span>Web Systems Builder.</span>
        </h2>
      </div>

      <div className="r-about-card" data-reveal style={{ "--d": "120ms" }}>
        <img
          className="r-avatar"
          src="/images/profile-hero.webp"
          alt="Foto Candra Putra Pratama"
          width="148"
          height="148"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="r-about-name">Candra Putra Pratama</p>

          <dl className="r-stats">
            {STATS.map(([label, value, c]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>
                  <span
                    aria-hidden="true"
                    data-count={c.count}
                    data-decimals={c.decimals}
                    data-suffix={c.suffix}
                  >
                    {value}
                  </span>
                  <span className="r-sr">{value}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="r-about-text">
            Mahasiswa semester 5 yang fokus pada pengembangan web dan basis
            data. Proyek utama saya adalah Jasdor Kopi Cima, aplikasi jasa order
            kopi yang dipakai pelanggan nyata, dan BudgEx, backend sistem
            persetujuan anggaran dari tim PBL kampus. Sisanya latihan: lima
            aplikasi PHP dan PostgreSQL.
          </p>

          <p className="r-about-more">
            Ingin tahu lebih banyak tentang pengalaman saya?{" "}
            <a className="r-inline" href="/resume.pdf" download="Resume_Candra_Putra.pdf">
              Unduh CV saya
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="perjalanan" className="r-section" aria-labelledby="h-perjalanan">
      <SectionHead
        id="h-perjalanan"
        title="Perjalanan"
        text="Dari PKL sebagai siswa SMK sampai proyek yang sudah dipakai pelanggan."
      />
      <ol className="r-journey">
        {JOURNEY.map((j, i) => (
          <li
            key={`${j.year}-${j.title}`}
            className={`r-j${i % 2 ? " r-j--flip" : ""}`}
            data-reveal
          >
            <div className="r-j-year">
              <div className="r-j-yearbox">
                <p className="r-j-num r-display">{j.year}</p>
                <span className="r-j-badge" aria-hidden="true">
                  <j.Icon size={26} />
                </span>
              </div>
              {j.photos ? <PhotoFolder year={j.year} photos={j.photos} /> : null}
            </div>

            <span className="r-j-node" aria-hidden="true" />

            <article className="r-card r-j-card">
              <p className="r-pill r-pill--solid">{j.kind}</p>
              <h3 className="r-h3 r-j-title">{j.title}</h3>
              <p className="r-where">
                <MapPin size={15} aria-hidden="true" />
                <span>{j.where}</span>
              </p>
              <p className="r-p">{j.text}</p>
              <ul className="r-tags">
                {j.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
