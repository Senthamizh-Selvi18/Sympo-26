import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import EventPoster from "../assets/symposium/overAll.jpg";
import VoltageButton from "../Components/VoltageButton";

const safeText = (color) => ({
  color,
  WebkitTextFillColor: color,
  backgroundImage: "none",
  WebkitBackgroundClip: "unset",
  backgroundClip: "unset",
});

/*
  The poster lives in its own component so that hovering it only re-renders
  the poster. Before, hover state and pointer position lived in EventContainer,
  so every mouse move re-rendered the whole page including both buttons
  (~30 spans each). The pointer position now goes into CSS variables via
  requestAnimationFrame instead of React state.
*/
const PosterCard = () => {
  const posterRef = useRef(null);
  const frameRef = useRef(0);
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = posterRef.current;
    if (!el) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--my", `${((clientY - rect.top) / rect.height) * 100}%`);
    });
  };

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  return (
    <div
      ref={posterRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden shadow-md rounded-md"
      style={{
        border: `1px solid ${hovered ? "rgba(79,200,255,0.55)" : "rgba(79,200,255,0.15)"}`,
        boxShadow: hovered
          ? "0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(167,139,250,0.25)"
          : "0 10px 26px rgba(0,0,0,0.35)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      <img
        src={EventPoster}
        className="w-full h-auto sm:max-w-[360px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px] block"
        alt="Event Poster"
        style={{
          filter: hovered ? "saturate(1.12) contrast(1.04) brightness(1.03)" : "saturate(1) contrast(1) brightness(1)",
          transition: "filter 0.4s ease",
        }}
      />

      {/* spotlight: blend mode is only active while hovering */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: hovered ? 0.9 : 0,
          transition: "opacity 0.35s ease",
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.35), rgba(79,200,255,0.18) 35%, rgba(167,139,250,0.12) 55%, transparent 70%)",
          mixBlendMode: hovered ? "color-dodge" : "normal",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.2s ease" }}
      >
        <div
          className="absolute top-0 bottom-0"
          style={{
            width: "40%",
            left: hovered ? "120%" : "-40%",
            background: "linear-gradient(100deg, transparent, rgba(255,255,255,0.16), transparent)",
            transform: "skewX(-18deg)",
            transition: "left 0.85s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>

      <div
        className="absolute inset-x-0 pointer-events-none"
        style={{
          height: "2px",
          top: hovered ? "100%" : "0%",
          background: "linear-gradient(90deg, transparent, #4fc8ff, #A78BFA, transparent)",
          boxShadow: "0 0 12px 2px rgba(79,200,255,0.7)",
          opacity: hovered ? 1 : 0,
          transition: "top 1.4s cubic-bezier(0.65,0,0.35,1), opacity 0.3s ease",
        }}
      />

      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, right: 0, rotate: 180 },
        { bottom: 0, left: 0, rotate: 270 },
      ].map((c, i) => (
        <svg
          key={i}
          width="26"
          height="26"
          viewBox="0 0 26 26"
          className="absolute pointer-events-none"
          style={{
            top: c.top,
            left: c.left,
            right: c.right,
            bottom: c.bottom,
            margin: "8px",
            transform: `rotate(${c.rotate}deg) scale(${hovered ? 1 : 0.5})`,
            opacity: hovered ? 1 : 0,
            transition: `transform 0.35s ease ${i * 60}ms, opacity 0.3s ease ${i * 60}ms`,
          }}
        >
          <path d="M2 12V4a2 2 0 0 1 2-2h8" stroke="#4fc8ff" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </svg>
      ))}

      <div
        className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-2 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(6,14,36,0.92))",
          transform: hovered ? "translateY(0)" : "translateY(100%)",
          opacity: hovered ? 1 : 0,
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
        }}
      >
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4fc8ff", boxShadow: "0 0 6px #4fc8ff" }} />
          <span className="text-[0.6rem] tracking-[0.2em] font-mono" style={safeText("#ffffffe6")}>TECHNOVANZA 2026-&apos;27</span>
        </span>
        <span className="text-[0.58rem] tracking-[0.15em] font-mono" style={safeText("#8ff2ff")}>VIEW EVENTS</span>
      </div>
    </div>
  );
};

const trackLabel = (text) => (
  <span style={{ fontFamily: "collegefont", fontWeight: "bold", letterSpacing: "0.07em", fontSize: "25px" }}>
    {text}
  </span>
);

const captionStyle = {
  fontFamily: "collegefont",
  fontSize: "15px",
  lineHeight: "1.2",
  ...safeText("#ffffff"),
};

// EventContainer itself holds no state now, so it renders once.
const EventContainer = () => {
  return (
    <div className="relative z-10 px-5 min-h-screen flex flex-col justify-start items-center">
      <div className="flex justify-center mt-11 mb-10">
        <PosterCard />
      </div>

      <div className="event-buttons-container flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
        <div className="flex flex-col items-center">
          <Link to="/track1">
            <VoltageButton label={trackLabel("Track I")} />
          </Link>
          <p className="text-center mt-4" style={captionStyle}>
            (AIDS, AIML, CSE, CS, CSBS, IT)
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/track2">
            <VoltageButton label={trackLabel("Track II")} />
          </Link>
          <p className="text-center mt-4" style={captionStyle}>
            (BME, ECE, EEE, MBA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;