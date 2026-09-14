import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import PotpurriBanner from "../../../assets/symposium/Sympo'25/Track2/POTPURRI.png";

const Potpurri = () => {
  const sectionCards = [
    {
      icon: "🎉",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          Step into a world of laughter, energy, and excitement! <strong className="text-white">POTPURRI</strong> tests your creativity, quick thinking, and teamwork through a series of engaging and lively games, including connection deduction and dumb charades.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Encourage Teamwork & Collaboration – Build stronger bonds through group participation and team challenges.",
            "Enhance Creativity & Imagination – Motivate participants to think outside the box.",
            "Develop Quick Thinking & Problem-Solving Skills – Sharpen analytical and deduction abilities.",
            "Promote Healthy Competition – Foster a spirit of sportsmanship in a fun and engaging environment.",
            "Relieve Stress & Boost Energy – Provide students with a refreshing, energizing break filled with fun.",
            "Improve Communication Skills – Strengthen verbal and non-verbal expression."
          ].map((obj, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧩 Round 1 – Connections</h3>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              Identify the link between pictures, words, symbols, or clues displayed on the screen. Tests observation, lateral thinking, and presence of mind.
            </p>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎭 Round 2 – Dumb Charades</h3>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              Act out a movie or phrase without uttering a single word while teammates decipher the message against the clock.
            </p>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 3 – Surprise Round</h3>
            <p className="text-sm md:text-base text-slate-200 mt-1">
              An adrenaline-packed mystery challenge revealed on the spot for qualifying finalist teams!
            </p>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules of the Event",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "It is a team event which consists of 2 members.",
            "3 progressive rounds will be held.",
            "Participants are requested to assemble 30 minutes prior to event commencement.",
            "Any fraudulent or disorderly conduct will result in immediate disqualification.",
            "The judges' decision is final and binding."
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
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard">
          <div className="font-semibold text-accent mb-2">Student Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>BHAVANA N (II MBA): <a href="tel:+918428317950" className="text-accent hover:underline">8428317950</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>JOEL (II MBA): <a href="tel:+918610733081" className="text-accent hover:underline">8610733081</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={PotpurriBanner}
      posterAlt="Potpurri Fun Games Event Poster"
      title="POTPURRI"
      subtitle="FUN GAMES, CONNECTIONS & CHARADES"
      track="TRACK II"
      category="Non-Technical"
      date="October 10, 2025"
      team="2 - 4 Members"
      registrationUrl="https://forms.gle/dZ8AyUzLBfmS5EyF7"
      sectionCards={sectionCards}
    />
  );
};

export default Potpurri;
