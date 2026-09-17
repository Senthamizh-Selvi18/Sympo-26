import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import CueBattleBanner from "../../../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";

const CueBattle = () => {
  const sectionCards = [
    {
      icon: "🎲",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">Cue Battle</strong> is a fun and interactive guessing game designed to test communication, creativity, and teamwork — without using words! Teams will face two exciting rounds where they rely solely on drawings and lip-reading skills to guess the correct words or phrases.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          To encourage teamwork, sharpen non-verbal communication, and create a lively, engaging experience where participants rely on creativity and intuition instead of direct speech.
        </p>
      ),
      key: "objective"
    },
    {
      icon: "🛠",
      heading: "Round 1: Back Sketch Relay",
      content: (
        <div className="space-y-3 text-slate-200">
          <div className="sympo-subcard">
            <h4 className="sympo-subcard-title">👥 Team Formation</h4>
            <ul className="sympo-tech-list text-sm md:text-base mt-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Each team consists of 2 members. Members sit one behind the other in a straight line.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h4 className="sympo-subcard-title">🎮 Game Flow</h4>
            <ul className="sympo-tech-list text-sm md:text-base mt-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The back member is shown a technical word by the organizer.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>They must draw a simple sketch of the word on their partner’s back using one finger.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The front member must guess the word and say it out loud.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h4 className="sympo-subcard-title">⚖️ Rules</h4>
            <ul className="sympo-tech-list text-sm md:text-base mt-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">✦</span>
                <span>No alphabets, numbers, symbols, or talking allowed — only drawings. Time limit: 30–45 seconds per word.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "round1"
    },
    {
      icon: "🛠",
      heading: "Round 2: Silent Signals (Earphone Round)",
      content: (
        <div className="space-y-3 text-slate-200">
          <div className="sympo-subcard">
            <h4 className="sympo-subcard-title">🎧 Setup & Flow</h4>
            <ul className="sympo-tech-list text-sm md:text-base mt-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>One member wears earphones with loud music; the other silently mouths the word/sentence.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The earphone-wearing member must guess the word/sentence within 1 minute.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h4 className="sympo-subcard-title">⚖️ Rules</h4>
            <ul className="sympo-tech-list text-sm md:text-base mt-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">✦</span>
                <span>No sounds, gestures, or signals allowed — only lip reading. Each correct guess earns points.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "round2"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Teams must consist of exactly 2 members.",
            "Communication is restricted to the method specified in each round.",
            "Any violation (talking, using gestures, symbols, or cheating) may lead to disqualification.",
            "The organizer’s decision will be final."
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
        <div className="sympo-subcard text-slate-200">
          <ul className="sympo-tech-list text-base md:text-lg">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Teams that clear Round 1 qualify for Round 2.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>In Round 2, points are awarded for each correct guess within the time limit.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>The team with the highest total points at the end of Round 2 wins.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>In case of a tie, a sudden-death tie-breaker will be conducted with a new word/sentence.</span>
            </li>
          </ul>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard">
          <p className="font-semibold text-accent mb-2">Student Coordinators:</p>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Ms. Giona Jasley: <a href="tel:+917358213508" className="text-accent hover:underline">7358213508</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Ms. Naveena M: <a href="tel:+919345475179" className="text-accent hover:underline">9345475179</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={CueBattleBanner}
      posterAlt="Cue Battle Event Poster"
      title="CUE BATTLE"
      subtitle="NON-VERBAL GUESSING CHALLENGE"
      track="TRACK I"
      category="Non-Technical"
      date="October 10, 2025"
      team="2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default CueBattle;
