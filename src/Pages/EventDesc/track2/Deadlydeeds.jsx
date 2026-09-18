import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import ChronoverseBanner from "../../../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

const Deadlydeeds = () => {
  const sectionCards = [
    {
      icon: "⏳",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            TIME TRAVEL – EVERY ERA HAS A CHALLENGE 🌌
          </p>
          <p>
            <strong className="text-white">Chronoverse 2026</strong> is a Time Travel-themed event that takes participants on an exciting journey through the past, present, and future. The event features fun games, creative challenges, and entertaining activities that test participants' creativity, teamwork, and quick thinking.
          </p>
          <p>
            With different eras brought to life through engaging challenges, participants can enjoy a unique and memorable experience. Step into the time portal, take on every era’s challenges, and make your own moment in history!
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
            To create an exciting Time Travel-themed experience that encourages students to showcase their creativity, teamwork, quick thinking, and talents through fun and engaging events inspired by the past, present, and future.
          </p>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "⚡",
      heading: "Event Structure & Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎮 10-Game Time Warp Gauntlet</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              The event consists of <strong>10 quick and challenging games</strong> across eras. Winners will be announced based on the highest total score and successful game completions.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Time-Travel Progression:</strong> Each completed game advances your team deeper into the time stream (moving to the past or future).</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Scoring:</strong> Points are awarded only for successfully completed games within the total allotted time limit.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules and Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "Each team must consist of exactly 4 members." },
            { label: "Game Format", text: "The event consists of a series of quick and challenging games that participants must complete within the given time." },
            { label: "Time Limit", text: "The time limit for the entire games will be announced by the event coordinators before the game begins. Teams must complete as many games as possible within the allotted time." },
            { label: "Scoring Criteria", text: "A team will receive points only for successfully completed games according to the scoring criteria given by the event coordinators." },
            { label: "Era Progress", text: "The number of games successfully completed will determine the team's time-travel progress, such as moving to the past or future." },
            { label: "Winning Condition", text: "The team that successfully completes the highest number of games and achieves the highest score will be declared as the winner." },
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
      heading: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Staff Coordinators (ECE):</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. R. Malathy (AP / ECE)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. K. Rajasaranya (AP / ECE)</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (ECE):</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Koueishik N:{" "}
                  <a href="tel:+919840554441" className="text-accent hover:underline">
                    9840554441
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Maham Dharshini A:{" "}
                  <a href="tel:+916369634649" className="text-accent hover:underline">
                    6369634649
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
      posterSrc={ChronoverseBanner}
      posterAlt="CHRONOVERSE 2026 Time Travel Event Poster"
      title="CHRONOVERSE 2026"
      subtitle="TIME TRAVEL – EVERY ERA HAS A CHALLENGE"
      track="TRACK II"
      category="Non-Technical"
      date="Oct 10, 2026"
      team="Team of 4"
      prize="Win Exciting Prizes"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Deadlydeeds;
