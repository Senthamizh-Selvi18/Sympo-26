import React from "react";
import { FaChartBar, FaBrain, FaPalette, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Vintaviz.jpg";

const Vintaviz = () => {
  const sectionCards = [
    {
      icon: <FaChartBar size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-amber-300">
            "A Carnival of Ideas, Innovation & Inspiration" 🎪
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Presented by the Department of <strong className="text-white">Artificial Intelligence & Data Science (AI & DS)</strong>, <strong className="text-white">VINTAVIZ</strong> transforms raw numbers and complex multidimensional information into breathtaking visual narratives. Driven by the four foundational mantras — <span className="highlight px-2 py-0.5 rounded">OBSERVE</span>, <span className="highlight px-2 py-0.5 rounded">ANALYZE</span>, <span className="highlight px-2 py-0.5 rounded">VISUALIZE</span>, and <span className="highlight px-2 py-0.5 rounded">OUTSMART THE DATA</span> — participants will unveil hidden trends and present data-backed solutions with unmatched clarity and artistic finesse.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaBrain size={24} />,
      heading: "Event Pillars & Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "OBSERVE: Detect subtle patterns, data anomalies, and correlations",
            "ANALYZE: Apply statistical rigor and exploratory data analysis (EDA)",
            "VISUALIZE: Create aesthetic, intuitive, and interactive data dashboards",
            "OUTSMART THE DATA: Translate raw insights into strategic real-world decisions"
          ].map((pillar, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong className="text-amber-300">{pillar.split(":")[0]}:</strong> {pillar.slice(pillar.indexOf(":") + 1)}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: <FaPalette size={24} />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎡 Round 1: Carnival Data Hunt (Observe & Analyze)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Fast-paced exploratory challenge testing statistical intuition, correlation identification, and outlier detection</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams answer analytical questions based on real-world mystery datasets</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📊 Round 2: The Grand Viz Arena (Visualize & Outsmart)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Design and build a dynamic dashboard or visual infographic using modern BI/Visualization libraries (PowerBI, Tableau, Python Matplotlib/Seaborn/Plotly, D3.js)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Present data-driven insights and strategic solutions before the evaluation panel</span>
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
            "Participation is open in teams of 1 to 2 members",
            "Participants should bring their own laptops with necessary software pre-installed",
            "Plagiarism or using pre-existing dashboard templates is strictly prohibited",
            "Visualizations must be generated strictly from the provided competition datasets",
            "Jury's decision regarding scores and rankings is final"
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
            <div className="sympo-subcard-title"><span>📈</span> Analytical Rigor</div>
            <div className="sympo-subcard-desc">Accuracy of statistical findings and depth of exploratory analysis</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎨</span> UI / UX & Design</div>
            <div className="sympo-subcard-desc">Color harmony, layout clarity, visual hierarchy, and dashboard UX</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>💡</span> Storytelling</div>
            <div className="sympo-subcard-desc">Ability to communicate insights and actionable takeaways persuasively</div>
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
            <div className="mb-2 font-semibold text-accent">Department of AI & DS:</div>
            <ul className="sympo-tech-list space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Student Coordinator:</strong> Ms. R. Divya – IV AI & DS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Faculty Coordinator:</strong> Ms. S. Sangeetha – AP / AI & DS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>HOD - AI & DS:</strong> Dr. M.S. Jeyalakshmi</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="VINTAVIZ - Data Visualization & Analytics Carnival Poster"
      title="VINTAVIZ"
      subtitle="A CARNIVAL OF IDEAS, INNOVATION & INSPIRATION"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default Vintaviz;
