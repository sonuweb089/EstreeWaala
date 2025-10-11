import React from "react";

const LaundryCta = () => {
  return (
    <section className="bg-[#2E2A53] h-70 md:h-50 flex items-center">
      <div className="mx-auto max-w-6xl px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="text-white mb-6 md:mb-0 md:max-w-lg">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-wide">
              Fresh Clothes, Happy You!
            </h2>
            <p className="mt-2 text-base md:text-lg text-gray-300">
              Need clean, fresh laundry delivered right to your doorstep?
            </p>
            <p className="mt-1 text-base md:text-lg text-gray-300">
              Schedule your wash today and let LaundryWala handle the rest.
            </p>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center justify-center px-6 py-3 text-sm md:text-base font-medium rounded-lg shadow-md text-[#2E2A53] bg-white hover:bg-gray-100 transition-all duration-300"
          >
            Book Your Service →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaundryCta;
