import React from "react";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Mindspark.png";

const Mindspark = () => {
  const sectionCards = [
    {
      icon: "💡",
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200 text-base md:text-lg leading-relaxed">
          <p className="font-semibold text-accent text-lg">
            "Ignite Ideas. Inspire Future." ✨
          </p>
          <p>
            <strong className="text-white">MINDSPARK</strong> is the premier national-level Paper Presentation symposium event uniting all computing departments under Track I. It provides a prestigious platform for aspiring engineers and innovators to showcase groundbreaking research, emerging technologies, and original solutions to pressing real-world challenges.
          </p>
          <p>
            Present your papers before an esteemed panel of academicians and industry experts, engage in intellectual discourse, and demonstrate your analytical depth and technical presentation prowess.
          </p>
        </div>
      ),
      key: "desc",
    },
    {
      icon: "🎯",
      heading: "Suggested Domains & Themes",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Artificial Intelligence, Machine Learning & Deep Learning",
            "Data Science, Big Data Analytics & Business Intelligence",
            "Cybersecurity, Cryptography, Blockchain & Ethical Hacking",
            "Cloud Computing, Edge Computing & Distributed Systems",
            "Internet of Things (IoT), Robotics & Embedded Systems",
            "Computer Vision, NLP & Generative AI Applications",
            "Software Engineering, Web3 & Next-Gen Computing Technologies",
          ].map((topic, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span>
                <strong className="text-primary">{topic.split(" ")[0]}</strong>{" "}
                {topic.slice(topic.indexOf(" ") + 1)}
              </span>
            </li>
          ))}
        </ul>
      ),
      key: "domains",
    },
    {
      icon: "⏱️",
      heading: "Presentation Format & Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">📄 Phase 1: Abstract Submission & Shortlisting</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Teams submit their IEEE format paper/abstract for technical review by the scrutiny committee.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Shortlisted teams will be invited for on-campus presentation.</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🎙️ Phase 2: Live PPT Presentation (10 Minutes)</h3>
            <ul className="sympo-tech-list text-sm md:text-base text-slate-200 mt-2 space-y-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>7 Minutes:</strong> Oral Presentation using PowerPoint / Slides.</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>3 Minutes:</strong> Interactive Q&A session with the expert jury panel.</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds",
    },
    {
      icon: "📜",
      heading: "Rules & Guidelines",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            {
              label: "Team Size",
              text: "Strictly 2 members per team (inter-departmental teams allowed).",
            },
            {
              label: "Time Limit",
              text: "Total allocation of 10 minutes (7 mins presentation + 3 mins Q&A). Exceeding the time limit will incur penalties.",
            },
            {
              label: "Format",
              text: "Standard IEEE format paper submission. Bring your presentation on a USB drive and backup in cloud storage.",
            },
            {
              label: "Plagiarism",
              text: "Original work is mandatory; high similarity/plagiarism will lead to immediate disqualification.",
            },
            {
              label: "Jury Decision",
              text: "The judges' decision will be final and binding on all participants.",
            },
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
      icon: "🏆",
      heading: "Evaluation Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>💡</span> Innovation & Originality</div>
            <div className="sympo-subcard-desc">Novelty of idea, relevance, and uniqueness of technical approach</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🔬</span> Technical Depth & Methodology</div>
            <div className="sympo-subcard-desc">Feasibility, experimental validation, and architectural rigor</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🗣️</span> Delivery & Defense</div>
            <div className="sympo-subcard-desc">Clarity of presentation, slide aesthetics, and handling of Q&A</div>
          </div>
        </div>
      ),
      key: "judging",
    },
    {
      icon: "👥",
      heading: "Student Coordinators",
      content: (
        <div className="sympo-subcard">
          <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-200 text-sm md:text-base">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>J. Narmadha, R. Deepak</strong> – AI & DS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Lavanya K., Jeffry Sam Raj C.</strong> – AIML</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Balina Gayathri, Sachin K.</strong> – CS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Joshua J., Dhatshna S.</strong> – CSE</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Janani S., Durga Sree P.</strong> – CS & BS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">▶</span>
              <span><strong>Kavini K., Charulekha C.</strong> – IT</span>
            </li>
          </ul>
        </div>
      ),
      key: "student_coordinators",
    },
    {
      icon: "🎓",
      heading: "Faculty Coordinators",
      content: (
        <div className="sympo-subcard">
          <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-200 text-sm md:text-base">
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>Ms. V. G. Thamaraiselvi</strong> – AP, AI & DS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>Ms. B. S. Berlin Jeba</strong> – AP, AIML</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>Mr. Mohamed Neina Hasan, Mrs. Jerina Begum</strong> – AP, CS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>N. Javed, Mrs. H. Mercy</strong> – AP, CSE</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>Ms. A. Sindhu Devi</strong> – AP, CS & BS</span>
            </li>
            <li className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span><strong>Mrs. Sindhuja</strong> – AP, IT</span>
            </li>
          </ul>
        </div>
      ),
      key: "faculty_coordinators",
    },
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="MINDSPARK - Paper Presentation Event Poster"
      title="MINDSPARK"
      subtitle="PAPER PRESENTATION • IGNITE IDEAS. INSPIRE FUTURE."
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="Team Size - Two"
      registrationUrl="https://forms.gle/EdRu152LpsBAt5t56"
      sectionCards={sectionCards}
    />
  );
};

export default Mindspark;
