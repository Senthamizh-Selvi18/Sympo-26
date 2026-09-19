import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";

const Flipster = () => {
  const sectionCards = [
    {
      icon: "⚡",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            FLIPSTER 2.0 – The Tech Hustle!
          </p>
          <p>
            <strong className="text-white">Flipster 2.0 - The Tech Hustle</strong> is a technical event designed to test participants' technical knowledge, problem-solving ability, logical thinking, and subject awareness.
          </p>
          <p>
            The event consists of two rounds: a <strong>Technical Quiz</strong> followed by an interactive round where participants identify technical terms using a buzzer and detect phishing emails with valid reasons.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p>
            The objective of <strong className="text-white">Flipster 2.0 - The Tech Hustle</strong> is to assess and enhance participants' technical knowledge, logical thinking, problem-solving skills, quick decision-making, analytical ability, and cybersecurity awareness through interactive and challenging activities.
          </p>
          <p>
            The event encourages teamwork, observation, critical thinking, and healthy competition while providing an engaging technical experience.
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
            <h3 className="sympo-subcard-title">📝 Round 1: Technical Quiz</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Objective:</strong> Participants will answer a series of technical questions to test their technical knowledge, logical thinking, and subject awareness.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Winning Criteria:</strong> Participants with the highest scores within the given time limit will be shortlisted for Round 2.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔔 Round 2: Tech Hustle – Trace the Threat</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Objective:</strong> Participants will identify technical terms based on given clues using a buzzer, followed by identifying whether a given email is legitimate or phishing and providing two valid reasons.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Scoring Criteria:</strong> Each challenge carries <strong>5 marks</strong> (2 marks for identifying the technical term, 1 mark for email classification, and 2 marks for providing two valid reasons).</span>
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
            { label: "Team Size", text: "Maximum of 2 members per team. Solo participation is not allowed." },
            { label: "Round 1 Qualification", text: "Only shortlisted participants from Round 1 will be eligible for Round 2." },
            { label: "Buzzer Rule", text: "The team that presses the buzzer first will get the first opportunity to answer." },
            { label: "Phishing Detection", text: "Participants must clearly identify the given email as legitimate or phishing and provide two valid reasons." },
            { label: "Scoring", text: "Marks will be awarded based on the correctness of the technical term, email classification, and supporting reasons." },
            { label: "Fair Play", text: "Any form of cheating, external assistance, or unfair practice will lead to disqualification." },
            { label: "Conduct", text: "Participants must maintain discipline and show respectful behavior towards coordinators and other participants." },
            { label: "Electronic Devices", text: "Participants use a mobile phone or laptop for Round 1 to attend the Technical Quiz. Unauthorized use of devices or external assistance is not permitted." },
            { label: "Tie-Breaker", text: "In case of a tie, an additional question may be conducted to determine the winner." },
            { label: "Disqualification", text: "Any participant violating the event rules may be disqualified at the discretion of the organizers." },
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
      heading: "Contact Information",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Staff In-charge:</div>
            <ul className="sympo-tech-list">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. Lakshmi Roopa B – AP / CS & BS</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (CS & BS):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Michael Jerin A (IV CS & BS):{" "}
                  <a href="tel:+918489353924" className="text-accent hover:underline">
                    8489353924
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Benolin David (IV CS & BS):{" "}
                  <a href="tel:+917538873110" className="text-accent hover:underline">
                    7538873110
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Vijaya Kumar V – III CS & BS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Neha Shree A – II CS & BS</span>
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
      posterAlt="FLIPSTER 2.0 - The Tech Hustle Event Poster"
      title="FLIPSTER 2.0"
      subtitle="THE TECH HUSTLE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Team of 2"
      prize="Win Exciting Prizes"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Flipster;
