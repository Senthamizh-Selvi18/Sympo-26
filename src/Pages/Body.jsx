import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CollegeName from "../Sections/CollegeName";
import Faq from "../Sections/Faq";
import NewAbout from "./About";
import CountdownTimer from "../Sections/CountDown";
import Footer from "../Sections/Footer";
import Teams from "../Sections/Teams";
import Button from "../Components/Button";
import ScrollReveal from "../Components/ScrollReveal";
import "animate.css";
import { useNavigate } from "react-router-dom";

// Keep this EXACT same value + math in CountdownTimer.jsx so both counters agree.
const DEADLINE = new Date("2026-10-10T17:00:00");

const getDaysRemaining = () => {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return 0;
  return Math.floor(diff / 86400000);
};

const NOTCH = (cut) =>
  `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;

const CARD_BG = "#0B0F1C";

const SectionDivider = () => (
  <div className="flex items-center justify-center w-3/4 mx-auto mt-4 mb-10 gap-3">
    <span
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(79,200,255,0.35))",
      }}
    />
    <span
      className="w-1.5 h-1.5 rotate-45 flex-shrink-0"
      style={{
        background: "#4fc8ff",
        boxShadow: "0 0 8px rgba(79,200,255,0.7)",
      }}
    />
    <span
      className="flex-1 h-px"
      style={{
        background:
          "linear-gradient(270deg, transparent, rgba(79,200,255,0.35))",
      }}
    />
  </div>
);

const HexRadarIcon = () => (
  <div className="relative w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5">
    <motion.svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <polygon
        points="50,6 88,28 88,72 50,94 12,72 12,28"
        fill="none"
        stroke="#3DA9FC"
        strokeWidth="2"
        strokeOpacity="0.7"
      />
      <circle cx="50" cy="28" r="3" fill="#3DA9FC" />
      <circle cx="88" cy="50" r="2" fill="#3DA9FC" fillOpacity="0.5" />
      <circle cx="50" cy="72" r="2" fill="#3DA9FC" fillOpacity="0.5" />
      <circle cx="12" cy="50" r="2" fill="#3DA9FC" fillOpacity="0.5" />
    </motion.svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2.5 h-2.5 rounded-full bg-[#3DA9FC] shadow-[0_0_10px_2px_rgba(61,169,252,0.7)]" />
    </div>
  </div>
);

/* The glow is now a static drop-shadow. It used to animate the filter
   forever, which forces a repaint of the whole svg on every frame. */
const TracedBorder = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 400 420"
    preserveAspectRatio="none"
    fill="none"
    style={{ filter: "drop-shadow(0 0 6px rgba(61,169,252,0.8))" }}
  >
    <motion.rect
      x="1.5"
      y="1.5"
      width="397"
      height="417"
      rx="6"
      stroke="#3DA9FC"
      strokeWidth="2.5"
      strokeOpacity="1"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.1, delay: 0.15, ease: "easeInOut" }}
    />
    <motion.rect
      x="6"
      y="6"
      width="388"
      height="408"
      rx="3"
      stroke="#B7E1FF"
      strokeWidth="1"
      strokeOpacity="0.55"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
    />
    {[
      [1, 1, 16, 1, 1, 16],
      [399, 1, 383, 1, 399, 16],
      [1, 419, 16, 419, 1, 404],
      [399, 419, 383, 419, 399, 404],
    ].map((p, i) => (
      <motion.path
        key={i}
        d={`M${p[2]} ${p[3]} L${p[0]} ${p[1]} L${p[4]} ${p[5]}`}
        stroke="#3DA9FC"
        strokeWidth="2.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 1.1 + i * 0.05 }}
      />
    ))}
  </svg>
);

const CountdownBox = ({ days }) => (
  <div className="relative inline-block w-full sm:w-auto max-w-[220px] mx-auto">
    <svg
      className="absolute -inset-[3px] w-[calc(100%+6px)] h-[calc(100%+6px)] pointer-events-none"
      viewBox="0 0 100 40"
      preserveAspectRatio="none"
      fill="none"
      style={{ filter: "drop-shadow(0 0 5px rgba(61,169,252,0.8))" }}
    >
      <motion.path
        d="M 8 0.5 L 99.5 0.5 L 99.5 32 L 92 39.5 L 0.5 39.5 L 0.5 8 Z"
        stroke="#3DA9FC"
        strokeWidth="1.4"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>

    {[
      ["top-[-3px]", "right-[-3px]"],
      ["bottom-[-3px]", "left-[-3px]"],
    ].map(([v, h], i) => (
      <span
        key={i}
        className={`absolute ${v} ${h} w-[6px] h-[6px] rounded-full bg-[#6FC1FF] shadow-[0_0_6px_2px_rgba(111,193,255,0.8)] z-20`}
      />
    ))}

    <div
      className="relative overflow-hidden px-5 py-3 sm:px-8 sm:py-4"
      style={{
        clipPath: NOTCH(16),
        background: "linear-gradient(135deg, #101B33 0%, #0B1428 100%)",
      }}
    >
      {/* scanline: animates transform (y) instead of top */}
      <motion.div
        className="absolute inset-x-0 top-0 h-6 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(111,193,255,0.16) 50%, transparent 100%)",
        }}
        animate={{ y: [-24, 110] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative text-center">
        <p className="font-mono text-[8px] sm:text-[9px] text-[#6FC1FF] tracking-[0.18em] sm:tracking-[0.22em] mb-1.5">
          REGISTRATION CLOSES IN
        </p>
        <div className="overflow-hidden h-8 sm:h-9 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={days}
              initial={{ opacity: 0, filter: "blur(6px)", x: 6 }}
              animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
              exit={{ opacity: 0, filter: "blur(6px)", x: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-mono text-xl sm:text-3xl text-white font-bold tracking-wide whitespace-nowrap"
            >
              {String(days).padStart(2, "0")}{" "}
              <span className="text-[#6FC1FF]">DAYS</span>
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
);

/* ===================================================================
   TemptingCTAButton — "wax seal" beacon button.
   Pulse rings and shimmer now animate transform/opacity only
   (no width/height/left), so they never trigger layout.
   Sizing is now clamp-based so the button and its text scale down
   on narrow phones instead of overflowing or clipping.
=================================================================== */
const TemptingCTAButton = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center w-full sm:w-auto">
      {/* Radiating pulse rings — sized relative to the button, not fixed px */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[0, 1].map((i) => (
          <motion.span
            key={i}
            className="absolute rounded-full border"
            style={{
              width: "min(120px, 85%)",
              height: "min(120px, 85%)",
              borderColor: "rgba(79,200,255,0.45)",
            }}
            initial={{ scale: 0.25, opacity: 0.7 }}
            animate={{ scale: 1, opacity: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 1.1, ease: "easeOut" }}
          />
        ))}
      </div>

      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative w-full sm:w-auto"
      >
        <motion.div
          className="relative flex items-center justify-center gap-2 sm:gap-2.5 py-3 px-5 sm:py-3.5 sm:px-7 overflow-hidden"
          style={{
            clipPath: NOTCH(10),
            background: "linear-gradient(135deg, #1D2B5C 0%, #0E1530 100%)",
            border: "1px solid rgba(79,200,255,0.4)",
          }}
          animate={{
            scale: hovered ? 1.04 : 1,
            boxShadow: hovered
              ? "0 0 26px rgba(79,200,255,0.6)"
              : "0 0 10px rgba(79,200,255,0.3)",
          }}
          transition={{ duration: 0.25 }}
        >
          {/* shimmer sweep */}
          <motion.div
            className="absolute inset-y-0 left-0 w-8 pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(143,242,255,0.25), transparent)" }}
            animate={{ x: ["-100%", "900%"] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "linear" }}
          />

          {/* seal glyph — cracks open on hover */}
          <motion.span
            className="relative flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full flex-shrink-0"
            style={{ background: "#3DA9FC", boxShadow: "0 0 8px rgba(61,169,252,0.8)" }}
            animate={{ rotate: hovered ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="w-1.5 h-[2px] sm:w-2 sm:h-[2.5px] bg-[#0B1428] rounded-full" />
          </motion.span>

          <span
            className="relative z-10 font-mono text-[13px] sm:text-lg font-black tracking-[0.06em] sm:tracking-[0.1em] whitespace-nowrap uppercase"
            style={{
              background: "linear-gradient(180deg, #ffffff 0%, #cfeaff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 12px rgba(79,200,255,0.55)",
            }}
          >
            {children}
          </span>

          <motion.span
            className="relative z-10 text-[#8ff2ff] text-sm flex-shrink-0"
            animate={{ x: hovered ? 3 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ›
          </motion.span>
        </motion.div>
      </button>
    </div>
  );
};

const SheardButton = ({ children, onClick }) => (
  <button onClick={onClick} className="group">
    <motion.div
      className="relative py-1 px-3 flex items-center justify-center gap-1 overflow-hidden transition-all duration-250 bg-[#0C1220] border border-[#4B5563] group-hover:bg-[#121A2C] group-hover:border-[#3DA9FC]"
    >
      <span className="relative z-10 font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.1em] font-semibold transition-colors duration-200 text-gray-500 group-hover:text-[#BFE3FF]">
        {children}
      </span>
    </motion.div>
  </button>
);

const Body = () => {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(true);
  const [days, setDays] = useState(getDaysRemaining());

  useEffect(() => {
    if (!showPopup) return;
    const id = setInterval(() => setDays(getDaysRemaining()), 1000);
    return () => clearInterval(id);
  }, [showPopup]);

  const handleUnleashClick = () => {
    navigate("/events");
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#05070D]/95 px-4 py-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] max-h-[90vh] overflow-y-auto"
              initial={{ y: 30, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow:
                  "0 0 0 1.5px rgba(61,169,252,0.4), 0 25px 60px rgba(0,0,0,0.65), 0 0 70px rgba(61,169,252,0.2)",
                borderRadius: "6px",
              }}
            >
              <TracedBorder />

              <div
                className="relative px-4 py-6 sm:px-6 sm:py-8 text-center rounded-[6px]"
                style={{
                  background: `linear-gradient(180deg, #0D1224 0%, ${CARD_BG} 100%)`,
                }}
              >
                <HexRadarIcon />

                <h2 className="text-white font-heading-royal text-sm sm:text-xl font-bold leading-snug mb-2">
                  Technovanza awaits your reply.
                </h2>
                <p className="text-gray-400 text-[11px] sm:text-sm leading-relaxed mb-5 max-w-[26ch] mx-auto">
                  Registrations for 2026–'27 close October 10, 5:00 PM.
                  Claim your seat before the seal shuts.
                </p>

                <div className="flex justify-center mb-6">
                  <CountdownBox days={days} />
                </div>

                <div className="flex flex-col items-center gap-4 w-full">
                  <TemptingCTAButton
                    onClick={() => {
                      setShowPopup(false);
                      navigate("/events");
                    }}
                  >
                    RESERVE MY SEAT
                  </TemptingCTAButton>
                  <SheardButton onClick={() => setShowPopup(false)}>
                    NOT NOW
                  </SheardButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative w-full min-w-0 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen"></div>

        <div className="mt-small w-full min-w-0 max-w-full">
          <CollegeName />
          <div className="flex flex-wrap justify-center gap-5 mt-10 mb-1 animate__animated animate__fadeInUp duration-500">
            <Button onClick={handleUnleashClick}>
              <span
                style={{
                  fontFamily: "collegefont",
                  fontWeight: "bold",
                  letterSpacing: "0.07em",
                  fontSize: "17px",
                }}
              >
                Let's Start
              </span>
            </Button>
          </div>

          <CountdownTimer />
        </div>
      </section>

      <SectionDivider />

      <NewAbout compact />

      <SectionDivider />

      <ScrollReveal animation="fadeInUp" delay={100}>
        <Faq />
      </ScrollReveal>

      <ScrollReveal animation="fadeInUp" delay={100}>
        <Footer />
      </ScrollReveal>

      <ScrollReveal animation="fadeInUp" delay={100}>
        <Teams />
      </ScrollReveal>
    </div>
  );
};

export default Body;