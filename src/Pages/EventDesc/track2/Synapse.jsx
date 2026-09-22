import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import SynapseImg from "../../../assets/symposium/Sympo'25/Track2/Synapse.jpg";

const Synapse = () => {
  const sectionCards = [
    {
      icon: "📖",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed text-slate-200">
          <strong className="text-white">SYNAPSE 2K26</strong> is a premier technical paper presentation platform where aspiring engineers, researchers, and innovators present their ideas, research findings, and emerging concepts before an expert panel. It inspires students to transform ideas into impactful solutions for tomorrow's challenges across circuit, electrical, electronics, and biomedical disciplines aligned with Sustainable Development Goals.
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
            "To provide a clear and concise platform to present research, ideas, and innovations.",
            "To share problem-solving approaches aligned with sustainable technologies.",
            "To develop professional presentation, technical defense, and communication skills.",
            "To encourage interaction, discussion, and knowledge exchange among peers.",
            "To inspire future research, innovation, and practical implementation in engineering."
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
                <td className="px-4 py-2.5 font-medium">Technical Content & Novelty</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Uniqueness / Innovativeness / SDG Impact</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Presentation Content & Clarity</td>
                <td className="px-4 py-2.5 text-cyan-400 font-bold">30</td>
              </tr>
              <tr className="hover:bg-cyan-950/20">
                <td className="px-4 py-2.5 font-medium">Question and Answer Defense</td>
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
            <div className="font-bold text-accent mb-2 uppercase tracking-wide text-xs">Faculty Coordinators:</div>
            <div className="text-sm md:text-base text-slate-200 leading-relaxed">
              Dr. G. Merlin Sheeba (ECE) • Ms. S. Purnima (BME) • Ms. S. Rudhra (EEE)
            </div>
          </div>
          <div>
            <div className="font-bold text-accent mb-2 uppercase tracking-wide text-xs">Student Coordinators:</div>
            <ul className="sympo-tech-list text-sm md:text-base">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. Divyadharshini D (IV Year - ECE)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Mr. Harisharan D (IV Year - BME)</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Ms. Manju K (IV Year - EEE)</span>
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
      posterSrc={SynapseImg}
      posterAlt="SYNAPSE 2K26 - Paper Presentation Event Poster"
      title="SYNAPSE 2K26"
      subtitle="THINK • PRESENT • INSPIRE | PAPER PRESENTATION"
      track="TRACK II"
      category="Technical"
      date="October 10, 2026"
      team="Max 3 Members"
      registrationUrl="https://forms.gle/Fj7K7v8yB2G7Adp57"
      sectionCards={sectionCards}
    />
  );
};

export default Synapse;
