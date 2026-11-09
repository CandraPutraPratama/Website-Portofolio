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
  Calendar,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { PROJECTS } from "../data/projects";
import { TECH_STACK_SHOWCASE } from "../data/skills";
import { PUBLICATIONS_DATA } from "../data/publications";
import { siteConfig } from "../data/config";

interface SearchItem {
  id: string;
  title: string;
  category: "Navigasi" | "Proyek" | "Teknologi" | "Publikasi & Riset" | "Pengalaman & Prestasi" | "Aksi Cepat";
  description?: string;
  tags?: string[];
  icon: React.ReactNode;
  action: () => void;
  external?: boolean;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBookCall?: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenBookCall }: CommandPaletteProps) {
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
        id: "nav-work",
        title: "Work Gallery",
        category: "Navigasi",
        description: "Lihat karya pilihan, sistem enterprise, dan platform live",
        tags: ["proyek", "portfolio", "showcase", "jasdor", "budgex"],
        icon: <FolderGit2 className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("/#work"),
      },
      {
        id: "nav-skills",
        title: "What I Can Do",
        category: "Navigasi",
        description: "Keahlian rekayasa backend, database relasional, dan frontend",
        tags: ["skills", "keahlian", "stack", "tools", "backend", "database"],
        icon: <Code2 className="w-4 h-4 text-blue-400" />,
        action: () => navigateTo("/#what-i-can-do"),
      },
      {
        id: "nav-metrics",
        title: "Quantifiable Impact & Metrics",
        category: "Navigasi",
        description: "Metrik terukur dari performa dan sistem produksi nyata",
        tags: ["angka", "impact", "metrik", "performa", "uptime", "latency"],
        icon: <Sparkles className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo("/#metrics"),
      },
      {
        id: "nav-publications",
        title: "Publications & Research",
        category: "Navigasi",
        description: "Karya ilmiah, riset PBL PENS, dan analisis rekayasa sistem",
        tags: ["paper", "publikasi", "riset", "pbl", "jurnal", "pens"],
        icon: <FileText className="w-4 h-4 text-violet-400" />,
        action: () => navigateTo("/#publications"),
      },
      {
        id: "nav-about",
        title: "About Me",
        category: "Navigasi",
        description: "Profil mahasiswa D4 TI PENS dan latar belakang rekayasa",
        tags: ["tentang", "profil", "biodata", "pens", "candra"],
        icon: <GraduationCap className="w-4 h-4 text-teal-400" />,
        action: () => navigateTo("/#about"),
      },
      {
        id: "nav-awards",
        title: "Awards & Recognition",
        category: "Navigasi",
        description: "Sertifikasi industri PT Angkasa Pura I dan prestasi akademik",
        tags: ["penghargaan", "sertifikat", "angkasa pura", "juanda", "ipk"],
        icon: <Briefcase className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo("/#awards"),
      },
      {
        id: "nav-experience",
        title: "Milestones & Journey",
        category: "Navigasi",
        description: "Garis waktu perjalanan studi dan pengembangan sistem",
        tags: ["pengalaman", "timeline", "riwayat", "magang"],
        icon: <Briefcase className="w-4 h-4 text-sky-400" />,
        action: () => navigateTo("/#trainings"),
      },
      {
        id: "nav-contact",
        title: "Contact & Direct Communication",
        category: "Navigasi",
        description: "Kirim pesan langsung atau jadwalkan diskusi kerja sama",
        tags: ["kontak", "email", "hubungi", "pesan"],
        icon: <ArrowRight className="w-4 h-4 text-indigo-400" />,
        action: () => navigateTo("/#contact"),
      },

      // Quick Actions
      {
        id: "action-resume",
        title: "Download Resume (PDF)",
        category: "Aksi Cepat",
        description: "Unduh CV / resume terbaru Candra Putra Pratama",
        tags: ["cv", "resume", "pdf", "unduh", "curriculum vitae"],
        icon: <FileText className="w-4 h-4 text-rose-400" />,
        action: () => navigateTo(siteConfig.resumeUrl),
        external: true,
      },
      {
        id: "action-book-call",
        title: "Book a 15-Min Intro Call ↗",
        category: "Aksi Cepat",
        description: "Jadwalkan panggilan diskusi magang atau kolaborasi teknis",
        tags: ["jadwal", "meeting", "call", "cal.com", "calendly", "diskusi"],
        icon: <Calendar className="w-4 h-4 text-emerald-400" />,
        action: () => {
          onClose();
          if (onOpenBookCall) {
            onOpenBookCall();
          } else {
            window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
          }
        },
        external: true,
      },
    ];

    // Add Projects
    PROJECTS.forEach((p) => {
      items.push({
        id: `project-${p.num}`,
        title: p.title,
        category: "Proyek",
        description: `${p.category} • ${p.tech.slice(0, 3).join(", ")}`,
        tags: [p.title, p.category, ...p.tech, ...(p.awards || []), ...(p.impact || [])],
        icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
        action: () => {
          if (p.liveUrl) {
            navigateTo(p.liveUrl);
          } else if (p.githubUrl) {
            navigateTo(p.githubUrl);
          } else {
            navigateTo("/#work");
          }
        },
        external: Boolean(p.liveUrl || p.githubUrl),
      });
    });

    // Add Tech Stack
    TECH_STACK_SHOWCASE.forEach((s) => {
      items.push({
        id: `tech-${s.name.toLowerCase().replace(/\s+/g, "-")}`,
        title: `${s.name} (${s.category})`,
        category: "Teknologi",
        description: s.usedIn ? `Digunakan pada: ${s.usedIn}` : "Keahlian rekayasa teknologi",
        tags: [s.name, s.category, s.usedIn || ""],
        icon: <Code2 className="w-4 h-4 text-blue-400" />,
        action: () => navigateTo("/#what-i-can-do"),
      });
    });

    // Add Publications
    PUBLICATIONS_DATA.forEach((pub) => {
      items.push({
        id: pub.id,
        title: pub.title,
        category: "Publikasi & Riset",
        description: `${pub.year} • ${pub.venue}`,
        tags: [pub.title, pub.venue, ...pub.tags, pub.abstract],
        icon: <FileText className="w-4 h-4 text-violet-400" />,
        action: () => {
          if (pub.paperUrl) navigateTo(pub.paperUrl);
          else navigateTo("/#publications");
        },
        external: Boolean(pub.paperUrl),
      });
    });

    // Add Achievements & Certifications
    items.push(
      {
        id: "award-ap1",
        title: "Sertifikat PKL Stakeholder Relation — PT Angkasa Pura I",
        category: "Pengalaman & Prestasi",
        description: "Magang 6 bulan Bandara Internasional Juanda • Nilai 87,86",
        tags: ["angkasa pura", "bandara juanda", "pkl", "magang", "sertifikat"],
        icon: <Briefcase className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo("/#awards"),
      },
      {
        id: "award-pkd",
        title: "Sertifikat Penghargaan Latihan PKD ke-108",
        category: "Pengalaman & Prestasi",
        description: "Simulasi Penanggulangan Keadaan Darurat Bandara Juanda",
        tags: ["pkd", "darurat", "simulasi", "bandara", "juanda"],
        icon: <Briefcase className="w-4 h-4 text-amber-400" />,
        action: () => navigateTo("/#awards"),
      },
      {
        id: "award-gpa",
        title: "D4 Teknik Informatika PENS — IPK 3.76 / 4.00",
        category: "Pengalaman & Prestasi",
        description: "Semester 5 Politeknik Elektronika Negeri Surabaya",
        tags: ["pens", "ipk", "kuliah", "prestasi", "akademik"],
        icon: <GraduationCap className="w-4 h-4 text-emerald-400" />,
        action: () => navigateTo("/#awards"),
      }
    );

    return items;
  }, [onClose, onOpenBookCall]);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase().trim();
    return allItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description?.toLowerCase().includes(q) ?? false;
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchTags = item.tags?.some((t) => t.toLowerCase().includes(q)) ?? false;
      return matchTitle || matchDesc || matchCategory || matchTags;
    });
  }, [query, allItems]);

  // Reset selectedIndex when filter changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard events (Arrows, Enter, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
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

  // Scroll active item into view
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
            placeholder="Ketik untuk mencari proyek, stack, publikasi, prestasi... (Esc untuk tutup)"
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
                <span className="text-text font-mono">BudgeEx</span>, atau{" "}
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
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? "translate-x-1 opacity-100 text-text" : "opacity-0"
                          }`}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-line bg-surface/80 text-[11px] text-muted font-mono">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-surface-2 border border-line rounded">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-surface-2 border border-line rounded">↓</kbd>
              <span>Navigasi</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-surface-2 border border-line rounded">↵</kbd>
              <span>Pilih</span>
            </span>
            <span className="inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-surface-2 border border-line rounded">ESC</kbd>
              <span>Tutup</span>
            </span>
          </div>
          <div className="hidden sm:block text-muted/80">
            {filteredItems.length} hasil ditemukan
          </div>
        </div>
      </div>
    </div>
  );
}

