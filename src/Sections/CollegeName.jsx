import React from 'react';
import '../text.css'; // Make sure to import your font CSS file
import 'animate.css';

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
      <p className="font-playfair text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-0 text-white animate__animated animate__fadeInUp duration-500 tracking-wider">
        JERUSALEM COLLEGE OF ENGINEERING
        <span className="font-montserrat text-sm font-medium text-white animate__animated animate__fadeInUp duration-500 block mt-2 tracking-widest">(An Autonomous Institution)</span>
        <span className="font-montserrat text-sm sm:text-sm md:text-base lg:text-lg font-medium text-white animate__animated animate__fadeInUp duration-500 block mt-1 tracking-widest uppercase">Chennai, Tamil Nadu - 600100</span>
        <span className="font-montserrat mt-4 text-sm sm:text-1xl md:text-2xl lg:text-2xl font-medium text-white animate__animated animate__fadeInUp duration-500 block tracking-widest">PRESENTS</span>
        <span className="font-montserrat mt-4 text-xl sm:text-1xl md:text-2xl lg:text-3xl font-medium mb-0 text-white animate__animated animate__fadeInUp duration-500 block tracking-wider">AN INTER COLLEGIATE NATIONAL LEVEL TECHNICAL SYMPOSIUM</span><br />
        
      </p>
      
      {/* style={{ textShadow: '0 0 8px white' }} */}
      <h1 className="font-aboutfont text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold animate__animated animate__fadeInUp duration-500 tracking-wider bg-gradient-to-r from-[#8a2be2] via-[#9370db] to-[#00ffff] bg-clip-text text-transparent" style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.8))", marginBottom: "0.5rem" }}>
        TECHNOVANZA
      </h1>
      <h2 className="font-montserrat text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white animate__animated animate__fadeInUp duration-500 tracking-widest inline-block" style={{ textShadow: "0 0 10px black, 0 0 20px black" }}>
        2026 - '27
      </h2>
    </div>
  );
}

export default CollegeName;
