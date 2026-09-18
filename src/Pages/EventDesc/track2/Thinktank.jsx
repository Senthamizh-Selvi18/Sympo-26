import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import ThinktankBanner from "../../../assets/symposium/Sympo'25/Track2/THINK TANK.png";

const Thinktank = () => {
  const sectionCards = [
    {
      icon: "💼",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            STEP INTO THE WORLD OF BUSINESS, BRANDS, AND BRILLIANT MINDS! 📊
          </p>
          <p>
            <strong className="text-white">Thinkonomics</strong> is an exciting business quiz designed to test participants’ business knowledge, observation, memory, logical thinking, and quick decision-making through a series of fun and challenging rounds.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <ul className="sympo-tech-list space-y-2">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Enhance Business Awareness:</strong> Develop knowledge of businesses, brands, entrepreneurs, and corporate personalities.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Improve Analytical Thinking:</strong> Encourage participants to analyze clues and identify connections.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Develop Observation Skills:</strong> Improve attention to visual, verbal, and audio-based clues.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Strengthen Memory & Recall:</strong> Enhance the ability to remember and recognize information quickly.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Encourage Quick Thinking:</strong> Build decision-making and response skills under time constraints.
              </span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>
                <strong>Promote Teamwork & Healthy Competition:</strong> Encourage collaboration, communication, and sportsmanship.
              </span>
            </li>
          </ul>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "⚡",
      heading: "Event Rounds & Structure",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📝 Round 1 – Prelims</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              A written question-and-answer round consisting of <strong>30 multiple-choice questions (MCQs)</strong> to be completed within <strong>15 minutes</strong>.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Coverage:</strong> Business, brands, entrepreneurship, management, famous personalities, and general business awareness.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> Business knowledge, analytical thinking, concentration, time management, decision-making, and accuracy.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔍 Round 2 – Crack the Code</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              A multi-challenge round where participants identify and connect clues related to popular brands and advertisements.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Logo Finding:</strong> Recognize brand logos and corporate insignias from subtle visual segments.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Match the Tagline:</strong> Match iconic company slogans and brand taglines with precision.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Sound Strategy:</strong> Identify advertisements using only their music, jingle, or background score within <strong>20 seconds</strong>.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> Observation, brand recognition, auditory skills, memory, concentration, pattern recognition, and quick thinking.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">👑 Round 3 – L-Lookup (Leader Lookup)</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              The grand finale round where participants identify famous leaders, business personalities, entrepreneurs, and CEOs within <strong>10 seconds</strong>.
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Clues:</strong> Images, milestones, notable achievements, and corporate associations.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Skills Tested:</strong> General knowledge, business awareness, memory, observation, recognition, critical thinking, and rapid decision-making.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules of the Event",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            { label: "Team Size", text: "It is a team event consisting of exactly 2 members." },
            { label: "Rounds", text: "3 rounds will be conducted." },
            { label: "Assembly Time", text: "Participants are requested to assemble 30 minutes prior to the commencement of the event." },
            { label: "Fair Play & Discipline", text: "Any fraudulent or misbehaving activity will result in immediate disqualification of the team." },
            { label: "Judges' Decision", text: "The judge’s decision will be final and binding." },
          ].map((rule, i) => (
            <li key={i} className="sympo-tech-list-item">
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
      heading: "Contact Details",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinator:</div>
            <ul className="sympo-tech-list">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Haritha S:{" "}
                  <a href="tel:+917395928140" className="text-accent hover:underline">
                    73959 28140
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
      posterSrc={ThinktankBanner}
      posterAlt="THINKONOMICS Business Quiz Event Poster"
      title="THINKONOMICS"
      subtitle="BUSINESS QUIZ"
      track="TRACK II"
      category="Technical"
      date="Oct 10, 2026"
      team="Team of 2"
      prize="Cash Prize & Certificates"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Thinktank;
