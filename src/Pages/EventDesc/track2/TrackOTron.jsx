import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import GateBountyBanner from "../../../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";

const TrackOTron = () => {
  const sectionCards = [
    {
      icon: "⚡",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-amber-400 text-lg">
            "Hunt the Logic. Derive the Solution." ⏱️
          </p>
          <p>
            <strong className="text-white">GATE BOUNTY</strong> is a hands-on digital electronics challenge that tests participants’ Boolean logic, circuit design, and hardware implementation skills through two sequential challenges.
          </p>
          <p>
            Participants will first implement logic gates using NAND or NOR gates only, followed by simplifying a given Boolean expression and implementing the final function using any suitable logic gates. Both challenges require truth-table verification and real-time circuit demonstration.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg space-y-2">
          {[
            "Develop participants’ understanding of Boolean logic and digital logic gates.",
            "Test their ability to simplify and analyze Boolean expressions.",
            "Improve practical circuit design and hardware implementation skills.",
            "Encourage logical thinking, teamwork, and problem-solving.",
            "Provide hands-on experience in verifying digital circuits through truth tables and real-time hardware demonstration.",
          ].map((obj, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objectives",
    },
    {
      icon: "🛠",
      heading: "Event Rounds & Structure",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔌 Challenge 1 – NAND/NOR Gate Challenge (15 Marks)</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Participants must implement the given logic gates using <strong>NAND gates only</strong> or <strong>NOR gates only</strong>. They must:
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Construct the required logic circuits.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Prepare and verify the corresponding truth tables.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Demonstrate the working of the implemented circuit using the provided hardware.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧮 Challenge 2 – Boolean Bounty (15 Marks)</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Participants will be provided with a Boolean expression. They must:
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Simplify the given Boolean expression using Boolean algebra.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Construct the truth table for the simplified expression.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Implement the final Boolean function using any suitable logic gates.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Demonstrate the working output using the provided hardware.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard flex justify-between items-center bg-cyan-950/40 border border-cyan-500/30 p-3 rounded-lg">
            <span className="text-white font-semibold">Total Marks: 30 Marks</span>
            <span className="text-accent font-semibold">Total Duration: 40 Minutes</span>
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
            { label: "Team Size", text: "Each team can consist of a maximum of 2 participants." },
            { label: "Total Duration", text: "The total duration for completing both challenges is 40 minutes." },
            { label: "Time Bound", text: "No additional time will be provided after the allotted time." },
            { label: "Evaluation Criteria", text: "The event carries a maximum of 30 marks, based on accuracy, circuit implementation, truth-table verification, and output demonstration." },
            { label: "Hardware & Equipment", text: "Participants must use only the components and equipment provided by the organizers." },
            { label: "Fair Play", text: "No external assistance, copying, or unauthorized resources are permitted." },
            { label: "Completion", text: "Participants must complete both challenges within the given time limit." },
            { label: "Demonstration", text: "The circuit output must be demonstrated to the judges for verification." },
            { label: "Component Safety", text: "Participants are responsible for handling the provided components and equipment carefully." },
            { label: "Judges' Decision", text: "The decision of the judges will be final and binding." },
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
            <div className="font-semibold text-accent mb-2">Student Coordinators (ECE):</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  KAMESH M (IV Year):{" "}
                  <a href="tel:+919003095671" className="text-accent hover:underline">
                    9003095671
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  YOGHASHREE S (III Year):{" "}
                  <a href="tel:+918807651630" className="text-accent hover:underline">
                    8807651630
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Staff Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Dr. G.T. BHARATHY (Asso.Prof - ECE)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Mr. KANNIYAPPAN N (A.P - ECE)</span>
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
      posterSrc={GateBountyBanner}
      posterAlt="GATE BOUNTY Digital Electronics Challenge Event Poster"
      title="GATE BOUNTY"
      subtitle="HUNT THE LOGIC • DERIVE THE SOLUTION"
      track="TRACK II"
      category="Technical"
      date="October 10, 2026"
      team="Max 2 Members"
      prize="Win Exciting Prizes"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default TrackOTron;
