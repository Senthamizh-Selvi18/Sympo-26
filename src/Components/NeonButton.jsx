import React, { useState } from "react";
import styled from "styled-components";

const NeonButton = ({ label, onClick, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledWrapper>
      <button
        className="button"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </button>
      {isHovered && tooltip && <Tooltip>{tooltip}</Tooltip>}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  .button {
    cursor: pointer;
    position: relative;
    width: 250px; /* Fixed width */
    height: 60px; /* Fixed height */
    text-decoration: none;
    border: none;
    color: #eaf6ff;
    font-size: 1.1em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: "Segoe UI", Arial, sans-serif;
    letter-spacing: 3px;
    overflow: hidden;
    background: rgba(18, 53, 107, 0.35);
    box-shadow: 0 5px 5px rgba(2, 8, 20, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(79, 214, 255, 0.08);
  }
  .button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(79, 214, 255, 0.45),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  .button:hover:after {
    left: 100%;
  }
  .button span {
    position: absolute;
    display: block;
    transition: 0.5s ease;
  }
  .button span:nth-child(1) {
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #4fd6ff;
    box-shadow: 0 0 6px #4fd6ff;
  }
  .button:hover span:nth-child(1) {
    width: 100%;
    transform: translateX(100%);
  }
  .button span:nth-child(2) {
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background: #4fd6ff;
    box-shadow: 0 0 6px #4fd6ff;
  }
  .button:hover span:nth-child(2) {
    height: 100%;
    transform: translateY(100%);
  }
  .button span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: #4fd6ff;
    box-shadow: 0 0 6px #4fd6ff;
  }
  .button:hover span:nth-child(3) {
    width: 100%;
    transform: translateX(-100%);
  }
  .button span:nth-child(4) {
    bottom: 0;
    right: 0;
    width: 1px;
    height: 0;
    background: #4fd6ff;
    box-shadow: 0 0 6px #4fd6ff;
  }
  .button:hover span:nth-child(4) {
    height: 100%;
    transform: translateY(-100%);
  }
  .button:hover {
    color: #8ff2ff;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%; /* Adjust this to position the tooltip above the button */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 26, 53, 0.85);
  border-radius: 8px;
  padding: 10px 15px;
  color: #eaf6ff;
  font-size: 0.9em;
  box-shadow: 0 4px 14px rgba(2, 8, 20, 0.5);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(79, 214, 255, 0.3);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Position at the bottom edge of the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(10, 26, 53, 0.85);
    z-index: 1;
  }
`;

export default NeonButton;