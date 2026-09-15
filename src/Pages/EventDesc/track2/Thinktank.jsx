import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import ThinktankBanner from "../../../assets/symposium/Sympo'25/Track2/THINK TANK.png";

const Thinktank = () => {
  const sectionCards = [
    {
      icon: "💼",
      heading: "About Thinktank",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">THINKTANK</strong> is a strategic business quiz testing market intelligence, corporate acumen, branding, and managerial crisis resolution under pressure. Teams will tackle business theory, brand identity recognition, and rapid-fire problem-solving.
        </p>
      ),
      key: "about"
    },
    {
      icon: "📜",
      heading: "General Instructions",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Each team must consist of exactly 2 participants.",
            "Teams must report on time; late arrivals may not be permitted.",
            "Topics for all rounds will be revealed on the spot.",
            "Use of mobile phones, smart devices, or external assistance is strictly prohibited.",
            "Any form of cheating, malpractice, or answer sharing will lead to immediate disqualification.",
            "The judges’ and organizers’ decisions are final and binding."
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "instructions"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📝 Prelims (Round 1)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Format:</strong> Screening round with objective and short-answer questions on business concepts.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Evaluation:</strong> Based on accuracy and total score. Top teams qualify for Round 2.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏷️ Round 2: Logo Identification</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Format:</strong> Teams will be shown a series of logos, taglines, or brand elements.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Task:</strong> Identify the brand or parent company correctly within the time limit.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 3: Rapid Fire</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Format:</strong> Quick-fire questioning under strict clock constraints.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Evaluation:</strong> Spontaneity, correctness, and team coordination.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "🏆",
      heading: "Evaluation Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> Spontaneity</div>
            <div className="sympo-subcard-desc">Presence of mind and prompt decision making</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🤝</span> Teamwork</div>
            <div className="sympo-subcard-desc">Coordination and collaborative synergy</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Accuracy</div>
            <div className="sympo-subcard-desc">Correctness of business analysis and responses</div>
          </div>
        </div>
      ),
      key: "criteria"
    },
    {
      icon: "🥇",
      heading: "Final Results & Awards",
      content: (
        <div className="sympo-subcard text-slate-200">
          <p className="leading-relaxed">
            Winners will be declared based on overall performance across all three rounds. Exciting <strong className="text-white">cash prizes and certificates</strong> await the top-performing teams.
          </p>
        </div>
      ),
      key: "results"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={ThinktankBanner}
      posterAlt="Thinktank Business Quiz Event Poster"
      title="THINKTANK"
      subtitle="STRATEGIC BUSINESS & CORPORATE QUIZ"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="2 Members"
      prize="Cash Prize & Certificates"
      registrationUrl="https://forms.gle/dZ8AyUzLBfmS5EyF7"
      sectionCards={sectionCards}
    />
  );
};

export default Thinktank;
