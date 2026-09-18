import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import TieTheKnotsBanner from "../../../assets/symposium/Sympo'25/Track2/POTPURRI.png";

const Potpurri = () => {
  const sectionCards = [
    {
      icon: "🎉",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            STEP INTO A WORLD OF LAUGHTER, ENERGY, AND EXCITEMENT! 🔗
          </p>
          <p>
            <strong className="text-white">Tie the knots (Connections)</strong> is an exciting non-technical event designed to test your creativity, quick thinking, and teamwork through a series of super fun and engaging games.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <ul className="sympo-tech-list space-y-2">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Encourage Teamwork & Collaboration:</strong> Build stronger bonds among students through group participation and team-based challenges.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Enhance Creativity & Imagination:</strong> Motivate students to think outside the box while expressing ideas in unique and fun ways.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Develop Quick Thinking & Problem-Solving:</strong> Sharpen analytical and decision-making abilities through fast-paced games.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Promote Healthy Competition:</strong> Foster a spirit of sportsmanship and fair play in a fun and engaging environment.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Relieve Stress & Boost Energy:</strong> Provide students with a refreshing break from academics while energizing them with laughter and fun.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Improve Communication Skills:</strong> Strengthen verbal and non-verbal communication through interactive games.
              </span>
            </li>
          </ul>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "⚡",
      heading: "Event Rounds & Structure",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧩 Round 1 – Decode</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              A fun and brain-teasing event where participants have to identify the link between pictures, words, symbols, or clues displayed on the screen within <strong>10 seconds</strong>.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Themes:</strong> Movie titles, celebrities, cinema dialogues, movies & cinema songs, famous personalities, proverbs, objects, or trending concepts.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> Creativity, observation, general knowledge, presence of mind, and spotting the clever link that ties everything together.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎵 Round 2 – Objectune</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              A fun cinematic musical challenge where participants identify a cinema song using only its tune.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Flow:</strong> One participant is secretly given an object and sings the tune by repeatedly replacing all lyrics with that object's name.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Guessing:</strong> The partner listens carefully and must guess the cinema song within <strong>1 minute</strong>.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> Active listening, memory retention, concentration, creativity, quick thinking, and coordination.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎬 Round 3 – Memory Challenge</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Participants watch a video containing <strong>10 famous actors, actresses, and famous personalities</strong> for <strong>30 seconds</strong>.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Screen Hides:</strong> The screen is hidden, and participants are asked rapid questions based on what they observed.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> Memory recall, concentration, observation, critical thinking, and attention to detail under pressure.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules of the Event",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "It is a team event which consists of 2 members." },
            { label: "Rounds", text: "3 rounds will be held." },
            { label: "Assembly Time", text: "Participants are requested to assemble 30 minutes prior to the commencement of the event." },
            { label: "Conduct", text: "Any fraudulent or misbehaving activities will result in immediate disqualification of the team." },
            { label: "Judges' Decision", text: "The judge’s decision will be final and binding." },
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>{rule.label}:</strong> {rule.text}
              </span>
            </li>
          ))}
        </ul>
      ),
      key: "rules",
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinator:</div>
            <ul className="sympo-tech-list">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  POOJA SRI N:{" "}
                  <a href="tel:+917358393785" className="text-accent hover:underline">
                    7358393785
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contacts",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={TieTheKnotsBanner}
      posterAlt="TIE THE KNOTS Connections Event Poster"
      title="TIE THE KNOTS"
      subtitle="CONNECTIONS"
      track="TRACK II"
      category="Non-Technical"
      date="Oct 10, 2026"
      team="Team of 2"
      prize="Exciting Cash Prize"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Potpurri;
