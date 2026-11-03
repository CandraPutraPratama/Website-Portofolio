"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-box ${mounted ? "revealed" : ""} ${className}`}
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
