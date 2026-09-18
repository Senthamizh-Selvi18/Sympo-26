import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/WhoLockedYou.jpg";

const WhoLockedYou = () => {
  const sectionCards = [
    {
      icon: "🕵️",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            SYSTEM LOCKED. ACCESS DENIED. WHO IS BEHIND THE BREACH? 🔍
          </p>
          <p>
            <strong className="text-white">Who Locked You?</strong> is a detective-based event where participants compete in teams of two to solve a series of challenging tasks involving observation, logical reasoning, technical thinking, and investigation.
          </p>
          <p>
            Each stage presents a unique challenge that requires participants to analyse information, identify clues, solve problems, and make the right decisions within the given time.
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
            The event is designed to challenge participants' observation skills, logical reasoning, analytical thinking, problem-solving ability, technical awareness, teamwork, and decision-making skills.
          </p>
          <p>
            Participants must carefully analyse the information provided, identify relevant clues, overcome challenges, and make effective decisions under time constraints. The event encourages critical thinking, attention to detail, teamwork, and quick decision-making in a fun and competitive detective environment.
          </p>
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
            <h3 className="sympo-subcard-title">🧩 3-Round Detective Gauntlet</h3>
            <p className="text-sm md:text-base text-slate-200 mt-2">
              The event consists of <strong>3 progressive rounds</strong>, with each round designed to test different skills and abilities:
            </p>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants must successfully complete each round to qualify for the next stage.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Elimination</strong> will take place after each round, and only the qualifying teams will proceed further.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The difficulty and nature of the challenges vary between rounds, requiring participants to adapt their investigative approach and work effectively as a team.</span>
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
            { label: "Team Size", text: "Each team must consist of 1 or 2 members." },
            { label: "Three Rounds", text: "The game consists of 3 rounds, with elimination after each round." },
            { label: "Conduct", text: "Participants must follow all instructions given by the organizers during each round." },
            { label: "Time Limit", text: "Each round has a fixed time limit. All answers and submissions must be completed before the time expires." },
            { label: "Outside Assistance", text: "Internet searching, AI tools, and outside assistance are not allowed unless explicitly permitted by the organizers." },
            { label: "Mobile Phones", text: "Mobile phones and other personal devices may be collected or required to be kept away during the event." },
            { label: "Team Work", text: "Teams must work only on their own assigned challenge and must not share answers, clues, or solutions with other teams." },
            { label: "Interference", text: "Participants must not interfere with another team's challenge, computer, clues, or materials." },
            { label: "Disqualification", text: "Any form of cheating, answer sharing, unauthorized assistance, tampering, or interference may result in disqualification." },
            { label: "Tie-Breaker", text: "In case of a tie, faster valid completion/submission time will be considered as the tie-breaker, subject to the scoring rules of the respective round." },
            { label: "Discipline", text: "Participants must maintain discipline, fair play, and proper conduct throughout the event." },
            { label: "Final Decision", text: "The organizers' and judges' decisions will be final regarding scoring, qualification, elimination, and disputes." },
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
            <div className="font-semibold text-accent mb-2">Staff Incharge:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Mrs. K. Pushpavalli:{" "}
                  <a href="tel:+919176693337" className="text-accent hover:underline">
                    91766 93337
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Mr. K. Arun Prasad:{" "}
                  <a href="tel:+919894284665" className="text-accent hover:underline">
                    +91 98942 84665
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
                  Deepak Rithik S:{" "}
                  <a href="tel:+919345744763" className="text-accent hover:underline">
                    93457 44763
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ryan Stanislaus G:{" "}
                  <a href="tel:+919840922934" className="text-accent hover:underline">
                    98409 22934
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Arun P:{" "}
                  <a href="tel:+918870614917" className="text-accent hover:underline">
                    88706 14917
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
      posterSrc={EventImage}
      posterAlt="WHO LOCKED YOU? - Detective Investigation Technical Event Poster"
      title="WHO LOCKED YOU?"
      subtitle="DETECTIVE INVESTIGATION & TECHNICAL REASONING"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      prize="Enter to Win"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default WhoLockedYou;
