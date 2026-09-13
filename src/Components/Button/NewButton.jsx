import React, { useState, useRef } from "react";
import "./Button.css";

const NewButton = ({ label, dept, style1 }) => {
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = () => {
    setClicked(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setClicked(false), 650);
  };

  return (
    <div className="btn-container">
      <button
        type="button"
        style={style1 && { border: "white solid 2px" }}
        className={`wreck-btn${clicked ? " clicked" : ""}`}
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
        <span className="spark" /><span className="spark" /><span className="spark" />
        <span className="spark" /><span className="spark" /><span className="spark" />
      </button>
      <p className="dept-caption">{dept}</p>
    </div>
  );
};

export default NewButton;