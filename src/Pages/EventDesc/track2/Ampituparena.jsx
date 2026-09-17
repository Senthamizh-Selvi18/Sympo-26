import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import AmpItUpBanner from "../../../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";

const AmpItUpArena = () => {
  const sectionCards = [
    {
      icon: "📖",
      heading: "Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">Amp-it-up-Arena</strong> is a thrilling 3-round quiz event designed to challenge your knowledge, speed, and technical thinking in electronics and circuits. Teams will compete through rapid-fire MCQs, connection deduction from images, and high-stakes technical questions. Think fast, play smart, and fuel your mind!
        </p>
      ),
      key: "description"
    },
    {
      icon: "🎯",
      heading: "Objective",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "To bring together young minds with a flair for quizzing and intellectual curiosity.",
            "To provide a platform for beginners to engage with knowledge-based competitions and expand their learning horizons.",
            "To focus on specific thematic areas of quizzing, encouraging participants to explore and master diverse subjects.",
            "To promote healthy competition and foster collaborative learning through discussion and exchange of ideas during the event."
          ].map((item, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objective"
    },
    {
      icon: "🌀",
      heading: "Rounds Overview",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 1: Online Quiz</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>20 multiple-choice questions via Google Forms</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>No negative marking • Time limit: 15 minutes</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🖼️ Round 2: Connection Master</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A picture will be displayed on the Smart Board</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams must identify the connection within 30 seconds</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">💡 Round 3: Technical Connexions</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Each team gets 15 seconds to answer. Passing allowed</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Speed and accuracy determine the champion</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "⚖️",
      heading: "Fair Play & Rules",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Use of mobile phones, internet search, or external help is strictly prohibited.",
            "Any misconduct may lead to immediate disqualification.",
            "In case of a tie, additional picture challenges will be provided.",
            "The first team to answer correctly will be declared the winner."
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "fairplay"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard text-slate-200">
          <p className="leading-relaxed">
            Teams will be judged based on <strong>accuracy, speed, and logical reasoning</strong> across all three rounds. Round 1 assesses theoretical foundation; Rounds 2 and 3 evaluate rapid deduction under time pressure. In case of a tie, sudden-death tie-breakers will resolve the victor. Judges’ decisions are final.
          </p>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contacts",
      content: (
        <div className="sympo-subcard">
          <div className="font-semibold text-accent mb-2">Student Coordinators:</div>
          <ul className="sympo-tech-list mb-3">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Jamal Mohammed Faazil: <a href="tel:+917871335565" className="text-accent hover:underline">7871335565</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Mohammed Thammen.M: <a href="tel:+918668178321" className="text-accent hover:underline">8668178321</a></span>
            </li>
          </ul>
          <div className="font-semibold text-accent mb-2">Faculty Coordinator:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Mr. J. Arul Prakash: <a href="tel:+919840721704" className="text-accent hover:underline">9840721704</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={AmpItUpBanner}
      posterAlt="Amp-it-up-Arena Quiz Competition Poster"
      title="AMP-IT-UP-ARENA"
      subtitle="CIRCUIT & TECHNICAL QUIZ ARENA"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="Team of 2"
      prize="Prizes for Top Teams"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default AmpItUpArena;
