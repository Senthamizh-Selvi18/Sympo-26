import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";

const GigzUp = () => {
  const sectionCards = [
    {
      icon: "🧠",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          Welcome to <strong className="text-white">GigzUp</strong> – an AI-themed meme competition blending humor with learning! Participants are challenged to creatively simplify complex tech concepts through <span className="highlight px-2 py-0.5 rounded">original</span>, <span className="highlight px-2 py-0.5 rounded">relatable memes</span> that make technology more <span className="text-primary font-semibold">fun and accessible</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "📌",
      heading: "Competition Details",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Theme</div>
            <div className="sympo-subcard-desc">Use humor to explain or highlight Artificial Intelligence</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📱</span> Format</div>
            <div className="sympo-subcard-desc">Submit memes in JPEG or PNG format</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📏</span> Size</div>
            <div className="sympo-subcard-desc">File size must not exceed 5 MB</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>💡</span> Content</div>
            <div className="sympo-subcard-desc">Simplify tech ideas in a humorous, relatable way</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>✨</span> Creativity</div>
            <div className="sympo-subcard-desc">Originality is crucial — copied memes will be disqualified</div>
          </div>
        </div>
      ),
      key: "details"
    },
    {
      icon: "⚡",
      heading: "Rules of the Competition",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Memes must strictly adhere to the theme",
            "Team participation only (team of 2)",
            "Both members must register",
            "Content must be respectful — offensive or inappropriate memes will not be considered"
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
      icon: "📥",
      heading: "Submission Guidelines",
      content: (
        <div className="sympo-subcard">
          <ul className="sympo-tech-list text-base md:text-lg">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">📝</span>
              <span>Each team should submit only one meme.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">📧</span>
              <span>Submit to: <a href="mailto:symposium2025@jerusalemengg.ac.in" className="text-accent hover:underline">symposium2025@jerusalemengg.ac.in</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">⏰</span>
              <span>Deadline: On or before 8th October 2025.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">🏷️</span>
              <span>File naming format: <em>YourName_YourCollegeName_UniqueID1_UniqueID2</em></span>
            </li>
          </ul>
        </div>
      ),
      key: "submission"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>✨</span> Originality</div>
            <div className="sympo-subcard-desc">Unique perspective and witty tech premise</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>😂</span> Humor</div>
            <div className="sympo-subcard-desc">Relatability and punchline execution</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Relevance</div>
            <div className="sympo-subcard-desc">Accurate representation of AI and tech topics</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "⚠️",
      heading: "Disqualification & Rights",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">🚫</span>
            <span>Memes violating rules (plagiarism, offensive content) may be disqualified anytime.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">📄</span>
            <span>By submitting, participants grant organizers rights to display and use the memes for event publicity.</span>
          </li>
        </ul>
      ),
      key: "disqualification"
    },
    {
      icon: "📞",
      heading: "Contact",
      content: (
        <div className="sympo-subcard">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Akela M (IV CS & BS): <a href="tel:+919003240824" className="text-accent hover:underline">+91 90032 40824</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>Anboli M (IV CS & BS): <a href="tel:+917010574628" className="text-accent hover:underline">+91 70105 74628</a></span>
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
      posterAlt="GigzUp Meme Competition Event"
      title="GIGZUP"
      subtitle="AI & TECH MEME SHOWDOWN"
      track="TRACK I"
      category="Non-Technical"
      date="October 10, 2025"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default GigzUp;
