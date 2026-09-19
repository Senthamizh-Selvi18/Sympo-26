import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import senthamizh from "../Pages/contributors image/Senthamizh.jpeg";
import sanjay from "../Pages/contributors image/Sanjay_k.jpeg";

const TeamMember = ({ member, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), index * 120);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`dev-card transform transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* corner brackets */}
      <span className="dev-corner dev-corner-tl" />
      <span className="dev-corner dev-corner-tr" />
      <span className="dev-corner dev-corner-bl" />
      <span className="dev-corner dev-corner-br" />

      <div className="dev-photo-wrap">
        <div className="dev-photo-ring">
          <img
            src={member.image}
            alt={member.name}
            className="dev-photo"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="dev-photo-fallback">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
      </div>

      <h3 className="dev-name">{member.name}</h3>
      <p className="dev-role">{member.description}</p>

      <div className="dev-links">
        <a
          href={member.github}
          className="dev-link-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href={member.linkedin}
          className="dev-link-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Senthamizh Selvi I",
      image: senthamizh,
      github: "https://github.com/Senthamizh-Selvi18",
      linkedin: "https://linkedin.com/in/senthamizh-selvi-i-298451359",
      description: "3RD YEAR CSE",
    },
    {
      name: "Sanjay K",
      image: sanjay,
      github: "https://github.com/sanjaykarthic77sky",
      linkedin: "https://www.linkedin.com/in/sanjay-k-87941537a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpFs6DdnIRQiTSfEMeNsQAw%3D%3D",
      description: "3RD YEAR CSE",
    },
  ];

  return (
    <div className="dev-page min-h-screen py-16 px-4">
      <style>{`
        .dev-page {
          background: transparent;
        }

        .dev-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          letter-spacing: 0.03em;
          color: #ffffff;
          margin-bottom: 0.3rem;
          transition: color 0.35s ease;
        }

        .dev-role {
          font-family: 'Poppins', sans-serif;
          font-weight: 500;
          font-size: 0.68rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6fc8ff;
          margin-bottom: 1.4rem;
        }

        .dev-card {
          position: relative;
          text-align: center;
          padding: 2.25rem 1.5rem 1.75rem;
          background: linear-gradient(160deg, #0d1730 0%, #060d20 100%);
          border: 1px solid rgba(79, 200, 255, 0.22);
          clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
          transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
        }

        .dev-card:hover {
          border-color: rgba(79, 200, 255, 0.6);
          transform: translateY(-6px);
          box-shadow: 0 14px 40px rgba(79, 200, 255, 0.18);
        }

        .dev-card:hover .dev-name {
          color: #cdeeff;
        }

        .dev-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
          opacity: 0.55;
          transition: opacity 0.4s ease;
        }
        .dev-card:hover .dev-corner {
          opacity: 1;
        }
        .dev-corner-tl {
          top: -1px; left: -1px;
          border-top: 2px solid #4fc8ff;
          border-left: 2px solid #4fc8ff;
          clip-path: polygon(0 0, 55% 0, 0 55%);
        }
        .dev-corner-tr {
          top: -1px; right: -1px;
          border-top: 2px solid #A78BFA;
          border-right: 2px solid #A78BFA;
          clip-path: polygon(45% 0, 100% 0, 100% 55%);
        }
        .dev-corner-bl {
          bottom: -1px; left: -1px;
          border-bottom: 2px solid #A78BFA;
          border-left: 2px solid #A78BFA;
          clip-path: polygon(0 45%, 0 100%, 55% 100%);
        }
        .dev-corner-br {
          bottom: -1px; right: -1px;
          border-bottom: 2px solid #4fc8ff;
          border-right: 2px solid #4fc8ff;
          clip-path: polygon(45% 100%, 100% 100%, 100% 45%);
        }

        .dev-photo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .dev-photo-ring {
          position: relative;
          width: 108px;
          height: 108px;
          border-radius: 50%;
          padding: 3px;
          background: linear-gradient(135deg, #4fc8ff, #A78BFA);
          transition: box-shadow 0.4s ease, transform 0.4s ease;
        }

        .dev-card:hover .dev-photo-ring {
          box-shadow: 0 0 22px rgba(167, 139, 250, 0.5);
          transform: scale(1.04);
        }

        .dev-photo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          background: #060e24;
        }

        .dev-photo-fallback {
          display: none;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          align-items: center;
          justify-content: center;
          background: #060e24;
          color: #cdd9f5;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1.6rem;
        }

        .dev-links {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
        }

        .dev-link-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(167, 139, 250, 0.4);
          background: rgba(167, 139, 250, 0.06);
          color: #cdd9f5;
          font-size: 1rem;
          transition: border-color 0.3s ease, background 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }

        .dev-link-btn:hover {
          border-color: rgba(79, 200, 255, 0.85);
          background: rgba(79, 200, 255, 0.14);
          color: #8ff2ff;
          transform: translateY(-2px);
        }
      `}
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
            Developed By
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Talented developers passionate about creating exceptional digital
            experiences. Each bringing unique skills and creativity to every
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;