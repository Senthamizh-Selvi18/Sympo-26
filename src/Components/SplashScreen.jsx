import React, { useState, useEffect, useRef } from "react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 400);
          return 100;
        }
        const step = prev < 70 ? 3 : 2;
        return Math.min(prev + step, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-white overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #0a0f1f 0%, #030308 70%, #000000 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
        <path
          d="M0 80 L120 80 L160 40 L320 40 L360 80 L520 80"
          fill="none" stroke="#3b82f6" strokeWidth="1.5"
        />
        <path
          d="M700 400 L580 400 L540 440 L380 440 L340 400 L200 400"
          fill="none" stroke="#3b82f6" strokeWidth="1.5"
        />
      </svg>

      <h1
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-2 tracking-widest"
        style={{
          fontFamily: "'Audiowide', sans-serif",
          animation: prefersReducedMotion.current
            ? "none"
            : "pulseGlow 2.4s ease-in-out infinite",
        }}
      >
        Technovanza
      </h1>

      <p
        className="relative z-10 text-xs sm:text-sm tracking-[0.3em] text-blue-300 mb-8 uppercase"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        Powering up the grid
      </p>

      <svg
        viewBox="0 0 700 200"
        className="relative z-10 w-64 sm:w-80 md:w-96 mb-4"
      >
        <path
          d="M20 100 L160 100 L200 50 L340 50 L380 100 L520 100 L560 150 L680 150"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            filter: "drop-shadow(0 0 6px #3b82f6)",
            strokeDasharray: 1000,
            strokeDashoffset: prefersReducedMotion.current
              ? 0
              : 1000 - (progress / 100) * 1000,
            transition: "stroke-dashoffset 0.12s linear",
          }}
        />
      </svg>

      <p
        className="relative z-10 text-lg tracking-widest"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
        aria-live="polite"
      >
        INITIALIZING &nbsp;&middot;&nbsp; {progress}%
      </p>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(59,130,246,0.5); }
          50% { text-shadow: 0 0 22px rgba(59,130,246,0.9); }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;