"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  X,
  ExternalLink,
  Clock,
  Video,
  Mail,
  CheckCircle2,
  Copy,
  MessageSquare,
} from "lucide-react";
import { siteConfig } from "../data/config";

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  const [copied, setCopied] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowIframe(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Jadwalkan Panggilan Diskusi"
    >
      <div
        className="w-full max-w-xl bg-surface border border-line rounded-2xl shadow-2xl overflow-hidden animate-scaleUp transition-all"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 24px 64px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--line)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line bg-surface/70">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-text">
                Book a 15-Min Intro Call
              </h3>
              <p className="text-xs text-muted">
                Diskusi peluang magang, arsitektur sistem, atau kolaborasi teknis
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors"
            aria-label="Tutup jendela booking"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5">
          {showIframe ? (
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden border border-line bg-surface-2">
              <iframe
                src={siteConfig.bookingUrl}
                title="Cal.com Scheduling Page"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <>
              {/* Highlight Card */}
              <div className="p-4 rounded-xl border border-line bg-surface-2/60 space-y-3">
                <div className="flex items-center justify-between text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5 font-medium text-text">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    15 Menit • Google Meet / Zoom
                  </span>
                  <span className="px-2 py-0.5 rounded-full font-mono text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Gratis & Cepat
                  </span>
                </div>
                <p className="text-sm text-text/90 leading-relaxed">
                  Pilih waktu yang paling fleksibel untuk Anda. Kalender terintegrasi otomatis
                  dengan Google Calendar, mengirimkan link meeting instan, dan pengingat jadwal.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Diskusi Penempatan Magang</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>WFO Surabaya / Sidoarjo / Remote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Tinjauan Portofolio & Kode</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Jadwal Langsung Terkonfirmasi</span>
                  </div>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="space-y-3">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-surface bg-text hover:opacity-90 active:scale-[0.99] transition-all shadow-md group"
                >
                  <Video className="w-4 h-4" />
                  <span>Buka Kalender Cal.com</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowIframe(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-muted hover:text-text border border-line bg-surface-2/40 hover:bg-surface-2 transition-colors"
                >
                  <span>Buka Kalender di Dalam Modal Ini</span>
                </button>
              </div>

              {/* Secondary Options */}
              <div className="pt-2 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted" />
                  <span>Lebih suka via email?</span>
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line bg-surface-2 hover:text-text transition-colors font-mono text-[11px]"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{siteConfig.email} (Tersalin!)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin: {siteConfig.email}</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

