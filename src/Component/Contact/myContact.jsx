import React from "react";
// Removed: import { motion } from "framer-motion";
// Removed: container, item, and cardItem variant definitions

import { FaInstagram, FaSkype, FaFacebookF, FaEnvelope } from "react-icons/fa6";

const LaundryWalaSocials = () => {
  const socialPlatforms = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://instagram.com/laudrywala",
    },
    {
      name: "Skype",
      icon: FaSkype,
      link: "skype:laudrywala?chat",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      link: "https://facebook.com/laundywala",
    },
    {
      name: "clena@info.com",
      icon: FaEnvelope,
      link: "mailto:clena@info.com",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Replaced motion.div with standard div and removed animation props */}
        <div className="mb-16">
          {/* Replaced motion.p with standard p and removed animation props */}
          <p className="inline-block px-4 py-2 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 mb-3 rounded-full shadow-md">
            Follow Us
          </p>
          {/* Replaced motion.h2 with standard h2 and removed animation props */}
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#2E2A53] max-w-4xl mx-auto">
            To Order Dry Cleaning Write to Us in Social Networks
          </h2>
        </div>

        {/* Social Cards Grid - Replaced motion.div with standard div and removed animation props */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {socialPlatforms.map((platform, index) => (
            /* Replaced motion.a with standard a and removed animation props */
            <a
              key={index}
              href={platform.link}
              // Tailwind classes handle the smooth hover/scale transition
              className="group bg-[#FFFFFF] p-8 rounded-xl shadow-lg flex flex-col items-center justify-center transition duration-300 transform hover:scale-[1.03] hover:shadow-2xl hover:border-b-4 border-[#6E5A4C]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* Icon */}
              <platform.icon className="text-5xl mb-4 transition duration-300 text-[#6E5A4C] group-hover:text-[#2E2A53]" />

              {/* Name/Link */}
              <p className="text-lg font-semibold text-[#2E2A53] group-hover:text-[#6E5A4C] transition duration-300">
                {platform.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaSocials;
