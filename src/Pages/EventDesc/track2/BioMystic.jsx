import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import BioMysticBanner from "../../../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";

const BioMystic = () => {
  const sectionCards = [
    {
      icon: "⚡",
      heading: "Event Description",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200 space-y-3">
          <p className="font-semibold text-accent text-lg">
            Think fast. Bid smart. Win big!
          </p>
          <p>
            <strong className="text-white">Bionexa Auction Hunt</strong> is a two-round team competition combining knowledge, strategy, bidding, and mystery challenges. Teams bid on images related to various engineering departments and general topics. The highest bidder gets the opportunity to answer the related question and earn bonuses or face penalties.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200">
          <p className="mb-3">The event aims to:</p>
          <ul className="sympo-tech-list space-y-2">
            {[
              "Test knowledge and quick thinking under pressure.",
              "Develop strategic bidding and decisive decision-making.",
              "Encourage effective teamwork and dynamic communication.",
              "Create a fun, thrilling, and competitive learning experience.",
            ].map((obj, i) => (
              <li key={i} className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">✦</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏷️ Round 1: Knowledge Bid</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Bid:</strong> Teams bid on projected images related to different departments and general topics.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Answer:</strong> The highest bidder gets the chance to answer the related question.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Score:</strong> Correct answers earn a bonus, while incorrect answers result in a penalty.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎲 Round 2: Mystery Bid</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Mystery Challenge:</strong> The highest bidder must first complete a mystery challenge before answering the associated question.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Double Bonus:</strong> Successfully completing the challenge and answering correctly earns a bonus + a chance to answer one additional question directly for a double bonus.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Penalty:</strong> Failure to complete the challenge or an incorrect answer results in a penalty.</span>
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
            { label: "Team Size", text: "Each team consists of 2–3 participants." },
            { label: "Virtual Money", text: "Teams receive a fixed amount of virtual money for bidding." },
            { label: "Bidding", text: "Bids cannot be withdrawn once placed." },
            { label: "Highest Bid Wins", text: "The highest bidder gets the opportunity to answer." },
            { label: "Time Limit", text: "All bids, questions, and challenges must be completed within the given time." },
            { label: "Fair Play", text: "No assistance from other teams or unfair practices is allowed." },
            { label: "Disqualification", text: "Rule violations or misconduct may lead to disqualification." },
            { label: "Judges' Decision", text: "The judges' and organizers' decision will be final." },
            { label: "Winner", text: "The team with the highest final score after both rounds wins." },
            { label: "Participation", text: "Participation implies acceptance of all event rules and guidelines." },
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
            <div className="font-semibold text-accent mb-2">Faculty Coordinator:</div>
            <ul className="sympo-tech-list">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. V. Subha Ramya:{" "}
                  <a href="tel:+919840338119" className="text-accent hover:underline">
                    98403 38119
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
                  Pavithra. K (IV BME):{" "}
                  <a href="tel:+916382357600" className="text-accent hover:underline">
                    63823 57600
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Sivasankari. N (II BME):{" "}
                  <a href="tel:+919087739091" className="text-accent hover:underline">
                    90877 39091
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contact",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={BioMysticBanner}
      posterAlt="Bionexa Auction Hunt Event Poster"
      title="BIONEXA AUCTION HUNT"
      subtitle="THINK FAST • BID SMART • WIN BIG"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="2 - 3 Members"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default BioMystic;
