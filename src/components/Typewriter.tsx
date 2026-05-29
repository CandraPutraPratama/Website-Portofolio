import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  delay?: number;
  className?: string;
}

const Typewriter = ({ text, delay = 20, className = "" }: TypewriterProps) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Reset jika prop text berubah
    if (visibleCount > text.length) setVisibleCount(0);

    // Kalau sedang tidak ngetik (sudah selesai), tunggu 4 detik lalu ulang
    if (!isTyping) {
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
  }, [text, delay, isTyping]);

  return (
    <div className={className}>
      {/* Kursor saat belum mulai ngetik */}
      {visibleCount === 0 && (
        <span className="inline-block w-0 animate-pulse overflow-visible relative">
          <span className="absolute top-0 left-0 border-l-[2px] border-black dark:border-white h-[1.2em] -mt-[2px]"></span>
        </span>
      )}
      
      {text.split('').map((char: string, index: number) => (
        <span 
          key={index}
          className="relative"
          style={{ 
            opacity: index < visibleCount ? 1 : 0,
            transition: 'opacity 0.1s' 
          }}
        >
          {char}
          {/* Kursor absolute yang tidak mengganggu letak teks (word wrapping) */}
          {index === visibleCount - 1 && (
            <span className="absolute top-0 -right-[2px] border-l-[2px] border-black dark:border-white h-[1.2em] animate-pulse"></span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Typewriter;
