import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import FlipCard from "./FlipCard";

import EscapeRoom from "../assets/symposium/Sympo'25/Track1/escaperoom.png";
import FLIPSTER from "../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";
import Oratio from "../assets/symposium/Sympo'25/Track1/Oratio.png";
import SynaptiQ from "../assets/symposium/Sympo'25/Track1/SynaptiQ.png";
import TriSpark from "../assets/symposium/Sympo'25/Track1/TriSpark.png";
import vizyourway from "../assets/symposium/Sympo'25/Track1/VIZYOURWAY.png";
import Site2Sync from "../assets/symposium/Sympo'25/Track1/Site2sync.jpg";

const NonCircuitTec = () => {
  const circuittechnicalEvents = [
    {
      id: 0,
      imageSrc: Oratio,
      altText: "Oratio",
      title: "Oratio",
      category: "Technical • Track I",
      description:
        "A national-level paper presentation platform to showcase research, creativity, and technological innovation with clarity and impact.",
      date: "Oct 10, 2025",
      team: "Max 2 Members",
      path: "/oratio",
    },
    {
      id: 1,
      imageSrc: Site2Sync,
      altText: "Site2Sync",
      title: "Site2Sync",
      category: "Technical • Track I",
      description:
        "A fast-paced web development sprint where participants debug, design, and build a fully responsive mini website under time constraints.",
      date: "Oct 10, 2025",
      team: "2 - 3 Members",
      path: "/site2Sync",
    },
    {
      id: 2,
      imageSrc: SynaptiQ,
      altText: "SynaptiQ",
      title: "SynaptiQ",
      category: "Technical • Track I",
      description:
        "A multi-round technical gauntlet testing logical thinking, algorithmic debugging, programming, and generative AI prompt engineering.",
      date: "Oct 10, 2025",
      team: "1 - 2 Members",
      path: "/synaptiq",
    },
    {
      id: 3,
      imageSrc: FLIPSTER,
      altText: "FLIPSTER",
      title: "FLIPSTER",
      category: "Technical • Track I",
      description:
        "The ultimate quiz twist challenge testing your intuition, quick decisions, logos, taglines, and domain expertise under the clock.",
      date: "Oct 10, 2025",
      team: "2 Members",
      path: "/flipster",
    },
    {
      id: 4,
      imageSrc: EscapeRoom,
      altText: "EscapeRoom",
      title: "Escape Room 2.0",
      category: "Technical • Track I",
      description:
        "Challenge your technical acuity, cryptographic decoding skills, and logical deductions through a gripping two-stage escape race.",
      date: "Oct 10, 2025",
      team: "2 - 3 Members",
      path: "/escaperoom",
    },
    {
      id: 5,
      imageSrc: TriSpark,
      altText: "TriSpark",
      title: "TriSpark",
      category: "Technical • Track I",
      description:
        "An intercollegiate coding battle focusing on algorithmic prowess, rapid debugging, and progressive code-based problem solving.",
      date: "Oct 10, 2025",
      team: "1 - 2 Members",
      path: "/triSpark",
    },
    {
      id: 6,
      imageSrc: vizyourway,
      altText: "vizyourway",
      title: "Viz Your Way",
      category: "Technical • Track I",
      description:
        "Two-round data visualization competition featuring a rapid-fire quiz quest followed by creative data interpretation and dashboarding.",
      date: "Oct 10, 2025",
      team: "2 Members",
      path: "/vizyourway",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3 className="techeventfont text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest">
        Technical Events
      </h3>

      <div>
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
      </div>
    </div>
  );
};

export default NonCircuitTec;