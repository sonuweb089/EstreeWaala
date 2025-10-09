import React from "react";

import Ab from "../assets/about.webp";
import Ab1 from "../assets/about1j.webp";

const AboutUsSection = ({ setShowForm }) => {
  return (
    <div className="px-4 md:px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-row justify-center items-end gap-3 w-full">
          <div className="w-1/2 relative overflow-hidden rounded-2xl shadow-xl mt-8 sm:mt-12 bg-white">
            <img
              src={Ab}
              alt="Laundry worker working on a suit"
              className="w-full h-full object-cover aspect-[2/3] rounded-2xl"
              loading="lazy"
            />
          </div>

          <div className="w-1/2 relative overflow-hidden rounded-2xl shadow-xl mb-8 sm:mb-12 bg-white">
            <img
              src={Ab1}
              alt="Woman sorting clothes by washing machine"
              className="w-full h-full object-cover aspect-[2/3] rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="inline-block px-4 py-2 bg-[#F5F0E8] mb-3 text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight">
            Finest Dry Cleaning and Laundry Services
          </h2>

          <p className="text-base sm:text-lg text-[#6E5A4C] mb-4">
            The company's primary aim is to provide modern laundry and dry
            cleaning services tailored to customers' needs.
          </p>

          <p className="text-base sm:text-lg text-[#6E5A4C] mb-10">
            Providing a flexible and cost-effective service while maintaining
            the highest level of quality is our goal.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="bg-[#2E2A53] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Inquiry Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
