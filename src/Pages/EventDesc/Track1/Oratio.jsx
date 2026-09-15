import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import OratioBanner from "../../../assets/symposium/Sympo'25/Track1/Oratio.png";

const Oratio = () => {
  const oratioDomains = [
    "Internet of Things",
    "Sustainable machine learning",
    "Artificial Intelligence",
    "Wireless Technology",
    "Neural networks & Deep learning",
    "Cloud Computing",
    "Cyber Security",
    "AR / VR",
    "Next generation networks",
    "Big data analysis"
  ];

  const sectionCards = [
    {
      icon: "📖",
      heading: "About ORATIO",
      content: (
        <div className="space-y-3">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold text-primary">TECHNOVANZA 2026–27</span><br />
            <em className="text-cyan-300">An Inter Collegiate National Level Technical Symposium</em>
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-200">
            ORATIO is where <span className="font-bold text-white">ideas meet expression</span>. It's a platform to showcase <span className="highlight px-2 py-0.5 rounded">research</span>, <span className="highlight px-2 py-0.5 rounded">creativity</span>, and <span className="highlight px-2 py-0.5 rounded">innovation</span> with impact. Beyond facts, it's about clarity, confidence, and originality. Each presentation aims to <span className="text-primary font-semibold">inspire, engage, and leave a lasting impression</span>.
          </p>
        </div>
      ),
      key: "about"
    },
    {
      icon: "🗂️",
      heading: "Domains / Topics",
      key: "domains"
    },
    {
      icon: "📝",
      heading: "Abstract Format",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📄</span> Title</div>
            <div className="sympo-subcard-desc">Times New Roman, Size 16, Bold</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>👥</span> Author</div>
            <div className="sympo-subcard-desc">Max 2 members, Times New Roman, Size 10</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🏫</span> Affiliation</div>
            <div className="sympo-subcard-desc">Times New Roman, Size 8</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📧</span> Email</div>
            <div className="sympo-subcard-desc">Times New Roman, Size 8</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📝</span> Abstract</div>
            <div className="sympo-subcard-desc">Times New Roman, Size 10, Bold</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🔢</span> Word Limit</div>
            <div className="sympo-subcard-desc">Max 200 words (must clearly state problem statement)</div>
          </div>
        </div>
      ),
      key: "format"
    },
    {
      icon: "🎯",
      heading: "Presentation Format",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📊</span> Format</div>
            <div className="sympo-subcard-desc">Presentation should be only as PPT slides</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>📑</span> Slides</div>
            <div className="sympo-subcard-desc">Maximum number of slides: 6</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⏰</span> Duration</div>
            <div className="sympo-subcard-desc">Presentation Duration: 8–10 minutes</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>❓</span> Q&A</div>
            <div className="sympo-subcard-desc">Q&A Session: 2–3 minutes</div>
          </div>
        </div>
      ),
      key: "presentation"
    },
    {
      icon: "📤",
      heading: "Submission & Participation",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Only one team member should submit the abstract",
            "The topic must fall within the specified domain",
            "ID card is mandatory for all participants",
            "Proper dress code must be followed",
            "A team can have a maximum of two members",
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "submission"
    },
    {
      icon: "📞",
      heading: "Contacts",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Keerthana P, AI & ML - +91 63839 07227",
            "Deepak Raj, AI & DS - +91 81221 08670",
            "Aarya R, CS - +91 73055 46300",
            "Vaishnavi Kumari, CS & BS - +91 93612 71711",
            "Nivetha K, CSE - +91 81486 91319",
            "Harini S, IT - +91 86676 78553"
          ].map((contact, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>{contact}</span>
            </li>
          ))}
        </ul>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={OratioBanner}
      posterAlt="ORATIO Paper Presentation"
      title="ORATIO"
      subtitle="TECHNICAL PAPER PRESENTATION"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="Max 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      domains={oratioDomains}
      sectionCards={sectionCards}
    />
  );
};

export default Oratio;
