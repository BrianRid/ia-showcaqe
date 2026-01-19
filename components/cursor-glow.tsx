"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="cursor-glow"
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
