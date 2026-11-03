"use client";

import React, { useEffect, useRef, useState } from "react";

export function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
  direction = "up",
}) {
  const [ref, visible] = useReveal();

  const getTransform = () => {
    if (visible) return "translate(0, 0)";
    if (direction === "up") return "translateY(28px)";
    if (direction === "down") return "translateY(-28px)";
    if (direction === "left") return "translateX(28px)";
    if (direction === "right") return "translateX(-28px)";
    return "translateY(28px)";
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.65s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
