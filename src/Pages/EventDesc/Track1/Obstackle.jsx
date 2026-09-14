import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import StumbleGuysBanner from "../../../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg";

const StumbleGuys = () => {
  const sectionCards = [
    {
      icon: "🎮",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">Stumble Guys</strong> is a fun online knockout tournament where players <span className="highlight px-2 py-0.5 rounded">race</span>, <span className="highlight px-2 py-0.5 rounded">jump</span>, and <span className="highlight px-2 py-0.5 rounded">dodge</span> hilarious obstacles. Only the boldest survive to the finale and claim the <span className="text-primary font-semibold">champion's crown!</span>
        </p>
      ),
      key: "desc"
    },
    {
      icon: "📌",
      heading: "Event Details",
      content: (
        <div className="sympo-subcard">
          <span className="font-semibold text-accent">👤 Participation:</span> 
          <span className="ml-2 text-lg font-bold text-white">Individual (Solo Player)</span>
        </div>
      ),
      key: "details"
    },
    {
      icon: "📜",
      heading: "General Instructions",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Players must follow all instructions given by the coordinators",
            "Any attempt to tamper with the system or game will result in disqualification",
            "From each batch, top performers will qualify for the Grand Finale",
            "The decision of the coordinators/judges will be final and binding",
            "No replays will be given for individual player disconnects (unless the entire lobby crashes)",
            "No cheating, hacking, or use of unfair mods is allowed"
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">⚠</span>
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
            <h3 className="sympo-subcard-title">🥇 Round 1: Qualifiers (Batch-wise Rounds)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants will compete in multiple rounds in the lab</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Only the top finishers from each batch will advance</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Elimination is based on game performance</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏆 Round 2: Grand Finale</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Qualified players compete in the final knockout challenge</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The last standing/top performer will be crowned champion</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "roundDetails"
    },
    {
      icon: "🏆",
      heading: "Final Championship",
      content: (
        <div className="sympo-subcard text-slate-200">
          <p className="text-base md:text-lg leading-relaxed">
            The champion will be crowned in the <span className="font-bold text-primary">Grand Finale</span>. Certificates and prizes will be awarded to the <span className="font-bold text-white">top 3 performers</span>.
          </p>
        </div>
      ),
      key: "final"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={StumbleGuysBanner}
      posterAlt="Obs-Tackle Race Event Poster"
      title="OBS-TACKLE RACE"
      subtitle="STUMBLE GUYS KNOCKOUT CHALLENGE"
      track="TRACK I"
      category="Non-Technical"
      date="October 10, 2025"
      team="Solo Player"
      prize="Cash Prize for Winners"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default StumbleGuys;
