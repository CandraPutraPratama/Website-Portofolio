"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import TypewriterTitle from "./TypewriterTitle";
import Reveal from "./Reveal";

const TECH_LOGOS = {
  "ASP.NET Core": "/images/logos/dotnet.svg",
  "C#": "/images/logos/csharp.svg",
  "PostgreSQL": "/images/logos/postgresql.svg",
  "MySQL": "/images/logos/mysql.png",
  "Next.js": "/images/logos/nextjs.svg",
  "Next.js 14": "/images/logos/nextjs.svg",
  "React": "/images/logos/react.png",
  "React 18": "/images/logos/react.png",
  "TypeScript": "/images/logos/typescript.svg",
  "Tailwind CSS": "/images/logos/tailwind.svg",
  "PHP": "/images/logos/php.png",
  "JavaScript": "/images/logos/js.png",
  "HTML": "/images/logos/html.png",
  "CSS": "/images/logos/css.png",
  "Git & GitHub": "/images/logos/git.svg",
  "Postman": "/images/logos/postman.svg",
};

function TechTag({ tech }) {
  const logo = TECH_LOGOS[tech];
  if (logo) {
    return (
      <span className="archive-tag" title={tech}>
        <img src={logo} alt={tech} className="archive-tag-img" />
        <span className="archive-tag-label">{tech}</span>
      </span>
    );
  }
  return <span className="archive-tag">{tech}</span>;
}

export default function TechnicalArchive({ projects = [] }) {
  return (
    <section className="archive-section" id="technical">
      <Reveal>
        <div className="archive-header">
          <div className="archive-header-left">
            <TypewriterTitle text="Technical Projects" />
            <p className="archive-description">Koleksi lengkap seluruh sistem, arsitektur backend, dan aplikasi digital yang pernah saya bangun.</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="archive-list">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="archive-row"
              target={project.link !== "#" && !project.link.startsWith("/") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              <div className="archive-row-main">
                <div className="archive-row-title">{project.title}</div>
                <div className="archive-row-desc">{project.desc}</div>
                <div className="archive-row-tags">
                  <span className="archive-row-category">{project.category}</span>
                  <div className="archive-row-tech">
                    {project.tech.map((t) => (
                      <TechTag key={t} tech={t} />
                    ))}
                  </div>
                </div>
              </div>
              <span className="archive-row-action" aria-label="Buka proyek">
                <ExternalLink size={15} />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
