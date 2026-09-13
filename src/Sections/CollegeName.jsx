import React from "react";
import "../text.css";
import "animate.css";

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
      <p className="text-center">
        <span className="font-display-royal gold-solid text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold animate__animated animate__fadeInUp duration-500 block">
          JERUSALEM COLLEGE OF ENGINEERING
        </span>

        <span className="font-subtitle-royal gold-solid text-sm sm:text-sm md:text-base lg:text-base animate__animated animate__fadeInUp duration-500 block mt-2">
          An Autonomous Institution | Chennai, Tamil Nadu &ndash; 600100
        </span>

        <span className="font-heading-royal gold-solid mt-4 text-sm sm:text-lg md:text-xl lg:text-xl font-bold tracking-widest animate__animated animate__fadeInUp duration-500 block">
          PRESENTS
        </span>

        <div className="royal-divider">
          <span className="diamond"></span>
        </div>
      </p>

      <h1 className="font-display-royal gold-solid text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold animate__animated animate__fadeInUp duration-500 mt-4">
        TECHNOVANZA 2026&ndash;&rsquo;27
      </h1>

      <span className="font-heading-royal gold-solid mt-3 text-lg sm:text-lg md:text-xl lg:text-2xl font-bold animate__animated animate__fadeInUp duration-500 block leading-snug">
        National Level Inter-Collegiate Technical Symposium
      </span>
    </div>
  );
};

export default CollegeName;