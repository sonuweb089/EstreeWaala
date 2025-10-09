import React from "react";

const QuickServiceHero = ({ setShowForm }) => {
  return (
    <div className="max-h-[7xl] flex items-start justify-center text-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto z-11 pt-16 md:pt-24 mb-10">
        <h1 className="text-6xl md:text-7xl font-extrabold text-[#2E2A53] leading-tight">
          Quick. Fast. <br />
          Reliable.
        </h1>

        <p className="text-xl text-[#6E5A4C] mb-10">
          We deliver your items cleaned within 24 hours and at the time
          required.
        </p>

        <button
          onClick={() => setShowForm(true)}
          className="bg-[#2E2A53] text-white text-xl font-semibold py-3 px-10 rounded-full shadow-lg
                     transition-colors duration-300 ease-in-out
                     hover:bg-[#2E2A78] hover:shadow-xl"
        >
          Order now
        </button>
      </div>
    </div>
  );
};

export default QuickServiceHero;
