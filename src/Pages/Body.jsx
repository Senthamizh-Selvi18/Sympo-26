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

const DEADLINE = new Date("2026-10-08T17:00:00");

const getRemaining = () => {
  const diff = DEADLINE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  return { days, hours };
};

const DiamondStat = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-14 h-14 border border-[#C9A227] rotate-45 flex items-center justify-center bg-[#080B1C]">
      <span className="-rotate-45 font-heading-royal text-lg text-[#E2C158] font-bold">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] text-gray-500 mt-2 tracking-wide">
      {label}
    </span>
  </div>
);

const Body = () => {
  const navigate = useNavigate();

  // 🧩 Popup control
  const [showPopup, setShowPopup] = useState(true);
  const [remaining, setRemaining] = useState(getRemaining());

  useEffect(() => {
    if (!showPopup) return;
    const id = setInterval(() => setRemaining(getRemaining()), 30000);
    return () => clearInterval(id);
  }, [showPopup]);

  const handleUnleashClick = () => {
    navigate("/events");
  };

  return (
    <div className="relative">
      {/* 🌟 Event Deadline Popup — the Seal */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060f]/85 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="relative w-[92vw] sm:w-[400px]"
              initial={{ scale: 0.6, opacity: 0, rotate: -6 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.7, opacity: 0, rotate: 6 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* slow radar sweep behind the seal */}
              <motion.div
                className="absolute -inset-8 rounded-full pointer-events-none"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(201,162,39,0.35) 60deg, transparent 150deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              />

              {/* hexagonal seal outline */}
              <svg
                className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon
                  points="20,2 80,2 98,50 80,98 20,98 2,50"
                  fill="none"
                  stroke="#C9A227"
                  strokeOpacity="0.5"
                  strokeWidth="0.6"
                />
              </svg>

              {/* content panel */}
              <div className="relative bg-[#0B0F26] border border-[#C9A227]/25 px-8 py-9 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[#C9A227]/60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2C158]"></span>
                  </span>
                  <span className="font-label-royal text-[#C9A227] text-xs tracking-wide">
                    Royal summons
                  </span>
                </div>

                <h2 className="font-heading-royal gold-solid text-xl sm:text-2xl font-bold leading-snug mb-2">
                  Technovanza awaits your reply.
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-[32ch] mx-auto">
                  Registrations for the 2026–'27 symposium close October 8 at
                  5:00 PM. Claim your seat before the seal closes.
                </p>

                <div className="flex gap-8 justify-center mb-7">
                  <DiamondStat value={remaining.days} label="days" />
                  <DiamondStat value={remaining.hours} label="hours" />
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button
                    onClick={() => {
                      setShowPopup(false);
                      navigate("/events");
                    }}
                    className="font-label-royal text-sm px-6 py-2 rounded-full border border-[#C9A227] text-[#E2C158] hover:bg-[#C9A227] hover:text-[#0B0F26] transition-colors duration-200"
                  >
                    Reserve my seat
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-gray-500 text-sm hover:text-gray-300 underline underline-offset-2 transition-colors duration-200"
                  >
                    Not now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧠 Main Page */}
      <section className="relative w-screen h-100% flex items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-screen"></div>

        <div className="mt-small">
          <CollegeName />
          <div className="flex flex-wrap justify-center gap-5 my-1 animate__animated animate__fadeInUp duration-500">
            <Button onClick={handleUnleashClick}>
              <span
                style={{
                  fontFamily: "collegefont",
                  fontWeight: "bold",
                  letterSpacing: "0.07em",
                  fontSize: "17px",
                }}
              >
                Dive In
              </span>
            </Button>
          </div>

          <CountdownTimer />
        </div>
      </section>

      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />

      <ScrollReveal animation="fadeInUp">
        <NewAbout style="true" />
      </ScrollReveal>

      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />

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