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
import Mindspark from "../assets/symposium/Sympo'25/Track1/Mindspark.png";

const NonCircuitTec = () => {
  const circuittechnicalEvents = [
    {
      id: 0,
      imageSrc: Mindspark,
      altText: "MINDSPARK - Paper Presentation",
      title: "MINDSPARK",
      category: "Technical • Track I",
      description:
        "Paper Presentation! Ignite Ideas. Inspire Future. Showcase groundbreaking research and innovative technological solutions in a 10-minute presentation challenge.",
      date: "Oct 10, 2026",
      team: "Team of 2",
      path: "/mindspark",
    },
    {
      id: 1,
      imageSrc: PromptRush,
      altText: "Prompt Rush",
      title: "Prompt Rush",
      category: "Technical • Track I",
      description:
        "Prompt • Think • Create! An elite generative AI and prompt engineering challenge to craft prompts, synthesize code, and solve tech problems.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/promptRush",
    },
    {
      id: 2,
      imageSrc: Vintaviz,
      altText: "VINTAVIZ",
      title: "VINTAVIZ",
      category: "Technical • Track I",
      description:
        "Visual Intelligence! Take on a 60-second visualization memory challenge, followed by transforming datasets into meaningful visual insights.",
      date: "Oct 10, 2026",
      team: "Max 2 Members",
      path: "/vintaviz",
    },
    {
      id: 3,
      imageSrc: FLIPSTER,
      altText: "FLIPSTER 2.0",
      title: "FLIPSTER 2.0",
      category: "Technical • Track I",
      description:
        "The Tech Hustle! A technical quiz followed by buzzer terms identification and phishing email threat detection.",
      date: "Oct 10, 2026",
      team: "Team of 2",
      prize: "Win Exciting Prizes",
      path: "/flipster",
    },
    {
      id: 4,
      imageSrc: Cyberverse,
      altText: "CYBERVERSE",
      title: "CYBERVERSE",
      category: "Technical • Track I",
      description:
        "Capture The Flag (CTF)! Solve technical challenges spanning web exploitation, cryptography, reverse engineering, and forensics.",
      date: "Oct 10, 2026",
      team: "1 - 2 Members",
      path: "/cyberverse",
    },
    {
      id: 5,
      imageSrc: Cyphora,
      altText: "CYPHORA",
      title: "CYPHORA",
      category: "Technical • Track I",
      description:
        "OS Navigator, AI Image Regeneration & Scratch Quest! Challenge OS clue exploration, AI prompt visual recreation, and Scratch gaming problem-solving.",
      date: "Oct 10, 2026",
      team: "Team of 2",
      prize: "Win Exciting Prizes",
      path: "/cyphora",
    },
    {
      id: 6,
      imageSrc: WhoLockedYou,
      altText: "WHO LOCKED YOU?",
      title: "WHO LOCKED YOU?",
      category: "Technical • Track I",
      description:
        "Detective-based investigation! Solve challenging tasks across 3 rounds involving observation, logical reasoning, and clue analysis to unmask the culprit.",
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