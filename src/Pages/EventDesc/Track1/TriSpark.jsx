import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/TriSpark.png";

const TriSpark = () => {
  const sectionCards = [
    {
      icon: "🧠",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">TRISPARK</strong> is an intercollegiate coding event conducted under Technovanza 2026–27. The event focuses on enhancing technical knowledge, logical thinking, and problem-solving skills through progressive coding-based challenges.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          The main objective of TRISPARK is to test and improve participants’ logical reasoning, debugging proficiency, and coding efficiency while encouraging teamwork and competitive spirit.
        </p>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏃‍♂️ Round 1 – Decode the Puzzle</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Prerequisite:</strong> Knowledge of binary numbers & ASCII conversion.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Task:</strong> Decode binary codes into meaningful words within 20 minutes.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔍 Round 2 – Depict the Code</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Prerequisite:</strong> Knowledge of Python and visualization libraries.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Task:</strong> Debug incomplete code with blanks and errors to reproduce a given graph/chart.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">💡 Round 3 – Design the Code</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Prerequisite:</strong> Knowledge of Python (syntax, logic, debugging).</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Task:</strong> Reconstruct scrambled codes (split into 4 mixed parts) into a valid executable program.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Each team can have a maximum of two participants.",
            "Only valid, executable solutions will be considered.",
            "Each round has a 20-minute time limit.",
            "Tie-breakers will be used in case of equal scores.",
            "Judges’ decisions are final."
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
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Accuracy</div>
            <div className="sympo-subcard-desc">Correctness and execution of solutions</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🧠</span> Logic</div>
            <div className="sympo-subcard-desc">Logical approach and algorithm efficiency</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🐛</span> Debugging</div>
            <div className="sympo-subcard-desc">Debugging skills under pressure</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⏰</span> Efficiency</div>
            <div className="sympo-subcard-desc">Time management and speed</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <ul className="sympo-tech-list mb-3">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Bhuvaneshkumar T: <a href="tel:+918778858424" className="text-accent hover:underline">+91 87788 58424</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Pragadesh R: <a href="tel:+916379253307" className="text-accent hover:underline">+91 63792 53307</a></span>
            </li>
          </ul>
          <div className="mb-2 font-semibold text-accent">Faculty Coordinator:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Mrs. E. Brindha: <a href="tel:+919791972394" className="text-accent hover:underline">+91 97919 72394</a></span>
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
      posterAlt="TriSpark Coding Battle Event"
      title="TRISPARK"
      subtitle="INTERCOLLEGIATE CODING BATTLE"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default TriSpark;
