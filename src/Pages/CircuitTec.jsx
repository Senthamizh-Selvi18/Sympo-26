import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import FlipCard from "../Components/FlipCard";
import HexagonTechFrame from "../Components/HexagonTechFrame";

import AmpItUpArena from "../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";
import BioMystic from "../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";
import Nexus from "../assets/symposium/Sympo'25/Track2/Nexus.jpeg";
import THINKTANK from "../assets/symposium/Sympo'25/Track2/THINK TANK.png";
import TRACKTRON from "../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";

const CircuitTec = () => {
  const color = randomColor();

  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: Nexus,
      altText: "Nexus",
      title: "Nexus",
      category: "Technical • Track II",
      description:
        "Premier circuit paper presentation event to showcase novel innovations in electronics, IoT, biomedical engineering, and intelligent systems.",
      date: "Oct 10, 2025",
      team: "Max 3 Members",
      path: "/nexus",
    },
    {
      id: 2,
      imageSrc: AmpItUpArena,
      altText: "Amp-It-Up-Arena",
      title: "Amp-it-up-Arena",
      category: "Technical • Track II",
      description:
        "A high-voltage 3-round quiz challenging circuit theory, component identification, speed, and electronic problem-solving.",
      date: "Oct 10, 2025",
      team: "Team of 2",
      prize: "Prizes for Top Teams",
      path: "/ampItUpArena",
    },
    {
      id: 3,
      imageSrc: BioMystic,
      altText: "BioMystic",
      title: "BioMystic",
      category: "Technical • Track II",
      description:
        "Decode jumbled biomedical terminology, conquer tricky clinical riddles, and race the clock in an adrenaline-filled bio challenge.",
      date: "Oct 10, 2025",
      team: "Team of 2",
      path: "/bioMystic",
    },
    {
      id: 4,
      imageSrc: THINKTANK,
      altText: "THINKTANK",
      title: "Thinktank",
      category: "Technical • Track II",
      description:
        "A strategic business quiz testing market intelligence, corporate acumen, branding, and managerial crisis resolution under pressure.",
      date: "Oct 10, 2025",
      team: "2 Members",
      prize: "Cash Prize & Certificates",
      path: "/thinktank",
    },
    {
      id: 5,
      imageSrc: TRACKTRON,
      altText: "TRACKTRON",
      title: "Track-O-Tron",
      category: "Technical • Track II",
      description:
        "The galactic robotics battle arena where autonomous line-followers and custom bots conquer dynamic obstacles to claim cosmic glory.",
      date: "Oct 10, 2025",
      team: "2 - 4 Members",
      path: "/tracktron",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{ textShadow: `2px 2px 15px ${color}` }}
      >
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

export default CircuitTec;
