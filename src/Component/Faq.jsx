import React, { useState } from "react";

import Faq from "../assets/faq.webp";
import Faq1 from "../assets/faq1.webp";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Are you insured against damage?",
      answer:
        "Yes. Every order is handled under Estreewala’s secure garment-care policy, which covers accidental damage or loss during cleaning or delivery. We inspect every item twice - before washing and before packaging - to ensure full accountability.",
    },
    {
      question: "Can I trust you with my clothes?",
      answer:
        "Absolutely. We’ve built our reputation on quality, hygiene, and consistency. Each fabric is sorted, tagged, and cleaned using the right detergent and temperature. Your clothes are tracked from pickup to delivery, and you can follow updates via SMS or WhatsApp.",
    },
    {
      question: "How does the whole process work?",
      answer: [
        "It’s simple and quick:",
        "Book online or through WhatsApp for free pickup.",
        "Our team collects, tags, and inspects each item.",
        "Clothes are cleaned, pressed, and folded using fabric-specific cycles.",
        "They’re delivered back within 24-48 hours, sealed and ready to wear.",
      ],
    },
    {
      question: "How long does cleaning take?",
      answer:
        "Standard orders are delivered within 24-48 hours, while express same-day service is available in Noida. Turnaround time may vary based on fabric type, service volume, or festival season.",
    },
    {
      question: "Do you clean delicate fabrics and ethnic wear?",
      answer: [
        "Yes. Sarees, lehengas, suits, and silk garments are treated with solvent-controlled dry cleaning and low-heat pressing to preserve texture and shine.",
        "We also offer optional hand-finish ironing for premium fabrics.",
      ],
    },
    {
      question: "Do you offer pickup and delivery across the city?",
      answer: [
        "Yes, we provide free doorstep pickup and delivery across major areas in Delhi NCR.",
        "Our local riders cover residential colonies, apartments, and corporate zones efficiently.",
      ],
    },
    {
      question: "What payment methods do you accept?",
      answer: [
        "You can pay via UPI, debit/credit cards, or cash on delivery - whatever’s easiest for you.",
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="flex flex-col items-center gap-6 pt-12 mt-20">
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
        {/* FAQ Content */}
        <div className="text-left">
          <p className="inline-block px-4 py-2 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 mb-3 rounded-full shadow-md">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight">
            Popular Questions
          </h2>

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
                    {Array.isArray(item.answer) ? (
                      item.answer.map((line, i) => (
                        <p
                          key={i}
                          className="text-base text-[#6E5A4C] pt-2 pb-2"
                        >
                          {line}
                        </p>
                      ))
                    ) : (
                      <p className="text-base text-[#6E5A4C] pt-2 pb-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Images */}
      </div>

      {/* Full-width CTA */}
      <div className=" py-7 md:py-15 mt-5 px-6 md:px-12 text-center rounded-xl shadow-md max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#2E2A53] mb-4">
          Still have questions?
        </h3>
        <p className="text-lg md:text-xl text-[#6E5A4C] mb-6">
          Reach out to our laundry experts - we’ll respond within minutes.
        </p>
        <button className="bg-[#6E5A4C] text-white font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-[#57463e] transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
