"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * A folder of photos. On hover or focus the front flap tilts open and the
 * photos fan out above it; a click opens them full size in a native <dialog>
 * (focus trap, Esc to close, arrow keys to browse).
 */
export default function PhotoFolder({ year, photos }) {
  const [index, setIndex] = useState(null);
  const dialogRef = useRef(null);
  const open = index !== null;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setIndex(null);
  const step = (dir) => setIndex((i) => (i + dir + photos.length) % photos.length);
  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  return (
    <>
      <button
        type="button"
        className="r-fold"
        aria-haspopup="dialog"
        aria-label={`Buka arsip foto ${year}, ${photos.length} foto`}
        onClick={(e) => {
          // open the photo that was clicked; the folder itself opens the first one
          const photo = e.target.closest("[data-photo]");
          setIndex(photo ? Number(photo.dataset.photo) : 0);
        }}
      >
        <span className="r-fold-stage" aria-hidden="true">
          <span className="r-fold-back" />
          {photos.slice(0, 3).map((p, i) => (
            <img
              key={p.src}
              className={`r-fold-ph r-fold-ph--${i}`}
              data-photo={i}
              src={p.src}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ))}
          <span className="r-fold-front" />
        </span>
        <span className="r-fold-label">Arsip foto {year}</span>
        <span className="r-fold-hint">Klik folder</span>
      </button>

      <dialog
        ref={dialogRef}
        className="r-lightbox"
        aria-label={`Foto dokumentasi ${year}`}
        onClose={close}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={onKeyDown}
      >
        {open ? (
          <div className="r-lb-body">
            <img
              key={index}
              className="r-lb-img"
              src={photos[index].src}
              alt={photos[index].alt}
            />
            <div className="r-lb-bar">
              <button type="button" className="r-lb-btn" onClick={() => step(-1)} aria-label="Foto sebelumnya">
                <ChevronLeft size={22} aria-hidden="true" />
              </button>
              <span className="r-lb-count" aria-live="polite">
                {index + 1} / {photos.length}
              </span>
              <button type="button" className="r-lb-btn" onClick={() => step(1)} aria-label="Foto berikutnya">
                <ChevronRight size={22} aria-hidden="true" />
              </button>
              <button type="button" className="r-lb-btn" onClick={close} aria-label="Tutup galeri" autoFocus>
                <X size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
