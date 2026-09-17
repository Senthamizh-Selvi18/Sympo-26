import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import NevermoreBanner from "../../../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

const Deadlydeeds = () => {
  const sectionCards = [
    {
      icon: "🕵️",
      heading: "The Nevermore Mystery",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200 space-y-3">
          <p>
            On the night of October 10th, the shadows will gather at JCE College, where a tale of deceit, secrets, and dark puzzles awaits. A crime has been committed—one so twisted, even the walls whisper in silence.
          </p>
          <p>
            The suspects? Lurking among you. The clues? Buried in riddles, sealed within games, waiting for the brave to uncover them.
          </p>
          <p>
            The clock will strike, and you shall have only 10 minutes to solve all mysteries, expose the culprit, and escape the clutches of Nevermore.
          </p>
        </div>
      ),
      key: "description"
    },
    {
      icon: "🎲",
      heading: "Event Flow – The Wednesday Way",
      content: (
        <div className="space-y-3">
          {[
            { step: "01", title: "Opening Ritual", desc: "A gloomy briefing welcomes detectives to the halls of Nevermore." },
            { step: "02", title: "The Hunt Begins", desc: "Teams dive into 10 mini-investigations (Find the Path, Jumbled Words, Odd One Out), peeling back the mystery." },
            { step: "03", title: "Gathering Evidence", desc: "Solved puzzles yield sinister tokens: fingerprints, notes, and weapons." },
            { step: "04", title: "Interrogation & Theories", desc: "Detectives wield their evidence to question suspects and deduce motives." },
            { step: "05", title: "The Last Shadows", desc: "Twists surface, revealing the killer's darkest fingerprints." },
            { step: "06", title: "Accusation & Verdict", desc: "Teams deliver their final verdict: the killer, the weapon, and the motive." },
            { step: "07", title: "The Grand Unveiling", desc: "The host unmasks the true culprit, exposing how all clues were woven together." }
          ].map((item, i) => (
            <div key={i} className="sympo-subcard">
              <div className="sympo-subcard-title">
                <span className="text-accent font-mono">[{item.step}]</span>
                <span>{item.title}</span>
              </div>
              <div className="sympo-subcard-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      ),
      key: "flow"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Duration of Doom:</strong> The entire mystery must be solved within 10 minutes.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Stay in Character:</strong> Participants must remain in detective mode at all times.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>No Escaping the Maze:</strong> Skipping puzzle stations is strictly forbidden.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Team Size:</strong> 2–4 detectives per team.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>The Final Word:</strong> The coordinators' decisions are absolute and binding.</span>
          </li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🕯️",
      heading: "Closing Note",
      content: (
        <div className="sympo-subcard text-slate-200 italic">
          "The shadows will not wait, and neither will the truth. Ten minutes is all you have… solve the Nevermore Mystery, or become part of it."
        </div>
      ),
      key: "closing"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={NevermoreBanner}
      posterAlt="Deadly Deeds Nevermore Mystery Poster"
      title="DEADLY DEEDS"
      subtitle="THE NEVERMORE MYSTERY"
      track="TRACK II"
      category="Non-Technical"
      date="October 10, 2025"
      team="2 - 3 Members"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Deadlydeeds;
