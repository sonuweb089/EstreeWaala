import React from "react";

import Ab from "../assets/about.webp";
import Ab1 from "../assets/about1j.webp";

const AboutUsSection = ({ setShowForm }) => {
  return (
    <div className="px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-row justify-center items-end gap-3 w-full">
          <div className="w-1/2 relative overflow-hidden rounded-2xl shadow-xl mt-8 sm:mt-12 bg-white">
            <img
              src={Ab}
              alt="Laundry worker working on a suit"
              // ADD counter-scale-fix here
              className="w-full h-full object-cover aspect-[2/3] rounded-2xl counter-scale-fix"
              loading="lazy"
            />
          </div>

          <div className="w-1/2 relative overflow-hidden rounded-2xl shadow-xl mb-8 sm:mb-12 bg-white">
            <img
              src={Ab1}
              alt="Woman sorting clothes by washing machine"
              // ADD counter-scale-fix here
              className="w-full h-full object-cover aspect-[2/3] rounded-2xl counter-scale-fix"
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
            At <span className="text-black font-bold">Estreewala</span>, we
            believe laundry shouldn’t steal your time or peace of mind. Our goal
            is simple - to offer modern, reliable, and affordable laundry and
            dry-cleaning services that fit seamlessly into your daily routine.
          </p>

          <p className="text-base sm:text-lg text-[#6E5A4C] mb-10">
            Every fabric is handled with precision by trained professionals
            using eco-friendly detergents, advanced machines, and
            fabric-specific cycles. Whether it’s your daily wear, office
            formals, or delicate designer outfits, we ensure premium care,
            spotless results, and doorstep convenience every single time.
          </p>
          <p className="text-base sm:text-lg text-[#6E5A4C] mb-10">
            Because for us, clean clothes aren’t just about hygiene - they’re
            about confidence and comfort that lasts.
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
