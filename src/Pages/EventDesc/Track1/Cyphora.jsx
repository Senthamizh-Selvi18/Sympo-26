import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cyphora.jpg";

const Cyphora = () => {
  const sectionCards = [
    {
      icon: "💻",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            OS NAVIGATOR • AI REGENERATION • SCRATCH QUEST 🚀
          </p>
          <p>
            <strong className="text-white">CYPHORA</strong> is a three-round technical competition designed to challenge participants through a combination of operating system exploration, AI-powered image generation, and interactive game-based problem solving.
          </p>
          <p>
            Participants must apply their observation, creativity, logical thinking, prompt engineering, and problem-solving skills to successfully complete each round and progress through the event.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p>
            The event is designed to test participants' technical knowledge, analytical thinking, creativity, observation, logical reasoning, and problem-solving abilities through a series of interactive challenges.
          </p>
          <p>
            Participants must explore hidden information, generate and recreate visual content using AI, and overcome challenges in a Scratch-based game environment. The event encourages creativity, critical thinking, and effective decision-making in a fun and competitive environment.
          </p>
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
            <h3 className="sympo-subcard-title">🖥️ Round 1: OS Navigator</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Objective:</strong> Participants will enter a virtual Operating System environment where they must explore files, folders, applications, and system elements to identify hidden clues and uncover the information required to progress to the next round.
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Winning Criteria:</strong> Teams that successfully identify the required clues and complete the round within the given time limit will qualify for the next round based on their performance.
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎨 Round 2: Image Regeneration</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Objective:</strong> Participants will be provided with a reference image and must recreate it using AI-powered image generation and effective prompt engineering. Teams must analyse the reference image and develop suitable prompts to achieve the closest possible visual recreation.
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Winning Criteria:</strong> Teams will be evaluated based on visual similarity and prompt quality. The best-performing teams will qualify for the next round.
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎮 Round 3: Scratch Quest</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Objective:</strong> Participants will take control of a character in a Scratch-based interactive game and navigate through the environment. Players must overcome obstacles, collect items, avoid traps, and complete the given objectives to progress through the game.
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  <strong>Winning Criteria:</strong> Participants will be evaluated based on their performance, completion time, and objectives achieved. Scores will be awarded accordingly.
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "Each team must have two members. No member can belong to more than one team." },
            { label: "Conduct", text: "Participants must be respectful and courteous towards other participants, judges, and event coordinator." },
            { label: "Decision of Judges", text: "The decision of the judges will be final and binding." },
            { label: "Round Progression", text: "Participants must successfully complete the requirements of each round to proceed to the subsequent round." },
            { label: "No External Assistance", text: "Participants must not seek or receive unauthorized assistance from individuals outside their registered team." },
            { label: "Fair Play", text: "Participants must not attempt to manipulate, disrupt, or interfere with the systems, software, or activities used for the event." },
            { label: "Time Limit", text: "Participants must complete each round within the time limit specified by the event organizers." },
            { label: "Disqualification", text: "Participants or teams found guilty of misconduct, unfair practices, or violation of event rules may be disqualified." },
            { label: "Penalties", text: "Possible penalties may include score deductions, time penalties, or disqualification, depending on the nature of the violation." },
            { label: "Participation", text: "By participating in the event, participants agree to abide by the rules and guidelines specified above." },
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
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
      heading: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Faculty Incharge:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. A. Parameshwari:{" "}
                  <a href="tel:+919597682720" className="text-accent hover:underline">
                    9597682720
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. E. Brindha:{" "}
                  <a href="tel:+919791972394" className="text-accent hover:underline">
                    9791972394
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Syed Afeezu Raheman A:{" "}
                  <a href="tel:+916369716402" className="text-accent hover:underline">
                    6369716402
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Afsal Ahmed Khan A:{" "}
                  <a href="tel:+919150420069" className="text-accent hover:underline">
                    9150420069
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Sandana S D:{" "}
                  <a href="tel:+919514252006" className="text-accent hover:underline">
                    9514252006
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
      posterSrc={EventImage}
      posterAlt="CYPHORA - Technical Event Poster"
      title="CYPHORA"
      subtitle="OS NAVIGATOR • AI REGENERATION • SCRATCH QUEST"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Team of 2"
      prize="Win Exciting Prizes"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Cyphora;
