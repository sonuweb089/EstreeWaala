import React from "react";

import Eco from "../assets/eco1.webp";
import Eco1 from "../assets/eco2.webp";

const EcoFriendlySection = () => {
  return (
    <div className="pt-6 md:py-6 px-4 md:px-8 relative overflow-hidden ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left order-1 lg:order-1">
          <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
            Eco Friendly
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2E2A53] mb-6 leading-tight">
            We Care About the Environment - Sustainable Laundry You Can Trust
          </h2>
          <p className="text-lg text-[#6E5A4C] mb-6">
            Clean clothes shouldn’t come at the planet’s cost. That’s why
            Estreewala uses eco-friendly detergents, biodegradable solvents, and
            energy-efficient washing systems to minimize water and electricity
            waste.
          </p>
          <p className="text-lg text-[#6E5A4C] mb-10">
            Every cycle is designed to protect your garments and the environment
            - combining spotless results with sustainable practices. When you
            choose Estreewala, you choose a cleaner wardrobe and a cleaner
            world.
          </p>
          <button
            className="bg-[#2E2A53] text-white text-lg font-semibold py-3 px-8 rounded-lg shadow-md
                             transition-colors duration-300 ease-in-out
                             hover:bg-[#2E2A80] hover:shadow-lg"
          >
            Learn More
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-0 order-2 lg:order-2">
          <div className="w-1/2 sm:w-1/2 lg:w-1/2 relative overflow-hidden rounded-3xl shadow-xl bg-white mb-[-1.5rem] z-10 ml-auto">
            <img
              src={Eco1}
              alt="Hands holding a small globe"
              className="w-full h-full object-cover aspect-[6/5] rounded-3xl"
              loading="lazy"
            />
          </div>

          <div className="w-1/2 sm:w-1/2 lg:w-1/2 relative overflow-hidden rounded-3xl shadow-xl bg-white z-0 mr-auto">
            <img
              src={Eco}
              alt="Laundry basket and a house plant"
              className="w-full h-full object-cover aspect-[6/5] rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoFriendlySection;
