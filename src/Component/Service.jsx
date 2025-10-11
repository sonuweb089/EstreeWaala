import React from "react";
import { FaRegClock, FaMoneyBillWave, FaLeaf } from "react-icons/fa";
import myimg from "../assets/pic.webp";
import myimg1 from "../assets/pic2.webp";
import hero from "../assets/hero3.jpeg";

const Service = () => {
  return (
    <div className="text-center pt-12 mt-10 relative overflow-hidden">
      {/* Image Gallery */}
      <div className="grid grid-cols-3 gap-2 px-2 max-w-6xl mx-auto">
        <div className="p-1 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
            <img
              src={myimg1}
              alt="Hands holding colorful clothes"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={hero}
              alt="Man smiling with clean laundry"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-1 mb-4 mt-[-2rem]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={myimg}
              alt="Hands holding neatly folded clothes with a flower"
              className="w-full h-full object-cover rounded-lg aspect-[3/4]"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Feature Section */}
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
                  <FaRegClock size={32} className="text-white mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Time Saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  Spend time where it matters - not sorting laundry. With
                  doorstep pickup, and automated order tracking, Estreewala
                  makes sure your clothes are cleaned and back before you even
                  miss them.
                </p>
              </div>

              {/* Feature 2 */}
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                           transition-all duration-300 ease-in-out 
                           hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaMoneyBillWave size={32} className="text-white mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Money Saving</h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  Get professional dry cleaning and laundry at affordable,
                  per-kg and per-piece rates. No hidden fees, no overcharging -
                  just quality service that fits every budget.
                </p>
              </div>

              {/* Feature 3 */}
              <div
                className="flex flex-col items-center text-center p-4 rounded-lg 
                           transition-all duration-300 ease-in-out 
                           hover:bg-[#3A356A] hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="mb-4 text-4xl">
                  <FaLeaf size={32} className="text-white mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">
                  Environmentally Friendly
                </h3>
                <p className="text-[#E9DDC9] text-lg leading-relaxed">
                  Your clothes deserve care - and so does the planet. We use
                  eco-friendly detergents, water-efficient machines, and
                  energy-smart drying cycles to deliver spotless results with
                  minimal environmental impact.
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
