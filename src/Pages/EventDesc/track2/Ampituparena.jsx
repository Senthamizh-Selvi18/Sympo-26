import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import VoltrushBanner from "../../../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";

const AmpItUpArena = () => {
  const sectionCards = [
    {
      icon: "⚡",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            VOLTRUSH – High-Voltage Technical Showdown! ⚡
          </p>
          <p>
            Presented by the Department of <strong className="text-white">Electrical & Electronics Engineering (EEE)</strong>, <strong className="text-white">VOLTRUSH</strong> is a premier technical competition challenging circuit theory, component identification, electrical logic, and power systems problem-solving.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg space-y-2">
          {[
            "Test core electrical engineering, circuits, and electronic fundamentals.",
            "Promote rapid analytical thinking and technical troubleshooting.",
            "Encourage teamwork, speed, and precision in hardware and theoretical challenges.",
          ].map((obj, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives",
    },
    {
      icon: "🛠",
      heading: "Event Structure & Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔌 Round 1: Theory & Concept Surge</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Fast-paced objective quiz covering electrical machines, power electronics, digital logic, and basic circuit theorems.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Top scoring teams qualify for Round 2.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔍 Round 2: Component Recon & Circuit Debug</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Identify electrical components, diagnose faulty schematic diagrams, and debug circuit configurations against time.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules & Guidelines",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "Team of 2 members." },
            { label: "Venue", text: "Room M304, Jerusalem College of Engineering." },
            { label: "Conduct", text: "Maintain discipline and adhere strictly to time limits for each round." },
            { label: "Electronic Devices", text: "Unauthorized mobile phones or internet searches are strictly prohibited." },
            { label: "Judges' Decision", text: "The decision of the event coordinators and jury will be final." },
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>{rule.label}:</strong> {rule.text}
              </span>
            </li>
          ))}
        </ul>
      ),
      key: "rules",
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (EEE):</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Mohamed Thameem – IV Year</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Monisha K – III Year</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Kavya R – II Year</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Faculty Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Mr. J. Arul Prakash (Event Co-ordinator)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Mrs. D. Usha (Symposium Co-ordinator)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Dr. V. Jamuna (HOD-EEE & Convenor)</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contacts",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={VoltrushBanner}
      posterAlt="VOLTRUSH EEE Technical Event Poster"
      title="VOLTRUSH"
      subtitle="ELECTRICAL & ELECTRONICS SHOWDOWN"
      track="TRACK II"
      category="Technical"
      date="October 10, 2026"
      team="Team of 2"
      prize="Win Exciting Prizes!"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default AmpItUpArena;
