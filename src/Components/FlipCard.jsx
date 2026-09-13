import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/flipcard.css";

/**
 * FlipCard — 3D Y-axis flip on hover (desktop) / tap (mobile).
 *
 * Front  → event poster image with the same animated conic-gradient border
 *          as the original Card component
 * Back   → event details panel with ZenoFest2K26 glassmorphism dark theme
 */
const FlipCard = ({
  imageSrc,
  altText,
  title,
  category,
  description,
  date,
  team,
  prize,
  path,
}) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);
  const navigate = useNavigate();

  /* ── Touch: tap outside collapses the card ──────────────────────────── */
  useEffect(() => {
    if (!flipped) return;
    const handleOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setFlipped(false);
      }
    };
    document.addEventListener("touchstart", handleOutside, { passive: true });
    return () => document.removeEventListener("touchstart", handleOutside);
  }, [flipped]);

  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  const handleTap = (e) => {
    e.preventDefault();
    setFlipped((prev) => !prev);
  };

  const handleKnowMore = (e) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <div
      ref={cardRef}
      className={`fc-scene${flipped ? " fc-flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTap}
      aria-label={`${title || altText} event card`}
    >
      {/* ── Animated conic-gradient border (same as original .card) ─────── */}
      <div className="fc-border-ring" />
      <div className="fc-border-ring fc-border-ring--blur" />

      <div className="fc-inner">
        {/* ── FRONT: poster image ───────────────────────────────────────── */}
        <div className="fc-face fc-front">
          <img
            src={imageSrc}
            alt={altText}
            className="fc-poster-img"
            draggable={false}
          />
        </div>

        {/* ── BACK: event details ───────────────────────────────────────── */}
        <div className="fc-face fc-back">
          {/* ambient glow */}
          <div className="fc-glow" />

          {category && <span className="fc-badge">{category}</span>}

          <h3 className="fc-title">{title || altText}</h3>

          <div className="fc-divider" />

          {description && <p className="fc-desc">{description}</p>}

          <ul className="fc-meta">
            {date && (
              <li>
                <span className="fc-icon">📅</span>
                {date}
              </li>
            )}
            {team && (
              <li>
                <span className="fc-icon">👥</span>
                {team}
              </li>
            )}
            {prize && (
              <li>
                <span className="fc-icon">🏆</span>
                {prize}
              </li>
            )}
          </ul>

          {path && (
            <button
              className="fc-btn"
              onClick={handleKnowMore}
              onTouchEnd={(e) => {
                e.stopPropagation();
                navigate(path);
              }}
              aria-label={`Know more about ${title || altText}`}
            >
              Know More →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
