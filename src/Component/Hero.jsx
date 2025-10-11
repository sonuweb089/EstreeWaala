import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.75, transition: { duration: 0.2 } },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.75, transition: { duration: 0.2 } },
};

const Hero = ({ showForm, setShowForm }) => {
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
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                aria-label="Close form"
              >
                ✖
              </button>

              <h2 className="flex items-center justify-center gap-2 text-2xl font-bold text-[#2E2A53] mb-4">
                <MdShoppingBasket size={28} color="#C9B9A5" />
                <span>Book Laundry Pickup</span>
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Your pickup request has been sent!");
                  setShowForm(false);
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />
                <textarea
                  name="address"
                  placeholder="Pickup Address"
                  required
                  rows="3"
                  className="w-full border rounded-md px-4 py-2"
                />
                <select
                  name="service"
                  required
                  className="w-full border rounded-md px-4 py-2"
                >
                  <option value="">Select Service</option>
                  <option value="Wash & Fold">Wash & Fold</option>
                  <option value="Dry Cleaning">Dry Cleaning</option>
                  <option value="Ironing">Ironing</option>
                  <option value="Clothing Repair">Clothing Repair</option>
                </select>
                <input
                  type="date"
                  name="date"
                  required
                  className="w-full border rounded-md px-4 py-2"
                />

                <button
                  type="submit"
                  className="w-full bg-[#2E2A53] text-white font-semibold py-2 rounded-md hover:bg-[#1A1A1A] transition"
                >
                  Send Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
