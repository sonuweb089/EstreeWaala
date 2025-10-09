import React, { useState } from "react";

import Faq from "../assets/faq.webp";
import Faq1 from "../assets/faq1.webp";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Are you insured against damage?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      question: "Can I trust you with my clothes?",
      answer:
        "Yes, our team consists of experienced professionals who handle all garments with the utmost care, ensuring the highest quality standards.",
    },
    {
      question: "How does the whole process work?",
      answer:
        "You place an order online, we pick up your clothes, professionally clean them, and deliver them back to your door.",
    },
    {
      question: "How long does cleaning take?",
      answer:
        "Our standard turnaround time is 24 hours for most services, though specialized items may take slightly longer.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="text-left">
          <p className="inline-block px-4 py-2 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 mb-3 rounded-full shadow-md">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight">
            Popular Questions
          </h2>
          <p className="text-lg text-[#6E5A4C] mb-12">
            You can use our services in any convenient way – the choice is
            yours.
          </p>

          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-[#C9B9A5] pb-4">
                <button
                  className="w-full text-left py-2 flex justify-between items-center group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3
                    className={`text-xl font-semibold text-[#2E2A53] ${
                      openIndex === index
                        ? "text-[#2E2A53] border-b-2 border-[#2E2A53] pb-1"
                        : ""
                    } group-hover:text-[#2E2A53] transition-colors duration-300`}
                  >
                    {item.question}
                  </h3>
                  <span
                    className={`text-2xl text-[#2E2A53] transition-transform duration-300 ${
                      openIndex === index ? "rotate-45 text-[#2E2A53]" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div
                    id={`faq-content-${index}`}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                  >
                    <p className="text-base text-[#6E5A4C] pt-2 pb-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-12">
          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[250px]">
            <img
              src={Faq}
              alt="Stack of towels"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-xl w-full h-[250px]">
            <img
              src={Faq1}
              alt="Woman at dry cleaning counter"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
