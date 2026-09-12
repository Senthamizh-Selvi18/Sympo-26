import React, { useState, useRef } from "react";
import "./Button2.css";

const NewButton = (props) => {
  const [clicked, setClicked] = useState(false);
  const timeoutRef = useRef(null);

  const handleClick = (e) => {
    setClicked(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setClicked(false), 650);
    if (props.onClick) props.onClick(e);
  };

  return (
    <button
      type="button"
      style={props.style1 && { border: "white solid 2px" }}
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
      <span className="label-text">{props.label}</span>
      <span className="spark" /><span className="spark" /><span className="spark" />
      <span className="spark" /><span className="spark" /><span className="spark" />
    </button>
  );
};

export default NewButton;