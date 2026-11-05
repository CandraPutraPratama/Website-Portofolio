"use client";

import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

const CATEGORIES = [
  "All",
  "Live Production & PWA",
  "Backend Architecture",
  "Full-Stack Web",
];

export default function WorksGallery({ projects = [] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Live Production & PWA") {
      return (
        project.category.includes("Live Production") ||
        project.category.includes("PWA") ||
        project.title.includes("Jasdor") ||
        project.title.includes("Portfolio")
      );
    }
    if (activeCategory === "Backend Architecture") {
      return (
        project.category.includes("Backend") ||
        project.title.includes("BudgEx")
      );
    }
    if (activeCategory === "Full-Stack Web") {
      return (
        project.category.includes("Full-Stack") ||
        (!project.title.includes("Jasdor") && !project.title.includes("BudgEx") && !project.title.includes("Portfolio"))
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
            <h1 className="works-title">Works & Projects</h1>
            <p className="works-subtitle">
              Koleksi proyek rekayasa perangkat lunak, sistem produksi nyata, dan arsitektur backend yang dirancang dengan dedikasi serta standar kualitas tinggi.
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
              <a
                href={project.link}
                target={project.link !== "#" && !project.link.startsWith("/") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="works-card group"
              >
                {/* Image Wrap */}
                <div className="works-card-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="works-card-img"
                    loading="lazy"
                  />
                  <div className="works-card-overlay">
                    <div className="works-card-details-btn" title="Buka Detail Proyek">
                      <ArrowUpRight size={22} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="works-card-content">
                  <div className="works-card-category">{project.category}</div>
                  <h3 className="works-card-title">{project.title}</h3>
                  <p className="works-card-desc">{project.desc}</p>
                  
                  <div className="works-card-tech">
                    {project.tech.slice(0, 4).map((t) => (
                      <span key={t} className="works-card-chip">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="works-card-chip">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </a>
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
              Terbuka untuk peluang magang Web Development & Backend Engineering, arsitektur software, serta kolaborasi rekayasa perangkat lunak.
            </p>
            <Link href="/#contact" className="works-cta-btn">
              <span>Hubungi Saya</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
