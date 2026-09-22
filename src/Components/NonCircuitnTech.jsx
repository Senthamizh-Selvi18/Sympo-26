import React from "react";
import "../text.css";
import FlipCard from "./FlipCard";
import HexagonTechFrame from "./HexagonTechFrame";
import randomColor from "randomcolor";

import cini from "../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";
import CUEBATTLE from "../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";
import TieTheKnots from "../assets/symposium/Sympo'25/Track2/POTPURRI.png";
import Chronoverse from "../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";
import OBSSTACKLE from "../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg";
import GIGZUP from "../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";
import BehindTheMask from "../assets/symposium/Sympo'25/Track1/BehindTheMask.jpg";

export const commonNonTechnicalEvents = [
  {
    id: 1,
    imageSrc: cini,
    altText: "Cinephilia",
    title: "Cinephilia",
    category: "Non-Technical",
    description:
      "A Celebration of Cinema! Test your movie knowledge through BGM Master, Mute-A-Logue, and Concept Pudi Prize Adi challenges.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Exciting Cash Prize",
    path: "/cinephilia",
  },
  {
    id: 2,
    imageSrc: CUEBATTLE,
    altText: "CLUMINATI",
    title: "CLUMINATI",
    category: "Non-Technical",
    description:
      "Nothing Is Random. Everything Connects! An exciting mystery-solving event where investigators connect cases, analyze suspects, and examine the crime scene.",
    date: "Oct 10, 2026",
    team: "1 - 2 Members (Solo Allowed)",
    prize: "Exciting Cash Prize",
    path: "/cluminati",
  },
  {
    id: 3,
    imageSrc: TieTheKnots,
    altText: "TIE THE KNOTS",
    title: "Tie The Knots",
    category: "Non-Technical",
    description:
      "Connections! Test quick thinking and teamwork through Decode (10s puzzles), Objectune (cinema tune guessing), and Memory Challenge.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Win Exciting Prizes",
    path: "/potpurri",
  },
  {
    id: 4,
    imageSrc: Chronoverse,
    altText: "CHRONOVERSE 2026",
    title: "CHRONOVERSE 2026",
    category: "Non-Technical",
    description:
      "Time Travel – Every Era Has A Challenge! A thrilling journey through past, present, and future across 10 quick, creative, and entertaining games.",
    date: "Oct 10, 2026",
    team: "Team of 4",
    prize: "Win Exciting Prizes",
    path: "/deadlydeeds",
  },
  {
    id: 5,
    imageSrc: GIGZUP,
    altText: "GIGZUP 2.0",
    title: "GIGZUP 2.0",
    category: "Non-Technical • Online",
    description:
      "Virtual Vibe Fest (Online Event)! An exciting online gaming and entertainment quiz competing in real time across ConnectX and Verse Decode.",
    date: "Oct 07, 2026",
    team: "Solo / Individual",
    prize: "Win Exciting Prizes",
    path: "/gigzup",
  },
  {
    id: 6,
    imageSrc: BehindTheMask,
    altText: "BEHIND THE MASK",
    title: "BEHIND THE MASK",
    category: "Non-Technical • Online",
    description:
      "Online Social-Deduction Game! Analyse clues, take part in strategic discussions, and use pure logic to unmask the secret killer before they outwit everyone.",
    date: "Oct 07, 2026",
    team: "Solo / Team",
    prize: "Win Exciting Prizes",
    path: "/behindTheMask",
  },
];

const NonCircuitnTech = () => {
  const color = randomColor();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{ textShadow: `2px 2px 15px ${color}` }}
      >
        Non Technical Events
      </h3>

      <HexagonTechFrame title="NON TECHNICAL EVENTS">
        <main className="card-container gap-10 flex flex-wrap justify-center w-full">
          {commonNonTechnicalEvents.map((card) => (
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

export default NonCircuitnTech;
