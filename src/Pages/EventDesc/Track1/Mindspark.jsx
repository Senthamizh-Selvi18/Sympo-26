import React from "react";
import { FaLightbulb, FaLayerGroup, FaChalkboardTeacher, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Mindspark.png";

const Mindspark = () => {
  const sectionCards = [
    {
      icon: <FaLightbulb size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-cyan-300">
            "Paper Presentation • Ideas, Research & Innovation in Computing" 📄💡
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-white">Mindspark</span> is a technical paper presentation event where participants present their ideas, research, or innovations in computer science and allied fields. Teams present before a panel of judges and then face a Question & Answer session that tests the depth of their understanding.
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
              {["Innovation", "Research", "Communication", "Critical Thinking"].map((pillar, idx) => (
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
                <span>To encourage participants to explore and present new ideas and emerging technologies.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To improve technical writing, presentation, and public speaking skills.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>To help participants defend their work through discussion with experts.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "pillars_objectives"
    },
    {
      icon: <FaChalkboardTeacher size={24} />,
      heading: "Event Structure & Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎤 Single Round: Paper Presentation & Q&A</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The event has a <strong>single comprehensive round</strong>.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Each team presents for <strong>7 to 10 minutes</strong>, followed by an interactive Q&A session with the judges.</span>
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
            { label: "Team Participation", text: "Each team can have a maximum of 2 members. No member can belong to more than one team." },
            { label: "Time Limit", text: "Teams get 7 to 10 minutes for the presentation, followed by a Question & Answer session with the judges. Presentations exceeding 10 minutes may be stopped by the coordinators." },
            { label: "Originality", text: "The paper must be original. Plagiarised work will lead to disqualification." },
            { label: "Submission", text: "Participants must submit their abstract/paper by the deadline announced by the organizers." },
            { label: "Presentation Format", text: "Presentations must be in PPT/PDF format and brought on a pen drive or submitted in advance." },
            { label: "Evaluation Basis", text: "Evaluation will be based on content and originality, technical depth, presentation skills, and response to questions." },
            { label: "Schedule & Discipline", text: "Participants must follow the schedule and maintain discipline throughout the event." },
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
            <div className="sympo-subcard-title"><span>💡</span> Content & Originality</div>
            <div className="sympo-subcard-desc">Uniqueness, novelty of concept, and original research methodology</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🔬</span> Technical Depth</div>
            <div className="sympo-subcard-desc">Architectural rigor, feasibility, clarity of implementation, and analysis</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🗣️</span> Delivery & Q&A Defense</div>
            <div className="sympo-subcard-desc">Slide presentation quality, public speaking confidence, and responses to judges</div>
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
                  <strong>Dhatshana.S</strong> – IV CSE:{" "}
                  <a href="tel:+917810019505" className="text-accent hover:underline">
                    78100 19505
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Sivasakthi P</strong> – III CSE:{" "}
                  <a href="tel:+918825636700" className="text-accent hover:underline">
                    88256 36700
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Monisha.V</strong> – II CSE:{" "}
                  <a href="tel:+917200285033" className="text-accent hover:underline">
                    72002 85033
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
                  <strong>Ms. H. Mercy</strong>, AP/CSE:{" "}
                  <a href="tel:+918754509685" className="text-cyan-300 hover:underline">
                    87545 09685
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Mr. N. Javed</strong>, AP/CSE:{" "}
                  <a href="tel:+919841441844" className="text-cyan-300 hover:underline">
                    98414 41844
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
      posterAlt="MINDSPARK - Paper Presentation Event Poster"
      title="MINDSPARK"
      subtitle="PAPER PRESENTATION • IGNITE IDEAS. INSPIRE FUTURE."
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Max 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Mindspark;
