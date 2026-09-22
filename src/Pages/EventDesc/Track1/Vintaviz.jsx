import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Vintaviz.jpg";

const Vintaviz = () => {
  const sectionCards = [
    {
      icon: "📊",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            Observe, Analyze, Visualize, and Amaze!
          </p>
          <p>
            <strong className="text-white">VintaViz</strong> is an exciting data visualization challenge that tests participants’ observation, analytical thinking, creativity, and storytelling skills. Teams will first take on a 60-second visualization memory challenge, followed by a 15-minute data visualization task where they transform a dataset into meaningful visual insights.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200">
          <p>
            To enhance participants’ data observation, analytical thinking, visualization, creativity, and storytelling skills by transforming raw datasets into impactful and meaningful visual insights.
          </p>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧠 Round 1: Viz Memory Challenge</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A data visualization dashboard will be displayed for <strong>60 seconds</strong>, after which teams will answer questions based on their observation and understanding.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The round will be conducted completely online and teams will be shortlisted for Round 2 based on their Round 1 scores.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📈 Round 2: Data Visualization Challenge</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Each team will receive a dataset and a task, with <strong>15 minutes</strong> to complete the entire challenge.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams may use <strong>Power BI, Tableau, Python, Excel</strong>, or other suitable tools to create meaningful visualizations.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams must present the key insights identified from their analysis within the given time.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            {
              label: "Team Size",
              text: "Maximum of 2 members per team. No member can belong to more than one team.",
            },
            {
              label: "Technical Setup",
              text: "Participants must ensure a stable internet connection and follow the event rules and time limits. Any violation may result in disqualification.",
            },
            {
              label: "Integrity",
              text: "Screenshots, recordings, photographs, notes, or external assistance is strictly prohibited.",
            },
            {
              label: "Evaluation",
              text: "Evaluation will be based on Accuracy, Creativity, Insights, and Presentation.",
            },
            {
              label: "Judges' Decision",
              text: "The judges' decision will be final and binding.",
            },
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>{rule.label}:</strong> {rule.text}
              </span>
            </li>
          ))}
        </ul>
      ),
      key: "rules",
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Staff Incharge:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. S. Sangeetha:{" "}
                  <a href="tel:+917598193259" className="text-accent hover:underline">
                    7598193259
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. M. Rajeswari:{" "}
                  <a href="tel:+919445153660" className="text-accent hover:underline">
                    9445153660
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  R. Divya:{" "}
                  <a href="tel:+917845052055" className="text-accent hover:underline">
                    7845052055
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  S. Zayan Fathima:{" "}
                  <a href="tel:+917092243329" className="text-accent hover:underline">
                    7092243329
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contacts",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="VINTAVIZ - Visual Intelligence Event Poster"
      title="VINTAVIZ"
      subtitle="VISUAL INTELLIGENCE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Max 2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Vintaviz;
