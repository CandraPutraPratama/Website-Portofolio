"use client";

import React, { useEffect, useState, useRef } from "react";
import { 
  Github, 
  Mail, 
  ExternalLink, 
  X, 
  Code2, 
  FlaskConical, 
  Rocket, 
  Trophy, 
  GraduationCap, 
  Linkedin, 
  Minus,
  Check,
  Layers,
  ShieldCheck,
  Terminal,
  Database,
  Server
} from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "../data/projects";
import Header from "./Header";
import TypewriterTitle from "./TypewriterTitle";
import Reveal from "./Reveal";

const TECH_CATEGORIES = [
  {
    title: "Backend & Systems",
    skills: [
      { name: "ASP.NET Core", logo: "/images/logos/dotnet.svg" },
      { name: "C#", logo: "/images/logos/csharp.svg" },
      { name: "PostgreSQL", logo: "/images/logos/postgresql.svg" },
      { name: "MySQL", logo: "/images/logos/mysql.png" },
      { name: "PHP", logo: "/images/logos/php.png" },
      { name: "REST APIs", icon: Terminal },
    ],
  },
  {
    title: "Frontend & Web",
    skills: [
      { name: "Next.js 14", logo: "/images/logos/nextjs.svg" },
      { name: "React 18", logo: "/images/logos/react.png" },
      { name: "TypeScript", logo: "/images/logos/typescript.svg" },
      { name: "Tailwind CSS", logo: "/images/logos/tailwind.svg" },
      { name: "JavaScript", logo: "/images/logos/js.png" },
      { name: "PWA", icon: Rocket },
    ],
  },
  {
    title: "Architecture & DevOps",
    skills: [
      { name: "Clean Architecture", icon: Layers },
      { name: "3-Tier Approval", icon: ShieldCheck },
      { name: "Git & GitHub", logo: "/images/logos/git.svg" },
      { name: "Postman", logo: "/images/logos/postman.svg" },
      { name: "Database Design", icon: Database },
      { name: "Production Deploy", icon: Server },
    ],
  },
];

const WHAT_I_CAN_DO = [
  {
    group: "Web Development & Backend Engineering",
    description:
      "Membangun aplikasi web modern dari arsitektur backend andal berbasis ASP.NET Core dan PHP, basis data relasional teroptimasi PostgreSQL, hingga frontend interaktif yang cepat dengan Next.js dan Tailwind CSS.",
    visual: "coding",
    size: "large",
    items: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "ASP.NET Core",
      "C#",
      "PHP",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "Tailwind CSS",
      "PWA",
      "Clean Architecture",
    ],
  },
  {
    group: "Production Systems & Multi-Brand Aggregation",
    description:
      "Berpengalaman meluncurkan produk yang dipakai pengguna betulan (Jasdor live production: 3 brand kopi & 2.000+ outlet) serta sistem korporat dengan alur persetujuan 3 tingkat.",
    visual: "assistant",
    size: "medium",
    items: [
      "Multi-Brand Aggregator",
      "2.000+ Outlet Terhubung",
      "3-Tier Approval Matrix",
      "Real-Time Queue",
      "WhatsApp API Checkout",
      "Session & Role Auth",
    ],
  },
  {
    group: "Enterprise Workflows & Database Systems",
    description:
      "Merancang sistem data transaksional terstruktur dengan audit trails, normalisasi skema relasional, dan kontrol hak akses bertingkat untuk keandalan operasional bisnis.",
    visual: "social",
    size: "medium",
    items: [
      "Audit Trail Logging",
      "Role-Based Access Control",
      "Relational Normalization",
      "Query Optimization",
      "Enterprise POS & Stock",
      "PENS D4 IT (IPK 3.76)",
    ],
  },
];

const CARDS = [
  "Problem solver",
  "Backend & API specialist",
  "Clean code advocate",
  "PENS D4 IT (IPK 3.76)",
  "Relational database design",
  "Fast learner",
  "Reliable team player",
  "Product-minded",
  "System architecture",
  "Open to feedback",
];

