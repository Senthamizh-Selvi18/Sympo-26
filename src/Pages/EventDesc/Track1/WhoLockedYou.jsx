import React from "react";
import { FaLock, FaKey, FaTerminal, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/WhoLockedYou.jpg";

const WhoLockedYou = () => {
  const sectionCards = [
    {
      icon: <FaLock size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-red-400">
            "SYSTEM LOCKED. ACCESS DENIED. WHO IS BEHIND THE BREACH?" 🚨
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Presented by the Department of <strong className="text-white">Information Technology (IT)</strong> as part of <strong className="text-white">TECHNOVANZA 2026 - '27</strong>, <strong className="text-white">WHO LOCKED YOU?</strong> is an exhilarating technical mystery and cyber-lock challenge. A rogue entity has locked down your workstation, encrypted vital assets, and vanished into the digital shadows. Your mission: decrypt the locks, piece together forensic clues, solve intricate algorithmic puzzles, and unmask the culprit before time runs out!
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaKey size={24} />,
      heading: "Core Challenge Domains",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🔓 Cryptographic Decryption</div>
            <div className="sympo-subcard-desc">Crack multi-layered ciphers, hashes, steganographic secrets, and encoded payloads to unlock system gates.</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">💻 System Log & Breach Analysis</div>
            <div className="sympo-subcard-desc">Inspect terminal logs, system footprints, and corrupted file headers to trace the intruder's steps.</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🧠 Algorithmic Riddles & Debugging</div>
            <div className="sympo-subcard-desc">Solve rapid logic puzzles, fix buggy access scripts, and solve computational enigmas under pressure.</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🕵️ Culprit Attribution</div>
            <div className="sympo-subcard-desc">Synthesize evidence, connect hidden clues, and conclusively prove who locked the system to claim victory.</div>
          </div>
        </div>
      ),
      key: "domains"
    },
    {
      icon: <FaTerminal size={24} />,
      heading: "Event Rounds & Structure",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 1: The Lockdown (Qualifier Round)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Rapid-fire technical MCQs, cryptic terminal commands, and quick-debugging puzzles.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Top teams scoring highest on speed and accuracy will qualify for the final showdown.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔥 Round 2: Who Locked You? (The Ultimate Escape & Attribution)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>An immersive, timed challenge where teams decrypt locked files layer by layer.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Analyze hidden clues, reconstruct the rogue perpetrator's profile, and submit the winning unlock key.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Fastest teams to unlock and correctly attribute the culprit win cash prizes and certificates!</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Teams can consist of 1 to 2 members.",
            "All participants must adhere to ethical problem-solving and fair competition rules.",
            "Use of unauthorized external AI bots or malicious interference with other teams is strictly prohibited.",
            "Tie-breakers will be determined by the precision timestamps of final key submissions.",
            "The decision of the IT Department faculty jury and event coordinators will be final and binding."
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
            <div className="sympo-subcard-title"><span>⏱️</span> Speed & Time Efficiency</div>
            <div className="sympo-subcard-desc">Fastest decryption and escape times across challenge stages.</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Clue Accuracy</div>
            <div className="sympo-subcard-desc">Correctness in solving logical puzzles, ciphers, and debug challenges.</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🏆</span> Final Attribution</div>
            <div className="sympo-subcard-desc">Accurate identification and proof of the locking entity.</div>
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
            <div className="mb-2 font-semibold text-accent">Student Coordinators (Information Technology):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Deepak Rithik S</strong> – III IT A</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Ryan Stanislaus G</strong> – III IT B</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Arun P</strong> – II IT A</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-red-400">Faculty & Department Leadership:</div>
            <div className="text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>Faculty Coordinators:</strong> Mrs. K. Pushpavalli (AP/IT), Mr. K. Arun Prasad (AP/IT)</p>
              <p><strong>AIT Coordinator:</strong> Mrs. K. Shanmugapriya (AP/IT)</p>
              <p><strong>HOD - IT:</strong> Dr. K. Sundaramoorthy</p>
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
      posterAlt="WHO LOCKED YOU? - Information Technology Technical Event Poster"
      title="WHO LOCKED YOU?"
      subtitle="SYSTEM LOCKED • ACCESS DENIED • UNRAVEL THE MYSTERY"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default WhoLockedYou;
