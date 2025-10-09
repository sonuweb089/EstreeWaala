import React from "react";
// Removed: import { motion } from "framer-motion";
import { FaRegClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";

// NOTE ON IMAGE OPTIMIZATION:
// The imported assets (myimg, myimg1, hero) should be checked externally.
// Ensure their *physical file size* (KB/MB) and *dimensions* are minimized.
// For example, if the images are only displayed at 300px wide, they shouldn't be 2000px wide.
import myimg from "../assets/pic.webp";
import myimg1 from "../assets/pic2.webp";
import hero from "../assets/hero3.jpeg";

// Removed: featureSectionVariants definition

const Service = () => {
  return (
    <div className="text-center py-12 relative overflow-hidden">
      {/* Image Gallery - Static */}
      <div className="grid grid-cols-3 gap-2 px-2 max-w-6xl mx-auto">
        <div className="p-1 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={myimg1}
              alt="Hands holding colorful clothes"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy" // Good for performance
            />
          </div>
        </div>

        <div className="p-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hero}
              alt="Man smiling with clean laundry"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy" // Good for performance
            />
          </div>
        </div>

        <div className="p-1 mb-4 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={myimg}
              alt="Hands holding neatly folded clothes with a flower"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy" // Good for performance
            />
          </div>
        </div>
      </div>

      {/* Feature Section - Now Static */}
      <div className="py-16 px-0">
        <div className="w-full">
          <div className="bg-[#2E2A53] text-white rounded-none p-8 md:p-12 shadow-xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Feature 1 */}
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaRegClock size={32} className="text-[#6E5A4C]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Time saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  {/* Corrected FaMoneyBillWave color for better contrast/theme */}
                  <FaMoneyBillWave size={32} className="text-[#6E5A4C]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Money saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                                 transition-all duration-300 ease-in-out 
                                 hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaLeaf size={32} className="text-[#6E5A4C]" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Environmentally friendly
                </h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  You can use our services in any convenient way – the choice is
                  yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
