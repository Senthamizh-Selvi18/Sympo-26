import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";

const GigzUp = () => {
  const sectionCards = [
    {
      icon: "🎉",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            GIGZUP 2.0 – Virtual Vibe Fest (Online Event) 🌐
          </p>
          <p>
            An exciting online entertainment quiz conducted through an <strong className="text-white">ONLINE Platform</strong>. The event features one elimination round and one final round. Participants compete in real time, with top scorers advancing through to the next round. The participant with the highest final score will be declared the winner.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200 space-y-2">
          <p>
            The event is designed to provide an engaging online platform that challenges participants.
          </p>
          <p>
            Through two interactive rounds, the event aims to encourage healthy competition and active participation, while identifying and rewarding participants who demonstrate the best overall performance in memory, pattern connection, and rapid recognition.
          </p>
        </div>
      ),
      key: "objectives",
    },
    {
      icon: "⚡",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧩 Round 1 – ConnectX</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants will be shown a series of pictures and must identify the common connection between them to find the correct answer.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Top-scoring participants will qualify for Round 2.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📜 Round 2 – Verse Decode</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>A decoding challenge where participants are presented with lines written in English wording and must identify the original title.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Test your memory, recognition skills, and quick thinking within the given time limit.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The participant with the highest final score will be declared the Winner.</span>
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
            { label: "Online Platform", text: "The event will be conducted completely through an online platform." },
            { label: "Access PIN", text: "Participants must join using the PIN provided by the organizers." },
            { label: "Name Verification", text: "Participants must use their registered name while joining the platform." },
            { label: "Single Device", text: "Each participant must use one device to login to the account." },
            { label: "Connectivity", text: "Participants must ensure a stable internet connection and a fully charged device." },
            { label: "Time Limit", text: "Each question will have a fixed time limit." },
            { label: "Submission", text: "Once an answer is submitted, it cannot be changed." },
            { label: "Technical Responsibility", text: "Participants are responsible for their own internet connectivity and device-related issues." },
            { label: "Organizers' Decision", text: "The organizers' decision will be final and binding." },
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
            <div className="font-semibold text-accent mb-2">Faculty Coordinator:</div>
            <ul className="sympo-tech-list">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. B. Malathy – AP, CS & BS</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (CS & BS):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Vaishnavi K R (IV CS & BS):{" "}
                  <a href="tel:+919888464811" className="text-accent hover:underline">
                    9888464811
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Nivedha M (IV CS & BS):{" "}
                  <a href="tel:+919344551024" className="text-accent hover:underline">
                    9344551024
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Vidhya Varshini D – III CS & BS</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Sri Santhosh M – II CS & BS</span>
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
      posterAlt="GIGZUP 2.0 - Virtual Vibe Fest Event Poster"
      title="GIGZUP 2.0"
      subtitle="VIRTUAL VIBE FEST (ONLINE EVENT)"
      track="TRACK I"
      category="Non-Technical"
      date="October 07, 2026"
      team="Individual / Solo"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default GigzUp;
