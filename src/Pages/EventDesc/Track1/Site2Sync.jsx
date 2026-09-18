import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Site2sync.jpg";

const Site2Sync = () => {
  const sectionCards = [
    {
      icon: "🧠",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <span className="font-bold text-white">SITE2SYNC</span> is a technical web development event where participants will <span className="highlight px-2 py-0.5 rounded">debug</span>, <span className="highlight px-2 py-0.5 rounded">design</span>, and <span className="highlight px-2 py-0.5 rounded">build</span> a mini functional website under time-bound conditions. The event is designed to evaluate participants' <span className="text-primary font-semibold">problem-solving skills, creativity, and coding ability</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "To build a mini functional website based on the given theme",
            "Test participants' debugging and web development skills",
            "Encourage creativity, originality, and structured coding practices",
            "Provide a platform to compete, collaborate, and learn"
          ].map((objective, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong className="text-primary">{objective.split(' ')[0]}</strong> {objective.slice(objective.indexOf(' ') + 1)}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🐛 Round 1: Debugging the Web</h3>
            <div className="space-y-2 text-sm md:text-base text-slate-200 mt-2">
              <p><strong>Setup:</strong> Each team will be given HTML, CSS, and JavaScript files containing hidden flaws with a reference output</p>
              <p><strong>Task:</strong> Identify and fix three hidden issues to match the reference design</p>
              <p><strong>Time Limit:</strong> 30 minutes (including evaluation)</p>
              <p><strong>Evaluation:</strong> Accuracy in matching the reference design</p>
              <p><strong>Outcome:</strong> Top-performing teams will qualify for Round 2</p>
            </div>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🏗️ Round 2: Buildathon – Vibe Coding</h3>
            <div className="space-y-2 text-sm md:text-base text-slate-200 mt-2">
              <p><strong>Task:</strong> Build a mini functional website (2–3 pages) based on a theme revealed at the start</p>
              <p><strong>Allowed Tools:</strong> AI platforms such as ChatGPT, Lovable AI, Replit AI, or similar tools</p>
              <p><strong>Time Limit:</strong> 1.5 to 2 hours (strict). Late submissions will not be accepted</p>
              <div>
                <strong>Evaluation Criteria:</strong>
                <ul className="list-disc ml-6 mt-1 space-y-1">
                  <li>Creativity & Originality</li>
                  <li>Functionality & User Experience</li>
                  <li>Responsiveness (Mobile/Desktop Compatibility)</li>
                  <li>Code Quality & Structure</li>
                </ul>
              </div>
            </div>
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
            "A team can have maximum 2 members (single participation allowed)",
            "Personal devices such as laptops, USB drives, or any storage devices are strictly prohibited",
            "Systems will be provided",
            "Internet access will be disabled unless explicitly allowed by the event coordinators",
            "All code must be written during the event. Pre-written code is not allowed",
            "Any form of cheating, code sharing, or use of unauthorized tools will result in immediate disqualification",
            "Event is time-bound in all rounds",
            "Judges' decision will be final and binding"
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
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥇</span> Round 1</div>
            <div className="sympo-subcard-desc">Accuracy in debugging and matching the reference design</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥈</span> Round 2</div>
            <div className="sympo-subcard-desc">Creativity, functionality, responsiveness, and code quality</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Student Coordinators",
      content: (
        <div className="sympo-subcard">
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Mr. Manikandan Askar K:</strong> <a href="tel:+919150452063" className="text-accent hover:underline">9150452063</a></span>
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
      posterAlt="Site2Sync Web Development Event"
      title="SITE2SYNC"
      subtitle="WEB DEVELOPMENT SPRINT"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="2 - 3 Members"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Site2Sync;
