import React from "react";
import "../text.css";

const ContactUs = () => {
  return (
    <div className="hud-panel">
      <div className="hud-header">
        <span className="hud-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.894 5.308c.63.424 1.648.424 2.278 0L21 8M5 19h14c1.657 0 3-1.343 3-3V7c0-1.657-1.343-3-3-3H5C3.343 4 2 5.343 2 7v9c0 1.657 1.343 3 3 3z" />
          </svg>
        </span>
        <span className="hud-title">REACH OUT</span>
        <span className="hud-header-line" />
      </div>

      <div className="hud-contact-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="hud-contact-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
        <span className="hud-contact-text">
          Velachery main road, Narayanapuram, Pallikaranai, Chennai - 600 100
        </span>
      </div>

      <a href="mailto:symposium2025@jerusalemengg.ac.in" className="hud-contact-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="hud-contact-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.894 5.308c.63.424 1.648.424 2.278 0L21 8M5 19h14c1.657 0 3-1.343 3-3V7c0-1.657-1.343-3-3-3H5C3.343 4 2 5.343 2 7v9c0 1.657 1.343 3 3 3z" />
        </svg>
        <span className="hud-contact-text">symposium2026@jerusalemengg.ac.in</span>
      </a>
    </div>
  );
};

export default ContactUs;