import React from "react";

import { motion } from "framer-motion";

const heroVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay: 0.3,
    },
  },
};

const Hero = ({ setShowForm }) => {
  return (
    <section className="text-center py-20 relative overflow-hidden">
      <motion.div
        className="w-full"
        variants={heroVariants}
        initial="initial"
        animate="animate"
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-snug text-[#2E2A53] tracking-tight">
            Dry Cleaning & Laundry Experts
          </h2>

          <p className="mt-6 text-lg text-[#1A1A1A]">
            We deliver your items cleaned within 24 hours and at the time
            required.
          </p>

          <motion.div
            className="mt-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.5,
            }}
          >
            <motion.button
              onClick={() => setShowForm(true)}
              className="bg-[#2E2A53] text-[#F5F0E8] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#2E2A78] transition-all duration-300 transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Order now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
