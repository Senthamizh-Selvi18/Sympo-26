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
