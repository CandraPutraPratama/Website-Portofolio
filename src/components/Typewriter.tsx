import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
  loop?: boolean;
}

const Typewriter = ({ text, delay = 20, className = "", loop = false }: TypewriterProps) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Reset jika prop text berubah
    if (visibleCount > text.length) setVisibleCount(0);

    // Kalau sedang tidak ngetik (sudah selesai): berhenti, kecuali loop=true
    if (!isTyping) {
      if (!loop) return;
      const timeout = setTimeout(() => {
        setVisibleCount(0);
        setIsTyping(true);
      }, 4000); // ← ANGKA INI UNTUK MENGUBAH LAMA JEDA SEBELUM MENGULANG (4000 = 4 detik)
      return () => clearTimeout(timeout);
    }

    // Kalau sedang ngetik, jalankan interval
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= text.length) {
          setIsTyping(false); // Selesai ngetik
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, delay);
    
    return () => clearInterval(timer);
  }, [text, delay, isTyping, loop]);

  const visibleText = text.slice(0, visibleCount);
  const invisibleText = text.slice(visibleCount);

  return (
    <div className={className}>
      <span className="relative">
        {visibleText}
        {isTyping && (
          <span className="absolute top-0 -right-[2px] border-l-[2px] border-black dark:border-white h-[1.2em] animate-pulse"></span>
        )}
      </span>
      <span className="opacity-0 pointer-events-none select-none">{invisibleText}</span>
    </div>
  );
};

export default Typewriter;
