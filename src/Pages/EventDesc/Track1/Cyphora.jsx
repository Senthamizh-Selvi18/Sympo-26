import React from "react";
import { FaBrain, FaDna, FaSyncAlt, FaGavel, FaTrophy, FaUserTie } from "react-icons/fa";
import EventDetailLayout from "../../../Components/EventDetailLayout";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cyphora.jpg";

const Cyphora = () => {
  const sectionCards = [
    {
      icon: <FaBrain size={24} />,
      heading: "Event Description",
      content: (
        <div className="space-y-3 text-slate-200">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-emerald-400">
            "Regenerate • Evolve • Reverse" 🌿
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Presented by the Department of <strong className="text-white">Artificial Intelligence & Machine Learning (AI & ML)</strong>, <strong className="text-white">CYPHORA</strong> is a futuristic machine learning hack-battle. Focused on the three pillars of modern intelligence — <span className="highlight px-2 py-0.5 rounded">REGENERATE</span>, <span className="highlight px-2 py-0.5 rounded">EVOLVE</span>, and <span className="highlight px-2 py-0.5 rounded">REVERSE</span> — this competition challenges participants to reconstruct latent data representations, optimize predictive architectures, and perform explainable AI / model inversion.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: <FaDna size={24} />,
      heading: "Core Pillars & Themes",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🌱 REGENERATE</div>
            <div className="sympo-subcard-desc">Data imputation, autoencoders, generative adversarial networks, and synthetic feature reconstruction</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🧬 EVOLVE</div>
            <div className="sympo-subcard-desc">Hyperparameter optimization, neural architecture search, transfer learning, and model fine-tuning</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title">🔄 REVERSE</div>
            <div className="sympo-subcard-desc">Explainable AI (XAI), SHAP/LIME interpretations, feature attribution, and adversarial reverse-engineering</div>
          </div>
        </div>
      ),
      key: "pillars"
    },
    {
      icon: <FaSyncAlt size={24} />,
      heading: "Event Structure & Rounds",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🧪 Phase 1: Latent Regeneration (Data & Feature Synth)</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Work with noisy, sparse, or incomplete multimodal data to reconstruct target ground-truth representations</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Evaluated on reconstruction loss (MSE/SSIM/BLEU) and feature variance preservation</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🚀 Phase 2: Neural Evolution & Optimization</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Build, train, and hyper-tune an end-to-end model within tight latency and compute constraints</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Real-time benchmark evaluation against unseen validation test datasets</span>
              </li>
            </ul>
          </div>
          <div className="sympo-subcard">
            <h3 className="sympo-subcard-title">🔬 Phase 3: Inverse Engineering & Model Defense</h3>
            <ul className="sympo-tech-list text-sm md:text-base mt-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Deconstruct black-box predictions, detect model vulnerabilities, and explain feature weights</span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span>Defend solutions before the panel of AI researchers and industry experts</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={24} />,
      heading: "Rules & Guidelines",
      content: (
        <ul className="sympo-tech-list text-base md:text-lg">
          {[
            "Teams can have 1 to 2 members",
            "Bring personal laptops configured with Python (PyTorch, TensorFlow, Scikit-learn, etc.)",
            "Pre-trained weights from standard public repositories (HuggingFace, Torchvision) are permitted unless specified",
            "Models must execute deterministically on the evaluation benchmark",
            "Jury's technical evaluation and scoring are final"
          ].map((rule, index) => (
            <li key={index} className="sympo-tech-list-item">
              <span className="sympo-tech-list-bullet">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: <FaTrophy size={24} />,
      heading: "Judging Criteria",
      content: (
        <div className="sympo-subcard-grid">
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>🎯</span> Benchmark Metrics</div>
            <div className="sympo-subcard-desc">Accuracy, F1 score, MSE, and generalization capacity on unseen test data</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>⚡</span> Computational Efficiency</div>
            <div className="sympo-subcard-desc">Parameter size, inference speed, and code cleanliness</div>
          </div>
          <div className="sympo-subcard">
            <div className="sympo-subcard-title"><span>💡</span> Explainability</div>
            <div className="sympo-subcard-desc">Depth of mathematical reasoning and interpretation of results</div>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: <FaUserTie size={24} />,
      heading: "Coordinators & Contact",
      content: (
        <div className="space-y-4">
          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-accent">Student Coordinators (AI & ML):</div>
            <ul className="sympo-tech-list grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Afsal Ahmed Khan A</strong></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Syed Afeezu Rahman</strong></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Sandana S D</strong></span>
              </li>
              <li className="sympo-tech-list-item">
                <span className="sympo-tech-list-bullet">▶</span>
                <span><strong>Akshaya R</strong> – AAIML President</span>
              </li>
            </ul>
          </div>

          <div className="sympo-subcard">
            <div className="mb-2 font-semibold text-emerald-400">Faculty & Department Leadership:</div>
            <div className="text-sm md:text-base text-slate-300 space-y-1">
              <p><strong>Event Coordinators:</strong> Ms. A. Parameshwari, Ms. E. Brindha</p>
              <p><strong>Symposium Coordinator:</strong> Ms. K.S. Janu (AP/AI&ML)</p>
              <p><strong>AAIML Coordinator:</strong> Ms. S. Vinitha (AP/AI&ML)</p>
              <p><strong>HOD - AI&ML:</strong> Dr. D. Parameswari</p>
              <p className="mt-2 text-cyan-300"><strong>Venue:</strong> Machine Learning Laboratory</p>
            </div>
          </div>
        </div>
      ),
      key: "contacts"
    }
  ];

  return (
    <EventDetailLayout
      posterSrc={EventImage}
      posterAlt="CYPHORA - Regenerate, Evolve, Reverse AI & ML Event Poster"
      title="CYPHORA"
      subtitle="REGENERATE • EVOLVE • REVERSE"
      track="TRACK I"
      category="Technical"
      date="Oct 10, 2026"
      team="1 - 2 Members"
      registrationUrl="https://forms.gle/YRbsnJiPvX2qFED79"
      sectionCards={sectionCards}
    />
  );
};

export default Cyphora;
