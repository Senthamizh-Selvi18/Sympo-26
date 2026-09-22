// eventsData.js - Master event configuration with correct event names, dates, and posters

import PromptRushImg from "../assets/symposium/Sympo'25/Track1/PromptRush.png";
import VintavizImg from "../assets/symposium/Sympo'25/Track1/Vintaviz.jpg";
import FlipsterImg from "../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";
import CyberverseImg from "../assets/symposium/Sympo'25/Track1/Cyberverse.jpg";
import CyphoraImg from "../assets/symposium/Sympo'25/Track1/Cyphora.jpg";
import WhoLockedYouImg from "../assets/symposium/Sympo'25/Track1/WhoLockedYou.jpg";
import MindsparkImg from "../assets/symposium/Sympo'25/Track1/Mindspark.png";

import CinephiliaImg from "../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";
import CueBattleImg from "../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";
import ObstackleImg from "../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg";
import GigzUpImg from "../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";
import BehindTheMaskImg from "../assets/symposium/Sympo'25/Track1/BehindTheMask.jpg";

import SynapseImg from "../assets/symposium/Sympo'25/Track2/Synapse.jpg";
import NexusImg from "../assets/symposium/Sympo'25/Track2/Synapse.jpg";
import VoltrushImg from "../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";
import BionexaImg from "../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";
import ThinkonomicsImg from "../assets/symposium/Sympo'25/Track2/THINK TANK.png";
import GateBountyImg from "../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";
import TieTheKnotsImg from "../assets/symposium/Sympo'25/Track2/POTPURRI.png";
import ChronoverseImg from "../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

export const track1TechnicalEvents = [
  {
    id: 0,
    title: "MINDSPARK",
    label: "MINDSPARK",
    category: "Technical • Track I",
    description:
      "Technical Paper Presentation! Present research, innovations, and emerging tech in computer science before an expert panel followed by a rigorous Q&A session.",
    date: "Oct 10, 2026",
    team: "Max 2 Members",
    prize: "Win Exciting Prizes",
    path: "/mindspark",
    imageSrc: MindsparkImg,
    altText: "MINDSPARK - Paper Presentation",
  },
  {
    id: 1,
    title: "Prompt Rush",
    label: "Prompt Rush",
    category: "Technical • Track I",
    description:
      "AI-Powered Web Design Challenge! Recreate given interfaces using AI prompts, then build and animate interactive web interfaces from scratch.",
    date: "Oct 10, 2026",
    team: "Max 2 Members",
    prize: "Win Exciting Prizes",
    path: "/promptRush",
    imageSrc: PromptRushImg,
    altText: "Prompt Rush",
  },
  {
    id: 2,
    title: "VINTAVIZ",
    label: "VINTAVIZ",
    category: "Technical • Track I",
    description:
      "Visual Intelligence! Take on a 60-second visualization memory challenge, followed by transforming datasets into meaningful visual insights.",
    date: "Oct 10, 2026",
    team: "Max 2 Members",
    prize: "Cash Prize for Winners",
    path: "/vintaviz",
    imageSrc: VintavizImg,
    altText: "VINTAVIZ",
  },
  {
    id: 3,
    title: "FLIPSTER 2.0",
    label: "FLIPSTER 2.0",
    category: "Technical • Track I",
    description:
      "The Tech Hustle! A technical quiz followed by buzzer terms identification and phishing email threat detection.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Win Exciting Prizes",
    path: "/flipster",
    imageSrc: FlipsterImg,
    altText: "FLIPSTER 2.0",
  },
  {
    id: 4,
    title: "CYBERVERSE",
    label: "CYBERVERSE",
    category: "Technical • Track I",
    description:
      "Capture The Flag (CTF)! Solve technical challenges spanning web exploitation, cryptography, reverse engineering, and forensics.",
    date: "Oct 10, 2026",
    team: "1 - 2 Members",
    prize: "Win Exciting Prizes",
    path: "/cyberverse",
    imageSrc: CyberverseImg,
    altText: "CYBERVERSE",
  },
  {
    id: 5,
    title: "CYPHORA",
    label: "CYPHORA",
    category: "Technical • Track I",
    description:
      "OS Navigator, AI Image Regeneration & Scratch Quest! Challenge OS clue exploration, AI prompt visual recreation, and Scratch gaming problem-solving.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Win Exciting Prizes",
    path: "/cyphora",
    imageSrc: CyphoraImg,
    altText: "CYPHORA",
  },
  {
    id: 6,
    title: "WHO LOCKED YOU?",
    label: "WHO LOCKED YOU?",
    category: "Technical • Track I",
    description:
      "Detective-based investigation! Solve challenging tasks across 3 rounds involving observation, logical reasoning, and clue analysis to unmask the culprit.",
    date: "Oct 10, 2026",
    team: "1 - 2 Members",
    prize: "Enter to Win",
    path: "/whoLockedYou",
    imageSrc: WhoLockedYouImg,
    altText: "WHO LOCKED YOU?",
  },
];

