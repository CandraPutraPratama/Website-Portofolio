"use client";

import React, { useState, useEffect } from "react";
import Reveal from "./Reveal";
import { Mail, Github, Linkedin, Send, Coffee, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [coffeeCount, setCoffeeCount] = useState(42);
  const [coffeeLoading, setCoffeeLoading] = useState(false);

  // Fetch initial coffee count
  useEffect(() => {
    fetch("/api/coffee-count")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.count === "number") {
          setCoffeeCount(data.count);
        }
      })
      .catch(() => {});
  }, []);

  const handleCoffeeClick = async () => {
    if (coffeeLoading) return;
    setCoffeeLoading(true);
    // Optimistic UI update
    setCoffeeCount((prev) => prev + 1);

    try {
      const res = await fetch("/api/coffee-count", { method: "POST" });
      const data = await res.json();
      if (data && typeof data.count === "number") {
        setCoffeeCount(data.count);
      }
    } catch (e) {
      // Keep optimistic count
    } finally {
      setCoffeeLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) return;

    setFormStatus("submitting");

    const payload = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      // Optional: replace with your active Google Apps Script web app URL
      const scriptUrl =
        process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbz68sln0VIOOVOegEYiQLJwTdLonmPHMzq8jqzWCaqdgUAG2-LWxJVuRaEM5HQl6ABH/exec";

      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setFormStatus("success");
      form.reset();
    } catch (err) {
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-5 max-w-5xl mx-auto w-full">
      <Reveal>
        <div className="flex flex-col items-start mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-2">
            // HUBUNGI SAYA
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-text">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-sm sm:text-base text-muted mt-2 max-w-xl">
            Sedang mencari Web & Backend Developer Intern untuk semester 6?
            Kirimkan pesan atau hubungi saya langsung.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Information & Coffee Counter */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <Reveal delay={100}>
            <div className="p-7 rounded-2xl bg-surface border border-line shadow-sm space-y-5">
              <h3 className="font-display font-bold text-lg text-text">
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <a
                  href="mailto:candraputrap46@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-line hover:border-text/30 transition-all text-text"
                >
                  <Mail className="w-4 h-4 text-emerald-500" />
                  <span className="truncate">candraputrap46@gmail.com</span>
                </a>

                <a
                  href="https://github.com/CandraPutraPratama"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-line hover:border-text/30 transition-all text-text"
                >
                  <Github className="w-4 h-4 text-muted" />
                  <span>github.com/CandraPutraPratama</span>
                </a>

                <a
                  href="https://linkedin.com/in/candra-putra"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-2 border border-line hover:border-text/30 transition-all text-text"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  <span>linkedin.com/in/candra-putra</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Coffee Counter Box */}
          <Reveal delay={200}>
            <div className="p-7 rounded-2xl bg-surface border border-line shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-500">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display font-bold text-base text-text">
                    Traktir Kopi
                  </div>
                  <div className="font-mono text-xs text-muted">
                    {coffeeCount} cangkir kopi terkumpul
                  </div>
                </div>
              </div>

              <button
                onClick={handleCoffeeClick}
                disabled={coffeeLoading}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-text text-bg font-mono text-xs font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5"
              >
                <Coffee className="w-3.5 h-3.5" /> +1 Kopi
              </button>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <Reveal delay={150}>
            <div className="p-7 md:p-8 rounded-2xl bg-surface border border-line shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-muted mb-1.5 uppercase"
                  >
                    Nama Anda
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-text transition-colors font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-muted mb-1.5 uppercase"
                  >
                    Email Anda
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-text transition-colors font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted mb-1.5 uppercase"
                  >
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Halo Candra, kami tertarik untuk mendiskusikan peluang magang di tim kami..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-2 border border-line text-text placeholder:text-muted/60 text-sm focus:outline-none focus:border-text transition-colors font-sans resize-none"
                  />
                </div>

                {formStatus === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Pesan berhasil dikirim! Saya akan membalas secepatnya.</span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 font-mono text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Gagal mengirim pesan. Silakan hubungi via email langsung.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-3.5 rounded-xl bg-text text-bg font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
