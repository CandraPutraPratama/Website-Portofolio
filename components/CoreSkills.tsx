"use client";

import React from "react";
import Reveal from "./Reveal";
import { CORE_SKILLS } from "../data/skills";
import { Code2 } from "lucide-react";

export default function CoreSkills() {
  return (
    <section id="skills" className="section relative py-16 sm:py-20">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-surface-2 text-muted border border-line mb-3">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Keahlian Rekayasa</span>
          </div>
          <h2 className="section-title text-3xl sm:text-4xl font-bold tracking-tight text-text mb-4">
            Core Technical Skills
          </h2>
          <p className="section-desc text-muted text-sm sm:text-base leading-relaxed">
            Teknologi inti yang saya kuasai dan implementasikan langsung dalam pembangunan arsitektur backend, basis data relasional, dan frontend modern.
          </p>
        </div>
      </Reveal>

      {/* 8 Core Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {CORE_SKILLS.map((skill, idx) => (
          <Reveal key={skill.name} delay={40 + idx * 30}>
            <div className="group h-full p-5 sm:p-6 rounded-2xl bg-surface border border-line hover:border-text/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-2 border border-line flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                      draggable={false}
                    />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-2 text-muted border border-line">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name (Tampil TEPAT 1 KALI per kartu) */}
                <h3 className="text-base font-bold text-text group-hover:text-blue-400 transition-colors mb-2">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Proven in Project Note */}
              <div className="pt-3 border-t border-line/60">
                <div className="text-[11px] font-mono text-muted/90 leading-normal">
                  <span className="text-text font-semibold mr-1.5">Dipakai di:</span>
                  <span className="break-words">{skill.usedIn}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

