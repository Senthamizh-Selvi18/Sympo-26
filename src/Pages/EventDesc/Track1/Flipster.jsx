import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";

const Flipster = () => {
  const sectionCards = [
    {
      icon: "🧠",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-cyan-300">
            "Flip the Quiz, Twist Your Mind!" 🎉
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            <strong className="text-white">FLIPSTER: The Ultimate Quiz Twist Challenge</strong> is an engaging and fast-paced event designed to test your <span className="highlight px-2 py-0.5 rounded">knowledge</span>, <span className="highlight px-2 py-0.5 rounded">intuition</span>, and <span className="highlight px-2 py-0.5 rounded">strategic thinking</span>. Dive into a world of logos, taglines, domains, and rapid-fire rounds where <span className="text-primary font-semibold">wit, teamwork, and speed</span> will decide the leaderboard.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Encourage quick thinking and teamwork through a fun quiz format",
            "Test participants' ability to identify logos, taglines, and domains",
            "Promote accuracy, speed, and strategic answering under pressure",
            "Provide an engaging and competitive quiz experience"
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
            <h3 className="sympo-subcard-title">🎨 Round 1: Taglines to Techlines – Your Knowledge, Your Power</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Identify taglines and technical terms from logos and pictures</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Speed and accuracy are the key factors</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">⚡ Round 2: Decode the Clues, Defend Your Domain</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Theme: Technical Rapid Fire Round</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants must answer quickly and strategically</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔄 Tie-Breaker (Optional)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Answer with the opposite or incorrect meaning under time pressure</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Only the fastest team wins!</span>
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
            "Each team consists of 2 participants working together",
            "Mobiles, internet, and lifelines are prohibited. Only your brain does the heavy lifting",
            "Judges' decisions are final and binding",
            "Points reward accuracy; tie-breakers reward speed",
            "Conduct and fairness are equally important as winning"
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
            <div className="sympo-subcard-desc">Accuracy in identifying logos and taglines</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥈</span> Round 2</div>
            <div className="sympo-subcard-desc">Speed and correctness in rapid-fire answers</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🥉</span> Tie-Breaker</div>
            <div className="sympo-subcard-desc">Fastest correct response with twist logic</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "🎪",
      heading: "About FLIPSTER",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">FLIPSTER</strong> is an exciting quiz competition where you identify taglines and logos, answer tech questions, and make quick choices. Each round brings participants closer to victory while testing their <span className="text-primary font-semibold">knowledge, wit, and teamwork</span>.
        </p>
      ),
      key: "about"
    },
    {
      icon: "📞",
      heading: "For More Information",
      content: (
        <div className="sympo-subcard">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Ms. Archana A P (IV CS & BS):</strong> <a href="tel:+918778108490" className="text-accent hover:underline">+91 87781 08490</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Mr. Hari Haran A (IV CS & BS):</strong> <a href="tel:+918939209005" className="text-accent hover:underline">+91 89392 09005</a></span>
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
      posterAlt="FLIPSTER Quiz Twist Challenge"
      title="FLIPSTER"
      subtitle="QUIZ TWIST CHALLENGE"
      track="TRACK I"
      category="Technical"
      date="October 10, 2025"
      team="2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default Flipster;