const CARD_SCATTER = [
  { rot: -6, x: 5, y: -4 },
  { rot: 4, x: -6, y: 3 },
  { rot: -3, x: 8, y: 5 },
  { rot: 6, x: -4, y: -5 },
  { rot: -7, x: 4, y: 4 },
  { rot: 3, x: -7, y: -2 },
  { rot: -4, x: 7, y: -4 },
  { rot: 6, x: -3, y: 6 },
  { rot: -5, x: 6, y: 2 },
  { rot: 3, x: -5, y: -5 },
];

const CURRENTLY = [
  { icon: Code2, label: "Building", detail: "Jasdor F&B unified ordering platform" },
  { icon: FlaskConical, label: "Exploring", detail: "Enterprise backend & 3-tier approvals" },
  { icon: GraduationCap, label: "Studying", detail: "D4 Teknik Informatika PENS (IPK 3.76)" },
];

const EXPERIENCE = [
  {
    title: "Junior Web & Backend Developer",
    subtitle: "Jasdor (Live Production PWA) & BudgEx (API Team)",
    org: "Politeknik Elektronika Negeri Surabaya (PENS)",
    date: "2026 : Present",
    desc: "Membangun dan mengoperasikan platform satu pintu pemesanan kopi multi-brand Jasdor (analogi TIX ID untuk F&B: 3 brand kopi, 2.000+ outlet terintegrasi, antrean real-time, dan checkout WhatsApp). Bersamaan dengan itu, merancang arsitektur backend sistem anggaran korporat BudgEx dengan alur persetujuan 3 tingkat berbasis ASP.NET Core dan PostgreSQL.",
    certificates: [
      { name: "Live Production Application", link: "https://jasdor.vercel.app" },
      { name: "Clean Architecture Backend", link: "https://github.com/CandraPutraPratama" },
    ],
    images: [
      "/images/journey/jf12026.jpg",
      "/images/journey/jf22026.jpg",
      "/images/journey/jf312026.png",
    ],
  },
  {
    title: "Web Development & Relational Database",
    subtitle: "Pengembangan 5 Sistem Web Bisnis & Enterprise",
    org: "Politeknik Elektronika Negeri Surabaya (PENS)",
    date: "2025",
    imageLeft: true,
    desc: "Mendalami perancangan sistem web terstruktur, normalisasi basis data relasional, dan implementasi logika bisnis nyata lewat 5 proyek aplikasi mandiri: Sistem Data Pegawai, Manajemen Inventaris Gudang, Kasir POS, Manajemen Keuangan Pribadi, dan RoomBook.",
    certificates: [
      { name: "5 Independent Business Systems", link: "https://github.com/CandraPutraPratama" },
    ],
    images: [
      "/images/journey/jf12025.jpg",
      "/images/journey/jf22025.jpg",
      "/images/journey/jf32025.jpg",
    ],
  },
  {
    title: "D4 Teknik Informatika (Informatics Engineering)",
    subtitle: "Fondasi Rekayasa Perangkat Lunak & Algoritma",
    org: "Politeknik Elektronika Negeri Surabaya (PENS)",
    date: "2024",
    desc: "Memulai studi sarjana terapan di kampus vokasi teknologi terbaik Indonesia. Membangun fondasi kuat dalam rekayasa perangkat lunak, algoritma pemrograman, struktur data, analisis kebutuhan sistem, dan kolaborasi tim menggunakan Git. Meraih predikat Dean's Honor dengan IPK 3.76 / 4.00.",
    certificates: [
      { name: "PENS Dean's Honor (IPK 3.76)", link: "mailto:candraputrap46@gmail.com" },
    ],
    images: [
      "/images/journey/jf12024.jpg",
      "/images/journey/jf22024.jpg",
      "/images/journey/jf32024.jpg",
    ],
  },
];

