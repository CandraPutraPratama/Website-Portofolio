"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Share2 } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";
import ProjectShareModal from "./ProjectShareModal";

const CATEGORIES = [
  "Semua",
  "Fullstack",
  "Frontend",
  "Backend & Database",
];

export default function WorksGallery({ projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [sharingProject, setSharingProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "Semua") return true;
    if (activeCategory === "Fullstack") {
      return (
        project.categoryFilter === "Fullstack" ||
        project.category?.includes("Full-Stack") ||
        project.title?.includes("Jasdor")
      );
    }
    if (activeCategory === "Backend & Database") {
      return (
        project.categoryFilter === "Backend & Database" ||
        project.category?.includes("Backend") ||
        project.title?.includes("BudgEx") ||
        project.title?.includes("Inventaris")
      );
    }
    if (activeCategory === "Frontend") {
      return (
        project.categoryFilter === "Frontend" ||
        project.category?.includes("Frontend") ||
        project.title?.includes("Portfolio") ||
        project.title?.includes("Keuangan")
      );
    }
    return project.category === activeCategory;
  });

  return (
    <div className="works-page-root">
      <div className="works-container">
        {/* Section Header */}
        <Reveal>
          <div className="works-header">
            <h1 className="works-title">Arsip Proyek</h1>
            <p className="works-subtitle">
              Proyek mandiri, tugas kuliah, dan proyek tim PBL: aplikasi web dengan backend dan basis data relasional.
            </p>
          </div>
        </Reveal>

        {/* Filter Navigation */}
        <Reveal delay={60}>
          <ul className="works-filter-nav">
            {CATEGORIES.map((cat) => (
              <li key={cat}>
                <button
                  type="button"
                  className={`works-filter-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Projects Grid */}
        <div className="works-grid">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.title} delay={80 + (idx % 3) * 60}>
              <div className="works-card group">
                {/* Image Wrap */}
                <div className="works-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="works-card-img"
                    loading={idx < 3 ? "eager" : "lazy"}
                    decoding={idx < 3 ? "sync" : "async"}
                  />
                  <div className="works-card-overlay">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="works-card-details-btn"
                        title="Buka Live Demo"
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    ) : project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="works-card-details-btn"
                        title="Buka Repositori GitHub"
                      >
                        <Github size={20} />
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Content */}
                <div className="works-card-content">
                  <div className="works-card-header-meta">
                    <span className="works-card-category">{project.category}</span>
                    {project.year && <span className="works-card-year">{project.year}</span>}
                  </div>

                  <h3 className="works-card-title">{project.title}</h3>
                  <p className="works-card-desc">{project.desc}</p>

                  {/* Impact Bullets for Recruiter */}
                  {project.impact && project.impact.length > 0 && (
                    <div className="works-card-impact">
                      <div className="works-impact-title">Key Impact &amp; Architecture:</div>
                      <ul className="works-impact-items">
                        {project.impact.slice(0, 2).map((pt, i) => (
                          <li key={i} className="works-impact-bullet-line">
                            <span className="works-bullet">•</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Badges */}
                  <div className="works-card-tech">
                    {project.tech?.slice(0, 5).map((t) => (
                      <span key={t} className="works-card-chip">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons: Live Demo & Source Code */}
                  <div className="works-card-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="works-card-action-btn works-card-action-btn--primary"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="works-card-action-btn works-card-action-btn--secondary"
                      >
                        <Github size={13} />
                        <span>Source Code</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSharingProject(project)}
                      className="works-card-action-btn works-card-action-btn--secondary"
                      title="Bagikan Proyek"
                    >
                      <Share2 size={13} />
                      <span>Bagikan</span>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Call to Action Section */}
        <Reveal delay={120}>
          <div className="works-cta-section">
            <h2 className="works-cta-title">
              Tertarik untuk memulai proyek atau berkolaborasi?
            </h2>
            <p className="works-cta-desc">
              Terbuka untuk peluang magang Web Development &amp; Backend Engineering, arsitektur software, serta kolaborasi rekayasa perangkat lunak.
            </p>
            <Link href="/#contact" className="works-cta-btn">
              <span>Hubungi Saya</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>

      {sharingProject && (
        <ProjectShareModal
          project={sharingProject}
          isOpen={Boolean(sharingProject)}
          onClose={() => setSharingProject(null)}
        />
      )}
    </div>
  );
}
