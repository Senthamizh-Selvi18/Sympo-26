import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./styles/animation.css";
import "../text.css";
import Image from "../assets/symposium/Logo/spidy logo.png";
import CollegeNormal from "../assets/symposium/Logo/nocol.png";
import CollegeColorful from "../assets/symposium/Logo/col.png";
import S1Normal from "../assets/symposium/Logo/s1nocol.png";
import S1Colorful from "../assets/symposium/Logo/s1col.png";

const NOTCH = (cut) =>
  `polygon(${cut}px 0, 100% 0, 100% calc(100% - ${cut}px), calc(100% - ${cut}px) 100%, 0 100%, 0 ${cut}px)`;

/* ---------------------------------------------------------------
   Button — new hover: solid colour crossfade (no sweep/fill wipe),
   a soft glow bloom, and the button lifts 2px. Arrow just fades
   brighter instead of translating. Violet, tuned to sit on navy.
---------------------------------------------------------------- */
const ExploreButton = ({ children, to }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={() => navigate(to)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full sm:w-auto mt-6"
    >
      <div
        className="relative py-2.5 px-5 min-w-[190px] flex items-center justify-center gap-1.5 border-2"
        style={{
          clipPath: NOTCH(12),
          borderColor: hovered ? "#B9A2FF" : "rgba(167,139,250,0.5)",
          background: hovered ? "#7C5CE0" : "#0E1530",
          boxShadow: hovered
            ? "0 6px 22px rgba(124,92,224,0.45)"
            : "0 0 0 rgba(0,0,0,0)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition:
            "background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, transform 0.25s ease",
        }}
      >
        <span
          className="font-mono text-xs tracking-[0.15em] font-bold"
          style={{
            color: hovered ? "#ffffff" : "#E9E2FF",
            transition: "color 0.3s ease",
          }}
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

/* ---------------------------------------------------------------
   Logo — completely static positioning (no VanillaTilt, no
   transform of any kind on hover). Only a soft glow brightens
   around it and a thin underline bar fades in beneath it. Nothing
   moves, rotates, or scales.
---------------------------------------------------------------- */
const StaticGlowLogo = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full md:max-w-[80%] rounded-lg"
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

const CrossfadeImage = ({ plain, colorful, height = 600 }) => {
  const [showColorful, setShowColorful] = useState(false);
  const [hovered, setHovered] = useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setShowColorful(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-full relative flex justify-center mb-8 overflow-hidden rounded-xl"
      style={{ height: `${height}px`, ...glowStyle(hovered) }}
    >
      <img
        src={plain}
        alt="College Building"
        className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-700 ease-out ${
          showColorful ? "opacity-0" : "opacity-100"
        } ${hovered ? "scale-105" : "scale-100"}`}
        style={{ zIndex: 2 }}
      />
      <img
        src={colorful}
        alt="College Building Colorful"
        className={`w-full h-full object-cover absolute top-0 left-0 transition-all duration-700 ease-out ${
          showColorful ? "opacity-100" : "opacity-0"
        } ${hovered ? "scale-105" : "scale-100"}`}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

const SectionLabel = ({ children }) => (
  <motion.span
    initial={{ opacity: 0, y: -10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="font-label-royal about-label text-xs md:text-sm block mb-2 text-left"
  >
    {children}
  </motion.span>
);

const NewAbout = (props) => {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Technovanza intro */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        onMouseEnter={() => setCardHovered(true)}
        onMouseLeave={() => setCardHovered(false)}
        className="relative pt-24 sm:pt-10 p-6 md:p-10 w-full max-w-5xl mb-16 rounded-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(13,31,71,0.7), rgba(8,22,51,0.8))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(167,139,250,0.22)",
          ...glowStyle(cardHovered),
        }}
      >
        <SectionLabel>About</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display-royal font-bold text-3xl md:text-5xl tracking-wide text-left mb-6"
        >
          <span className="about-title-white">TECHNOVANZA </span>
          <span className="about-title-cyan">2026-&apos;27</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-start w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:w-[60%] w-full font-body-royal about-body text-base md:text-lg leading-relaxed text-justify md:pr-6"
          >
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

            <ExploreButton to="/about">EXPLORE MORE</ExploreButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:w-[40%] w-full mt-6 md:mt-0 flex justify-center"
          >
            <StaticGlowLogo src={Image} alt="Technovanza Logo" />
          </motion.div>
        </div>
      </motion.div>

      {/* College Section 1 */}
      {!props.style && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl p-6 md:p-10 flex flex-col md:flex-row items-center"
          >
            <div className="md:w-[65%] w-full mb-6 md:mb-0 md:mr-8">
              <CrossfadeImage
                plain={CollegeNormal}
                colorful={CollegeColorful}
                height={600}
              />
            </div>
            <div className="md:w-[35%] w-full font-body-royal text-lg leading-relaxed text-justify px-4 flex flex-col justify-center">
              <h2 className="font-heading-royal gold-solid text-3xl md:text-4xl mb-6 text-left relative inline-block w-fit group">
                About Our College
                <span
                  className="absolute left-0 -bottom-2 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #A78BFA, transparent)" }}
                />
              </h2>
              <p className="mb-4">
                Jerusalem College of Engineering, Chennai, established in
                1995, is a premier autonomous institution affiliated with
                Anna University and approved by AICTE. Located in
                Pallikaranai, Chennai, the college offers a wide range of
                undergraduate, postgraduate, and doctoral programs in
                engineering, technology, computer applications, and
                management. Accredited by NAAC and NBA, it provides quality
                education grounded in ethical values.
              </p>
              <p className="mb-4">
                The college fosters research, entrepreneurship, and industry
                collaboration, supported by experienced faculty and modern
                infrastructure. With specialized courses in fields like
                Artificial Intelligence, Data Science, and Cyber Security,
                Jerusalem College of Engineering prepares students for
                successful careers and meaningful societal contributions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-7xl p-6 md:p-10 flex flex-col md:flex-row items-center"
          >
            <div className="md:w-[65%] w-full mb-6 md:mb-0 md:mr-8">
              <CrossfadeImage
                plain={S1Normal}
                colorful={S1Colorful}
                height={600}
              />
            </div>
            <div className="md:w-[35%] w-full font-body-royal text-lg leading-relaxed text-justify px-4 flex flex-col justify-center">
              <h2 className="font-heading-royal gold-solid text-3xl md:text-4xl mb-6 text-left relative inline-block w-fit group">
                Campus Life
                <span
                  className="absolute left-0 -bottom-2 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, #A78BFA, transparent)" }}
                />
              </h2>
              <p className="mb-4">
                Jerusalem College of Engineering offers a vibrant campus life
                with a strong emphasis on holistic student development. The
                college provides excellent infrastructure including smart
                classrooms, well-equipped laboratories, a spacious library,
                hostels, sports complexes, and a cafeteria. Students actively
                participate in various cultural, technical, and sports
                events, as well as clubs and societies like the National
                Service Scheme (NSS), Rotaract Club, and Tamil Mandram.
              </p>
              <p>
                The college promotes physical fitness through sports such as
                volleyball, basketball, cricket, and football, fostering team
                spirit and healthy competition. Regular symposiums, workshops,
                and cultural fests enrich the campus experience, encouraging
                creativity and leadership. Supported by a dedicated faculty
                and modern facilities, student life at Jerusalem College of
                Engineering is dynamic, inclusive, and nurturing for future
                professionals.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default NewAbout;