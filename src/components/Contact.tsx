"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Check } from "lucide-react";
import Turnstile from "react-turnstile";
import { useTheme } from "./ThemeProvider";
import { translations } from "@/lib/translations";

const GithubIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const { isDark, lang } = useTheme();
  const t = translations[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("candraputrap46@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!turnstileToken) {
      setErrorMessage(
        lang === "US"
          ? "Please complete the security verification first."
          : "Harap selesaikan verifikasi captcha terlebih dahulu."
      );
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
        setErrorMessage(
          data.error ||
            (lang === "US"
              ? "Failed to deliver message. Please contact via direct email."
              : "Gagal mengirim pesan. Silakan hubungi langsung via email.")
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage(
        lang === "US"
          ? "Network connection issue. Please use direct email."
          : "Terjadi gangguan jaringan. Silakan hubungi via email langsung."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSubmitDisabled = isSubmitting || !turnstileToken;

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-6 py-16 md:py-32 bg-neutral-50 dark:bg-black text-black dark:text-white font-mono border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── LEFT COLUMN ── */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:-mt-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-4">
                {t.headingPart1}
                <br />
                {t.headingPart2}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs md:text-base leading-relaxed font-sans">
                {t.subtitle}
              </p>
            </motion.div>

            {/* Direct Contact Cards (Numbered 01, 02, 03 style) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-3"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t.directEmail}
              </span>

              {/* 01 Email */}
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Salin alamat email candraputrap46@gmail.com"
                className="flex items-center justify-between gap-3 px-4 py-3.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl cursor-pointer hover:border-black dark:hover:border-white transition-all select-none group w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">01</span>
                  <Mail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-black dark:text-white truncate">
                    candraputrap46@gmail.com
                  </span>
                </div>
                <div className="text-neutral-500 group-hover:text-black dark:group-hover:text-white transition-colors flex-shrink-0">
                  {copied ? (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 dark:text-green-400">
                      <Check className="w-3.5 h-3.5" />
                      {lang === "US" ? "Copied" : "Tersalin"}
                    </span>
                  ) : (
                    <span className="text-[10px] font-semibold text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                      {lang === "US" ? "Copy" : "Salin"}
                    </span>
                  )}
                </div>
              </button>

              {/* 02 GitHub */}
              <a
                href="https://github.com/CandraPutraPratama"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kunjungi profil GitHub Candra Putra"
                className="flex items-center justify-between gap-3 px-4 py-3.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl cursor-pointer hover:border-black dark:hover:border-white transition-all group w-full text-left shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">02</span>
                  <div className="w-4 h-4 text-neutral-500 flex-shrink-0 flex items-center justify-center">
                    <GithubIcon />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-black dark:text-white truncate">
                    github.com/CandraPutraPratama
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                  ↗
                </span>
              </a>

              {/* 03 LinkedIn */}
              <a
                href="https://linkedin.com/in/candra-putra-a08231397"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kunjungi profil LinkedIn Candra Putra"
                className="flex items-center justify-between gap-3 px-4 py-3.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl cursor-pointer hover:border-black dark:hover:border-white transition-all group w-full text-left shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[10px] font-black px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">03</span>
                  <div className="w-4 h-4 text-neutral-500 flex-shrink-0 flex items-center justify-center">
                    <LinkedinIcon />
                  </div>
                  <span className="font-bold text-xs sm:text-sm text-black dark:text-white truncate">
                    linkedin.com/in/candra-putra
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-neutral-400 group-hover:text-black dark:group-hover:text-white">
                  ↗
                </span>
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Form Bento Container ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-6 shadow-md"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 gap-4">
                  <div className="text-5xl">🎉</div>
                  <h3 className="text-2xl font-black uppercase text-black dark:text-white">
                    {t.sentTitle}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm font-sans">
                    {t.sentDesc}
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setTurnstileToken(null);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-xl uppercase tracking-widest hover:opacity-85 transition-opacity"
                  >
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-800 text-red-800 dark:text-red-200 text-xs font-mono">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Field: Nama */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-name"
                        className="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                      >
                        {t.nameLabel}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder={t.namePlaceholder}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm font-mono text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>

                    {/* Field: Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="contact-email"
                        className="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                      >
                        {t.emailLabel}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder={t.emailPlaceholder}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm font-mono text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Field: Subjek */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-subject"
                      className="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                    >
                      {t.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      placeholder={t.subjectPlaceholder}
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm font-mono text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                    />
                  </div>

                  {/* Field: Pesan */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-message"
                      className="text-[10px] font-bold uppercase tracking-widest text-neutral-500"
                    >
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder={t.messagePlaceholder}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm font-mono text-black dark:text-white placeholder-neutral-400 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile */}
                  <div className="self-start max-w-full overflow-x-auto my-1">
                    <Turnstile
                      key={isDark ? "dark" : "light"}
                      sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                      theme={isDark ? "dark" : "light"}
                      onVerify={(token) => {
                        setTurnstileToken(token);
                        setErrorMessage(null);
                      }}
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
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-black dark:bg-white text-white dark:text-black text-xs font-black uppercase tracking-[0.15em] rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">{t.sendingBtn}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        {t.sendBtn}
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
      <div className="max-w-5xl mx-auto mt-16 md:mt-20 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-3 text-[11px] md:text-xs text-neutral-500 text-center md:text-left">
        <p>© {new Date().getFullYear()} Candra Putra. {t.copyright}</p>
        <p className="font-mono">{t.builtWith}</p>
      </div>
    </section>
  );
};

export default Contact;
