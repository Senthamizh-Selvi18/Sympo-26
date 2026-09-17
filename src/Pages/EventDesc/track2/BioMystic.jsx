import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import BioMysticBanner from "../../../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";

const BioMystic = () => {
  const sectionCards = [
    {
      icon: "🧬",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          In <strong className="text-white">BioMystic</strong>, participants will first unscramble jumbled letters to reveal key biomedical terminology and then tackle a rapid-fire round of tricky riddles. Each round is time-bound, pushing you to think fast and stay sharp. Accuracy, presence of mind, and teamwork will decide who races ahead to secure the top spot.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          To inspire curiosity and sharpen scientific thinking by engaging participants in interactive bio-related challenges that test their knowledge, reasoning, and competitive edge.
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
            <h3 className="sympo-subcard-title">🔤 Round 1: Unscramble the Letters</h3>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              Decode jumbled letters to unlock critical biomedical phrases within the time limit.
            </p>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 2: Riddle Rush</h3>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              Solve tricky bio-riddles and clinical clues with speed, logic, and precision.
            </p>
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
            "Two members per team.",
            "Usage of mobile phones is strictly prohibited.",
            "Maintain decorum throughout the event.",
            "Each round is strictly time-based.",
            "Late submissions will lead to disqualification.",
            "In case of a tie between teams, a tie-breaker round will be conducted."
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
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
        <div className="sympo-subcard text-slate-200">
          <p className="leading-relaxed">
            Points are awarded based on accuracy, speed, and logical consistency. Final decisions are made by the judges.
          </p>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard">
          <div className="font-semibold text-accent mb-2">Event Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Srivarthni: <a href="tel:+919940526581" className="text-accent hover:underline">9940526581</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Shruthi: <a href="tel:+919363379962" className="text-accent hover:underline">9363379962</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Ramya: <a href="tel:+918015612515" className="text-accent hover:underline">8015612515</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={BioMysticBanner}
      posterAlt="BioMystic Biomedical Challenge Event Poster"
      title="BIOMYSTIC"
      subtitle="BIOMEDICAL TERMINOLOGY & RIDDLE RUSH"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="Team of 2"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default BioMystic;
