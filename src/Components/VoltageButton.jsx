import React, { useState, useRef } from "react";
import "./VoltageButton.css";

const VoltageButton = ({ label, onClick }) => {
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = (e) => {
    setClicked(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setClicked(false), 650);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      className={`iris-btn${clicked ? " clicked" : ""}`}
      onClick={handleClick}
    >
      <span className="housing">
        <span className="rivet tl" />
        <span className="rivet tr" />
        <span className="rivet bl" />
        <span className="rivet br" />
        <span className="dial-ring" />
        <span className="blade-field">
          <span className="core-glow" />
          <span className="blade" />
          <span className="blade" />
          <span className="blade" />
          <span className="blade" />
          <span className="blade" />
          <span className="blade" />
        </span>
      </span>
      <span className="label-text">{label}</span>
      <span className="spark" />
      <span className="spark" />
      <span className="spark" />
      <span className="spark" />
      <span className="spark" />
      <span className="spark" />
    </button>
  );
};

export default VoltageButton;