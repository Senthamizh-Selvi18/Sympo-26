import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import FlipCard from "../Components/FlipCard";
import HexagonTechFrame from "../Components/HexagonTechFrame";

import Synapse from "../assets/symposium/Sympo'25/Track2/Synapse.jpg";
import Voltrush from "../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";
import Bionexa from "../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";
import Thinkonomics from "../assets/symposium/Sympo'25/Track2/THINK TANK.png";
import GateBounty from "../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";

const CircuitTec = () => {
  const color = randomColor();

  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: Synapse,
      altText: "SYNAPSE 2K26 - Paper Presentation",
      title: "SYNAPSE 2K26",
      category: "Technical • Track II",
      description:
        "Technical Paper Presentation! Think • Present • Inspire. Showcase novel innovations, research ideas, and solutions shaping tomorrow before an expert panel.",
      date: "Oct 10, 2026",
      team: "Max 3 Members",
      prize: "Win Exciting Prizes",
      path: "/synapse",
    },
    {
      id: 2,
      imageSrc: Voltrush,
      altText: "VOLTRUSH",
      title: "Voltrush",
      category: "Technical • Track II",
      description:
        "High-voltage electrical showdown! Challenge circuit theory, component identification, electrical logic, and power problem-solving.",
      date: "Oct 10, 2026",
      team: "Team of 2",
      prize: "Win Exciting Prizes",
      path: "/ampItUpArena",
    },
    {
      id: 3,
      imageSrc: Bionexa,
      altText: "Bionexa Auction Hunt",
      title: "Bionexa Auction Hunt",
      category: "Technical • Track II",
      description:
        "Bid Smart • Think Fast • Win Big! A high-stakes 2-round competition combining departmental knowledge bidding and mystery challenges.",
      date: "Oct 10, 2026",
      team: "2 - 3 Members",
      path: "/bioMystic",
    },
    {
      id: 4,
      imageSrc: Thinkonomics,
      altText: "THINKONOMICS",
      title: "Thinkonomics",
      category: "Technical • Track II",
      description:
        "Business Quiz! Step into the world of business, brands, and brilliant minds across Prelims (30 MCQs), Crack the Code (Logos & Sounds), and L-Lookup.",
      date: "Oct 10, 2026",
      team: "Team of 2",
      prize: "Cash Prize & Certificates",
      path: "/thinktank",
    },
    {
      id: 5,
      imageSrc: GateBounty,
      altText: "GATE BOUNTY",
      title: "Gate Bounty",
      category: "Technical • Track II",
      description:
        "Hands-on digital electronics challenge! Implement logic gates using NAND/NOR gates, simplify Boolean expressions, and demonstrate working hardware circuits.",
      date: "Oct 10, 2026",
      team: "Max 2 Members",
      prize: "30 Marks • 40 Mins",
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