function ExperienceImageStack({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  return (
    <div
      className="experience-image-stack"
      onClick={() => setIndex((prev) => (prev + 1) % count)}
    >
      {images.map((src, i) => {
        const offset = (i - index + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 80}px`,
            "--ty": `${scatter.y - 30}px`,
            "--rot": `${scatter.rot + 20}deg`,
            "--sc": 0.9,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.35;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 8}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.05,
            "--op": isFront ? 1 : 0.8 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={src}
            src={src}
            alt={`${title} ${i + 1}`}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
          />
        );
      })}
    </div>
  );
}

function WorkAlbumStack({ projects, activeIndex, onAdvance }) {
  const count = projects.length;

  return (
    <div className="work-mobile-stack" onClick={onAdvance}>
      {projects.map((project, i) => {
        const offset = (i - activeIndex + count) % count;
        const isExiting = offset === count - 1;
        if (offset > 2 && !isExiting) return null;

        const scatter = CARD_SCATTER[i % CARD_SCATTER.length];
        let style;

        if (isExiting) {
          style = {
            "--tx": `${scatter.x + 80}px`,
            "--ty": `${scatter.y - 30}px`,
            "--rot": `${scatter.rot + 20}deg`,
            "--sc": 0.9,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.35;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 8}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.05,
            "--op": isFront ? 1 : 0.8 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={project.title}
            src={project.image}
            alt={project.title}
            className={`stacked-image${offset === 0 ? " stacked-image-front" : ""}`}
            style={style}
            draggable={false}
          />
        );
      })}
    </div>
  );
}

export default function Portfolio() {
  const rootRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [cardIndex, setCardIndex] = useState(0);
  const [cardPaused, setCardPaused] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const activeProject = PROJECTS[activeIndex];

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("candraputrap46@gmail.com");
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = "mailto:candraputrap46@gmail.com";
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goTo = (index) => {
    const normalized = ((index % PROJECTS.length) + PROJECTS.length) % PROJECTS.length;
    setActiveIndex(normalized);
  };

  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    const syncMarqueeSpeed = () => {
      const enterSeconds = 12;
      const pxPerSecond = window.innerWidth / enterSeconds;
      const loopDistance = track.scrollWidth / 2;
      const loopSeconds = Math.max(16, loopDistance / Math.max(pxPerSecond, 1));
      heroRef.current?.style.setProperty("--marquee-loop-duration", `${loopSeconds}s`);
    };

    syncMarqueeSpeed();
    window.addEventListener("resize", syncMarqueeSpeed);
    return () => window.removeEventListener("resize", syncMarqueeSpeed);
  }, []);

  useEffect(() => {
    if (cardPaused) return;
    const id = setInterval(() => {
      setCardIndex((prev) => (prev + 1) % CARDS.length);
    }, 2400);
    return () => clearInterval(id);
  }, [cardPaused]);

  return (
    <div ref={rootRef} className="portfolio-root">
      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="hero-root" ref={heroRef}>
        {/* Profile Silhouette Cutout */}
        <div className="profile-wrap">
          <img src="/images/profile.png" alt="Candra Putra" className="profile-image" draggable={false} />
          <div className="profile-overlay" aria-hidden="true" />
        </div>

        {/* Calm Status Badge */}
        <div className="hero-status-badge">
          <span className="hero-status-dot" aria-hidden="true" />
          <span className="hero-status-text">
            Terbuka untuk Peluang Magang & Junior Backend Engineer • Surabaya & Remote
          </span>
        </div>

        {/* Hero Content Overlay (Visible semantic h1, lead, actions) */}
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-name-lead">Candra Putra Pratama</span>
            <span className="hero-subheadline">Junior Web & Backend Engineer</span>
          </h1>
          <p className="hero-lead">
            D4 Teknik Informatika PENS (IPK 3.76). Merancang arsitektur backend andal, basis data relasional terstruktur, dan platform digital yang dipakai pengguna nyata.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-btn hero-btn--primary">
              Lihat Proyek
            </a>

            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="hero-btn hero-btn--secondary"
              title="Salin Email Candra"
            >
              {emailCopied ? (
                <>
                  <Check size={16} className="hero-btn-icon text-emerald-400" />
                  <span>Email Tersalin</span>
                </>
              ) : (
                <>
                  <Mail size={16} className="hero-btn-icon" />
                  <span>Salin Email</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setIsModalOpen(true);
                setIsModalMinimized(false);
              }}
              className="hero-btn hero-btn--ghost"
            >
              Hubungi Saya
            </button>
          </div>
        </div>

        {/* Grounded Hero Credentials Strip (Adds authentic proof & density) */}
        <div className="hero-credentials-bar">
          <div className="hero-cred-item">
            <span className="hero-cred-label">Pendidikan</span>
            <span className="hero-cred-val">D4 Teknik Informatika PENS • IPK 3.76</span>
          </div>
          <div className="hero-cred-item">
            <span className="hero-cred-label">Platform Nyata</span>
            <span className="hero-cred-val">Jasdor PWA • 3 Brand & 2.000+ Outlet</span>
          </div>
          <div className="hero-cred-item">
            <span className="hero-cred-label">Arsitektur Backend</span>
            <span className="hero-cred-val">BudgEx • 3-Tier Approval Matrix (ASP.NET Core)</span>
          </div>
        </div>
      </section>

      {/* WORK GALLERY SECTION */}
      <section id="work" className="section">
        <Reveal>
          <div className="work-header">
            <div>
              <h2 className="section-title">Work Gallery</h2>
              <p className="section-desc">
                Koleksi platform produksi, arsitektur backend, dan sistem korporat yang saya bangun.
              </p>
            </div>
            <Link href="/work" className="work-album-btn-top">
              Lihat Semua Proyek <ExternalLink size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="work-album">
            <div className="work-album-inner">
              {PROJECTS.map((project, index) => {
                const total = PROJECTS.length;
                let diff = (index - activeIndex + total) % total;
                if (diff > total / 2) diff -= total;

                const isCenter = diff === 0;
                const distance = Math.abs(diff);
                const dir = isCenter ? 0 : diff / distance;

                const style = isCenter
                  ? {
                      transform: "translate(-50%, -50%) scale(1)",
                      zIndex: 5,
                      opacity: 1,
                    }
                  : {
                      transform: `translate(calc(-50% + ${
                        dir * (200 + (distance - 1) * 130)
                      }px), -50%) scale(${Math.max(0.55, 1 - distance * 0.28)})`,
                      zIndex: 5 - distance,
                      opacity: distance <= 2 ? Math.max(0, 0.85 - (distance - 1) * 0.55) : 0,
                      pointerEvents: distance <= 2 ? "auto" : "none",
                    };

                return (
                  <div
                    key={project.title}
                    className={`work-album-item${isCenter ? " work-album-item-center" : ""}`}
                    style={style}
                    onClick={() => !isCenter && goTo(index)}
                  >
                    <img src={project.image} alt={project.title} className="work-album-img" draggable={false} />
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="work-mobile-stack-wrap">
            <WorkAlbumStack
              projects={PROJECTS}
              activeIndex={activeIndex}
              onAdvance={() => goTo(activeIndex + 1)}
            />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="work-info" key={activeProject.title}>
            <h3 className="work-info-title">{activeProject.title}</h3>

            <div className="work-info-meta-chips">
              <span className="work-meta-tag">{activeProject.category}</span>
              {activeProject.year && <span className="work-meta-tag">{activeProject.year}</span>}
              {activeProject.awards?.[0] && (
                <span className="work-meta-tag work-meta-tag--highlight">
                  {activeProject.awards[0]}
                </span>
              )}
            </div>

            <p className="work-info-desc">{activeProject.desc}</p>

            <div className="work-tech-tags">
              {activeProject.tech?.map((tech) => (
                <span key={tech} className="work-tech-tag">{tech}</span>
              ))}
            </div>

            <div className="work-info-actions">
              <a
                href={activeProject.link}
                className="work-info-link"
                target={activeProject.link !== "#" && !activeProject.link.startsWith("/") ? "_blank" : undefined}
                rel="noopener noreferrer"
              >
                {activeProject.linkText}
              </a>
              <Link href="/work" className="work-info-sublink">
                Lihat di Arsip Teknis
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHAT I CAN DO SECTION */}
      <section id="what-i-can-do" className="section">
        <div className="what-i-can-do-grid">
          {/* LEFT COLUMN: Clean Tech Stack Showcase */}
          <div className="what-i-can-do-left">
            <Reveal>
              <h2 className="section-title">What I Can Do</h2>
              <p className="what-i-can-do-desc">
                Kombinasi kemampuan rekayasa backend, perancangan basis data relasional terstruktur, dan frontend modern untuk membangun sistem digital yang andal dan teruji di lingkungan produksi.
              </p>

              {/* Categorized Tech Showcase */}
              <div className="tech-stack-container">
                {TECH_CATEGORIES.map((category) => (
                  <div key={category.title} className="tech-category-group">
                    <div className="tech-category-title">{category.title}</div>
                    <div className="tech-chips-grid">
                      {category.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div key={skill.name} className="tech-chip">
                            {skill.logo ? (
                              <img src={skill.logo} alt={skill.name} className="tech-chip-img" draggable={false} />
                            ) : Icon ? (
                              <Icon size={14} className="tech-chip-icon" />
                            ) : null}
                            <span className="tech-chip-name">{skill.name}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Engineering Architecture Showcases */}
          <div className="what-i-can-do-right">
            <div className="arch-showcase-container">
              <Reveal delay={100}>
                <div className="arch-card">
                  <div className="arch-card-header">
                    <div>
                      <h3 className="arch-card-title">Jasdor Unified Ordering Platform</h3>
                      <div className="arch-card-tag">Production Multi-Brand Engine</div>
                    </div>
                  </div>
                  <p className="arch-card-desc">
                    Arsitektur platform pemesanan satu pintu analogi TIX ID untuk F&B. Menyatukan 3 brand ternama ke satu ekosistem PWA ringan dengan antrean pesanan tersinkronisasi dan alur pembayaran WhatsApp.
                  </p>
                  <div className="arch-card-points">
                    <div className="arch-point-item"><span className="arch-point-dot" /> Multi-Brand Aggregator</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> 2.000+ Outlet Terhubung</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> Real-Time Order Queue</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> WhatsApp API Checkout</div>
                  </div>
                  <div className="arch-card-tech">
                    {["Next.js 14", "TypeScript", "PWA", "Tailwind CSS", "REST API"].map((t) => (
                      <span key={t} className="arch-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div className="arch-card">
                  <div className="arch-card-header">
                    <div>
                      <h3 className="arch-card-title">BudgEx Enterprise Budgeting System</h3>
                      <div className="arch-card-tag">Corporate Workflow & Database</div>
                    </div>
                  </div>
                  <p className="arch-card-desc">
                    Sistem backend pengelolaan anggaran korporat berkeandalan tinggi dengan alur persetujuan 3 tingkat, kontrol hak akses berbasis peran (RBAC), audit trail komprehensif, dan skema basis data PostgreSQL.
                  </p>
                  <div className="arch-card-points">
                    <div className="arch-point-item"><span className="arch-point-dot" /> 3-Tier Approval Matrix</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> Relational Normalization</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> Audit Trail Logging</div>
                    <div className="arch-point-item"><span className="arch-point-dot" /> Role-Based Access Control</div>
                  </div>
                  <div className="arch-card-tech">
                    {["ASP.NET Core", "C#", "PostgreSQL", "Clean Architecture", "PENS D4 IT"].map((t) => (
                      <span key={t} className="arch-tech-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <Reveal>
          <h2 className="section-title">
            {isMobile ? "Problem Solver.\nBackend Engineer." : "Problem Solver. Backend Engineer."}
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="about-profile-card">
            <div className="about-profile-header">
              <div className="about-profile-image-wrapper">
                <img src="/images/about/profile.png" alt="Candra Putra" className="about-profile-image" draggable={false} />
              </div>
              <div className="about-profile-info">
                <div className="about-profile-name">
                  Candra Putra Pratama
                </div>
                <div className="about-profile-stats">
                  <div className="about-stat-item">
                    <span className="about-stat-label">Projects</span>
                    <span className="about-stat-value">8</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">IPK</span>
                    <span className="about-stat-value">3.76</span>
                  </div>
                  <div className="about-stat-item">
                    <span className="about-stat-label">PENS D4 IT</span>
                    <span className="about-stat-value">2026</span>
                  </div>
                </div>
                <div className="about-description">
                  <p>
                    Saya adalah mahasiswa D4 Teknik Informatika Politeknik Elektronika Negeri Surabaya (PENS) dengan IPK 3.76, berfokus pada Web & Backend Development. Berpengalaman membangun software nyata: mulai dari backend API terukur dengan ASP.NET Core & PostgreSQL (BudgEx 3-tier approval) hingga platform satu pintu pemesanan multi-brand (Jasdor PWA terhubung ke 3 brand ternama dan 2.000+ outlet).
                  </p>
                  <p>
                    Ingin mendiskusikan peluang magang atau kolaborasi teknis?{" "}
                    <a href="mailto:candraputrap46@gmail.com" className="about-resume-link">Hubungi via Email</a>
                    {" "}atau{" "}
                    <button type="button" onClick={copyEmailToClipboard} className="about-copy-email-btn">
                      {emailCopied ? "✓ Email Tersalin" : "Salin Email"}
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* CURRENTLY + CARD STACK */}
            <div className="about-bottom-row">
              <div className="currently-strip">
                <div className="currently-strip-label">Fokus & Eksplorasi Saat Ini</div>
                <div className="currently-list-clean">
                  <div className="currently-item-clean">
                    <span className="currently-tag-clean">Membangun</span>
                    <span className="currently-text-clean">Jasdor Unified Ordering</span>
                    <span className="currently-desc-clean">• PWA multi-brand live production (Next.js & WhatsApp API)</span>
                  </div>
                  <div className="currently-item-clean">
                    <span className="currently-tag-clean">Mengeksplorasi</span>
                    <span className="currently-text-clean">BudgEx 3-Tier Workflow</span>
                    <span className="currently-desc-clean">• Sistem persetujuan anggaran korporat (ASP.NET Core & PostgreSQL)</span>
                  </div>
                  <div className="currently-item-clean">
                    <span className="currently-tag-clean">Studi</span>
                    <span className="currently-text-clean">D4 Teknik Informatika PENS</span>
                    <span className="currently-desc-clean">• Kampus vokasi teknologi terbaik Indonesia (IPK 3.76)</span>
                  </div>
                </div>
              </div>

              <div className="card-stack">
                <div
                  className="card-stack-container"
                  onClick={() => setCardIndex((prev) => (prev + 1) % CARDS.length)}
                  onMouseEnter={() => setCardPaused(true)}
                  onMouseLeave={() => setCardPaused(false)}
                >
                  {CARDS.map((trait, i) => {
                    const offset = (i - cardIndex + CARDS.length) % CARDS.length;
                    const isExiting = offset === CARDS.length - 1;
                    if (offset > 2 && !isExiting) return null;

                    const scatter = CARD_SCATTER[i];
                    let style;

                    if (isExiting) {
                      style = {
                        "--tx": `${scatter.x + 100}px`,
                        "--ty": `${scatter.y - 40}px`,
                        "--rot": `${scatter.rot + 25}deg`,
                        "--sc": 0.88,
                        "--op": 0,
                        zIndex: 5,
                      };
                    } else {
                      const depth = offset;
                      style = {
                        "--tx": `${scatter.x + depth * 8}px`,
                        "--ty": `${scatter.y + depth * 6}px`,
                        "--rot": `${scatter.rot + depth * (scatter.rot >= 0 ? 3 : -3)}deg`,
                        "--sc": 1 - depth * 0.04,
                        "--op": depth === 0 ? 1 : 0.65 + (2 - depth) * 0.15,
                        zIndex: 30 - depth * 10,
                      };
                    }

                    return (
                      <div
                        key={trait}
                        className={`card-stack-card${offset === 0 ? " card-stack-card-front" : ""}`}
                        style={style}
                      >
                        <div className="card-stack-label">Karakter & Nilai</div>
                        <div className="card-stack-value">{trait}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* RECOGNITION & ACHIEVEMENTS SECTION */}
      <section id="awards" className="section">
        <Reveal>
          <h2 className="section-title">Recognition & Academic Honors</h2>
          <p className="section-desc">
            Pencapaian akademik resmi dan validasi sistem digital yang merefleksikan dedikasi terhadap standar rekayasa perangkat lunak tinggi.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="recognition-table">
            <a href="mailto:candraputrap46@gmail.com" className="recognition-row">
              <div className="recognition-main">
                <div className="recognition-title">PENS Dean's Honor (IPK 3.76 / 4.00)</div>
                <div className="recognition-desc">Peringkat kehormatan akademik program studi D4 Teknik Informatika</div>
              </div>
              <div className="recognition-meta">
                <span className="recognition-scope">PENS Surabaya</span>
                <ExternalLink size={15} className="recognition-link-icon" />
              </div>
            </a>

            <a href="https://jasdor.vercel.app" target="_blank" rel="noreferrer" className="recognition-row">
              <div className="recognition-main">
                <div className="recognition-title">Jasdor Unified Ordering Platform (Live Production)</div>
                <div className="recognition-desc">Menghubungkan 3 brand kopi ternama dan 2.000+ outlet ke satu sistem PWA</div>
              </div>
              <div className="recognition-meta">
                <span className="recognition-scope">2.000+ Outlets</span>
                <ExternalLink size={15} className="recognition-link-icon" />
              </div>
            </a>

            <a href="https://github.com/CandraPutraPratama" target="_blank" rel="noreferrer" className="recognition-row">
              <div className="recognition-main">
                <div className="recognition-title">BudgEx Enterprise Budgeting Architecture</div>
                <div className="recognition-desc">Sistem alur persetujuan bertingkat (3-Tier Matrix) berbasis ASP.NET Core & PostgreSQL</div>
              </div>
              <div className="recognition-meta">
                <span className="recognition-scope">Clean Architecture</span>
                <ExternalLink size={15} className="recognition-link-icon" />
              </div>
            </a>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="trainings" className="section">
        <Reveal>
          <h2 className="section-title">Milestones & Journey</h2>
          <p className="section-desc">
            Rangkaian perjalanan studi, pengembangan produk nyata, dan eksplorasi sistem yang membentuk keahlian rekayasa perangkat lunak saya.
          </p>
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.title} className={`experience-row${exp.imageLeft ? " experience-row-reverse" : ""}`}>
              <div className="experience-text">
                <div className="experience-header">
                  <div className="experience-title">
                    {exp.title}
                    {exp.subtitle && <div className="experience-subtitle">{exp.subtitle}</div>}
                  </div>
                  <div className="experience-date">{exp.date}</div>
                </div>
                <div className="experience-org">{exp.org}</div>
                <div className="experience-desc">{exp.desc}</div>
                {exp.certificates && exp.certificates.map((cert) => (
                  <div key={cert.name}>
                    <a href={cert.link} className="experience-certificate" target="_blank" rel="noopener noreferrer">
                      <span>{cert.name}</span>
                      <span className="experience-cert-arrow" aria-hidden="true"> ↗</span>
                    </a>
                  </div>
                ))}
              </div>
              {exp.images && exp.images.length > 0 && (
                <ExperienceImageStack images={exp.images} title={exp.title} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <h2 className="contact-headline">Let's work together</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="contact-description">Mencari tantangan rekayasa berikutnya yang layak diselesaikan.</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="contact-secondary">
                Terbuka untuk peluang magang Web Development & Backend Engineering, arsitektur software, serta kolaborasi rekayasa perangkat lunak.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a
                href="mailto:candraputrap46@gmail.com?subject=Permintaan%20Resume%20-%20Candra%20Putra"
                className="contact-resume-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unduh Resume
              </a>
            </Reveal>
          </div>

          <div className="contact-right">
            <div className="contact-links-list">
              <Reveal delay={100}>
                <a href="mailto:candraputrap46@gmail.com" className="contact-link-row" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-main">
                    <span className="contact-link-role">Direct Communication</span>
                    <span className="contact-link-val">candraputrap46@gmail.com</span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow" />
                </a>
              </Reveal>
              <Reveal delay={160}>
                <a href="https://github.com/CandraPutraPratama" className="contact-link-row" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-main">
                    <span className="contact-link-role">Source Code & Architecture</span>
                    <span className="contact-link-val">github.com/CandraPutraPratama</span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow" />
                </a>
              </Reveal>
              <Reveal delay={220}>
                <a href="https://linkedin.com/in/candra-putra" className="contact-link-row" target="_blank" rel="noopener noreferrer">
                  <div className="contact-link-main">
                    <span className="contact-link-role">Professional Network</span>
                    <span className="contact-link-val">linkedin.com/in/candra-putra</span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow" />
                </a>
              </Reveal>
            </div>
            <Reveal delay={260}>
              <button
                className="contact-cta"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsModalMinimized(false);
                }}
              >
                Kirim Pesan
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div className={`contact-modal${isModalMinimized ? " contact-modal--minimized" : ""}`}>
          <div className="contact-modal-header" onClick={() => isModalMinimized && setIsModalMinimized(false)}>
            <h3 className="contact-modal-title">Kirim Pesan</h3>
            <div className="contact-modal-controls">
              <button
                type="button"
                className="contact-modal-icon-btn contact-modal-minimize-btn"
                aria-label={isModalMinimized ? "Expand" : "Minimize"}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalMinimized((v) => !v);
                }}
              >
                <Minus size={16} />
              </button>
              <button
                type="button"
                className="contact-modal-icon-btn"
                aria-label="Close"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isModalMinimized && (
            <div className="contact-modal-inner">
              <form
                className="contact-modal-form"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target;
                  const data = {
                    name: form.name.value.trim(),
                    email: form.email.value.trim(),
                    message: form.message.value.trim(),
                  };

                  setFormStatus("submitting");

                  try {
                    await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    setFormStatus("success");
                    form.reset();
                    setIsModalOpen(false);
                    setShowSuccessModal(true);
                  } catch (error) {
                    setFormStatus("error");
                  }
                }}
              >
                <div className="contact-modal-field">
                  <label className="contact-modal-label">Nama Lengkap</label>
                  <input type="text" name="name" className="contact-modal-input" placeholder="Nama Anda" required />
                </div>

                <div className="contact-modal-field">
                  <label className="contact-modal-label">Alamat Email</label>
                  <input type="email" name="email" className="contact-modal-input" placeholder="nama@perusahaan.com" required />
                </div>

                <div className="contact-modal-field contact-modal-field--grow">
                  <label className="contact-modal-label">Pesan</label>
                  <textarea rows="6" name="message" className="contact-modal-input" placeholder="Tuliskan pesan atau detail peluang kerjasama..." required />
                </div>

                <button type="submit" className="contact-modal-submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "Mengirim..." : formStatus === "success" ? "Pesan Terkirim" : "Kirim Pesan"}
                </button>

                {formStatus === "error" && (
                  <div className="contact-modal-error">
                    Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}

      {showSuccessModal && (
        <div className="success-modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button className="success-modal-close" onClick={() => setShowSuccessModal(false)} aria-label="Close">
              <X size={18} />
            </button>
            <div className="success-modal-icon">✓</div>
            <h3 className="success-modal-title">Pesan Berhasil Terkirim</h3>
            <p className="success-modal-text">Terima kasih telah menghubungi. Saya akan membalas secepat mungkin.</p>
            <button className="success-modal-btn" onClick={() => setShowSuccessModal(false)}>
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
