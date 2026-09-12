import React from "react";
import { questions } from "../utils/faq";
import "./styles/faq.css";
import "../text.css";

const Faq = () => {
  return (
    <div className="max-w-2xl mx-auto p-5 text-white">
      <h1 className="font-display-royal gold-solid text-4xl font-bold mb-6 text-center">
        FAQs
      </h1>

      {questions.map((question) => (
        <div key={question.id}>
          <details className="glassmorphic-container-faq bg-transparent rounded p-4 mb-4 transition duration-300 ease-in-out">
            <summary className="font-heading-royal cursor-pointer text-lg text-white flex items-center justify-between hover:gold-solid focus:gold-solid transition-all duration-200">
              <span>{question.question}</span>
              <span className="text-xl gold-solid">&#x2699;</span>
            </summary>
            <p className="font-body-royal p-2 text-lg transition-all duration-300 ease-in-out">
              {question.answer}{" "}
              {question.clgLink && (
                <span>
                  <a href={question.clgLink} className="gold-link">
                    Click here!
                  </a>
                </span>
              )}
            </p>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Faq;