import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import CluminatiBanner from "../../../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";

const Cluminati = () => {
  const sectionCards = [
    {
      icon: "🔍",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            “Nothing Is Random. Everything Connects.” 🕵️‍♂️
          </p>
          <p>
            <strong className="text-white">CLUMINATI</strong> is an exciting mystery-solving event where participants step into the role of investigators.
          </p>
          <p>
            Through newspaper articles, crime-scene setups, hidden clues, and connected case files, teams must observe carefully, connect the details, identify the hidden links, and solve the mystery.
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
          <ul className="sympo-tech-list space-y-2">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>To develop observation and analytical skills.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>To encourage logical thinking and problem-solving.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>To improve teamwork and communication.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>To test participants’ ability to identify hidden connections and clues.</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>To provide an interactive and engaging mystery-solving experience.</span>
            </li>
          </ul>
        </div>
      ),
      key: "objective",
    },
    {
      icon: "⚡",
      heading: "Event Rounds & Structure",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📰 ROUND 1 – CONNECT THE CASES</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Each team will receive <strong>two separate newspaper articles</strong> about two different incidents.
            </p>
            <p className="text-sm md:text-base text-accent mt-2 font-semibold">Participants must:</p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-1 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Read both articles carefully.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Identify the common clues, similarities, and matching details.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Compare the two cases and find how they are connected.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Submit the similarities/common clues they discovered.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">👥 ROUND 2 – THE SUSPECT LIST</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              After identifying the connection, teams will receive additional clues and a curated list of suspects.
            </p>
            <p className="text-sm md:text-base text-accent mt-2 font-semibold">Participants must:</p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-1 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Analyse the given clues.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Compare the clues with the suspects.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Identify the <strong>two most likely suspects</strong>.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Submit their two suspect choices to the organisers.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🩸 ROUND 3 – CRIME SCENE INVESTIGATION</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              Teams will enter the staged crime-scene setup and investigate it firsthand.
            </p>
            <p className="text-sm md:text-base text-accent mt-2 font-semibold">Participants must:</p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-1 space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Observe the entire crime scene.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Examine the objects, positions, evidence markers, and forensic details.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Connect physical evidence with the articles, clues, and suspects from previous rounds.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Finally, <strong>identify who the killer is</strong> and provide the reasoning/evidence behind their conclusion.</span>
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
            { label: "Team Size", text: "Maximum of 2 members per team. Solo participation is allowed." },
            { label: "Conduct", text: "Participants must behave respectfully towards other participants, judges, and organizers." },
            { label: "Time Limit", text: "Participants must complete each round within the given time." },
            { label: "No Outside Assistance", text: "Participants must solve the case using only the materials provided." },
            { label: "No Sharing", text: "Sharing clues, answers, or solutions with other teams is strictly prohibited." },
            { label: "No Tampering", text: "Participants must not touch, move, or alter any crime-scene props or evidence." },
            { label: "Independent Investigation", text: "Each team must make its own observations and conclusions." },
            { label: "Final Answer", text: "Teams must submit their final answer within the given time." },
            { label: "Judges' Decision", text: "The decision of the judges will be final and binding." },
            { label: "Disqualification", text: "Cheating, misconduct, or rule violations may result in disqualification." },
            { label: "Tie-Breaker", text: "In case of a tie, the team with the higher final-round score will be preferred." },
            { label: "Organizers' Decision", text: "Organizers reserve the right to modify the event rules or format if necessary." },
            { label: "Participation", text: "Participation in CLUMINATI means agreeing to follow all event rules and regulations." },
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
            <div className="font-semibold text-accent mb-2">Staff Incharge:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Mr. K. Veeramuthu:{" "}
                  <a href="tel:+916380262252" className="text-accent hover:underline">
                    63802 62252
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Mr. Y. Jayakumar:{" "}
                  <a href="tel:+919003844880" className="text-accent hover:underline">
                    90038 44880
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators (IT):</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  P. Gugana sri (II IT):{" "}
                  <a href="tel:+919043893166" className="text-accent hover:underline">
                    90438 93166
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  P. Sowmika (III IT):{" "}
                  <a href="tel:+918248125261" className="text-accent hover:underline">
                    82481 25261
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  A. Kishore (III IT):{" "}
                  <a href="tel:+919677056900" className="text-accent hover:underline">
                    96770 56900
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contact",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={CluminatiBanner}
      posterAlt="CLUMINATI - Mystery Solving Investigation Event Poster"
      title="CLUMINATI"
      subtitle="MYSTERY-SOLVING INVESTIGATION & CRIME SCENE ANALYSIS"
      track="TRACK I"
      category="Non-Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members (Solo Allowed)"
      prize="Exciting Cash Prize"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Cluminati;
