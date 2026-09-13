import React, { useEffect, useRef } from "react";
import "./animation.css"; // Import the CSS for the cubes animation
import VanillaTilt from "vanilla-tilt";
import Image from "../utils/Img/TechLogo.jpg";

const Track2 = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt for the image container
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Maximum tilt
        speed: 400, // Animation speed
        glare: false, // Add a glare effect
      });
    }
  }, []);

  return (
    <div className="bg-dark-grey text-white-grey flex flex-col items-center py-10">
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container p-6 md:p-10 w-full max-w-5xl">

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-aboutfont text-green-blue tracking-widest mb-8 text-left">
          Track 2
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text Section */}
          <div className="md:w-[60%] w-full text-lg leading-relaxed text-justify px-4">
            <p>
            Technovanza is where innovation meets imagination, bringing together aspiring engineers, emerging ideas, and technology enthusiasts in an environment that encourages learning, creativity, and meaningful collaboration. It provides a platform for students to explore new possibilities, exchange knowledge, and showcase their technical abilities.
            </p>
            <p className="mt-4">
              More than a symposium, it is a platform for learning, creativity, and excellence, inspiring students to transform their ideas into solutions for tomorrow's challenges.
            </p>
          </div>

          {/* Image Section */}
          <div
            ref={tiltRef}
            className="md:w-[40%] w-full mt-6 md:mt-0 flex justify-center"
          >
            <img
              src={Image}
              alt="Technovanza Logo"
              className="max-w-full md:max-w-[80%] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Track2;
