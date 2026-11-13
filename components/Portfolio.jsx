"use client";

import React, { useState } from "react";
import { Minus, X } from "lucide-react";
import SiteNav from "./SiteNav";
import SiteMotion from "./SiteMotion";
import { Hero, Work, Skills, About, Journey } from "./SiteSections";

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMinimized, setIsModalMinimized] = useState(false);
  const [formStatus, setFormStatus] = useState("idle");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="r-root">
      <a className="r-skip" href="#main">
        Lewati ke konten
      </a>

      <SiteNav />
      <SiteMotion />

      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Journey />

        <section id="kontak" className="r-section" aria-labelledby="h-kontak">
          <div className="r-contact" data-reveal>
            <h2 className="r-h2" id="h-kontak">
              Kontak
            </h2>
            <p className="r-sub">
              Terbuka untuk diskusi proyek dan kerja sama.
            </p>
            <a className="r-mail" href="mailto:candraputrap46@gmail.com">
              candraputrap46@gmail.com
            </a>
            <div className="r-contact-actions">
              <button
                type="button"
                className="r-btn"
                onClick={() => {
                  setIsModalOpen(true);
                  setIsModalMinimized(false);
                }}
              >
                Kirim pesan lewat formulir
              </button>
              <a className="r-link" href="/resume.pdf" download="Resume_Candra_Putra.pdf">
                Unduh CV (PDF)
              </a>
              <a
                className="r-link"
                href="https://github.com/CandraPutraPratama"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="r-link"
                href="https://linkedin.com/in/candra-putra-pratama"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="r-footer">
        <p>2026, Candra Putra Pratama</p>
      </footer>

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
