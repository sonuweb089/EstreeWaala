import React, { useState } from "react";
// Removed: import { motion, AnimatePresence } from "framer-motion";
import Estreewala from "../assets/Estreewala.webp";
import { MdShoppingBasket } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

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
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <>
      {/* Replaced motion.header with standard header, kept sticky and backdrop */}
      <header
        // Removed initial, animate, transition
        className="sticky top-0 z-50 bg-offwhite/80 backdrop-blur-sm shadow-md"
      >
        <div className="container flex items-center justify-between py-4 px-4 md:px-10">
          <div className="flex items-center gap-3">
            <img
              src={Estreewala}
              alt="Estreewala Logo"
              className="w-10 h-10 rounded-md"
            />
            <span className="font-extrabold text-[#2E2A53] text-lg">
              Estree-Waala
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-[#2E2A53] font-medium">
            {navLinks.map((link) => {
              // Simplified the Home path check for clarity
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
                  onClick={() => setOpen(false)} // Close menu on link click (just in case it's shown)
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#2E2A53] text-[#F5F0E8] px-5 py-2 rounded-full hover:bg-[#1A1A1A] transition"
            >
              Book Pickup
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              // Tailwind class for smooth rotation on click
              className={`px-3 py-2 border rounded-md transform transition duration-300 ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Now pure CSS transition (using max-h) or simple conditional rendering */}
        {open && (
          <div className="md:hidden border-t bg-offwhite transition-all duration-300 ease-in-out">
            <div className="px-6 py-4 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition pb-1 ${
                    location.pathname.startsWith(link.path)
                      ? "border-b-2 border-[#2E2A53] text-[#2E2A53]"
                      : "hover:text-[#6E5A4C]"
                  }`}
                  onClick={() => setOpen(false)} // Important: close menu when a link is clicked
                >
                  {link.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setShowForm(true);
                  setOpen(false); // Close mobile menu when booking form is opened
                }}
                className="w-full mt-2 bg-[#2E2A53] text-white py-2 rounded hover:bg-[#1A1A1A] transition"
              >
                Book Pickup
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal / Popup Form - Replaced AnimatePresence and motion.div with simple conditional rendering and CSS transitions */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] transition-opacity duration-300" // Increased z-index
          onClick={() => setShowForm(false)} // Close modal when clicking outside
        >
          {/* Modal Content - Use transform/scale for instant visual "pop" without JS animation library */}
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-md relative transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
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
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
