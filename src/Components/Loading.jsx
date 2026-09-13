import React from "react";

const Loader = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center overflow-hidden relative"
      style={{
        background: "radial-gradient(ellipse at center, #0a0f1f 0%, #030308 70%, #000000 100%)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative z-10" style={{ width: 200, height: 200 }}>
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%" }}>
          <polygon
            points="100,20 165,60 165,140 100,180 35,140 35,60"
            fill="none"
            stroke="rgba(59,130,246,0.25)"
            strokeWidth="1.5"
          />
          <polygon
            points="100,45 143,70 143,130 100,155 57,130 57,70"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            style={{
              filter: "drop-shadow(0 0 4px #3b82f6)",
              transformOrigin: "100px 100px",
              animation: "hexSpin 4s linear infinite",
            }}
          />
          <polygon
            points="100,45 143,70 143,130 100,155 57,130 57,70"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeDasharray="20 200"
            style={{
              filter: "drop-shadow(0 0 6px #60a5fa)",
              transformOrigin: "100px 100px",
              animation: "hexTrace 3s linear infinite",
            }}
          />

          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <circle
              key={angle}
              cx={100 + 78 * Math.cos((angle * Math.PI) / 180)}
              cy={100 + 78 * Math.sin((angle * Math.PI) / 180)}
              r="3.5"
              fill="#60a5fa"
              style={{
                filter: "drop-shadow(0 0 4px #60a5fa)",
                animation: `nodePulse 1.8s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          <circle
            cx="100"
            cy="100"
            r="14"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="1.5"
            style={{
              filter: "drop-shadow(0 0 6px #3b82f6)",
              animation: "coreRing 2s ease-in-out infinite",
            }}
          />
          <circle
            cx="100"
            cy="100"
            r="5"
            fill="#93c5fd"
            style={{
              filter: "drop-shadow(0 0 8px #93c5fd)",
              animation: "corePulse 1.4s ease-in-out infinite",
            }}
          />
        </svg>
      </div>

      <p
        className="relative z-10 mt-6 text-xs sm:text-sm tracking-[0.35em] text-blue-300 uppercase"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        Establishing link
      </p>

      <style>{`
        @keyframes hexSpin {
          to { transform: rotate(360deg); }
        }
        @keyframes hexTrace {
          to { stroke-dashoffset: -220; }
        }
        @keyframes nodePulse {
          0%, 100% { opacity: 0.35; r: 2.5; }
          50% { opacity: 1; r: 4; }
        }
        @keyframes coreRing {
          0%, 100% { r: 14; opacity: 0.6; }
          50% { r: 18; opacity: 1; }
        }
        @keyframes corePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Loader;