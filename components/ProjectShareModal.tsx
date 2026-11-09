"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, ExternalLink, X } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectShareModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectShareModal({
  project,
  isOpen,
  onClose,
}: ProjectShareModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const projectUrl =
    typeof window !== "undefined"
      ? project.liveUrl || `${window.location.origin}/#work`
      : `https://candraputra.me/#work`;

  const shareText = `Lihat proyek "${project.title}" oleh Candra Putra Pratama (Fullstack Developer): ${project.desc}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(projectUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      projectUrl
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      shareText
    )}&url=${encodeURIComponent(projectUrl)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const shareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${shareText} ${projectUrl}`
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-500 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-sm bg-surface border border-line rounded-2xl shadow-2xl p-5 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-line mb-4">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-emerald-400" />
            <h4 className="text-sm font-semibold text-text">Bagikan Proyek</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted hover:text-text hover:bg-surface-2 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mb-4">
          <p className="text-xs font-semibold text-text truncate">
            {project.title}
          </p>
          <p className="text-[11px] text-muted truncate mt-0.5">
            {project.category}
          </p>
        </div>

        {/* Share buttons */}
        <div className="space-y-2">
          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-line bg-surface-2/60 hover:bg-surface-2 text-text text-xs font-medium transition-all"
          >
            <span className="flex items-center gap-2">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-muted" />
              )}
              <span>{copied ? "Tautan Tersalin!" : "Salin Tautan"}</span>
            </span>
            <span className="text-[10px] font-mono text-muted">URL</span>
          </button>

          {/* LinkedIn */}
          <button
            onClick={shareLinkedIn}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-line bg-surface-2/60 hover:bg-surface-2 text-text text-xs font-medium transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              <span>Bagikan ke LinkedIn</span>
            </span>
            <span className="text-[10px] font-mono text-muted">Post</span>
          </button>

          {/* X / Twitter */}
          <button
            onClick={shareTwitter}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-line bg-surface-2/60 hover:bg-surface-2 text-text text-xs font-medium transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-sky-400" />
              <span>Bagikan ke X (Twitter)</span>
            </span>
            <span className="text-[10px] font-mono text-muted">Tweet</span>
          </button>

          {/* WhatsApp */}
          <button
            onClick={shareWhatsApp}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-line bg-surface-2/60 hover:bg-surface-2 text-text text-xs font-medium transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>Kirim via WhatsApp</span>
            </span>
            <span className="text-[10px] font-mono text-muted">Chat</span>
          </button>
        </div>
      </div>
    </div>
  );
}

