import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Estreewala from "../assets/Estreewala.webp";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Eco-Friendly", id: "eco" },
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <RouterLink to="/">
          <img
            src={Estreewala}
            alt="Logo"
            className="w-14 h-14 md:w-16 md:h-16"
          />
        </RouterLink>

        <div className="hidden md:flex justify-center items-center gap-6 font-medium w-full max-w-lg mx-auto">
          {navLinks.map((link) =>
            location.pathname === "/contact" ? (
              link.name === "Home" ? (
                <RouterLink
                  key={link.id}
                  to="/"
                  className="cursor-pointer transition-colors duration-300 hover:text-[#6E5A4C]"
                >
                  {link.name}
                </RouterLink>
              ) : (
                <span
                  key={link.id}
                  className="text-gray-400 cursor-not-allowed"
                >
                  {link.name}
                </span>
              )
            ) : (
              <ScrollLink
                key={link.id}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-[#6E5A4C] border-b-2 border-[#6E5A4C] pb-1"
                className="cursor-pointer transition-colors duration-300 hover:text-[#6E5A4C]"
              >
                {link.name}
              </ScrollLink>
            )
          )}
        </div>

        <div className="hidden md:block flex-shrink-0">
          <RouterLink
            to="/contact"
            className="px-5 py-2 rounded-full font-medium text-white bg-[#2E2A53] hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Contact Us
          </RouterLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((link) =>
              location.pathname === "/contact" ? (
                link.name === "Home" ? (
                  <RouterLink
                    key={link.id}
                    to="/"
                    onClick={() => setOpen(false)}
                    className="py-2 border-b border-gray-100 text-lg hover:text-[#6E5A4C]"
                  >
                    {link.name}
                  </RouterLink>
                ) : (
                  <span
                    key={link.id}
                    className="text-gray-400 cursor-not-allowed py-2 border-b border-gray-100"
                  >
                    {link.name}
                  </span>
                )
              ) : (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer py-2 border-b border-gray-100 text-lg hover:text-[#6E5A4C] transition-colors duration-300"
                >
                  {link.name}
                </ScrollLink>
              )
            )}

            <RouterLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 py-3 rounded-md text-center font-medium text-white bg-[#2E2A53] hover:bg-[#1A1A1A] transition-colors duration-300"
            >
              Contact Us
            </RouterLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
