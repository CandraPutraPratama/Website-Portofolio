"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, Copy, Check } from "lucide-react";
import Turnstile from "react-turnstile";
import { useTheme } from "./ThemeProvider";

// SVG inline untuk ikon yang tidak tersedia di versi lucide-react ini
const GithubIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);



const Contact = () => {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("candraputrap46@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!turnstileToken) {
      alert("Harap selesaikan verifikasi captcha terlebih dahulu!");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          captchaToken: turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
      } else {
        alert(data.error || "Gagal mengirim pesan.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Terjadi kesalahan koneksi saat mengirim pesan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = isSubmitting || !turnstileToken;

  return (
    <section
      id="contact"
      className="w-full px-4 py-12 md:py-32 bg-black dark:bg-white text-white dark:text-black font-mono border-t border-neutral-800 dark:border-neutral-200 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN: Text, Email Card, Socials ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:-mt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-[62px] font-black uppercase tracking-tighter leading-[0.95] mb-5">
                MARI MULAI<br />PROYEK BARU
              </h2>
              <p className="text-neutral-400 dark:text-neutral-500 text-sm md:text-base leading-relaxed mt-2">
                Tertarik bekerja sama? Isi formulir ini atau kirim email langsung kepada saya.
                Saya tersedia untuk peran lepas maupun purna waktu.
              </p>
            </motion.div>

            {/* Email card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                EMAIL LANGSUNG
              </span>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Salin alamat email"
                className="flex items-center justify-between px-6 py-4.5 bg-neutral-900 dark:bg-neutral-50 border border-neutral-800 dark:border-neutral-200 rounded-2xl cursor-pointer hover:border-neutral-600 dark:hover:border-neutral-400 transition-all select-none group w-fit max-w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-400 dark:text-neutral-500" />
                  <span className="font-bold text-base text-white dark:text-black">
                    candraputrap46@gmail.com
                  </span>
                </div>
                <div className="ml-4 text-neutral-500 group-hover:text-white dark:group-hover:text-black transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </div>
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                JEJAK DIGITAL
              </span>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/candra-putra-a08231397"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi profil LinkedIn Candra Putra"
                  className="w-14 h-14 rounded-xl border border-neutral-800 dark:border-neutral-200 flex items-center justify-center bg-transparent text-neutral-400 dark:text-neutral-500 hover:bg-neutral-900/50 dark:hover:bg-neutral-100/50 hover:border-white dark:hover:border-black hover:text-white dark:hover:text-black transition-all"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="https://github.com/CandraPutraPratama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi profil GitHub Candra Putra"
                  className="w-14 h-14 rounded-xl border border-neutral-800 dark:border-neutral-200 flex items-center justify-center bg-transparent text-neutral-400 dark:text-neutral-500 hover:bg-neutral-900/50 dark:hover:bg-neutral-100/50 hover:border-white dark:hover:border-black hover:text-white dark:hover:text-black transition-all"
                >
                  <GithubIcon />
                </a>
                <a
                  href="https://instagram.com/candraaaptra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kunjungi profil Instagram Candra Putra"
                  className="w-14 h-14 rounded-xl border border-neutral-800 dark:border-neutral-200 flex items-center justify-center bg-transparent text-neutral-400 dark:text-neutral-500 hover:bg-neutral-900/50 dark:hover:bg-neutral-100/50 hover:border-white dark:hover:border-black hover:text-white dark:hover:text-black transition-all"
                >
                  <InstagramIcon />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Form Bento Container ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#0b0b0b] dark:bg-neutral-50 border border-neutral-900 dark:border-neutral-200 rounded-3xl p-6 md:p-8 flex flex-col gap-6"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-20 gap-4">
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-2xl font-black uppercase text-white dark:text-black">Message Sent!</h3>
                  <p className="text-neutral-400 dark:text-neutral-500 text-sm">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setTurnstileToken(null); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-4 px-6 py-2.5 bg-white dark:bg-black text-black dark:text-white text-xs font-bold rounded-xl uppercase tracking-widest hover:opacity-80 transition-opacity"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Field: Nama */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                        NAMA ANDA
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Candra Putra"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-950 dark:bg-neutral-100/50 border border-neutral-900 dark:border-neutral-200 rounded-xl text-sm font-mono text-white dark:text-black placeholder-neutral-600 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors"
                      />
                    </div>

                    {/* Field: Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                        EMAIL ANDA
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="candra@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-950 dark:bg-neutral-100/50 border border-neutral-900 dark:border-neutral-200 rounded-xl text-sm font-mono text-white dark:text-black placeholder-neutral-600 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field: Subjek */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-subject" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      SUBJEK
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder="Kolaborasi Proyek"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-950 dark:bg-neutral-100/50 border border-neutral-900 dark:border-neutral-200 rounded-xl text-sm font-mono text-white dark:text-black placeholder-neutral-600 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors"
                    />
                  </div>

                  {/* Field: Pesan */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                      PESAN
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Ceritakan tentang proyek Anda..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-neutral-950 dark:bg-neutral-100/50 border border-neutral-900 dark:border-neutral-200 rounded-xl text-sm font-mono text-white dark:text-black placeholder-neutral-600 dark:placeholder-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile Widget */}
                  <div className="self-start">
                    <Turnstile
                      key={isDark ? "dark" : "light"}
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                      theme={isDark ? "dark" : "light"}
                      onVerify={(token) => setTurnstileToken(token)}
                      onExpire={() => setTurnstileToken(null)}
                      onError={() => setTurnstileToken(null)}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitDisabled}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-white dark:bg-black text-black dark:text-white text-sm font-black uppercase tracking-[0.15em] rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Mengirim...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        KIRIM PESAN
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-20 pt-8 border-t border-neutral-800 dark:border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400 dark:text-neutral-500">
        <p>© {new Date().getFullYear()} Candra Putra. Hak Cipta Dilindungi.</p>
        <p className="font-mono">Dibangun dengan Next.js + Framer Motion ✦</p>
      </div>
    </section>
  );
};

export default Contact;
