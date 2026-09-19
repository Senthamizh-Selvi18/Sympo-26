import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cyberverse.jpg";

const Cyberverse = () => {
  const sectionCards = [
    {
      icon: "🚩",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            Decrypt The Unknown • Capture The Flag
          </p>
          <p>
            <strong className="text-white">Capture The Flag (CTF)</strong> is a cybersecurity competition where participants compete individually or in teams of up to two to solve a series of technical challenges spanning web exploitation, cryptography, reverse engineering, and forensics. Participants must apply their technical knowledge to uncover hidden flags and submit them for points within the given time frame.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p>
            The event is designed to challenge participants' technical knowledge, problem-solving abilities, and analytical thinking across a range of cybersecurity domains.
          </p>
          <p>
            Participants must exploit vulnerabilities, decode challenges, and apply their technical skills to capture flags within the given time frame. This event fosters creativity, critical thinking, and collaborative decision-making in a fun yet competitive environment.
          </p>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "⚡",
      heading: "Event Rounds & Winning Criteria",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🛡️ Round 1: CTF Challenge</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Objective:</strong> Participants will be required to solve a series of technical challenges spanning web exploitation, cryptography, reverse engineering, and forensics to capture flags.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Winning Criteria:</strong> The team that captures the highest number of flags within the given time limit will be considered the winner. In case of a tie, the timestamp of the last valid flag submission will determine the winner.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "Maximum of 2 members per team (solo participation allowed). No member can belong to more than one team." },
            { label: "Conduct", text: "Participants must be respectful and courteous towards other participants, judges, and event staff." },
            { label: "Decision of Judges", text: "The decision of the judges will be final and binding." },
            { label: "Target Boundaries", text: "Attack only explicitly assigned challenge targets, ports, and instances." },
            { label: "No Infrastructure Attacks", text: "Do not target the scoring engine, hosting platform, web portals, or competitors' machines." },
            { label: "No Denial of Service (DoS)", text: "DoS/DDoS attacks, intentional resource exhaustion, or unthrottled brute-forcing are strictly banned." },
            { label: "No Flag or Hint Sharing", text: "Sharing flags, solutions, write-ups, or hints between different teams results in instant disqualification." },
            { label: "No Outside Assistance", text: "Solicit help only from your registered teammate — no external forums, discord servers, or outside mentors." },
            { label: "Flag Format", text: "Submit flags exactly in the specified format (e.g., JCE{flag_text}), respecting case sensitivity." },
            { label: "Tiebreakers", text: "Resolved strictly by the timestamp of the last valid flag submission." },
            { label: "Disqualification", text: "Participants or teams found guilty of misconduct will be disqualified." },
            { label: "Penalties", text: "Possible penalties include point deductions, time penalties, or other consequences." },
            { label: "Organizers' Rights", text: "The event organizers reserve the right to modify or cancel the event at any time." },
            { label: "Participation Agreement", text: "By participating in the event, participants agree to abide by all the rules and guidelines specified above." },
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
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
            <div className="font-semibold text-accent mb-2">Staff Incharge:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. N. Sangeetha:{" "}
                  <a href="tel:+919952690529" className="text-accent hover:underline">
                    9952690529
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. S. Sandhiyaa:{" "}
                  <a href="tel:+919940625082" className="text-accent hover:underline">
                    9940625082
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (CS):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  V. B Manoj (III CS):{" "}
                  <a href="tel:+918939103826" className="text-accent hover:underline">
                    8939103826
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  R. Miracline Jovita (III CS):{" "}
                  <a href="tel:+917845225763" className="text-accent hover:underline">
                    7845225763
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  S. Shruthi (II CS):{" "}
                  <a href="tel:+917305879063" className="text-accent hover:underline">
                    7305879063
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  T. Sai Deepak (II CS):{" "}
                  <a href="tel:+919345021928" className="text-accent hover:underline">
                    9345021928
                  </a>
                </span>
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
      posterSrc={EventImage}
      posterAlt="CYBERVERSE - Capture The Flag CTF Event Poster"
      title="CYBERVERSE"
      subtitle="CAPTURE THE FLAG (CTF)"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Cyberverse;
