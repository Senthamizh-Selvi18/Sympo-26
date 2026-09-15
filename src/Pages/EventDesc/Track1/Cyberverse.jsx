import React from "react";
import { FaShieldAlt, FaTerminal, FaKey, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cyberverse.jpg";

const Cyberverse = () => {
  const sectionCards = [
    {
      icon: <FaShieldAlt size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-sky-400">
            "Decrypt The Unknown. Capture The Flag." 🚩
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Presented by the Department of <strong className="text-white">Cyber Security (CS)</strong>, <strong className="text-white">CYBERVERSE</strong> is an intense, battlefield-style Capture The Flag (CTF) tournament. Cyber warriors will test their offensive and defensive security capabilities across web exploitation, cryptography, digital forensics, reverse engineering, binary exploitation (pwn), and forensic investigations. Hunt for hidden vulnerabilities, break cryptographic ciphers, and capture flags to dominate the cyber leaderboard!
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaKey size={24} />,
      heading: "Challenge Domains",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🌐 Web Exploitation</div>
            <div className="sympo-subcard-desc">SQL injection, XSS, CSRF, IDOR, authentication bypass, and API vulnerabilities</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🔐 Cryptography</div>
            <div className="sympo-subcard-desc">Classic ciphers, modern RSA/AES attacks, hashing collisions, and mathematical crypto</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🔍 Digital Forensics</div>
            <div className="sympo-subcard-desc">Memory dumps, PCAP network traffic inspection, file metadata, and hidden data analysis</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">⚙️ RE & PWN</div>
            <div className="sympo-subcard-desc">Binary disassembly, decompilation, buffer overflows, and format string exploits</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🧩 Miscellaneous</div>
            <div className="sympo-subcard-desc">Steganography, OSINT, scripting challenges, and unconventional logic puzzles</div>
          </div>
        </div>
      ),
      key: "domains"
    },
    {
      icon: <FaTerminal size={24} />,
      heading: "CTF Structure & Rules of Engagement",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎯 Flag Format & Scoring</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>All flags follow the standard format: <code className="bg-slate-800 text-sky-300 px-2 py-0.5 rounded font-mono">FLAG&#123;sample_text_here&#125;</code></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Dynamic scoring system: Challenge points adjust dynamically based on the number of solvers</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>In case of point ties, rankings are decided based on the timestamp of the earlier submission</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📍 Venue & Platform Details</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Venue:</strong> Labs ML403, ML410</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Team Size:</strong> 1 - 2 Members per team</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "structure"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Code of Conduct & Rules",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Do NOT perform Denial of Service (DoS/DDoS) attacks against the CTF infrastructure or campus networks",
            "Do NOT share flags, solutions, or write-ups between teams during the active competition",
            "Attacking other teams' machines or infrastructure is strictly prohibited and results in instant disqualification",
            "Automated brute-forcing tools against the web platform dashboard are strictly forbidden",
            "The decision of the CTF Admin and Faculty Coordinators is final and binding"
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: <FaTrophy size={24} />,
      heading: "Judging & Awards",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥇</span> Total CTF Score</div>
            <div className="sympo-subcard-desc">Accumulated challenge points across all cyber domains</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> First Blood Honors</div>
            <div className="sympo-subcard-desc">Special recognition for the fastest first solves of hard challenges</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⏱️</span> Time Advantage</div>
            <div className="sympo-subcard-desc">Precision timestamps serving as definitive tie-breakers</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: <FaUserTie size={24} />,
      heading: "Coordinators & Contact",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-accent">Student Coordinators (Cyber Security):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>V. B. Manoj</strong> – III CS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>R. Miracline Jovita</strong> – III CS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>S. Shruthi</strong> – II CS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>T. Sai Deepak</strong> – II CS</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-sky-300">Faculty & Department Leadership:</div>
            <div className="text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>Faculty Coordinators:</strong> Ms. N. Sangeetha, Ms. S. Sandhiyaa</p>
              <p><strong>ACSP Coordinator:</strong> Ms. P. Ezhilarasi</p>
              <p><strong>HOD - CS:</strong> Dr. S. Lilly Sheeba</p>
            </div>
          </div>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="CYBERVERSE - Capture The Flag CTF Event Poster"
      title="CYBERVERSE"
      subtitle="CAPTURE THE FLAG (CTF)"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default Cyberverse;
