import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/animation.css";
import "../text.css";
import Image from "../assets/symposium/Logo/spidy logo.png";
import CollegeReal from "../assets/symposium/Logo/college-real.jpg";
import ScrollReveal from "../Components/ScrollReveal";

const NOTCH = (cut) =>
  `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;

/* Shared container sizing so every major block in this page lines up
   with identical max-width and padding. Change this ONE constant if
   you ever want to widen/narrow the whole page uniformly. */
const CONTAINER = "w-full max-w-6xl p-6 md:p-10";

const ExploreButton = ({ children, to }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => navigate(to)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full sm:w-auto"
    >
      <div
        className="relative py-2.5 px-5 min-w-[190px] flex items-center justify-center gap-1.5 border-2"
        style={{
          clipPath: NOTCH(12),
          borderColor: hovered ? "#B9A2FF" : "rgba(167,139,250,0.5)",
          background: hovered ? "#7C5CE0" : "#0E1530",
          boxShadow: hovered ? "0 6px 22px rgba(124,92,224,0.45)" : "0 0 0 rgba(0,0,0,0)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition:
            "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease",
        }}
      >
        <span
          className="font-mono text-xs tracking-[0.15em] font-bold"
          style={{ color: hovered ? "#ffffff" : "#E9E2FF", transition: "color 0.3s ease" }}
        >
          {children}
        </span>
        <span
          className="font-mono text-xs"
          style={{
            color: hovered ? "#ffffff" : "#B9A2FF",
            opacity: hovered ? 1 : 0.7,
            transition: "color 0.3s ease, opacity 0.3s ease",
          }}
        >
          ›
        </span>
      </div>
    </button>
  );
};

const glowStyle = (active) => ({
  transition: "box-shadow 0.4s ease, border-color 0.4s ease",
  boxShadow: active
    ? "0 0 0 1px rgba(167,139,250,0.5), 0 10px 34px rgba(167,139,250,0.18)"
    : "0 0 0 1px rgba(167,139,250,0.15), 0 6px 24px rgba(0,0,0,0.4)",
});

const gradientTextStyle = (gradient) => ({
  backgroundImage: gradient,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
  WebkitTextFillColor: "transparent",
});

const safeText = (color) => ({
  color,
  WebkitTextFillColor: color,
  backgroundImage: "none",
  WebkitBackgroundClip: "unset",
  backgroundClip: "unset",
});

const StaticGlowLogo = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative w-full max-w-[280px] md:max-w-[320px] mx-auto flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto rounded-lg mx-auto block"
        style={{
          filter: hovered
            ? "drop-shadow(0 0 16px rgba(167,139,250,0.5)) brightness(1.06)"
            : "drop-shadow(0 0 4px rgba(167,139,250,0.15))",
          transition: "filter 0.4s ease",
        }}
      />
      <span
        className="mt-3 h-[2px] rounded-full"
        style={{
          width: hovered ? "55%" : "0%",
          background: "linear-gradient(90deg, transparent, #A78BFA, transparent)",
          transition: "width 0.4s ease",
        }}
      />
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <span
    className="font-label-royal text-xs md:text-sm block mb-2 text-left"
    style={{ ...safeText("#8ff2ff"), opacity: 1 }}
  >
    {children}
  </span>
);

const SignalRevealImage = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-[460px] mx-auto rounded-xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "1px solid rgba(79,200,255,0.3)",
        boxShadow: hovered
          ? "0 18px 44px rgba(0,0,0,0.5), 0 0 0 1px rgba(167,139,250,0.3)"
          : "0 12px 28px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      <div className="relative" style={{ aspectRatio: "4/3" }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover block"
          style={{ filter: "grayscale(0.6) brightness(0.35) contrast(1.05)" }}
        />
        <img
          src={src}
          alt={alt}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover block"
          style={{
            filter: "saturate(1.08) brightness(1.02)",
            clipPath: hovered ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
            transition: "clip-path 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 1px, transparent 1px, transparent 3px)",
            mixBlendMode: "multiply",
            opacity: 0.5,
          }}
        />
        <div
          className="absolute inset-x-0 pointer-events-none"
          style={{
            height: "3px",
            top: hovered ? "100%" : "0%",
            background: "linear-gradient(90deg, transparent, #4fc8ff, #A78BFA, transparent)",
            boxShadow: "0 0 14px 2px rgba(79,200,255,0.8)",
            transition: "top 1.1s cubic-bezier(0.65, 0, 0.35, 1)",
          }}
        />
        <div className="absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#4fc8ff",
              boxShadow: "0 0 6px #4fc8ff",
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.3s ease",
            }}
          />
          <span className="font-label-royal text-[0.58rem] tracking-widest" style={safeText("#8ff2ff")}>
            {hovered ? "SIGNAL LOCKED" : "STANDBY"}
          </span>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{ background: "linear-gradient(180deg, transparent, rgba(6,14,36,0.9))" }}
        />
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="font-heading-royal text-sm md:text-base" style={safeText("#ffffff")}>
            JCE Campus
          </span>
          <span className="text-[0.6rem] tracking-[0.15em] font-label-royal" style={safeText("#8ff2ff")}>
            EST. 1995
          </span>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-col items-center text-center flex-1 min-w-0 px-1 py-1 cursor-default"
      style={{
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mb-2 border"
        style={{
          borderColor: hovered ? "transparent" : "rgba(79,200,255,0.4)",
          background: hovered
            ? "linear-gradient(135deg, #4fc8ff, #A78BFA)"
            : "rgba(79,200,255,0.06)",
          boxShadow: hovered ? "0 0 16px rgba(167,139,250,0.5)" : "none",
          transition: "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        <span style={{ color: hovered ? "#04122b" : "#4fc8ff", transition: "color 0.3s ease" }}>
          {icon}
        </span>
      </div>
      <span
        className="font-display-royal font-bold text-sm md:text-base whitespace-nowrap"
        style={{ ...safeText(hovered ? "#ffffff" : "#e4ecfb"), transition: "color 0.3s ease" }}
      >
        {value}
      </span>
      <span
        className="text-[0.6rem] md:text-[0.66rem] tracking-[0.1em] uppercase mt-0.5"
        style={safeText("#7f92b8")}
      >
        {label}
      </span>
    </div>
  );
};

const EditionStatStrip = ({ stats, accent }) => (
  <div className="flex items-center gap-4 mb-3">
    {stats.map((s) => (
      <div key={s.label} className="flex items-center gap-1.5">
        <span className="font-display-royal font-bold text-sm md:text-base" style={safeText(accent)}>
          {s.value}
        </span>
        <span
          className="text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.08em]"
          style={safeText("#7f92b8")}
        >
          {s.label}
        </span>
      </div>
    ))}
  </div>
);

const EditionEntry = ({ edition, year, tags, description, accent, stats, isLast }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative pl-14 md:pl-16 pb-12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!isLast && (
        <span
          className="absolute left-[19px] md:left-[21px] top-10 bottom-0 w-px"
          style={{ background: `linear-gradient(180deg, ${accent}55, transparent)` }}
        />
      )}

      <span
        className="absolute left-0 top-1 w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center"
        style={{
          border: `2px solid ${accent}`,
          background: "#081226",
          boxShadow: hovered ? `0 0 0 6px ${accent}22` : `0 0 0 0px ${accent}00`,
          transition: "box-shadow 0.4s ease",
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
      </span>

      <div className="flex items-baseline gap-2 mb-1">
        <span
          className="font-display-royal font-bold text-2xl md:text-3xl"
          style={{
            ...safeText(accent),
            textShadow: hovered ? `0 0 14px ${accent}88` : "none",
            transition: "text-shadow 0.4s ease",
          }}
        >
          {edition}
        </span>
        <span className="text-[0.6rem] tracking-[0.15em] uppercase" style={safeText("#7f92b8")}>
          Edition
        </span>
      </div>

      <h4 className="font-heading-royal text-base md:text-lg mb-1" style={safeText("#ffffff")}>
        TECHNOVANZA <span style={safeText(accent)}>{year}</span>
      </h4>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        {tags.map((tag, i) => (
          <span
            key={tag}
            className="text-[0.65rem] md:text-[0.7rem] px-2.5 py-0.5 rounded-full border font-label-royal tracking-wide"
            style={{
              borderColor: hovered ? accent : "rgba(255,255,255,0.15)",
              ...safeText(hovered ? "#fff" : "#9fb0d6"),
              background: hovered ? `${accent}22` : "transparent",
              transitionProperty: "border-color, color, background",
              transitionDuration: "0.35s",
              transitionDelay: hovered ? `${i * 90}ms` : "0ms",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <EditionStatStrip stats={stats} accent={accent} />

      <p className="font-body-royal text-sm md:text-base leading-relaxed" style={safeText("#c3ceec")}>
        {description}
      </p>
    </div>
  );
};

/* ===================================================================
   NewAbout
   - compact = true  -> renders ONLY the intro (TECHNOVANZA) card.
                        Use this on the Home page.
   - compact = false (default) -> renders the intro card PLUS About
                        Our College, Past Editions, and the "Be a part
                        of something BIGGER" footer. Use this on the
                        dedicated /about page.
=================================================================== */
const NewAbout = ({ compact = false }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const editions = [
    {
      edition: "25TH",
      year: "2025-'26",
      tags: ["Learn", "Create", "Lead"],
      stats: [
        { value: "912", label: "Registrations" },
        { value: "20+", label: "Events" },
      ],
      description:
        "The 2025-26 edition expanded horizons, with inspiring events, hands-on experiences, and a stronger community of innovators.",
      accent: "#A78BFA",
    },
    {
      edition: "24TH",
      year: "2024-'25",
      tags: ["Think", "Build", "Transform"],
      stats: [
        { value: "800", label: "Registrations" },
        { value: "15+", label: "Events" },
      ],
      description:
        "The 2024-25 edition ignited fresh ideas, showcased technical brilliance, and brought together passionate minds from across the college.",
      accent: "#4fc8ff",
    },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        className={`relative pt-24 sm:pt-10 rounded-xl overflow-hidden mb-16 ${CONTAINER}`}
        style={{
          background: "linear-gradient(160deg, rgba(13,31,71,0.7), rgba(8,22,51,0.8))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(167,139,250,0.22)",
          ...glowStyle(cardHovered),
        }}
      >
        <SectionLabel>About</SectionLabel>
        <h2 className="font-display-royal font-bold text-3xl md:text-5xl tracking-wide text-left mb-6">
          <span style={safeText("#ffffff")}>TECHNOVANZA </span>
          <span style={safeText("#4fc8ff")}>2026-&apos;27</span>
        </h2>

        {/* items-start -> items-center so the logo on the right sits
            vertically centered against the text block on the left,
            instead of pinned to the top of the row. */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] items-center w-full gap-6 md:gap-0">
          <div className="w-full font-body-royal text-base md:text-lg leading-relaxed text-justify md:pr-6" style={safeText("#c3ceec")}>
            <p>
              Technovanza is where innovation meets imagination, bringing
              together aspiring engineers, emerging ideas, and technology
              enthusiasts in an environment that encourages learning,
              creativity, and meaningful collaboration. It provides a
              platform for students to explore new possibilities, exchange
              knowledge, and showcase their technical abilities.
            </p>
            <p className="mt-3">
              More than a symposium, it is a platform for learning,
              creativity, and excellence, inspiring students to transform
              their ideas into solutions for tomorrow's challenges.
            </p>
            <div className="mt-6">
              <ExploreButton to="/events">EXPLORE MORE</ExploreButton>
            </div>
          </div>

          <div className="w-full h-full grid place-items-center">
            <StaticGlowLogo src={Image} alt="Technovanza Logo" />
          </div>
        </div>
      </motion.div>

      {!compact && (
        <>
          {/* ===== About Our College ===== */}
          <ScrollReveal animation="fadeInUp" className="w-full flex justify-center">
            <div className={`${CONTAINER} flex flex-col md:flex-row items-center gap-10 md:gap-14`} style={{ scrollMarginTop: "100px" }}>
              <div className="md:w-[52%] w-full">
                <span className="text-[0.7rem] tracking-[0.2em] uppercase font-label-royal" style={safeText("#4fc8ff")}>
                  About Our College
                </span>
                <h2 className="font-display-royal font-bold text-2xl md:text-3xl mt-2 mb-1 leading-snug" style={safeText("#ffffff")}>
                  JERUSALEM COLLEGE OF ENGINEERING
                </h2>
                <p className="text-sm mb-4" style={safeText("#8a94b8")}>
                  (An Autonomous Institution)
                </p>

                <p className="font-body-royal text-sm md:text-base leading-relaxed text-justify mb-3" style={safeText("#c3ceec")}>
                  Jerusalem College of Engineering, Chennai, established in
                  1995, is a premier autonomous institution affiliated with
                  Anna University and approved by AICTE. Located in
                  Pallikaranai, Chennai, the college offers a wide range of
                  undergraduate, postgraduate, and doctoral programs in
                  engineering, technology, computer applications, and
                  management.
                </p>
                <p className="font-body-royal text-sm md:text-base leading-relaxed text-justify mb-5" style={safeText("#c3ceec")}>
                  The college fosters research, entrepreneurship, and industry
                  collaboration, supported by experienced faculty and modern
                  infrastructure, preparing students for successful careers
                  and meaningful societal contributions.
                </p>

                <div
                  className="flex items-stretch justify-between rounded-xl px-3 py-4 md:px-5"
                  style={{
                    border: "1px solid rgba(79,200,255,0.22)",
                    background: "rgba(79,200,255,0.03)",
                  }}
                >
                  <StatCard
                    value="1995"
                    label="Est."
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 10L12 5 2 10l10 5 10-5ZM6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
                      </svg>
                    }
                  />
                  <StatCard
                    value="UG | PG | MBA"
                    label="Programs"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
                      </svg>
                    }
                  />
                  <StatCard
                    value="2000+"
                    label="Students"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    }
                  />
                  <StatCard
                    value="NAAC"
                    label="Accredited"
                    icon={
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21Z" />
                      </svg>
                    }
                  />
                </div>
              </div>

              <div className="md:w-[48%] w-full flex justify-center">
                <SignalRevealImage src={CollegeReal} alt="Jerusalem College of Engineering campus" />
              </div>
            </div>
          </ScrollReveal>

          {/* ===== Past Editions ===== */}
          <ScrollReveal animation="fadeInUp" className="w-full flex justify-center">
            <div className={CONTAINER}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                  <span className="flex items-center gap-2 text-[0.7rem] tracking-[0.2em] uppercase font-label-royal mb-2" style={safeText("#4fc8ff")}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4fc8ff", boxShadow: "0 0 6px #4fc8ff" }} />
                    Our Journey
                  </span>
                  <h2
                    className="font-display-royal font-bold text-3xl md:text-4xl"
                    style={gradientTextStyle("linear-gradient(100deg, #ffffff 0%, #4fc8ff 50%, #A78BFA 100%)")}
                  >
                    PAST EDITIONS
                  </h2>
                </div>
                <p className="font-body-royal text-sm md:text-base max-w-xs" style={safeText("#8a94b8")}>
                  Different themes. Same spirit. Innovation, collaboration and impact.
                </p>
              </div>

              <div className="max-w-2xl">
                {editions.map((ed, i) => (
                  <EditionEntry key={ed.edition} {...ed} isLast={i === editions.length - 1} />
                ))}
              </div>

              <div
                className="mt-8 pt-8 border-t flex flex-col md:flex-row md:items-center md:justify-between gap-5"
                style={{ borderColor: "rgba(79,200,255,0.15)" }}
              >
                <div>
                  <h3 className="font-display-royal font-bold text-xl md:text-2xl">
                    <span style={safeText("#ffffff")}>Be a part of something </span>
                    <span style={safeText("#4fc8ff")}>BIGGER</span>
                  </h3>
                  <p className="font-body-royal text-sm mt-1" style={safeText("#8a94b8")}>
                    More than a symposium, it&apos;s a platform to learn, build, network and grow.
                  </p>
                </div>
                <ExploreButton to="/events">EXPLORE EVENTS</ExploreButton>
              </div>
            </div>
          </ScrollReveal>
        </>
      )}
    </div>
  );
};

export default NewAbout;