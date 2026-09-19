import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";

const Cinephilia = () => {
  const sectionCards = [
    {
      icon: "🎬",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            CINEPHILIA – A Celebration of Cinema! 🍿
          </p>
          <p>
            <strong className="text-white">CINEPHILIA</strong> is an exciting movie-based event for all cinema lovers. It is designed to test your movie knowledge, memory, observation, and quick thinking in a fun and entertaining way.
          </p>
          <p>
            Participants will get to experience interesting movie challenges, identify songs and dialogues, and discover movies through visual clues. Come together, enjoy the challenges, show your cinema knowledge, and prove that you are a true cinephile!
          </p>
        </div>
      ),
      key: "description",
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <div className="text-base md:text-lg leading-relaxed text-slate-200">
          <p>
            The objective of <strong className="text-white">CINEPHILIA</strong> is to celebrate the art of cinema by testing participants’ movie knowledge, observation skills, memory, and quick thinking through fun and interactive rounds. From decoding BGMs and dialogues to identifying movies through visual clues, the event aims to engage participants in an entertaining yet competitive atmosphere that fosters teamwork, creativity, and passion for films.
          </p>
        </div>
      ),
      key: "objective",
    },
    {
      icon: "🏆",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎵 Round 1: BGM MASTER</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Format:</strong> Participants need to guess the name of the song that the BGM belongs to.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Time Limit:</strong> BGM will be played for 10 seconds. Participants need to guess the correct answer within the allotted time.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Shortlisting:</strong> Top teams will be shortlisted based on their scores. Teams with lowest scores will be eliminated.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔕 Round 2: MUTE-A-LOGUE</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Objective:</strong> Participants are asked to find the exact dialogue that is muted on the clip.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Time Limit:</strong> Participants must find the dialogue within 30 seconds.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Shortlisting:</strong> Top teams will qualify for the final round.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎭 Round 3: CONCEPT PUDI PRIZE ADI</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Task:</strong> Participants need to find the movie name by observing the shown images within the allotted time.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Winner:</strong> Top team will be selected as the Winner.</span>
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
            { label: "Team Size", text: "Each team can consist of 2 members." },
            { label: "Scoring & Decision", text: "Winners will be selected according to their accumulated points." },
            { label: "Device Policy", text: "Mobile phones are strictly prohibited." },
            { label: "AI Tools Ban", text: "Use of ChatGPT & other AI tools will lead to immediate disqualification." },
            { label: "Organizers' Discretion", text: "The event organizers reserve the right to modify or cancel the event at any time." },
            { label: "Participation Agreement", text: "By participating in the event, teams agree to abide by the rules and guidelines specified above." },
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
            <div className="font-semibold text-accent mb-2">Staff Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. R. Rachel Evelyn:{" "}
                  <a href="tel:+919789913813" className="text-accent hover:underline">
                    9789913813
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  Ms. M. Faritha Begum:{" "}
                  <a href="tel:+918610618992" className="text-accent hover:underline">
                    8610618992
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="font-semibold text-accent mb-2">Student Coordinators:</div>
            <ul className="sympo-tech-list space-y-1">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  S. Akash:{" "}
                  <a href="tel:+919962995560" className="text-accent hover:underline">
                    9962995560
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  P. Maheswaran:{" "}
                  <a href="tel:+919790829593" className="text-accent hover:underline">
                    9790829593
                  </a>
                </span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>
                  R. Iswarya:{" "}
                  <a href="tel:+917092746045" className="text-accent hover:underline">
                    7092746045
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
      posterSrc={EventImage}
      posterAlt="Cinephilia Cinema Celebration Event Poster"
      title="CINEPHILIA"
      subtitle="A CELEBRATION OF CINEMA"
      track="TRACK I"
      category="Non-Technical"
      date="October 10, 2025"
      team="Team of 2"
      prize="Exciting Cash Prize"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Cinephilia;