export const commonNonTechnicalEvents = [
  {
    id: 1,
    title: "Cinephilia",
    label: "Cinephilia",
    category: "Non-Technical",
    description:
      "A Celebration of Cinema! Test your movie knowledge through BGM Master, Mute-A-Logue, and Concept Pudi Prize Adi challenges.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Exciting Cash Prize",
    path: "/cinephilia",
    imageSrc: CinephiliaImg,
    altText: "Cinephilia",
  },
  {
    id: 2,
    title: "CLUMINATI",
    label: "CLUMINATI",
    category: "Non-Technical",
    description:
      "Nothing Is Random. Everything Connects! An exciting mystery-solving event where investigators connect cases, analyze suspects, and examine the crime scene.",
    date: "Oct 10, 2026",
    team: "1 - 2 Members (Solo Allowed)",
    prize: "Exciting Cash Prize",
    path: "/cluminati",
    imageSrc: CueBattleImg,
    altText: "CLUMINATI",
  },
  {
    id: 3,
    title: "Tie The Knots",
    label: "TIE THE KNOTS",
    category: "Non-Technical",
    description:
      "Connections! Test quick thinking and teamwork through Decode (10s puzzles), Objectune (cinema tune guessing), and Memory Challenge.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Win Exciting Prizes",
    path: "/potpurri",
    imageSrc: TieTheKnotsImg,
    altText: "TIE THE KNOTS",
  },
  {
    id: 4,
    title: "CHRONOVERSE 2026",
    label: "CHRONOVERSE",
    category: "Non-Technical",
    description:
      "Time Travel – Every Era Has A Challenge! A thrilling journey through past, present, and future across 10 quick, creative, and entertaining games.",
    date: "Oct 10, 2026",
    team: "Team of 4",
    prize: "Win Exciting Prizes",
    path: "/deadlydeeds",
    imageSrc: ChronoverseImg,
    altText: "CHRONOVERSE 2026",
  },
  {
    id: 5,
    title: "GIGZUP 2.0",
    label: "GIGZUP 2.0",
    category: "Non-Technical • Online",
    description:
      "Virtual Vibe Fest (Online Event)! An exciting online gaming and entertainment quiz competing in real time across ConnectX and Verse Decode.",
    date: "Oct 07, 2026",
    team: "Solo / Individual",
    prize: "Win Exciting Prizes",
    path: "/gigzup",
    imageSrc: GigzUpImg,
    altText: "GIGZUP 2.0",
  },
  {
    id: 6,
    title: "BEHIND THE MASK",
    label: "BEHIND THE MASK",
    category: "Non-Technical • Online",
    description:
      "Online Social-Deduction Game! Analyse clues, take part in strategic discussions, and use pure logic to unmask the secret killer before they outwit everyone.",
    date: "Oct 07, 2026",
    team: "Solo / Team",
    prize: "Win Exciting Prizes",
    path: "/behindTheMask",
    imageSrc: BehindTheMaskImg,
    altText: "BEHIND THE MASK",
  },
];

export const track1NonTechnicalEvents = commonNonTechnicalEvents;
export const track2NonTechnicalEvents = commonNonTechnicalEvents;

export const track2TechnicalEvents = [
  {
    id: 1,
    title: "SYNAPSE 2K26",
    label: "SYNAPSE 2K26",
    category: "Technical • Track II",
    description:
      "Technical Paper Presentation! Think • Present • Inspire. Showcase novel innovations, research ideas, and solutions shaping tomorrow before an expert panel.",
    date: "Oct 10, 2026",
    team: "Max 3 Members",
    prize: "Win Exciting Prizes",
    path: "/synapse",
    imageSrc: SynapseImg,
    altText: "SYNAPSE 2K26 - Paper Presentation",
  },
  {
    id: 2,
    title: "Voltrush",
    label: "VOLTRUSH",
    category: "Technical • Track II",
    description:
      "High-voltage electrical showdown! Challenge circuit theory, component identification, electrical logic, and power problem-solving.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Win Exciting Prizes",
    path: "/ampItUpArena",
    imageSrc: VoltrushImg,
    altText: "VOLTRUSH",
  },
  {
    id: 3,
    title: "Bionexa Auction Hunt",
    label: "Bionexa Auction Hunt",
    category: "Technical • Track II",
    description:
      "Bid Smart • Think Fast • Win Big! A high-stakes 2-round competition combining departmental knowledge bidding and mystery challenges.",
    date: "Oct 10, 2026",
    team: "2 - 3 Members",
    path: "/bioMystic",
    imageSrc: BionexaImg,
    altText: "Bionexa Auction Hunt",
  },
  {
    id: 4,
    title: "Thinkonomics",
    label: "THINKONOMICS",
    category: "Technical • Track II",
    description:
      "Business Quiz! Step into the world of business, brands, and brilliant minds across Prelims (30 MCQs), Crack the Code (Logos & Sounds), and L-Lookup.",
    date: "Oct 10, 2026",
    team: "Team of 2",
    prize: "Cash Prize & Certificates",
    path: "/thinktank",
    imageSrc: ThinkonomicsImg,
    altText: "THINKONOMICS",
  },
  {
    id: 5,
    title: "Gate Bounty",
    label: "GATE BOUNTY",
    category: "Technical • Track II",
    description:
      "Hands-on digital electronics challenge! Implement logic gates using NAND/NOR gates, simplify Boolean expressions, and demonstrate working hardware circuits.",
    date: "Oct 10, 2026",
    team: "Max 2 Members",
    prize: "30 Marks • 40 Mins",
    path: "/tracktron",
    imageSrc: GateBountyImg,
    altText: "GATE BOUNTY",
  },
];
