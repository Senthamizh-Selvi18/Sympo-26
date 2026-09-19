import React from "react";
import { FaRobot, FaLightbulb, FaLaptopCode, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/PromptRush.png";

const PromptRush = () => {
  const sectionCards = [
    {
      icon: <FaRobot size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-cyan-300">
            "Prompt • Think • Create" 🚀
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-white">Prompt Rush</span> is an elite generative AI challenge presented by the Department of Computer Science and Engineering (CSE). In an era where AI is reshaping the technological landscape, the real power lies in how effectively you communicate with AI models. Step into the arena to write creative stories, synthesize bug-free code, perform deep research, and unlock higher productivity and bigger possibilities through cutting-edge prompt engineering.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaLightbulb size={24} />,
      heading: "Key Highlights & Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Master modern AI prompt engineering techniques (Zero-shot, Few-shot, Chain-of-Thought)",
            "Harness AI for creative storytelling, project planning, and ideation",
            "Generate, debug, and optimize technical code and algorithmic workflows with AI",
            "Perform rapid analytical research and structured data synthesis",
            "Compete to demonstrate speed, clarity, and maximal output quality"
          ].map((item, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong className="text-primary">{item.split(" ")[0]}</strong> {item.slice(item.indexOf(" ") + 1)}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: <FaLaptopCode size={24} />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">💡 Round 1: Creative Prompt Catalyst (Ideation & Storytelling)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Craft targeted prompts to generate compelling narratives, creative storyboards, and project architecture plans</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Assessed on prompt structure, depth of context, and coherence of generated response</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚙️ Round 2: Tech Code & Logic Synth (Programming & Debugging)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Leverage AI to diagnose code vulnerabilities, generate modular functions, and optimize computational performance</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Speed, algorithmic correctness, and minimal iterative corrections are rewarded</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧠 Round 3: Multimodal Vision & Research Gauntlet (Grand Finale)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Multi-stage prompt challenge combining multimodal image generation, text analysis, and complex synthesis</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Finalists judged on precision, creative elegance, and benchmark score</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Rules & Guidelines",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Participation in teams of 1 to 2 members",
            "Personal laptops with stable web access are allowed and recommended",
            "Participants must adhere strictly to fair prompt engineering guidelines without illicit tooling",
            "Submissions must be delivered within the designated time boundary for each round",
            "Decisions of the faculty evaluators and jury are final and binding"
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
            <div className="sympo-subcard-title"><span>🎯</span> Prompt Engineering</div>
            <div className="sympo-subcard-desc">Clarity, system constraints, token efficiency, and prompt strategy</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> Output Quality</div>
            <div className="sympo-subcard-desc">Relevance, syntactic/logical accuracy, and semantic alignment</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⏱️</span> Time & Agility</div>
            <div className="sympo-subcard-desc">Rapid turnaround and progressive task completion under pressure</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: <FaUserTie size={24} />,
      heading: "Coordinators & Contact",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-accent">Student Coordinators (CSE):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Sowndarya</strong> – IV CSE A</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Siva</strong> – IV CSE B</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Sanjay K</strong> – III CSE B</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Shyam</strong> – III CSE B</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Jenisha</strong> – II CSE A</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Supriya</strong> – II CSE B</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-cyan-300">Faculty & Department Leadership:</div>
            <div className="text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>Faculty Coordinators:</strong> Ms. Vanitha Sheba, Ms. P. Anitha, Ms. T. Sumana, Ms. C. Needhu</p>
              <p><strong>NCSE Coordinator:</strong> Dr. T. Dhanalakshmi</p>
              <p><strong>HOD - CSE:</strong> Dr. A. Velmurugan</p>
            </div>
          </div>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="Prompt Rush - Generative AI & Prompt Engineering Event Poster"
      title="PROMPT RUSH"
      subtitle="PROMPT • THINK • CREATE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default PromptRush;
