import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/card.css";
import "./styles/flipcard.css";

/**
 * FlipCard — wraps the existing Card poster in a 3D flip shell.
 *
 * Front  → existing poster image (same visual as before)
 * Back   → event details with ZenoFest2K26 glassmorphism dark theme
 *
 * Hover  (desktop) → flip
 * Tap    (touch)   → first tap flips, second tap / tap outside → flips back
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

  // Touch: tap outside to flip back
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

  // Desktop hover handlers
  const handleMouseEnter = () => setFlipped(true);
  const handleMouseLeave = () => setFlipped(false);

  // Touch tap handler
  const handleTap = (e) => {
    e.preventDefault();
    setFlipped((prev) => !prev);
  };

  // "Know More" click navigates
  const handleKnowMore = (e) => {
    e.stopPropagation();
    navigate(path);
  };

  return (
    <div
      ref={cardRef}
      className="flip-card-scene"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTap}
      aria-label={`${title || altText} event card`}
    >
      <div className={`flip-card-inner${flipped ? " is-flipped" : ""}`}>
        {/* FRONT: original poster */}
        <div className="flip-card-front card">
          <a>
            <div className="wrapper">
              <img
                src={imageSrc}
                alt={altText}
                className="cover-image w-full h-auto block"
                draggable={false}
              />
            </div>
          </a>
        </div>

        {/* BACK: event details */}
        <div className="flip-card-back">
          <div className="flip-back-glow" />

          {category && (
            <span className="flip-back-badge">{category}</span>
          )}

          <h3 className="flip-back-title">{title || altText}</h3>

          <div className="flip-back-divider" />

          {description && (
            <p className="flip-back-desc">{description}</p>
          )}

          <ul className="flip-back-meta">
            {date && (
              <li>
                <span className="flip-meta-icon">📅</span>
                {date}
              </li>
            )}
            {team && (
              <li>
                <span className="flip-meta-icon">👥</span>
                {team}
              </li>
            )}
            {prize && (
              <li>
                <span className="flip-meta-icon">🏆</span>
                {prize}
              </li>
            )}
          </ul>

          {path && (
            <button
              className="flip-back-btn"
              onClick={handleKnowMore}
              onTouchEnd={(e) => { e.stopPropagation(); navigate(path); }}
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
