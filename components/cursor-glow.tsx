"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(circle, rgba(69,29,199,0.15) 0%, rgba(69,29,199,0.05) 25%, transparent 50%)",
        transform: "translate(-50%, -50%)",
        filter: "blur(40px)",
      }}
    />
  );
}
