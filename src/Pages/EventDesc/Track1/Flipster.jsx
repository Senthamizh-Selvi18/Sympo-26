import React from "react";
import { FaBrain, FaBolt, FaLayerGroup, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";

const Flipster = () => {
  const sectionCards = [
    {
      icon: <FaBrain size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-rose-400">
            "THINK • SOLVE • WIN — The Tech Hustle!" ⚡
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Presented by the Department of <strong className="text-white">Computer Science & Business Systems (CS & BS)</strong>, <strong className="text-white">FLIPSTER 2.0</strong> is a high-octane technical quiz and strategic problem-solving gauntlet. Test your reflexes, brand awareness, tech acumen, and logical thinking under pressure. Quick decisions, sharp intuition, and collaborative synergy are your keys to climbing the leaderboard and winning exciting prizes!
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaBolt size={24} />,
      heading: "Event Highlights",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Fast-paced quiz dynamics blending tech foundations with modern business intelligence",
            "Engaging multi-format challenges: Logos, Taglines, Techlines, and Quick Deductions",
            "Strategic rapid-fire rounds designed to reward lightning-fast reflexes",
            "Win exciting cash prizes, certificates, and symposium accolades"
          ].map((item, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong className="text-rose-400">{item.split(" ")[0]}</strong> {item.slice(item.indexOf(" ") + 1)}</span>
            </li>
          ))}
        </ul>
      ),
      key: "highlights"
    },
    {
      icon: <FaLayerGroup size={24} />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔍 Round 1: Techline & Logo Recon (Think Fast)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Identify emerging tech frameworks, company taglines, developer tooling, and iconic hardware/software logos</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Speed and precision determine which teams qualify for the next bracket</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧩 Round 2: The Logic Hustle (Solve & Decode)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Rapid pseudo-code debugging, technical riddle cracking, and business domain scenarios</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Timed buzzers with penalties for incorrect guesses to test calculated risk-taking</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏆 Round 3: The Flipster Twist (Win It All)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Unpredictable twist rounds where inverse logic, rapid associations, and clutch decisions decide the champions</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Top qualifying teams battle face-to-face for the ultimate trophy</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Rules & Guidelines",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Each team consists strictly of 2 members",
            "Mobiles, smartwatches, and external electronic aids are strictly prohibited during the rounds",
            "Points are awarded for correct answers; negative marking may apply during designated buzzer segments",
            "Maintain sportsmanlike conduct and decorum at all times",
            "The quizmaster and judging panel's decision is absolute and final"
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
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Accuracy</div>
            <div className="sympo-subcard-desc">Correctness in identifying tech domains, logos, and algorithmic answers</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> Response Velocity</div>
            <div className="sympo-subcard-desc">Split-second answering speed during rapid-fire and buzzer rounds</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🧠</span> Twist Mastery</div>
            <div className="sympo-subcard-desc">Tactical reasoning under reverse logic constraints</div>
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
            <div className="mb-2 font-semibold text-accent">Student Coordinators (CS & BS):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Michael Jerin A</strong> – IV CS & BS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Benolin David</strong> – IV CS & BS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Vijayakumar V</strong> – III CS & BS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Nehashree A</strong> – II CS & BS</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-rose-300">Faculty & Department Leadership:</div>
            <div className="text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>Faculty Coordinator:</strong> Mrs. B. Lakshmi Roopa (AP, CS & BS)</p>
              <p><strong>NBTA Coordinator:</strong> Ms. G. Preethi Wilson (AP, CS & BS)</p>
              <p><strong>HOD - CS & BS:</strong> Dr. Maya Eapen</p>
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
      posterAlt="FLIPSTER 2.0 - The Tech Hustle Event Poster"
      title="FLIPSTER 2.0"
      subtitle="THE TECH HUSTLE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="2 Members"
      prize="Win Exciting Prizes"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Flipster;
