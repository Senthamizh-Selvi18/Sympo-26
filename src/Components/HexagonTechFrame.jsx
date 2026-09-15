import React from "react";
import "./styles/hexagonTechFrame.css";

const HexagonTechFrame = ({ title = "TECHNICAL EVENTS", children }) => {
  return (
    <div className="hex-frame-wrapper">
      {/* Side HUD Nodes */}
      <div className="hex-side-node hex-side-node-left">
        <div className="hex-node-bar">
          <div className="hex-node-notch" />
        </div>
      </div>
      <div className="hex-side-node hex-side-node-right">
        <div className="hex-node-bar">
          <div className="hex-node-notch" />
        </div>
      </div>

      {/* Main Hexagonal / Octagonal Backdrop */}
      <div className="hex-frame-backdrop">
        {/* Subtle cyber grid backdrop */}
        <div className="hex-frame-grid" />

        {/* Dynamic Vector HUD Overlay */}
        <svg
          className="hex-frame-svg-overlay"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 600"
        >
          <defs>
            <linearGradient id="cyanLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#0099ff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.9" />
            </linearGradient>
            <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Chamfered Hexagon / Octagon Boundary Path */}
          <polygon
            points="38,2 962,2 998,38 998,562 962,598 38,598 2,562 2,38"
            className="hex-frame-border"
          />

          {/* Inner Dashed Tech Alignment Border */}
          <polygon
            points="46,12 954,12 988,46 988,554 954,588 46,588 12,554 12,46"
            className="hex-frame-inner-border"
          />

          {/* Top-Left Corner Bracket & Circuit Trace */}
          <path
            d="M 60,6 L 36,6 L 6,36 L 6,60"
            className="hex-corner-bracket"
          />
          <path
            d="M 18,18 L 8,8"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <circle cx="6" cy="60" r="2.5" className="hex-corner-dot" />
          <circle cx="60" cy="6" r="2.5" className="hex-corner-dot" />

          {/* Top-Right Corner Bracket & Circuit Trace */}
          <path
            d="M 940,6 L 964,6 L 994,36 L 994,60"
            className="hex-corner-bracket"
          />
          <path
            d="M 982,18 L 992,8"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <circle cx="994" cy="60" r="2.5" className="hex-corner-dot" />
          <circle cx="940" cy="6" r="2.5" className="hex-corner-dot" />

          {/* Bottom-Left Corner Bracket & Circuit Trace */}
          <path
            d="M 60,594 L 36,594 L 6,564 L 6,540"
            className="hex-corner-bracket"
          />
          <path
            d="M 18,582 L 8,592"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <circle cx="6" cy="540" r="2.5" className="hex-corner-dot" />
          <circle cx="60" cy="594" r="2.5" className="hex-corner-dot" />

          {/* Bottom-Right Corner Bracket & Circuit Trace */}
          <path
            d="M 940,594 L 964,594 L 994,564 L 994,540"
            className="hex-corner-bracket"
          />
          <path
            d="M 982,582 L 992,592"
            stroke="#00f0ff"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />
          <circle cx="994" cy="540" r="2.5" className="hex-corner-dot" />
          <circle cx="940" cy="594" r="2.5" className="hex-corner-dot" />

          {/* Horizontal Edge HUD Accent Ticks */}
          <line x1="450" y1="2" x2="470" y2="2" stroke="#00f0ff" strokeWidth="3" />
          <line x1="530" y1="2" x2="550" y2="2" stroke="#00f0ff" strokeWidth="3" />
          <line x1="450" y1="598" x2="470" y2="598" stroke="#00f0ff" strokeWidth="3" />
          <line x1="530" y1="598" x2="550" y2="598" stroke="#00f0ff" strokeWidth="3" />
        </svg>

        {/* Top Center HUD Section Title */}
        <div className="hex-hud-top-center">
          <div className="hex-hud-line" />
          <div className="hex-hud-chip">{title}</div>
          <div className="hex-hud-line reverse" />
        </div>

        {/* Content Container (Event Posters) */}
        <div className="hex-frame-content">
          {children}
        </div>

        {/* Bottom Center HUD Detail */}
        <div className="hex-hud-bottom-center">
          <div className="hex-hud-line" />
          <div className="hex-hud-chip">TECHNOVANZA // EXHIBITION</div>
          <div className="hex-hud-line reverse" />
        </div>
      </div>
    </div>
  );
};

export default HexagonTechFrame;
