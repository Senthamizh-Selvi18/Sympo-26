import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cinephilia.jpg";

const Cinephilia = () => {
  const sectionCards = [
    {
      icon: "📜",
      heading: "Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          This symposium goes beyond the technical aspects of filmmaking to explore the human side of cinema. We will dive into how films shape our understanding of culture, society, and ourselves through a series of presentations and discussions.
        </p>
      ),
      key: "description"
    },
    {
      icon: "🎯",
      heading: "Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          The main goal of this cinephilia event is to deepen the audience’s connection to film as an art form. It’s about fostering a culture of informed and passionate appreciation that’s more than just simple entertainment.
        </p>
      ),
      key: "objective"
    },
    {
      icon: "📋",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎵 Round 1: BGM Master</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants must guess the song title from a 10-second BGM clip.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The teams with the highest scores will be shortlisted for the next round.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔕 Round 2: Mute-a-logue</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams need to identify a muted dialogue from a film clip within 30 seconds.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The top teams from this round will qualify for the final round.</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎭 Round 3: Concept Pudi Prize Adi</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Participants are required to identify a movie title by observing a series of images.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>The team with the highest score in this round will be selected as the winner.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules and Regulations",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Team Size:</strong> Each team can have two members.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Winner Selection:</strong> Winners are chosen based on the points they earn.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">✦</span>
            <span><strong>Prohibited:</strong> Mobile phones and the use of ChatGPT or other AI tools are strictly forbidden and will lead to disqualification.</span>
          </li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "⚖️",
      heading: "Judging Criteria",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong>Organizers’ Decision:</strong> The event organizers have the right to modify or cancel the event at any time.</span>
          </li>
          <li className="sympo-tech-list-item">
            <span className="sympo-tech-list-bullet">▶</span>
            <span><strong>Participant Agreement:</strong> By participating, teams agree to follow the rules and guidelines provided.</span>
          </li>
        </ul>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="sympo-subcard">
          <div className="mb-3 font-semibold text-accent">Staff Incharge:</div>
          <div className="space-y-1 mb-4 text-slate-200">
            <div>Ms. R. Rachel Evelyn</div>
            <div>Mr. M. Mohamed Neina Hasan</div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Incharge:</div>
          <ul className="sympo-tech-list">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>M. Hari Hara Sudhan: <a href="tel:+919345746676" className="text-accent hover:underline">+91 93457 46676</a></span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>T.S. Antony Sebastin: <a href="tel:+918667654649" className="text-accent hover:underline">+91 86676 54649</a></span>
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
      posterAlt="Cinephilia Film Challenge Event"
      title="CINEPHILIA"
      subtitle="CINEMA TRIVIA & APPRECIATION"
      track="TRACK I"
      category="Non-Technical"
      date="October 10, 2025"
      team="2 Members"
      prize="Exciting Cash Prize"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default Cinephilia;