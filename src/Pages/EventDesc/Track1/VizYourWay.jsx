import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/VIZYOURWAY.png";

const VizYourWay = () => {
  const sectionCards = [
    {
      icon: "🧠",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed">
            <strong className="text-white">Viz Your Way</strong> is an engaging two-round competition that tests participants' knowledge and creativity in data analysis and visualization.
          </p>
          <div className="sympo-subcard-grid mt-2">
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>🏃‍♂️</span> Round 1: Quiz Quest</div>
              <div className="sympo-subcard-desc">A rapid-fire quiz session to earn points. Top 15 teams advance.</div>
            </div>
            <div className="sympo-subcard">
              <div className="sympo-subcard-title"><span>📊</span> Round 2: Data Visualization</div>
              <div className="sympo-subcard-desc">Analyze a dataset and create insightful, high-impact graphics.</div>
            </div>
          </div>
        </div>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          The main objective of this competition is to foster participants' data-driven creativity and enhance their analytical skills. Our goal is to encourage the extraction of useful insights from data and their transformation into effective visual presentations.
        </p>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏃‍♂️ Round 1: Quiz Quest</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants will be presented with a series of questions.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A strict time limit will be enforced for answering.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Points are awarded for correct answers.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The top 15 teams will qualify for Round 2.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📊 Round 2: Data Visualization</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A dataset will be provided at the start. Create visuals using tools like Python, Excel, Tableau, Power BI, etc.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>All visualizations must be presented on a single page with a concise description or summary.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Visuals must be clear, understandable, and informative.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A total of 20 minutes will be allotted for this round.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Each team should comprise 2 members.",
            "Gadget usage is strictly prohibited during rounds.",
            "Each round is strictly time-bound."
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
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard">
          <p className="mb-3 text-slate-200">For more information about the competition or for any inquiries, please contact the event coordinators.</p>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>LISHIKA SHARON:</strong> <a href="tel:+919176126745" className="text-accent hover:underline">9176126745</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>MADHESH RS:</strong> <a href="tel:+918667719356" className="text-accent hover:underline">8667719356</a></span>
            </li>
          </ul>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="Viz Your Way Data Visualization Event"
      title="VIZ YOUR WAY"
      subtitle="DATA VISUALIZATION CHALLENGE"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="2 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default VizYourWay;
