import React, { useEffect, useRef } from "react";
import "./styles/animation.css";
import VanillaTilt from "vanilla-tilt";
import "animate.css";

const TrackInfo = ({ label, Image, Description }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: false,
      });
    }
  }, []);

  return (
    <div className="bg-transparent text-white flex flex-col items-center pt-8 pb-4 animate__animated animate__fadeInDown">
      <div className="p-4 md:p-6 w-full max-w-4xl text-center">
        <h2
          className="text-4xl md:text-5xl font-black tracking-widest text-center text-white mb-6 uppercase"
          style={{
            fontFamily: "'Orbitron', 'Oxanium', 'Space Grotesk', sans-serif",
            letterSpacing: "0.18em",
            textShadow: "0 0 25px rgba(102, 252, 241, 0.4)",
          }}
        >
          {label}
        </h2>

        {/* Note Section */}
        <div
          className="mt-4 text-base sm:text-lg leading-relaxed text-center px-4 max-w-3xl mx-auto"
          style={{
            fontFamily: "'Space Grotesk', 'Poppins', 'Segoe UI', sans-serif",
            color: "rgba(226, 232, 240, 0.95)",
            letterSpacing: "0.02em",
          }}
        >
          <p className="mb-4 text-slate-200">
            {Description}
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            <span
              className="text-[#66FCF1] font-bold"
              style={{
                fontFamily: "'Orbitron', 'Space Grotesk', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Note :{" "}
            </span>
            Please be advised that there will be a single registration process for all {label} events. Ensure that you complete the registration only once for {label}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackInfo;

