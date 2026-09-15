import React from "react";
import NonCircuitnTech from "../Components/NonCircuitnTech";
import NonCircuitTec from "../Components/NonCircuitTec";
import TrackInfo from "../Pages/TrackInfo";
import VoltageButton from "../Components/VoltageButton";

const NonCircuit = () => {
  return (
    <div>
      <TrackInfo
        label="TRACK I"
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don't miss the opportunity to engage with tech enthusiasts and experts."
      />

      <NonCircuitTec />
      <NonCircuitnTech />

      <div className="event-buttons-container flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
        <a
          href="https://forms.gle/YRbsnJiPvX2qFED79"
          target="_blank"
          rel="noopener noreferrer"
        />
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
        
      </div>

      <br />
    </div>
  );
};

export default NonCircuit;