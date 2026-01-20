"use client";

import { useState, useEffect } from "react";
import {
  PARTICLE_COUNT,
  PARTICLE_MIN_SIZE,
  PARTICLE_MAX_SIZE,
  PARTICLE_MIN_OPACITY,
  PARTICLE_MAX_OPACITY,
  PARTICLE_MIN_DURATION,
  PARTICLE_MAX_DURATION,
  PARTICLE_MAX_DELAY,
} from "@/lib/constants";

interface Particle {
  id: number;
  size: number;
  left: number;
  top: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

export function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.random() * (PARTICLE_MAX_SIZE - PARTICLE_MIN_SIZE) + PARTICLE_MIN_SIZE,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * (PARTICLE_MAX_OPACITY - PARTICLE_MIN_OPACITY) + PARTICLE_MIN_OPACITY,
      animationDuration: Math.random() * (PARTICLE_MAX_DURATION - PARTICLE_MIN_DURATION) + PARTICLE_MIN_DURATION,
      animationDelay: Math.random() * PARTICLE_MAX_DELAY,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-wivoo-primary animate-float"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
