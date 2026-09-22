import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import VoltageButton from "./VoltageButton";
import "./styles/eventDetailDashboard.css";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: "easeOut" }
  })
};

const EventDetailLayout = ({
  posterSrc,
  posterAlt,
  title,
  subtitle,
  track = "Track I",
  category = "Technical",
  date = "Oct 10, 2025",
  team,
  prize,
  venue,
  registrationUrl,
  domains = [],
  sectionCards = [],
  backPath = "/events"
}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current && window.innerWidth >= 1024) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        scale: 1.02,
        glare: true,
        "max-glare": 0.18
      });
    }
  }, []);

  // Default registration URL based on track if not explicitly passed
  const resolvedRegUrl =
    registrationUrl ||
    (track.includes("II")
      ? "https://forms.gle/Fj7K7v8yB2G7Adp57"
      : "https://forms.gle/EdRu152LpsBAt5t56");

  // Determine back route
  const resolvedBackPath =
    backPath !== "/events"
      ? backPath
      : track.includes("II")
      ? "/track2"
      : "/track1";

  return (
    <div className="sympo-dashboard-container">
      <div className="sympo-dashboard-grid">
        {/* ================================================================
            LEFT COLUMN: POSTER SECTION (Sticky on Desktop)
            ================================================================ */}
        <motion.div
          className="sympo-poster-column"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Back Navigation Link */}
          <Link to={resolvedBackPath} className="sympo-back-link">
            <span>←</span> Back to {track}
          </Link>

          {/* Professional Dark Navy Technical Frame */}
          <div ref={tiltRef} className="sympo-poster-frame">
            {/* Tech Corner Brackets */}
            <span className="sympo-corner-bracket sympo-bracket-tl" />
            <span className="sympo-corner-bracket sympo-bracket-tr" />
            <span className="sympo-corner-bracket sympo-bracket-bl" />
            <span className="sympo-corner-bracket sympo-bracket-br" />

            {/* Poster Image Container */}
            <div className="sympo-poster-img-wrap">
              <img
                src={posterSrc}
                alt={posterAlt || `${title} Event Poster`}
                className="sympo-poster-img"
              />
            </div>
          </div>
        </motion.div>

        {/* ================================================================
            RIGHT COLUMN: DASHBOARD INFORMATION (Natural Page Scroll)
            ================================================================ */}
        <div className="sympo-details-column">
          {/* Dynamic Event Header */}
          <motion.header
            className="sympo-event-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Header Badges */}
            <div className="sympo-header-badges">
              <span className="sympo-badge sympo-badge-track">{track}</span>
              <span className="sympo-badge sympo-badge-cat">{category}</span>
              <span className="sympo-badge sympo-badge-date">📅 {date}</span>
            </div>

            {/* Event Name */}
            <h1 className="sympo-event-title">{title}</h1>

            {/* Subtitle / Event Type */}
            {subtitle && <div className="sympo-event-subtitle">{subtitle}</div>}

            {/* Circuit Accent Divider */}
            <div className="sympo-header-divider" />

            {/* Quick Specs */}
            <div className="sympo-header-specs">
              {team && (
                <div className="sympo-spec-item">
                  <span className="sympo-spec-icon">👥</span>
                  <div>
                    <span className="sympo-spec-label">Team: </span>
                    <span className="sympo-spec-value">{team}</span>
                  </div>
                </div>
              )}
              {prize && (
                <div className="sympo-spec-item">
                  <span className="sympo-spec-icon">🏆</span>
                  <div>
                    <span className="sympo-spec-label">Prize: </span>
                    <span className="sympo-spec-value">{prize}</span>
                  </div>
                </div>
              )}
              <div className="sympo-spec-item">
                <span className="sympo-spec-icon">📍</span>
                <div>
                  <span className="sympo-spec-label">Venue: </span>
                  <span className="sympo-spec-value">
                    {venue ||
                      (category?.toLowerCase().includes("online") ||
                      subtitle?.toLowerCase().includes("online")
                        ? "Online"
                        : "Campus (Offline)")}
                  </span>
                </div>
              </div>
            </div>
          </motion.header>

          {/* Section Information Cards */}
          {sectionCards.map((card, index) => {
            const isDomainCard =
              card.heading &&
              (card.heading.toLowerCase().includes("domain") ||
                card.heading.toLowerCase().includes("topic"));

            return (
              <motion.section
                key={card.key || index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="sympo-card"
              >
                {/* Card Header */}
                <div className="sympo-card-header">
                  <div className="sympo-card-title-group">
                    <span className="sympo-card-accent-bar" />
                    {card.icon && (
                      <span className="sympo-card-icon">{card.icon}</span>
                    )}
                    <h2 className="sympo-card-title">{card.heading}</h2>
                  </div>
                </div>

                {/* Card Body */}
                <div className="sympo-card-body">
                  {/* If this is a domains/topics section and custom domains pills are provided */}
                  {isDomainCard && domains && domains.length > 0 ? (
                    <div className="sympo-pill-grid">
                      {domains.map((item, dIdx) => (
                        <span key={dIdx} className="sympo-topic-pill">
                          <span className="sympo-pill-dot" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  ) : (
                    card.content
                  )}
                </div>
              </motion.section>
            );
          })}

          {/* ================================================================
              REGISTRATION CTA SECTION
              ================================================================ */}
          <motion.section
            className="sympo-reg-card"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="sympo-reg-title">Ready to Participate?</h3>
            <p className="sympo-reg-desc">
              Secure your spot at Technovanza 2026–27. Compete with the brightest
              minds, showcase your innovation, and claim exciting awards.
            </p>

            <div className="sympo-reg-btn-wrap">
              <a
                href={resolvedRegUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Register for ${title}`}
              >
                <VoltageButton
                  label={
                    <span
                      style={{
                        fontFamily: "Space Grotesk, Orbitron, Exo 2, sans-serif",
                        fontWeight: "800",
                        letterSpacing: "0.1em",
                        fontSize: "19px",
                        textTransform: "uppercase"
                      }}
                    >
                      Register Now
                    </span>
                  }
                />
              </a>
            </div>

            <div className="sympo-reg-note">
              <span>{track} Official Registration Link • Google Forms</span>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default EventDetailLayout;
