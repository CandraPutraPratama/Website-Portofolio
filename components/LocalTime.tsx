"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { siteConfig } from "../data/config";

interface LocalTimeProps {
  className?: string;
  showIcon?: boolean;
}

export default function LocalTime({ className = "", showIcon = true }: LocalTimeProps) {
  const [timeString, setTimeString] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("id-ID", {
          timeZone: siteConfig.timezone || "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(`${formatted} WIB`);
      } catch (e) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        setTimeString(`${hours}:${minutes}:${seconds} WIB`);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-line bg-surface-2 text-text/90 backdrop-blur-md shadow-xs select-none ${className}`}
      title={`Waktu Lokal Sekarang di ${siteConfig.location}`}
      aria-label="Waktu Lokal Sekarang di Surabaya, Indonesia"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      {showIcon && <Clock className="w-3.5 h-3.5 text-muted opacity-80" />}
      <span className="font-medium text-text/80">{siteConfig.city}, {siteConfig.country}</span>
      <span className="text-muted/60">·</span>
      <span className="font-semibold tabular-nums text-text">
        {timeString ?? "--:--:-- WIB"}
      </span>
    </div>
  );
}

