"use client";

import React from "react";

export default function TypewriterTitle({
  text,
  className = "",
  as: Component = "h2",
  ...props
}) {
  return (
    <Component
      className={`section-title ${className}`}
      {...props}
    >
      <span style={{ whiteSpace: "pre-line" }}>{text}</span>
    </Component>
  );
}
