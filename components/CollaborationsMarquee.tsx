"use client";

import React from "react";
import { COLLABORATIONS_DATA } from "../data/collaborations";
import { Building2, GraduationCap, Coffee, Users, ShieldCheck } from "lucide-react";

const CATEGORY_ICONS = {
  Institution: GraduationCap,
  "Industry Partner": Building2,
  "Product Ecosystem": Coffee,
  "Student Organization": Users,
};

export default function CollaborationsMarquee() {
  return (
    <div className="w-full py-8 border-y border-line bg-surface/40 backdrop-blur-xs select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted/70 block">
              Trusted By & Collaborations
            </span>
            <span className="text-xs font-medium text-text/80">
              Institusi, Mitra Industri & Ekosistem
            </span>
          </div>

          {/* Cards Grid / Marquee container */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {COLLABORATIONS_DATA.map((collab) => {
              const Icon = CATEGORY_ICONS[collab.category] || ShieldCheck;
              return (
                <div
                  key={collab.id}
                  className="group flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-surface-2/60 border border-line hover:border-text/30 hover:bg-surface-2 transition-all duration-200"
                  title={`${collab.name} — ${collab.description}`}
                >
                  <div className="p-1.5 rounded-lg bg-surface text-muted group-hover:text-text transition-colors">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-semibold text-text/90 group-hover:text-text transition-colors leading-tight">
                      {collab.name}
                    </div>
                    <div className="text-[10px] text-muted font-mono leading-tight">
                      {collab.badge}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

