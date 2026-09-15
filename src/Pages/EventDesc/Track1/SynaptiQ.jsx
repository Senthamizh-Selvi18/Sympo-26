import React from "react";
import { FaBrain, FaCogs, FaRobot, FaGavel, FaTrophy, FaInfoCircle } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/SynaptiQ.png";

const SynaptiQ = () => {
  const sectionCards = [
    {
      icon: <FaBrain size={24} />,
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <span className="font-bold text-white">SynaptiQ</span> is a multi-round technical event testing participants' logical thinking, debugging, coding, and creativity using Generative AI. Expect a fusion of <span className="highlight px-2 py-0.5 rounded">aptitude</span>, <span className="highlight px-2 py-0.5 rounded">programming</span>, and <span className="highlight px-2 py-0.5 rounded">prompt engineering</span> tasks designed to push your limits and showcase your <span className="text-primary font-semibold">innovative edge</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: <FaCogs size={24} />,
      heading: "Event Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong className="text-primary">Evaluate</strong> analytical and debugging skills through practical code challenges</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong className="text-primary">Enhance</strong> algorithmic problem-solving ability in real scenarios</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong className="text-primary">Encourage</strong> creativity and precision via AI prompt engineering</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong className="text-primary">Provide</strong> a platform to compete, collaborate, and learn</span>
          </li>
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: <FaRobot size={24} />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🚀 Round 1: Quickbit (Syntax & Sense)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Multiple-choice & short-answer challenges</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Debugging & aptitude questions</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Top performers advance</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">💻 Round 2: Decypher (Coding & Algorithms)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Multi-level coding challenge (Basic to Advanced)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Progressive difficulty & real problem-solving</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Advance to finals by success</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🤖 Round 3: Gen AI Verse (Prompt Engineering)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>AI-driven creative image-recreation using accurate prompts</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Judged on similarity & precision</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Team of max 2 (solo allowed)",
            "Personal laptops welcomed",
            "Mobiles prohibited during the event",
            "Time-bound for every round",
            "No malpractice or plagiarism—immediate disqualification",
            "Judges' decision is final"
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: <FaTrophy size={24} />,
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥇</span> Round 1</div>
            <div className="sympo-subcard-desc">Accuracy & Speed</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥈</span> Round 2</div>
            <div className="sympo-subcard-desc">Algorithm correctness & solution efficiency</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥉</span> Round 3</div>
            <div className="sympo-subcard-desc">Prompt quality & image similarity</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: <FaInfoCircle size={24} />,
      heading: "Contact Info",
      content: (
        <div className="sympo-subcard">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Ms. Gobika G:</strong> <a href="tel:+916385636336" className="text-accent hover:underline">+91 6385636336</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Mr. Hemachandiran R:</strong> <a href="tel:+919840963827" className="text-accent hover:underline">+91 9840963827</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="SynaptiQ Event Poster"
      title="SYNAPTIQ"
      subtitle="MULTI-ROUND TECHNICAL EVENT"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default SynaptiQ;
