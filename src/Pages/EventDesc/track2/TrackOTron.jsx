import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import TrackOTronBanner from "../../../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";

const TrackOTron = () => {
  const sectionCards = [
    {
      icon: "🚀",
      heading: "The Cosmic Tale of Track-O-Tron",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200 space-y-3">
          <p>
            Once upon a time, in another universe, a legendary arena called Track-O-Tron thrived—a place where robots were not just machines, but warriors of innovation.
          </p>
          <p>
            From that distant universe, the arena travelled across galaxies, conducted epic battles in many worlds, and now, traveling through the void of space aboard an alien spaceship, has arrived at JCE College, Room M101!
          </p>
        </div>
      ),
      key: "cosmic-tale"
    },
    {
      icon: "👾",
      heading: "The Cosmic Adventurers",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          Teams of up to four—or lone inventors—may bring their creations: wired, wireless, autonomous, or semi-autonomous. But beware: safety is law. Even intergalactic heroes must follow the rules.
        </p>
      ),
      key: "adventurers"
    },
    {
      icon: "🪐",
      heading: "The Galactic Challenges",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg">
            Every robot faces 5–10 minutes of action, followed by 2–3 minutes of questioning by the guardians (judges). Challenges include:
          </p>
          <div className="sympo-subcard-grid">
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>⚡</span> Line of Destiny</div>
              <div className="sympo-subcard-desc">Follow the cosmic path with precision</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>🌑</span> Maze of Shadows</div>
              <div className="sympo-subcard-desc">Dodge dynamic obstacles like an interstellar pilot</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>⚔️</span> Battleground of Titans</div>
              <div className="sympo-subcard-desc">Robo Soccer / Sumo clash</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>🦾</span> Hands of Steel</div>
              <div className="sympo-subcard-desc">Pick & Place mastery under pressure</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>🧭</span> Pathfinder’s Quest</div>
              <div className="sympo-subcard-desc">Autonomous sensor-based navigation</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>🤖</span> Rise of Titans</div>
              <div className="sympo-subcard-desc">Humanoid and biped robotics challenges</div>
            </div>
          </div>
          <p className="text-sm text-slate-300 mt-2">
            Once the mission begins, no outside help may intervene. Inventors must be ready with batteries, tools, chargers, and spare parts.
          </p>
        </div>
      ),
      key: "challenges"
    },
    {
      icon: "⚖️",
      heading: "Laws of the Galactic Arena",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "The word of the guardians is final.",
            "Rule-breakers face instant disqualification.",
            "Only those who build, battle, and demonstrate will earn the Scrolls of Honor (certificates)."
          ].map((law, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{law}</span>
            </li>
          ))}
        </ul>
      ),
      key: "laws"
    },
    {
      icon: "🏆",
      heading: "The Path to Cosmic Glory",
      content: (
        <div className="sympo-subcard text-slate-200">
          <p className="mb-2 font-medium">Victory depends not just on skill, but on the spirit of the creation:</p>
          <div className="sympo-pill-grid">
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Design & Strength</span>
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Creativity & Originality</span>
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Speed & Precision</span>
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Code Intelligence</span>
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Storytelling</span>
            <span className="sympo-topic-pill"><span className="sympo-pill-dot" />Rule Discipline</span>
          </div>
        </div>
      ),
      key: "glory"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={TrackOTronBanner}
      posterAlt="Track-O-Tron Robotics Arena Poster"
      title="TRACK-O-TRON"
      subtitle="GALACTIC ROBOTICS BATTLE ARENA"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="2 - 4 Members"
      registrationUrl="https://forms.gle/dZ8AyUzLBfmS5EyF7"
      sectionCards={sectionCards}
    />
  );
};

export default TrackOTron;
