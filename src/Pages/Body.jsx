import React, { useState, useEffect } from "react";
import CollegeName from "../Sections/CollegeName";
import Faq from "../Sections/Faq";
import NewAbout from "./About";
import CountdownTimer from "../Sections/CountDown";
import Footer from "../Sections/Footer";
import Teams from "../Sections/Teams";
import VoltageButton from "../Components/VoltageButton";
import "animate.css";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();

  // 🧩 Popup control
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const handleClick = () => setShowPopup(false);

    if (showPopup) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
  }, [showPopup]);

  const handleUnleashClick = () => {
    navigate("/events");
  };

  return (
    <div className="relative">
      {/* 🌟 Event Deadline Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 animate__animated animate__fadeIn">
          <div className="relative bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 p-[2px] rounded-3xl shadow-[0_0_25px_rgba(255,100,200,0.5)]">
            <div className="bg-gray-900 rounded-3xl px-8 py-6 text-center w-[90%] sm:w-[400px] animate__animated animate__pulse animate__infinite">
              <h2 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-300 drop-shadow-lg">
                ⚡ Registration Closing Soon!
              </h2>
              <p className="text-gray-300 text-base mb-1">
                Hurry up! Event registration ends on
              </p>
              <p className="text-2xl font-bold text-yellow-400 mb-2">
                October 8, 5:00 PM ⏰
              </p>
              <p className="text-sm text-gray-400">Click anywhere to continue.</p>
            </div>
          </div>
        </div>
      )}

      {/* 🧠 Main Page */}
      <section className="relative w-screen h-100% flex items-center justify-center overflow-hidden">
        {/* Background video (optional)
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="bg.mp4"
          autoPlay
          loop
          muted
        /> */}

        <div className="absolute top-0 left-0 w-full h-screen"></div>

        <div className="mt-small">
          <CollegeName />
          <div className="flex flex-wrap justify-center gap-5 my-1 animate__animated animate__fadeInUp duration-500">
            <VoltageButton
              label={
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "bold",
                    letterSpacing: "0.07em",
                    fontSize: "25px",
                  }}
                >
                  DIVE IN
                </span>
              }
              onClick={handleUnleashClick}
            />
          </div>

          <CountdownTimer />
        </div>
      </section>

      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <NewAbout style="true" />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />

      <Faq />
      <Footer />
      <Teams />
    </div>
  );
};

export default Body;
