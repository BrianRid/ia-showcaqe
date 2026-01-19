"use client";

export function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => {
        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 10 + 10;
        const animationDelay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.1;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-wivoo-primary animate-float"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${Math.random() * 100}%`,
              opacity,
              animationDuration: `${animationDuration}s`,
              animationDelay: `${animationDelay}s`,
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </div>
  );
}
