"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  FileDown,
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Minus,
  X,
} from "lucide-react";
import Header from "./Header";
import EvidenceSection from "./EvidenceSection";
import FeaturedProjects from "./FeaturedProjects";
import CoreSkills from "./CoreSkills";
import ExperienceCertifications from "./ExperienceCertifications";
import Footer from "./Footer";
import Reveal from "./Reveal";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const heroRef = useRef(null);
  const marqueeTrackRef = useRef(null);
  const rootRef = useRef(null);

  // Parallax Marquee effect in Hero
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (marqueeTrackRef.current) {
            const scrollY = window.scrollY;
            marqueeTrackRef.current.style.transform = `translateX(${-(scrollY * 0.25)}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={rootRef} className="portfolio-root">
      <Header />

      {/* 1. HERO SECTION */}
      <section id="hero" className="hero-root" ref={heroRef}>
        <h1 className="hero-sr-title">
          Candra Putra Pratama — Fullstack Web Developer
        </h1>

        {/* Subtle Geometric Grid & Ambient Glow */}
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-ambient-spotlight" aria-hidden="true" />

        {/* Availability Badge */}
        <div className="hero-availability-container">
          <div className="hero-availability-pill">
            <span className="availability-dot">
              <span className="availability-dot-ping" />
              <span className="availability-dot-core" />
            </span>
            <span className="availability-label">
              Tersedia magang mulai 6 Jan 2027 • WFO Surabaya / Sidoarjo
            </span>
          </div>
        </div>

        {/* Headline & Subheadline */}
        <div className="hero-content-meta">
          <h2 className="hero-headline-role">Fullstack Web Developer</h2>
          <p className="hero-headline-desc">
            Mahasiswa D4 Teknik Informatika PENS{" "}
            <span className="hero-headline-sep">•</span> Next.js, REST API, dan basis data relasional. Magang penuh waktu Senin–Jumat.
          </p>
        </div>

        {/* Dynamic Name Marquee (Stroke Outlined Signature) */}
        <div className="bg-name-marquee">
          <div className="bg-name-track" ref={marqueeTrackRef}>
            <span className="bg-name-text">CANDRA PUTRA</span>
            <span className="bg-name-text">CANDRA PUTRA</span>
          </div>
        </div>

        {/* Profile Silhouette */}
        <div className="profile-wrap">
          <img
            src="/images/profile.png"
            alt="Candra Putra"
            className="profile-image"
            draggable={false}
          />
          <div className="profile-overlay" aria-hidden="true" />
        </div>

        {/* Hero Actions: Single Primary CTA + Secondary Text Links */}
        <div className="hero-cta-group">
          <a
            href="/resume.pdf"
            download="Resume_Candra_Putra.pdf"
            className="hero-primary-cta"
            title="Download CV / Resume Candra Putra"
          >
            <FileDown size={15} />
            <span>Download CV</span>
          </a>

          <div className="hero-secondary-links">
            <a href="#work" className="hero-sublink">
              <span>Lihat Proyek</span>
              <ArrowDown size={13} />
            </a>
            <span className="hero-sublink-sep">•</span>
            <a href="#contact" className="hero-sublink">
              <span>Hubungi Saya</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Hero Social Shortcuts Bar */}
        <div className="hero-social-bar">
          <a
            href="https://github.com/CandraPutraPratama"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
            <span className="hero-social-tooltip">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/candra-putra-pratama"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social-btn"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
            <span className="hero-social-tooltip">LinkedIn</span>
          </a>
          <a
            href="mailto:candraputrap46@gmail.com"
            className="hero-social-btn"
            aria-label="Email Candra"
          >
            <Mail size={15} />
            <span className="hero-social-tooltip">Email</span>
          </a>
        </div>
      </section>

      {/* 2. BUKTI SECTION (Collaborations + Metrics Gabungan) */}
      <EvidenceSection />

      {/* 3. PROYEK PILIHAN SECTION (Jasdor + BudgEx) */}
      <FeaturedProjects />

      {/* 4. SKILL INTI SECTION (8 Core Skills) */}
      <CoreSkills />

      {/* 5. PENGALAMAN & SERTIFIKASI SECTION (Angkasa Pura I + PENS) */}
      <ExperienceCertifications />

      {/* 6. KONTAK SECTION */}
      <section id="contact" className="section relative py-16 sm:py-20">
        <div className="contact-grid">
          <div className="contact-left">
            <Reveal>
              <h2 className="contact-headline">Let&apos;s work together</h2>
            </Reveal>
            <Reveal delay={60}>
              <p className="contact-description">
                Mencari peluang magang Web Development &amp; Backend Engineering berikutnya yang menantang dan berdampak.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="contact-secondary">
                Terbuka untuk posisi magang mulai 6 Januari 2027 (WFO Surabaya / Sidoarjo, Hybrid, atau Remote).
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  download="Resume_Candra_Putra.pdf"
                  className="contact-resume-btn flex items-center gap-2 bg-text text-surface font-semibold hover:opacity-90 transition-opacity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown size={14} />
                  <span>Unduh Resume (PDF)</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsModalMinimized(false);
                  }}
                  className="contact-resume-btn flex items-center gap-2 border border-line bg-surface hover:bg-surface-2 transition-colors cursor-pointer"
                >
                  <Mail size={14} />
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </Reveal>
          </div>

          <div className="contact-right">
            <div className="contact-links-list space-y-3">
              <Reveal delay={100}>
                <a
                  href="mailto:candraputrap46@gmail.com"
                  className="contact-link-row flex items-center justify-between p-4 rounded-xl bg-surface border border-line hover:border-text/30 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="contact-link-role text-xs text-muted font-mono">
                      Direct Communication
                    </span>
                    <span className="contact-link-val text-sm font-semibold text-text group-hover:text-emerald-400 transition-colors">
                      candraputrap46@gmail.com
                    </span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow text-muted group-hover:text-text transition-colors" />
                </a>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href="https://github.com/CandraPutraPratama"
                  className="contact-link-row flex items-center justify-between p-4 rounded-xl bg-surface border border-line hover:border-text/30 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="contact-link-role text-xs text-muted font-mono">
                      Source Code &amp; Architecture
                    </span>
                    <span className="contact-link-val text-sm font-semibold text-text group-hover:text-emerald-400 transition-colors">
                      github.com/CandraPutraPratama
                    </span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow text-muted group-hover:text-text transition-colors" />
                </a>
              </Reveal>

              <Reveal delay={220}>
                <a
                  href="https://linkedin.com/in/candra-putra-pratama"
                  className="contact-link-row flex items-center justify-between p-4 rounded-xl bg-surface border border-line hover:border-text/30 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-1 text-left">
                    <span className="contact-link-role text-xs text-muted font-mono">
                      Professional Network
                    </span>
                    <span className="contact-link-val text-sm font-semibold text-text group-hover:text-emerald-400 transition-colors">
                      linkedin.com/in/candra-putra-pratama
                    </span>
                  </div>
                  <ExternalLink size={15} className="contact-link-arrow text-muted group-hover:text-text transition-colors" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* CONTACT MODAL */}
      {isModalOpen && (
        <div
          className={`contact-modal${isModalMinimized ? " contact-modal--minimized" : ""}`}
        >
          <div
            className="contact-modal-header"
            onClick={() => isModalMinimized && setIsModalMinimized(false)}
          >
            <h3 className="contact-modal-title">Kirim Pesan Langsung</h3>
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
                  const form = e.currentTarget;
                  const fd = new FormData(form);
                  const data = {
                    name: String(fd.get("name") || "").trim(),
                    email: String(fd.get("email") || "").trim(),
                    message: String(fd.get("message") || "").trim(),
                  };

                  setFormStatus("submitting");

                  try {
                    const res = await fetch("/api/contact", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    });
                    if (!res.ok) throw new Error("Request failed");
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
                  <input
                    type="text"
                    name="name"
                    className="contact-modal-input"
                    placeholder="Nama Anda"
                    required
                  />
                </div>

                <div className="contact-modal-field">
                  <label className="contact-modal-label">Alamat Email</label>
                  <input
                    type="email"
                    name="email"
                    className="contact-modal-input"
                    placeholder="nama@perusahaan.com"
                    required
                  />
                </div>

                <div className="contact-modal-field contact-modal-field--grow">
                  <label className="contact-modal-label">Pesan</label>
                  <textarea
                    rows={5}
                    name="message"
                    className="contact-modal-input"
                    placeholder="Tuliskan pesan atau detail peluang magang..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-modal-submit"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting"
                    ? "Mengirim..."
                    : formStatus === "success"
                      ? "Pesan Terkirim"
                      : "Kirim Pesan"}
                </button>

                {formStatus === "error" && (
                  <div className="contact-modal-error">
                    Gagal mengirim pesan. Silakan hubungi langsung via candraputrap46@gmail.com.
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      )}

      {showSuccessModal && (
        <div
          className="success-modal-overlay"
          onClick={() => setShowSuccessModal(false)}
        >
          <div className="success-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="success-modal-close"
              onClick={() => setShowSuccessModal(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div className="success-modal-icon">✓</div>
            <h3 className="success-modal-title">Pesan Berhasil Terkirim</h3>
            <p className="success-modal-text">
              Terima kasih telah menghubungi. Saya akan membalas pesan Anda secepatnya.
            </p>
            <button
              className="success-modal-btn"
              onClick={() => setShowSuccessModal(false)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
