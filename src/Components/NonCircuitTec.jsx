import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import FlipCard from "./FlipCard";
import HexagonTechFrame from "./HexagonTechFrame";

import PromptRush from "../assets/symposium/Sympo'25/Track1/PromptRush.png";
import Vintaviz from "../assets/symposium/Sympo'25/Track1/Vintaviz.jpg";
import FLIPSTER from "../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";
import Cyberverse from "../assets/symposium/Sympo'25/Track1/Cyberverse.jpg";
import Cyphora from "../assets/symposium/Sympo'25/Track1/Cyphora.jpg";
import WhoLockedYou from "../assets/symposium/Sympo'25/Track1/WhoLockedYou.jpg";

const NonCircuitTec = () => {
  const circuittechnicalEvents = [
    {
      id: 0,
      imageSrc: PromptRush,
      altText: "Prompt Rush",
      title: "Prompt Rush",
      category: "Technical • Track I",
      description:
        "An innovative AI and prompt engineering arena where participants write creative prompts, solve tech challenges, and push AI productivity to bigger possibilities.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/promptRush",
    },
    {
      id: 1,
      imageSrc: Vintaviz,
      altText: "VINTAVIZ",
      title: "VINTAVIZ",
      category: "Technical • Track I",
      description:
        "A carnival of ideas, innovation & inspiration! Observe patterns, analyze insights, visualize findings, and outsmart the data in this premier analytics showcase.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/vintaviz",
    },
    {
      id: 2,
      imageSrc: FLIPSTER,
      altText: "FLIPSTER 2.0",
      title: "FLIPSTER 2.0",
      category: "Technical • Track I",
      description:
        "The ultimate tech hustle! Put your intuition, brand awareness, tech acumen, and fast decision-making to the test to think, solve, and win exciting prizes.",
      date: "Oct 10, 2026",
      team: "2 Members",
      prize: "Exciting Prizes",
      path: "/flipster",
    },
    {
      id: 3,
      imageSrc: Cyberverse,
      altText: "CYBERVERSE",
      title: "CYBERVERSE",
      category: "Technical • Track I",
      description:
        "An intense Capture The Flag (CTF) showdown! Decrypt the unknown across web exploitation, cryptography, digital forensics, reverse engineering/PWN, and misc puzzles.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/cyberverse",
    },
    {
      id: 4,
      imageSrc: Cyphora,
      altText: "CYPHORA",
      title: "CYPHORA",
      category: "Technical • Track I",
      description:
        "A cutting-edge machine learning and intelligent systems showdown challenging participants to regenerate data patterns, evolve AI models, and reverse-engineer blackbox algorithms.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/cyphora",
    },
    {
      id: 5,
      imageSrc: WhoLockedYou,
      altText: "WHO LOCKED YOU?",
      title: "WHO LOCKED YOU?",
      category: "Technical • Track I",
      description:
        "An intense cybersecurity and technical investigation challenge! Decrypt hidden locks, solve forensic clues, bypass digital barriers, and unmask the rogue entity.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      prize: "Enter to Win",
      path: "/whoLockedYou",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="techeventfont text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest">
        Technical Events
      </h3>

      <HexagonTechFrame title="TECHNICAL EVENTS">
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {circuittechnicalEvents.map((card) => (
            <FlipCard
              key={card.id}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              category={card.category}
              description={card.description}
              date={card.date}
              team={card.team}
              prize={card.prize}
              path={card.path}
            />
          ))}
        </main>
      </HexagonTechFrame>
    </div>
  );
};

export default NonCircuitTec;