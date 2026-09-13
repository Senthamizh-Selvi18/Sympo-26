import { motion } from "framer-motion";
import { questions } from "../utils/faq";
import "./styles/faq.css";
import "../text.css";

const Faq = () => {
  return (
    <div className="max-w-6xl mx-auto px-5 py-10 text-white">
      <div className="grid md:grid-cols-[1fr_auto_1.3fr] gap-8 md:gap-10 items-start">
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:sticky md:top-28"
        >
          <span className="faq-eyebrow">Quick Answers</span>
          <h1 className="faq-title">FAQs</h1>
          <p className="faq-desc">
            Find answers to your{" "}
            <span className="faq-desc-accent">most common questions</span>{" "}
            about Technovanza 2026-&apos;27.
          </p>

          <div className="faq-stat-row">
            
          </div>
        </motion.div>

        {/* Center decorative connector */}
        <div className="faq-connector" aria-hidden="true">
          <span className="faq-connector-line" />
          <span className="faq-connector-pulse" />
          <span className="faq-connector-node" />
        </div>

        {/* Right column — accordion */}
        <div className="flex flex-col gap-4">
          {questions.map((question, i) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
            >
              <details className="faq-item group">
                <summary className="faq-summary">
                  <span className="faq-accent-bar" aria-hidden="true" />
                  <span className="faq-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-question">{question.question}</span>
                  <span className="faq-icon" aria-hidden="true">
                    <span className="faq-icon-bar faq-icon-bar-h" />
                    <span className="faq-icon-bar faq-icon-bar-v" />
                  </span>
                </summary>
                <p className="faq-answer">
                  {question.answer}{" "}
                  {question.clgLink && (
                    <a href={question.clgLink} className="faq-link">
                      Click here!
                    </a>
                  )}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;