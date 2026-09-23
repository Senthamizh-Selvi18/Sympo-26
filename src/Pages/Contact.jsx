import React from "react";
import { Navigate } from "react-router-dom";
import "./styles/Contact.css";
import Footer from "../Sections/Footer";
import "../text.css";

const SHOW_CONTACT_PAGE = true;

const Contact = () => {

  const tracks = [
    {
      trackName: "TRACK 1",
      layout: "grid-3",
      coordinators: [
        {
          name: "Ms. J. Narmadha",
          designation: "Student Coordinator - AI&DS",
          phone: "+919840898728",
        },
        {
          name: "R. Akshaya",
          designation: "Student Coordinator - AI&ML",
          phone: "+919524579186",
        },
        {
          name: "V. Indhumathi",
          designation: "Student Coordinator - CS",
          phone: "+919677309660",
        },
        {
          name: "Meghasree G",
          designation: "Student Coordinator - CS&BS",
          phone: "+917806803699",
        },
        {
          name: "Nandini J",
          designation: "Student Coordinator - CSE",
          phone: "+919384791558",
        },
        {
          name: "A. Kishore",
          designation: "Student Coordinator - IT",
          phone: "+919677056900",
        },
      ],
    },
    {
      trackName: "TRACK 2",
      layout: "grid-2",
      coordinators: [
        {
          name: "M Sri Mala",
          designation: "Student Coordinator - BME",
          phone: "+919790319461",
        },
        {
          name: "L. Sreearjunan",
          designation: "Student Coordinator - ECE",
          phone: "+919003143820",
        },
        {
          name: "Ishaq Hameed.N",
          designation: "Student Coordinator - EEE",
          phone: "+917200931942",
        },
        {
          name: "Pooja Sri N",
          designation: "Student Coordinator - MBA",
          phone: "+917358393785",
        },
      ],
    },
  ];

  const CoordinatorCard = ({ coordinator }) => (
    <div className="coord-card-outer">
      <div className="coord-card">
        {/* corner tabs sticking outward, matching reference */}
        <span className="coord-tab coord-tab-tl" />
        <span className="coord-tab coord-tab-tr" />
        <span className="coord-tab coord-tab-bl" />
        <span className="coord-tab coord-tab-br" />

        <div className="coord-avatar-wrap">
          <div className="coord-avatar-ring">
            <svg viewBox="0 0 24 24" fill="currentColor" className="coord-avatar-icon">
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1c0-2.76-3.58-5-8-5Z" />
            </svg>
            <span className="coord-sheen" />
          </div>
          <span className="coord-avatar-connector" />
        </div>

        <h3 className="coord-name">{coordinator.name.toUpperCase()}</h3>
        <p className="coord-role">{coordinator.designation}</p>

        <button
          className="coord-contact-btn"
          onClick={() => (window.location.href = `tel:${coordinator.phone}`)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="coord-contact-icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.894 5.308c.63.424 1.648.424 2.278 0L21 8M5 19h14c1.657 0 3-1.343 3-3V7c0-1.657-1.343-3-3-3H5C3.343 4 2 5.343 2 7v9c0 1.657 1.343 3 3 3z"
            />
          </svg>
          <span>Contact</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.5"
            className="coord-contact-arrow"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <span className="coord-ticks">
          <span /><span /><span /><span />
        </span>
      </div>
    </div>
  );

  if (!SHOW_CONTACT_PAGE) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <div className="contact-container bg-transparent text-white">
        <h1 className="contact-heading">CONTACT DETAILS</h1>

        {tracks.map((track) => (
          <div key={track.trackName} className="track-section">
            <div className="track-heading-row">
              <h2 className="track-title">{track.trackName}</h2>
              <span className="track-rule" />
            </div>
            <div
              className={`coordinators-row ${
                track.layout === "grid-2" ? "coordinators-row--grid-2" : ""
              }`}
            >
              {track.coordinators.map((coordinator, idx) => (
                <CoordinatorCard key={idx} coordinator={coordinator} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Contact;