import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import NexusImg from "../../../assets/symposium/Sympo'25/Track2/Nexus.jpeg";

const Nexus = () => {
  const sectionCards = [
    {
      icon: "📖",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">NEXUS</strong> is a premier paper presentation platform where students and researchers present their ideas, research findings, and innovative concepts in front of an expert panel. It enhances knowledge sharing, improves technical communication, and encourages critical thinking in circuit, electronics, and biomedical disciplines.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Objective",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "To provide a clear and concise understanding of the chosen topic.",
            "To share innovative ideas, research outcomes, or problem-solving approaches.",
            "To develop presentation and communication skills.",
            "To encourage interaction, discussion, and knowledge exchange among peers.",
            "To inspire future research and practical implementation in the relevant field."
          ].map((obj, i) => (
            <li key={i} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      ),
      key: "objective"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>👥</span> Team Size</div>
            <div className="sympo-subcard-desc">Maximum 2-3 members per team</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⏰</span> Time Allotment</div>
            <div className="sympo-subcard-desc">Total 10 minutes for each team (presentation + Q&A)</div>
          </div>
        </div>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base text-slate-200 border-collapse border border-cyan-500/20 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-cyan-950/40 border-b border-cyan-500/30 text-cyan-300 uppercase font-semibold">
                <th className="px-4 py-2.5">Criteria</th>
                <th className="px-4 py-2.5">Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-500/10">
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Technical Content</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Uniqueness / Innovativeness</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Presentation Content / Skill</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Question and Answer</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">10</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="sympo-subcard space-y-4">
          <div>
            <div className="font-bold text-accent mb-2 uppercase tracking-wide text-xs">Staff Coordinators:</div>
            <div className="text-sm md:text-base text-slate-200 leading-relaxed">
              Ms. S. Sivajothi Kavitha (AP/EEE) • Ms. S. Purnima (AP/BME) • Ms. S. Rudhra (AP/EEE) • Ms. D. Priscilla Sharlet Asha (AP/BME) • Dr. G. Merlin Sheeba (Prof./ECE) • Ms. S. Bhavanisankari (Asso. Prof/ECE)
            </div>
          </div>
          <div>
            <div className="font-bold text-accent mb-2 uppercase tracking-wide text-xs">Student Coordinators:</div>
            <ul className="sympo-tech-list text-sm md:text-base">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>HARINI S (IV EEE) - <a href="tel:+918148837923" className="text-accent hover:underline">8148837923</a></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>VISHWA DILIP M R (IV BME) - <a href="tel:+918778022625" className="text-accent hover:underline">8778022625</a></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>DIVYA R (IV ECE) - <a href="tel:+919360017650" className="text-accent hover:underline">9360017650</a></span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "contact"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={NexusImg}
      posterAlt="Nexus Circuit Paper Presentation Event"
      title="NEXUS"
      subtitle="CIRCUIT PAPER PRESENTATION"
      track="TRACK II"
      category="Technical"
      date="October 10, 2025"
      team="Max 3 Members"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Nexus;
