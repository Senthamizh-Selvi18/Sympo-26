import React from "react";
import "../text.css";
import FlipCard from "./FlipCard";

import cini from "../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";
import GIGZUP from "../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";
import CUEBATTLE from "../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";
import dEADLYDEEDS from "../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";
import randomColor from "randomcolor";
import POTPURRI from "../assets/symposium/Sympo'25/Track2/POTPURRI.png";
import OBSSTACKLE from "../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg";

const NonCircuitnTech = () => {
  const color = randomColor();

  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: cini,
      altText: "Cinephilia",
      title: "Cinephilia",
      category: "Non-Technical",
      description:
        "Dive into cinema beyond the screen! Test your passion through BGM mastery, dialogue identification, scene connection, and film trivia.",
      date: "Oct 10, 2025",
      team: "2 - 3 Members",
      prize: "Exciting Cash Prize",
      path: "/cinephilia",
    },
    {
      id: 2,
      imageSrc: POTPURRI,
      altText: "POTPURRI",
      title: "Potpurri",
      category: "Non-Technical",
      description:
        "Step into a world of laughter and energy! Test quick thinking, miming, wordplay, and team synergy through lively interactive games.",
      date: "Oct 10, 2025",
      team: "2 - 4 Members",
      path: "/potpurri",
    },
    {
      id: 3,
      imageSrc: CUEBATTLE,
      altText: "CUEBATTLE",
      title: "Cue Battle",
      category: "Non-Technical",
      description:
        "A high-octane battle of wits, cues, and instant deduction where sharp observation and split-second recall determine the victor.",
      date: "Oct 10, 2025",
      team: "2 Members",
      path: "/cuebattle",
    },
    {
      id: 4,
      imageSrc: dEADLYDEEDS,
      altText: "Deadly Deeds",
      title: "Deadly Deeds",
      category: "Non-Technical",
      description:
        "The Nevermore Mystery: A dark tale of deceit and hidden clues where teams interrogate suspects, crack codes, and unmask the culprit.",
      date: "Oct 10, 2025",
      team: "2 - 3 Members",
      path: "/deadlydeeds",
    },
    {
      id: 5,
      imageSrc: OBSSTACKLE,
      altText: "OBSSTACKLE",
      title: "Obs-Tackle Race",
      category: "Non-Technical",
      description:
        "Live Stumble Guys knockout tournament where contestants dash, leap, and evade obstacles to outlast competitors and claim the crown.",
      date: "Oct 10, 2025",
      team: "Solo Player",
      prize: "Cash Prize for Winners",
      path: "/obstackle",
    },
    {
      id: 6,
      imageSrc: GIGZUP,
      altText: "GIGZUP",
      title: "GigzUp",
      category: "Non-Technical",
      description:
        "An AI & tech-themed meme showdown blending humor with insight! Translate complex tech topics into hilarious, viral content.",
      date: "Oct 10, 2025",
      team: "1 - 2 Members",
      path: "/gigzup",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{ textShadow: `2px 2px 15px ${color}` }}
      >
        Non Technical Events
      </h3>

      <div>
        <main className="card-container gap-10 flex flex-wrap justify-center w-full">
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
      </div>
    </div>
  );
};

export default NonCircuitnTech;
