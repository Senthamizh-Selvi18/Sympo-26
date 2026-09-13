import React from 'react';
import LocateMap from './LocateMap';
import MediaSection from './MediaSection';
import ContactUs from './ContactUs';
import "../text.css";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="bg-custom-gradient text-white px-5 sm:px-6 md:px-10 py-10 md:py-14">
      <div className="footer-grid max-w-6xl mx-auto">
        <LocateMap />
        <MediaSection />
        <ContactUs />
      </div>
    </footer>
  );
};

export default Footer;