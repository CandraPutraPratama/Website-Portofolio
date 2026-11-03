"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import Turnstile from "react-turnstile";
import { useTheme } from "./ThemeProvider";
import { translations, EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/translations";
import Reveal from "./Reveal";

export default function Contact() {
  const { lang } = useTheme();
  const t = translations[lang].contact;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
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
          : "Harap selesaikan verifikasi keamanan terlebih dahulu."
      );
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Pesan dari portofolio — ${form.name}`,
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
    } catch {
      setErrorMessage(
        lang === "US"
          ? "Network connection issue. Please use direct email."
          : "Terjadi gangguan jaringan. Silakan hubungi via email langsung."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const rows = [
    { label: t.emailLabel, value: EMAIL, href: `mailto:${EMAIL}`, copy: true },
    { label: t.githubLabel, value: "github.com/CandraPutraPratama", href: GITHUB_URL },
    { label: t.linkedinLabel, value: "linkedin.com/in/candra-putra", href: LINKEDIN_URL },
  ];

  const inputCls =
    "w-full bg-surface px-4 py-3.5 text-[16px] text-ink placeholder:text-muted/70 focus:outline-none";

  return (
    <section id="kontak" aria-label={t.heading} className="px-5 py-24 md:px-8 md:py-32">
      <Reveal>
        <h2 className="max-w-[16ch] text-[clamp(2rem,1.3rem+3.2vw,4rem)] font-extrabold leading-[1.05] tracking-tight">
          {t.heading}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-[52ch] text-ink/85">{t.sub}</p>
      </Reveal>

      {/* Display rows */}
      <div className="mt-12 md:mt-16">
        {rows.map((r, i) => (
          <Reveal key={r.label} delay={Math.min(i * 0.06, 0.18)}>
            <div className="flex items-center gap-4 py-5 md:py-7">
              <span className="w-20 shrink-0 text-sm text-muted md:w-28">{r.label}</span>
              <a
                href={r.href}
                target={r.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex min-w-0 flex-1 items-center gap-3"
              >
                <span className="truncate text-[clamp(1.15rem,3.4vw,2.6rem)] font-bold tracking-tight transition-colors group-hover:text-accent">
                  {r.value}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  size={28}
                />
              </a>
              {r.copy && (
                <button
                  onClick={handleCopyEmail}
                  aria-label={t.copyEmailAria}
                  className="shrink-0 p-2 text-muted transition-colors hover:text-accent"
                >
                  {copied ? <Check size={18} className="text-accent" /> : <Copy size={18} />}
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      {copied && (
        <p role="status" className="text-sm text-accent">
          {t.emailCopied}
        </p>
      )}

      {/* Form */}
      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
              {lang === "US" ? "Or via the form" : "Atau lewat formulir"}
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          {isSubmitted ? (
            <Reveal>
              <div className="bg-surface p-8">
                <p className="text-2xl font-bold tracking-tight">{t.sentTitle}</p>
                <p className="mt-3 text-ink/85">{t.sentDesc}</p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                    setTurnstileToken(null);
                  }}
                  className="mt-6 rounded-full border border-ink/25 px-6 py-3 text-[15px] font-bold transition-colors hover:border-accent hover:text-accent"
                >
                  {t.sendAnother}
                </button>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Reveal>
                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
                    {t.nameLabel}
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className={inputCls}
                  />
                </label>
              </Reveal>
              <Reveal delay={0.06}>
                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
                    {t.emailFieldLabel}
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    className={inputCls}
                  />
                </label>
              </Reveal>
              <Reveal delay={0.12}>
                <label className="block">
                  <span className="mb-2 block text-[13px] font-bold uppercase tracking-[0.14em] text-muted">
                    {t.messageLabel}
                  </span>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    className={`${inputCls} resize-y`}
                  />
                </label>
              </Reveal>
              <Reveal delay={0.16}>
                <Turnstile
                  sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                  onVerify={(token) => setTurnstileToken(token)}
                  onExpire={() => setTurnstileToken(null)}
                  onError={() => setTurnstileToken(null)}
                  theme="dark"
                />
              </Reveal>
              {errorMessage && (
                <p role="alert" className="text-[15px] text-red-400">
                  {errorMessage}
                </p>
              )}
              <Reveal delay={0.2}>
                <button
                  type="submit"
                  disabled={isSubmitting || !turnstileToken}
                  className="rounded-full bg-accent px-8 py-3.5 text-[15px] font-bold text-accent-ink transition-all hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
                >
                  {isSubmitting ? t.sendingBtn : t.sendBtn}
                </button>
              </Reveal>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
