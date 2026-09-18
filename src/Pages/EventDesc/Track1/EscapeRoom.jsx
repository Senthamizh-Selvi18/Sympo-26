import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/escaperoom.png";

const EscapeRoom = () => {
  const sectionCards = [
    {
      icon: "📜",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">Escape Room 2.0</strong> is designed to challenge participants’ technical knowledge, decoding skills, logical reasoning, and problem-solving abilities through a two-stage competition. The event is designed to test quick thinking with technical MCQs and analytical ability in an immersive escape room challenge, where participants must decode puzzles, analyze clues, and apply technical knowledge under pressure. This fosters creativity, critical thinking, and decision-making in a fun yet competitive environment.
        </p>
      ),
      key: "description"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          Test your technical skills and problem-solving power in this two-stage challenge! Start with rapid-fire MCQs, then enter an immersive escape room where logic, clues, and teamwork are your keys to victory. Decode, analyse, and beat the clock — only the sharpest minds will make it out!
        </p>
      ),
      key: "objective"
    },
    {
      icon: "📋",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📚 Round 1: Technical MCQ Round</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Format: The round will consist of multiple-choice questions on technical topics.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Shortlisting: Top participants will be shortlisted based on their scores.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔓 Round 2: Escape Room Challenge</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Objective: Participants will be required to solve puzzles and challenges in the escape room to escape within the given time limit.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Winning Criteria: The participant who escapes the room in the shortest time or solves the highest number of puzzles will be considered the winner.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules and Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Participation: Each participant must register individually and participate solo.",
            "Conduct: Participants must be respectful and courteous towards other participants, judges, and event staff.",
            "Decision of Judges: The decision of the judges will be final and binding.",
            "No AI: No use of artificial intelligence or automated tools.",
            "No Collaboration: Participants must work individually and not collaborate with others.",
            "No Damage: Participants must not damage or attempt to damage the escape room or its contents.",
            "Disqualification: Participants found guilty of misconduct will be disqualified.",
            "Penalties: Possible penalties include time penalties or other consequences."
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
      icon: "⚖️",
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard">
          <ul className="sympo-tech-list text-base md:text-lg">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Winners will be selected depending upon the number of challenges solved in the shortest period of time.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>The decision of the judges will be final.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>If found guilty of any malpractice, the team will be immediately disqualified, and will not be considered for judging.</span>
            </li>
          </ul>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="sympo-subcard">
          <div className="mb-3 font-semibold text-accent">Staff Incharge:</div>
          <div className="space-y-1 mb-4 text-slate-200">
            <div>Ms. S. Preethi Parameshwari</div>
            <div>Ms. S. Sandhiyaa</div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Mr. Subadevan C - III CS: <a href="tel:+91863760748" className="text-accent hover:underline">863760748</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Ms. Nivethithaa S - II CS: <a href="tel:+918925651912" className="text-accent hover:underline">8925651912</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Mr. Rohan S - II CS: <a href="tel:+918220849281" className="text-accent hover:underline">8220849281</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="Escape Room 2.0 Event Poster"
      title="ESCAPE ROOM 2.0"
      subtitle="CRYPTOGRAPHIC PUZZLE CHALLENGE"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="2 - 3 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default EscapeRoom;