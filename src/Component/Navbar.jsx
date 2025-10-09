import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Estreewala from "../assets/Estreewala.webp";
import { MdShoppingBasket } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const mobileMenuVariants = {
  initial: { opacity: 0, height: 0 },
  animate: {
    opacity: 1,
    height: "auto",
    transition: { type: "tween", duration: 0.3 },
  },
  exit: { opacity: 0, height: 0, transition: { type: "tween", duration: 0.3 } },
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

const Navbar = ({ showForm, setShowForm }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Services", path: "/ourservice" },
    { name: "Eco-Friendly", path: "/ecofriendly" },
    { name: "Testimonials", path: "/testimonial" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-sm shadow-md"
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container flex items-center justify-between py-4 px-4 md:px-10">
          <div className="flex items-center transform md:translate-x-6">
            <img
              src={Estreewala}
              alt="Estreewala Logo"
              className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[#2E2A53] font-medium">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition pb-1 ${
                    isActive
                      ? "border-b-2 border-[#2E2A53] text-[#2E2A53]"
                      : "hover:text-[#6E5A4C]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button className="bg-[#2E2A53] text-[#F5F0E8] px-5 py-2 rounded-full hover:bg-[#1A1A1A] transition">
              <Link to="/contact"> Contact-us</Link>
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className={`px-3 py-2 border rounded-md transform transition duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden border-t bg-offwhite"
              variants={mobileMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="px-6 py-4 space-y-3 flex flex-col">
                {navLinks.map((link) => {
                  const isActive =
                    link.path === "/"
                      ? location.pathname === "/"
                      : location.pathname.startsWith(link.path);

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`transition pb-1 ${
                        isActive
                          ? "border-b-2 border-[#2E2A53] text-[#2E2A53]"
                          : "hover:text-[#6E5A4C]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <button
                  onClick={() => {
                    setShowForm(true);
                    setOpen(false);
                  }}
                  className="w-full mt-2 bg-[#2E2A53] text-white py-2 rounded hover:bg-[#1A1A1A] transition"
                >
                  Book Pickup
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

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
                  alert("Your pickup request has been sent");
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
    </>
  );
};

export default Navbar;
