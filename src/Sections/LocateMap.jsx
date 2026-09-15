import React from "react";
import "../text.css";

const LocateMap = () => {
  return (
    <div className="hud-panel">
      <div className="hud-header">
        <span className="hud-icon">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zM12 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
        </span>
        <span className="hud-title">LOCATE US</span>
        <span className="hud-header-line" />
      </div>

      <div className="hud-map">
        <iframe
          title="Jerusalem College of Engineering Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.40934140514!2d80.20517417404153!3d12.945638087367369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dcaf1158b69%3A0x2faed53a93b675d8!2sJerusalem%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1724333299768!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="hud-college-row">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" className="hud-college-icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
        </svg>
        <span className="hud-college-text">
          <strong>Jerusalem College of Engineering</strong>
          (An Autonomous Institution)<br />
          Chennai, Tamil Nadu - 600100
        </span>
      </div>
    </div>
  );
};

export default LocateMap;