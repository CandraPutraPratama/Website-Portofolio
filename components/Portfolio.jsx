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
  Sparkles,
  Layers,
  ShieldCheck,
  Terminal,
  Database
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
      { name: "Production Deploy", icon: Sparkles },
    ],
  },
];

const WHAT_I_CAN_DO = [
  {
    group: "Web Development & Backend Engineering",
    description:
      "Membangun aplikasi web modern dari arsitektur backend andal berbasis ASP.NET Core & PHP, basis data relasional teroptimasi PostgreSQL, hingga frontend interaktif yang cepat dengan Next.js & Tailwind CSS.",
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

const SOCIALS = [
  { label: "Email", value: "candraputrap46@gmail.com", href: "mailto:candraputrap46@gmail.com", icon: Mail, color: "#000000" },
  { label: "GitHub", value: "github.com/CandraPutraPratama", href: "https://github.com/CandraPutraPratama", icon: Github, color: "#000000" },
  { label: "LinkedIn", value: "linkedin.com/in/candra-putra", href: "https://linkedin.com/in/candra-putra", icon: Linkedin, color: "#000000" },
];

const CARDS = [
  "Problem Solver",
  "Backend & API Specialist",
  "Detail-Oriented",
  "PENS D4 IT (IPK 3.76)",
  "Clean Code Advocate",
  "Fast Learner",
  "Reliable Team Player",
  "Product-Minded",
  "System Architecture",
  "Open to Feedback",
];

const CARD_SCATTER = [
  { rot: -7, x: 6, y: -4 },
  { rot: 5, x: -8, y: 3 },
  { rot: -3, x: 10, y: 6 },
  { rot: 9, x: -5, y: -6 },
  { rot: -10, x: 4, y: 5 },
  { rot: 4, x: -10, y: -2 },
  { rot: -5, x: 9, y: -5 },
  { rot: 8, x: -3, y: 7 },
  { rot: -8, x: 7, y: 2 },
  { rot: 3, x: -6, y: -7 },
];

const CURRENTLY = [
  { icon: Code2, label: "Building", detail: "Jasdor F&B unified ordering platform" },
  { icon: FlaskConical, label: "Exploring", detail: "Enterprise backend & 3-tier approvals" },
  { icon: Rocket, label: "Learning", detail: "D4 Teknik Informatika PENS (IPK 3.76)" },
];

const EXPERIENCE = [
  {
    title: "Junior Web & Backend Developer",
    subtitle: "Jasdor (Live Production PWA) & BudgEx (API Team)",
    org: "Politeknik Elektronika Negeri Surabaya (PENS)",
    date: "2026 — Present",
    desc: "Membangun dan mengoperasikan platform satu pintu pemesanan kopi multi-brand Jasdor (analogi TIX ID untuk F&B: 3 brand kopi, 2.000+ outlet terintegrasi, antrean real-time, dan checkout WhatsApp). Bersamaan dengan itu, merancang arsitektur backend sistem anggaran korporat BudgEx dengan alur persetujuan 3 tingkat berbasis ASP.NET Core & PostgreSQL.",
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
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
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
            "--tx": `${scatter.x + 100}px`,
            "--ty": `${scatter.y - 40}px`,
            "--rot": `${scatter.rot + 25}deg`,
            "--sc": 0.88,
            "--op": 0,
            zIndex: 5,
          };
        } else {
          const depth = offset;
          const isFront = depth === 0;
          const calm = 0.4;
          const dir = depth % 2 === 1 ? -1 : 1;
          style = {
            "--tx": isFront ? "0px" : `${scatter.x * calm + depth * 8}px`,
            "--ty": isFront ? "0px" : `${scatter.y * calm + dir * depth * 10}px`,
            "--rot": isFront ? "0deg" : `${scatter.rot * calm + depth * (scatter.rot >= 0 ? 1.5 : -1.5)}deg`,
            "--sc": isFront ? 1 : 1 - depth * 0.06,
            "--op": isFront ? 1 : 0.75 - (depth - 1) * 0.2,
            zIndex: 30 - depth * 10,
          };
        }

        return (
          <img
            key={project.num}
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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
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
    const handleMouse = (e) => {
      if (!rootRef.current) return;
      const rect = rootRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const track = marqueeTrackRef.current;
    if (!track) return;

    const syncMarqueeSpeed = () => {
      const enterSeconds = 8;
      const pxPerSecond = window.innerWidth / enterSeconds;
      const loopDistance = track.scrollWidth / 2;
      const loopSeconds = loopDistance / pxPerSecond;
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
    }, 1500);
    return () => clearInterval(id);
  }, [cardPaused]);

  return (
    <div ref={rootRef} className="portfolio-root">
      

      <Header />

      {/* HERO SECTION */}
      <section id="hero" className="hero-root" ref={heroRef}>
        <h1 className="hero-sr-title">Candra Putra — Junior Web & Backend Developer</h1>
        {/* Ambient Luminous Spotlight (ATM Modification) */}
        <div className="hero-ambient-spotlight" aria-hidden="true" />

        {/* Live Status Pill (ATM Modification) */}
        <div className="hero-status-pill">
          <span className="hero-status-dot" />
          <span className="hero-status-text">
            Available for Internship & Junior Backend Roles • Surabaya / Remote
          </span>
        </div>

        {/* Dynamic Name Marquee */}
        <div className="bg-name-marquee">
          <div className="bg-name-track" ref={marqueeTrackRef}>
            <span className="bg-name-text">CANDRA PUTRA</span>
            <span className="bg-name-text">CANDRA PUTRA</span>
          </div>
        </div>

        {/* Mobile-only fill rows */}
        {["t1", "t2", "t3", "t4", "b1", "b2", "b3", "b4"].map((pos) => (
          <div
            key={pos}
            className={`bg-name-marquee bg-name-marquee--mobile-extra bg-name-marquee--${pos}`}
            aria-hidden="true"
          >
            <div className="bg-name-track">
              <span className="bg-name-text">CANDRA PUTRA</span>
              <span className="bg-name-text">CANDRA PUTRA</span>
            </div>
          </div>
        ))}

        {/* Concentric radar rings */}
        <div className="concentric-circles">
          <div className="circle circle-1" />
          <div className="circle circle-2" />
          <div className="circle circle-3" />
        </div>

        {/* Profile Silhouette Cutout */}
        <div className="profile-wrap">
          <img src="/images/profile.png" alt="CANDRA PUTRA" className="profile-image" draggable={false} />
        </div>

        {/* Floating Quick Action Bar (ATM Modification) */}
        <div className="hero-floating-actions">
          <a href="#work" className="hero-action-pill hero-action-pill--primary">
            <span>Explore Works</span>
            <span className="hero-action-arrow">↓</span>
          </a>

          <button
            type="button"
            onClick={copyEmailToClipboard}
            className="hero-action-pill hero-action-pill--secondary"
            title="Salin Email Candra"
          >
            {emailCopied ? (
              <>
                <Check size={14} className="hero-action-icon text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail size={14} className="hero-action-icon" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              setIsModalOpen(true);
              setIsModalMinimized(false);
            }}
            className="hero-action-pill hero-action-pill--ghost"
          >
            <span>Get in Touch</span>
            <span className="hero-action-arrow">→</span>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll Down</span>
        </div>
      </section>

      {/* WORK GALLERY SECTION */}
      <section id="work" className="section">
        <Reveal>
          <div className="work-header">
            <div>
              <div className="section-label">Selected Work</div>
              <TypewriterTitle text="Work Gallery" />
              <div className="section-desc">
                A collection of production platforms, enterprise systems, and technical architectures I've built.
              </div>
            </div>
            <Link href="/work" className="work-album-btn-top">
              View All Projects <ExternalLink size={14} />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={100}>
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
                    key={project.num}
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

        <Reveal delay={150}>
          <div className="work-mobile-stack-wrap">
            <WorkAlbumStack
              projects={PROJECTS}
              activeIndex={activeIndex}
              onAdvance={() => goTo(activeIndex + 1)}
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="work-info" key={activeProject.num}>
            <div className="work-info-meta-chips">
              <span className="work-chip work-chip--num">{activeProject.num}</span>
              <span className="work-chip work-chip--category">{activeProject.category}</span>
              {activeProject.year && <span className="work-chip work-chip--year">{activeProject.year}</span>}
              {activeProject.awards?.[0] && (
                <span className="work-chip work-chip--badge">
                  <Sparkles size={11} style={{ marginRight: 4 }} />
                  {activeProject.awards[0]}
                </span>
              )}
            </div>

            <h3 className="work-info-title">{activeProject.title}</h3>
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
                Lihat Semua di Arsip Teknis →
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
              <div className="section-label">Engineering Stack</div>
              <TypewriterTitle text="What I Can Do" />
              <div className="what-i-can-do-desc">
                Kombinasi kemampuan rekayasa backend, perancangan basis data relasional terstruktur, dan frontend modern untuk membangun sistem digital yang andal dan teruji di lingkungan produksi.
              </div>

              {/* Categorized Tech Showcase (ATM Modification) */}
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

          {/* RIGHT COLUMN: Elevated Bento Grid */}
          <div className="what-i-can-do-right">
            {WHAT_I_CAN_DO.map((group, index) => (
              <Reveal key={group.group} delay={150 + index * 120}>
                <div className={`bento-card ${group.size === "large" ? "bento-large" : "bento-medium"}`}>
                  <div className="bento-header">
                    <div className="bento-badge-chip">Domain</div>
                    <div className="bento-category">{group.group}</div>
                  </div>

                  <div className="bento-visual">
                    {index === 0 && (
                      <img src="/images/gif/coding.gif" alt="Web Development & QA" className="bento-gif" draggable={false} />
                    )}
                    {index === 1 && (
                      <img src="/images/gif/assistant.gif" alt="Virtual Assistance" className="bento-gif" draggable={false} />
                    )}
                    {index === 2 && (
                      <img src="/images/gif/social.gif" alt="Content & Digital" className="bento-gif" draggable={false} />
                    )}
                  </div>

                  <p className="bento-desc">{group.description}</p>

                  <div className="bento-skills">
                    {group.items.map((item) => (
                      <span key={item} className="bento-tag">{item}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <Reveal>
          <div className="section-label">ABOUT ME</div>
          <TypewriterTitle text={isMobile ? "Problem Solver.\nBackend Engineer." : "Problem Solver. Backend Engineer."} />
        </Reveal>

        <Reveal delay={100}>
          <div className="about-profile-card">
            <div className="about-profile-header">
              <div className="about-profile-image-wrapper">
                <img src="/images/about/profile.png" alt="Candra Putra" className="about-profile-image" draggable={false} />
              </div>
              <div className="about-profile-info">
                <div className="about-profile-name">
                  CANDRA PUTRA PRATAMA
                  <img src="/images/about/badge.png" alt="Verified" className="about-profile-badge" draggable={false} />
                </div>
                <div className="about-profile-stats">
                  <div className="about-stat-item">
                    <span className="about-stat-label">PROJECTS</span>
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
                      {emailCopied ? "✓ Email Tersalin!" : "Salin Email"}
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* CURRENTLY + CARD STACK */}
            <div className="about-bottom-row">
              <div className="currently-strip">
                <div className="currently-strip-label">CURRENTLY</div>
                <div className="currently-strip-items">
                  {CURRENTLY.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div className="currently-item" key={item.label}>
                        <span className="currently-icon">
                          <Icon size={16} strokeWidth={2} />
                        </span>
                        <div className="currently-text">
                          <div className="currently-item-label">{item.label}</div>
                          <div className="currently-item-detail">{item.detail}</div>
                        </div>
                      </div>
                    );
                  })}
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
                        "--tx": `${scatter.x + 140}px`,
                        "--ty": `${scatter.y - 60}px`,
                        "--rot": `${scatter.rot + 40}deg`,
                        "--sc": 0.85,
                        "--op": 0,
                        zIndex: 5,
                      };
                    } else {
                      const depth = offset;
                      style = {
                        "--tx": `${scatter.x + depth * 10}px`,
                        "--ty": `${scatter.y + depth * 8}px`,
                        "--rot": `${scatter.rot + depth * (scatter.rot >= 0 ? 5 : -5)}deg`,
                        "--sc": 1 - depth * 0.045,
                        "--op": depth === 0 ? 1 : 0.55 + (2 - depth) * 0.15,
                        zIndex: 30 - depth * 10,
                      };
                    }

                    return (
                      <div
                        key={trait}
                        className={`card-stack-card${offset === 0 ? " card-stack-card-front" : ""}`}
                        style={style}
                      >
                        <div className="card-stack-label">TRAIT</div>
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

      {/* AWARDS SECTION */}
      <section id="awards" className="section">
        <Reveal>
          <div className="section-label">Recognition</div>
          <TypewriterTitle text="Awards & Achievements" />
          <div className="section-desc">
            Pengakuan akademik dan pencapaian pengembangan sistem yang mencerminkan dedikasi terhadap kualitas dan standar tinggi.
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="awards-layout">
            <img src="/images/awards/awards.png" alt="Awards" className="awards-img" />
            <div className="awards-column">
              <a href="#" className="award-item">
                <div className="award-icon"><GraduationCap size={18} /></div>
                <div className="award-title">PENS Dean's Honor (IPK 3.76 / 4.00)</div>
                <ExternalLink size={12} style={{ marginLeft: "auto", flexShrink: 0 }} />
              </a>
              <a href="https://jasdor.vercel.app" target="_blank" rel="noreferrer" className="award-item">
                <div className="award-icon"><Trophy size={18} /></div>
                <div className="award-title">Jasdor Production (2.000+ Outlet Terhubung)</div>
                <ExternalLink size={12} style={{ marginLeft: "auto", flexShrink: 0 }} />
              </a>
              <a href="https://github.com/CandraPutraPratama" target="_blank" rel="noreferrer" className="award-item">
                <div className="award-icon"><Trophy size={18} /></div>
                <div className="award-title">BudgEx Enterprise (3-Tier Approval Workflow)</div>
                <ExternalLink size={12} style={{ marginLeft: "auto", flexShrink: 0 }} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="trainings" className="section">
        <Reveal>
          <div className="section-label">Growth & Experience</div>
          <TypewriterTitle text="Milestones & Journey" />
          <div className="section-desc">
            Rangkaian perjalanan studi, pengembangan produk nyata, dan eksplorasi sistem yang membentuk keahlian rekayasa perangkat lunak saya.
          </div>
        </Reveal>

        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={`experience-card${exp.imageLeft ? " experience-card-reverse" : ""}`}>
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
                {exp.certificates && exp.certificates.map((cert, certIdx) => (
                  <div key={certIdx}>
                    <a href={cert.link} className="experience-certificate" target="_blank" rel="noopener noreferrer">
                      {cert.name}
                      <ExternalLink size={12} style={{ marginLeft: 6 }} />
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
              <div className="contact-eyebrow">GET IN TOUCH</div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="contact-headline">
                LET'S WORK<br />
                <span className="contact-headline-accent">TOGETHER</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="contact-description">Looking for the next problem worth solving.</p>
            </Reveal>
            <Reveal delay={300}>
              <p className="contact-secondary">
                Terbuka untuk peluang magang (internship) Web Development & Backend Engineering, arsitektur software, serta kolaborasi rekayasa perangkat lunak.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a
                href="mailto:candraputrap46@gmail.com?subject=Permintaan%20Resume%20-%20Candra%20Putra"
                className="contact-resume-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD RESUME →
              </a>
            </Reveal>
          </div>

          <div className="contact-right">
            <div className="contact-cards">
              <Reveal delay={200}>
                <a href="mailto:candraputrap46@gmail.com" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-channel">Direct</span>
                  <div className="contact-card-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">EMAIL</div>
                    <div className="contact-card-value">candraputrap46@gmail.com</div>
                  </div>
                </a>
              </Reveal>
              <Reveal delay={280}>
                <a href="https://github.com/CandraPutraPratama" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-channel">Code</span>
                  <div className="contact-card-icon">
                    <Github size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">GITHUB</div>
                    <div className="contact-card-value">github.com/CandraPutraPratama</div>
                  </div>
                  <ExternalLink size={16} className="contact-card-arrow" />
                </a>
              </Reveal>
              <Reveal delay={360}>
                <a href="https://linkedin.com/in/candra-putra" className="contact-card" target="_blank" rel="noopener noreferrer">
                  <span className="contact-card-channel">Network</span>
                  <div className="contact-card-icon">
                    <Linkedin size={20} />
                  </div>
                  <div className="contact-card-info">
                    <div className="contact-card-label">LINKEDIN</div>
                    <div className="contact-card-value">linkedin.com/in/candra-putra</div>
                  </div>
                  <ExternalLink size={16} className="contact-card-arrow" />
                </a>
              </Reveal>
            </div>
            <Reveal delay={440}>
              <button
                className="contact-cta"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsModalMinimized(false);
                }}
              >
                SEND ME A MESSAGE →
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div className={`contact-modal${isModalMinimized ? " contact-modal--minimized" : ""}`}>
          <div className="contact-modal-header" onClick={() => isModalMinimized && setIsModalMinimized(false)}>
            <h3 className="contact-modal-title">Send Me a Message</h3>
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
                  <label className="contact-modal-label">Full Name</label>
                  <input type="text" name="name" className="contact-modal-input" placeholder="Your full name" required />
                </div>

                <div className="contact-modal-field">
                  <label className="contact-modal-label">Email Address</label>
                  <input type="email" name="email" className="contact-modal-input" placeholder="your.email@example.com" required />
                </div>

                <div className="contact-modal-field contact-modal-field--grow">
                  <label className="contact-modal-label">Message</label>
                  <textarea rows="6" name="message" className="contact-modal-input" placeholder="Tell me about your project..." required />
                </div>

                <button type="submit" className="contact-modal-submit" disabled={formStatus === "submitting"}>
                  {formStatus === "submitting" ? "SENDING..." : formStatus === "success" ? "MESSAGE SENT" : "SEND MESSAGE →"}
                </button>

                {formStatus === "error" && (
                  <div className="contact-modal-error">
                    Failed to send message. Please try again or contact me directly.
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
            <button className="success-modal-close" onClick={() => setShowSuccessModal(false)}>
              <X size={20} />
            </button>
            <div className="success-modal-icon">✓</div>
            <h3 className="success-modal-title">Message Sent!</h3>
            <p className="success-modal-text">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            <button className="success-modal-btn" onClick={() => setShowSuccessModal(false)}>
              CONTINUE BROWSING
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
