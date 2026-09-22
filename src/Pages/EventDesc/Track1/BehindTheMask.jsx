import React from "react";
import { FaUserSecret, FaGamepad, FaLayerGroup, FaGavel, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/BehindTheMask.jpg";

const BehindTheMask = () => {
  const sectionCards = [
    {
      icon: <FaUserSecret size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-cyan-300">
            "Play • Think • Solve • Win — Unmask the Secret Killer!" 🎭🔪
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-white">Behind the Mask</span> is an online social-deduction game in which one player is secretly the killer. Players must analyse clues, take part in discussions, and use logic to unmask the killer before the killer outwits them.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaLayerGroup size={24} />,
      heading: "Event Pillars & Objectives",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title mb-2">🏛️ Core Pillars</h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {["Logical Reasoning", "Observation", "Communication", "Strategy"].map((pillar, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-semibold rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.25)]"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title mb-2">🎯 Objectives</h3>
            <ul className="sympo-tech-list text-base md:text-lg space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To sharpen deduction, observation, and analytical thinking.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To encourage teamwork, persuasion, and quick decision-making.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To provide a fun, engaging online experience.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "pillars_objectives"
    },
    {
      icon: <FaGamepad size={24} />,
      heading: "Event Structure & Level-Based Gameplay",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎮 Multi-Level Social Deduction</h3>
            <p className="text-sm md:text-base text-slate-300 mt-1 mb-3">
              The event is played in <strong>multiple progressive levels</strong> designed to test your investigative instinct and psychological deduction:
            </p>
            <ul className="sympo-tech-list text-sm md:text-base space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Each Level:</strong> Players use the given clues and discussions to identify the hidden killer.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Correct Identification:</strong> The killer is eliminated and the remaining players proceed to the next level.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Wrong Accusation:</strong> The killer survives and wins that round.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Grand Finale:</strong> The final level decides the ultimate winner!</span>
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
        <ul className="sympo-tech-list text-base md:text-lg space-y-2">
          {[
            { label: "Identify the Killer", text: "In each level, players must use the given clues and discussions to identify the hidden killer. If they wrongly accuse another player, the killer survives and wins that round." },
            { label: "Killer Elimination", text: "If the players correctly identify the killer, the killer is eliminated and the remaining players proceed to the next level." },
            { label: "Online Environment", text: "The event is conducted completely online. Participants must ensure a stable internet connection, and a working microphone/camera if required." },
            { label: "Secret Role Assignment", text: "Roles are assigned randomly by the organizers, and players must not reveal their role outside the game." },
            { label: "No External Assistance", text: "Screenshots, recordings, external assistance, and communication outside the official platform are strictly prohibited." },
            { label: "Fair Play & Conduct", text: "Participants must be respectful during discussions. Abusive language or unfair play may result in disqualification." },
            { label: "Time Adherence", text: "Participants must follow the time limits and instructions of the organizers." },
            { label: "Final Decision", text: "The judges' and organizers' decision will be final." }
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>{rule.label}:</strong> {rule.text}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: <FaUserTie size={24} />,
      heading: "Coordinators & Contact",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-accent">Student Coordinators (CSE):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Rahul S</strong> – IV CSE B:{" "}
                  <a href="tel:+918610943602" className="text-accent hover:underline">
                    86109 43602
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Rasin Karthick</strong> – III CSE B:{" "}
                  <a href="tel:+919361185104" className="text-accent hover:underline">
                    93611 85104
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Kanagaradha C</strong> – II CSE A:{" "}
                  <a href="tel:+916379795110" className="text-accent hover:underline">
                    63797 95110
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-cyan-300">Faculty Coordinators (CSE):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-300 text-sm md:text-base">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Dr. D. Divya</strong>, Prof, CSE:{" "}
                  <a href="tel:+919894310414" className="text-cyan-300 hover:underline">
                    98943 10414
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Ms. M. Dharani</strong>, AP, CSE:{" "}
                  <a href="tel:+919361329244" className="text-cyan-300 hover:underline">
                    93613 29244
                  </a>
                </span>
              </li>
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-700/60 text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>NCSE Coordinator:</strong> Dr. T. Dhanalakshmi</p>
              <p><strong>HOD - CSE:</strong> Dr. A. Velmurugan</p>
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
      posterAlt="Behind The Mask - Online Social-Deduction Event Poster"
      title="BEHIND THE MASK"
      subtitle="ONLINE SOCIAL-DEDUCTION GAME"
      track="TRACK I"
      category="Non-Technical • Online"
      date="Oct 07, 2026"
      team="Solo / Team"
      prize="Win Exciting Prizes"
      venue="Online"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default BehindTheMask;
