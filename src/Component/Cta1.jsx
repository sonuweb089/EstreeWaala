import React from "react";

const LaundryServiceExperience = () => {
  return (
    // Section Container: Black background, white text, padding
    <section className="bg-black text-white md:50 py-10 px-4 sm:px-6 lg:px-8">
      {/* Content Container: Max width, centered, uses flex for layout */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Text Content */}
        <div className="md:pr-8 mb-6 md:mb-0 text-center md:text-left">
          {/* Title: Large, elegant font style adapted for service booking */}
          <h3 className=" sm:text-5xl font-serif font-normal tracking-wide">
            Fresh Clothes, Happy You - Delivered to Your Doorstep
          </h3>

          {/* Subtext updated for convenience */}
          <p className=" mt-4">
            Need clean, crisp, and perfectly pressed clothes without stepping
            out? Book your laundry pickup and dry-cleaning service with
            Estreewala and let our experts handle the wash, fold, and delivery -
            all within a few hours.
          </p>
        </div>

        {/* Button Container */}
        <div className="flex-shrink-0">
          <a
            href="[#BOOKING_LINK]" // Replace with your actual booking link
            className="
              bg-white text-black 
              py-3 px-6 
              text-base font-semibold 
              uppercase tracking-wider 
              hover:bg-gray-200 
              transition duration-300 
              inline-block
            "
            target="_blank"
          >
            Book Your Service
          </a>
        </div>
      </div>
    </section>
  );
};
export default LaundryServiceExperience;
