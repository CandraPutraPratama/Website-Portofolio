"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Search,
  X,
  Code2,
  FolderGit2,
  GraduationCap,
  Briefcase,
  FileText,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "../data/projects";
import { CORE_SKILLS } from "../data/skills";

interface SearchItem {
  id: string;
  title: string;
  category: "Navigasi" | "Proyek" | "Teknologi" | "Pengalaman & Prestasi" | "Aksi Cepat";
  description?: string;
  tags?: string[];
  icon: React.ReactNode;
  action: () => void;
  external?: boolean;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navigateTo = (href: string) => {
    onClose();
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = href;
    }
  };

  // Build searchable index items
  const allItems: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [
      // Quick Navigation
      {
        id: "nav-evidence",
        title: "Bukti & Capaian",
        category: "Navigasi",
        description: "Pesanan Jasdor, IPK, dan afiliasi",
        tags: ["bukti", "capaian", "angka", "ipk", "orders"],
        icon: <Sparkles className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo("/#evidence"),
      },
      {
        id: "nav-work",
        title: "Proyek Pilihan (Jasdor & BudgEx)",
        category: "Navigasi",
        description: "Aplikasi pemesanan live dan sistem persetujuan anggaran",
        tags: ["proyek", "portfolio", "showcase", "jasdor", "budgex"],
        icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("/#work"),
      },
      {
        id: "nav-skills",
        title: "Skill & Penguasaan Teknologi",
        category: "Navigasi",
        description: "Keahlian rekayasa backend, database relasional, dan frontend",
        tags: ["skills", "keahlian", "stack", "tools", "backend", "database"],
        icon: <Code2 className="w-4 h-4 text-blue-400" />,
        action: () => navigateTo("/#skills"),
      },
      {
        id: "nav-experience",
        title: "Pengalaman & Sertifikasi",
        category: "Navigasi",
        description: "PKL di PT Angkasa Pura I Juanda & pendidikan di PENS",
        tags: ["pengalaman", "sertifikat", "magang", "angkasa pura", "juanda", "pens"],
        icon: <Briefcase className="w-4 h-4 text-sky-400" />,
        action: () => navigateTo("/#experience"),
      },
      {
        id: "nav-archive",
        title: "Arsip Semua Proyek (Halaman /work)",
        category: "Navigasi",
        description: "Daftar lengkap proyek web dan basis data",
        tags: ["arsip", "work", "proyek lengkap", "database"],
        icon: <FolderGit2 className="w-4 h-4 text-violet-400" />,
        action: () => navigateTo("/work"),
      },
      {
        id: "nav-contact",
        title: "Kontak & Diskusi Kerjasama",
        category: "Navigasi",
        description: "Kirim pesan langsung via form atau email",
        tags: ["kontak", "email", "hubungi", "pesan"],
        icon: <GraduationCap className="w-4 h-4 text-teal-400" />,
        action: () => navigateTo("/#contact"),
      },

      // Quick Actions
      {
        id: "act-cv",
        title: "Download CV / Resume (PDF)",
        category: "Aksi Cepat",
        description: "Unduh resume terbaru Candra Putra Pratama format PDF",
        tags: ["cv", "resume", "pdf", "unduh", "download"],
        icon: <FileText className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("/resume.pdf"),
        external: true,
      },
      {
        id: "act-github",
        title: "Kunjungi GitHub Candra",
        category: "Aksi Cepat",
        description: "github.com/CandraPutraPratama — repositori publik dan kontribusi",
        tags: ["github", "source", "repo", "kode"],
        icon: <ExternalLink className="w-4 h-4 text-muted" />,
        action: () => navigateTo("https://github.com/CandraPutraPratama"),
        external: true,
      },
      {
        id: "act-linkedin",
        title: "Profil LinkedIn",
        category: "Aksi Cepat",
        description: "linkedin.com/in/candra-putra-pratama",
        tags: ["linkedin", "sosial", "koneksi", "profesional"],
        icon: <ExternalLink className="w-4 h-4 text-muted" />,
        action: () => navigateTo("https://linkedin.com/in/candra-putra-pratama"),
        external: true,
      },
    ];

    // Projects index
    PROJECTS.forEach((p) => {
      items.push({
        id: `proj-${p.title.toLowerCase().replace(/\s+/g, "-")}`,
        title: p.title,
        category: "Proyek",
        description: p.desc,
        tags: [p.title.toLowerCase(), p.category.toLowerCase(), ...(p.tech || [])],
        icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
        action: () => {
          if (p.liveUrl) {
            navigateTo(p.liveUrl);
          } else {
            navigateTo("/work");
          }
        },
        external: Boolean(p.liveUrl),
      });
    });

    // Tech Skills index
    CORE_SKILLS.forEach((s) => {
      items.push({
        id: `tech-${s.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`,
        title: s.name,
        category: "Teknologi",
        description: `${s.category} • Dipakai di: ${s.usedIn}`,
        tags: [s.name.toLowerCase(), s.category.toLowerCase(), "skill", "tech"],
        icon: <Code2 className="w-4 h-4 text-blue-400" />,
        action: () => navigateTo("/#skills"),
      });
    });

    return items;
  }, []);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 8);
    }

    const q = query.toLowerCase().trim();
    return allItems
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(q);
        const descMatch = item.description?.toLowerCase().includes(q);
        const tagMatch = item.tags?.some((t) => t.toLowerCase().includes(q));
        const catMatch = item.category.toLowerCase().includes(q);
        return titleMatch || descMatch || tagMatch || catMatch;
      })
      .slice(0, 10);
  }, [query, allItems]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  // Keep selected index in bounds when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Scroll active element into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (activeElement) {
      activeElement.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-500 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pencarian Cepat Portofolio"
    >
      <div
        className="w-full max-w-2xl bg-surface border border-line rounded-2xl shadow-2xl overflow-hidden animate-scaleUp transition-all"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 24px 64px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--line)",
        }}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-line bg-surface/50">
          <Search className="w-5 h-5 text-muted shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari proyek, stack, prestasi... (Esc)"
            className="w-full bg-transparent text-sm sm:text-base text-text placeholder:text-muted focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-muted hover:text-text hover:bg-surface-2 transition-colors"
              aria-label="Hapus teks pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[11px] font-mono text-muted bg-surface-2 border border-line rounded-md">
              ESC
            </kbd>
          )}
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin">
          {filteredItems.length === 0 ? (
            <div className="py-12 px-6 text-center text-muted">
              <Search className="w-8 h-8 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-medium text-text mb-1">
                Tidak ada hasil untuk &ldquo;{query}&rdquo;
              </p>
              <p className="text-xs text-muted max-w-sm mx-auto">
                Coba cari kata kunci lain seperti <span className="text-text font-mono">Next.js</span>,{" "}
                <span className="text-text font-mono">Jasdor</span>,{" "}
                <span className="text-text font-mono">BudgEx</span>, atau{" "}
                <span className="text-text font-mono">Resume</span>.
              </p>
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <div
                    key={item.id}
                    data-index={index}
                    onClick={() => item.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl cursor-pointer text-left transition-all ${
                      isSelected
                        ? "bg-text/10 text-text font-medium"
                        : "text-muted hover:bg-surface-2 hover:text-text"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`p-2 rounded-lg shrink-0 ${
                          isSelected ? "bg-text/15 text-text" : "bg-surface-2 text-muted"
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-text truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider bg-surface-2 text-muted border border-line shrink-0">
                            {item.category}
                          </span>
                        </div>
                        {item.description && (
                          <p className="text-xs text-muted truncate mt-0.5">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center text-muted text-xs">
                      {item.external ? (
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-surface-2/60 border-t border-line text-[11px] text-muted font-mono">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-line mr-1">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-line mr-1">↓</kbd>
              navigasi
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-line mr-1">↵</kbd>
              pilih
            </span>
          </div>
          <span>Pencarian Cepat</span>
        </div>
      </div>
    </div>
  );
}
