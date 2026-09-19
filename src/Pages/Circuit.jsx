import React from "react";
import CircuitTec from "./CircuitTec";
import NonCircuitnTech from "../Components/NonCircuitnTech";
import TrackInfo from "./TrackInfo";
import VoltageButton from "../Components/VoltageButton";
import "./styles/animation.css";

const Circuit = () => {
  return (
    <div>
      <TrackInfo
        label="TRACK II"
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />
      <div className="event-buttons-container flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
        <a
          href="https://forms.gle/Fj7K7v8yB2G7Adp57"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VoltageButton
            label={
              <span
                style={{
                  fontFamily: "collegefont",
                  fontWeight: "bold",
                  letterSpacing: "0.07em",
                  fontSize: "25px",
                }}
              >
                Register
              </span>
            }
          />
        </a>
      </div>

      <CircuitTec />
      <NonCircuitnTech />
      <br />
    </div>
  );
};

export default Circuit;