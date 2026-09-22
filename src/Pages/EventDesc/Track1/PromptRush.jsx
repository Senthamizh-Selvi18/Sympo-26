import React from "react";
import { FaRobot, FaLightbulb, FaLaptopCode, FaGavel, FaTrophy, FaUserTie, FaLayerGroup } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/PromptRush.png";

const PromptRush = () => {
  const sectionCards = [
    {
      icon: <FaRobot size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-cyan-300">
            "Prompt • Think • Create — AI-Powered Web Design Challenge" 🚀✨
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-white">Prompt Rush</span> is an AI-powered web design challenge in which participants use prompts to build websites. Teams first recreate a given interface, then create an interactive, animated website from scratch.
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
              {["Prompt Engineering", "Creativity", "Web Design", "Interactivity"].map((pillar, idx) => (
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
                <span>To build skill in writing effective AI prompts.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To encourage creative and user-friendly interface design.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To show how AI tools can speed up web development.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "pillars_objectives"
    },
    {
      icon: <FaLaptopCode size={24} />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🖼️ Round 1 – Recreate (20 Minutes)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants will be provided with a website interface screenshot.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Using AI prompts, they must recreate the interface as closely as possible.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Selection Criteria:</strong> Accuracy, visual similarity, and prompt usage will be considered for selection to the next round.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">✨ Round 2 – Animate (20 Minutes)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Shortlisted participants must create an interactive animated website using prompts from scratch.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Evaluation Criteria:</strong> Animations such as button effects, floating elements, transitions, and interactive movements will be evaluated based on creativity and execution.</span>
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
            { label: "Team Size", text: "Maximum of 2 members per team. No member can belong to more than one team." },
            { label: "Time Limit", text: "Round 1: 20 minutes; Round 2: 20 minutes." },
            { label: "AI Prompt Requirement", text: "All output must be created using AI prompts. Manual coding is not allowed unless the organizers permit it." },
            { label: "Permitted Tools", text: "Only organizer-approved AI tools may be used." },
            { label: "Round 1 Criteria", text: "Round 1 selection is based on accuracy, visual similarity, and prompt usage." },
            { label: "Round 2 Criteria", text: "Round 2 evaluation is based on creativity and execution of animations and interactivity." },
            { label: "Original Work", text: "Ready-made templates, pre-built projects, and external assistance are strictly prohibited." },
            { label: "Device & Connectivity", text: "Participants must bring their own device and ensure a stable internet connection. Any violation may result in disqualification." },
            { label: "Final Decision", text: "The judges' decision will be final." }
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
      icon: <FaTrophy size={24} />,
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Visual Accuracy & Similarity</div>
            <div className="sympo-subcard-desc">Precision in recreating layout, typography, and UI elements in Round 1</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>✨</span> Animation & Interactivity</div>
            <div className="sympo-subcard-desc">Button effects, transitions, floating elements, and creative motion in Round 2</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> Prompt Quality & Speed</div>
            <div className="sympo-subcard-desc">Effectiveness, clarity of prompt engineering, and execution under 20-minute limits</div>
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
            <div className="mb-2 font-semibold text-accent">Student Coordinators (CSE):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Sowndarya.D</strong> – IV CSE:{" "}
                  <a href="tel:+917871509715" className="text-accent hover:underline">
                    78715 09715
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Siva.S</strong> – IV CSE:{" "}
                  <a href="tel:+919962892393" className="text-accent hover:underline">
                    99628 92393
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Sanjay.K</strong> – III CSE:{" "}
                  <a href="tel:+917339310027" className="text-accent hover:underline">
                    73393 10027
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Shyam.S</strong> – III CSE:{" "}
                  <a href="tel:+918682932308" className="text-accent hover:underline">
                    86829 32308
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Jenisha.J</strong> – II CSE:{" "}
                  <a href="tel:+916379266496" className="text-accent hover:underline">
                    63792 66496
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Supriya.R</strong> – II CSE:{" "}
                  <a href="tel:+919176181819" className="text-accent hover:underline">
                    91761 81819
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
                  <strong>Ms. M. Vanitha Sheba</strong>, AP/CSE:{" "}
                  <a href="tel:+919840938563" className="text-cyan-300 hover:underline">
                    98409 38563
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Ms. P. Anitha</strong>, AP/CSE:{" "}
                  <a href="tel:+918667348001" className="text-cyan-300 hover:underline">
                    86673 48001
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Ms. T. Sumana</strong>, AP/CSE:{" "}
                  <a href="tel:+918248430374" className="text-cyan-300 hover:underline">
                    82484 30374
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Ms. C. Needhu</strong>, AP/CSE:{" "}
                  <a href="tel:+919789040182" className="text-cyan-300 hover:underline">
                    97890 40182
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
      posterAlt="Prompt Rush - AI-Powered Web Design Challenge Poster"
      title="PROMPT RUSH"
      subtitle="AI-POWERED WEB DESIGN CHALLENGE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Max 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default PromptRush;
