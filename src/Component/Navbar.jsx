import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Estreewala from "../assets/Estreewala.webp";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const leftLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Eco-Friendly", id: "eco" },
  ];

  const rightLinks = [
    { name: "Testimonials", id: "testimonials" },
    { name: "FAQ", id: "faq" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact Us", id: "contact" },
  ];

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: show ? 0 : -100, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 "
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10 text-[#2E2A53]">
        {/* Mobile: Logo left */}
        <RouterLink to="/" className="flex-shrink-0 md:hidden">
          <img src={Estreewala} alt="Logo" className="w-14 h-14" />
        </RouterLink>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-center w-full font-medium">
          {/* Left Links */}
          <div className="flex items-center justify-evenly gap-6 flex-1">
            {leftLinks.map((link) =>
              location.pathname === "/contact" && link.name !== "Home" ? (
                <span
                  key={link.id}
                  className="text-gray-400 cursor-not-allowed"
                >
                  {link.name}
                </span>
              ) : link.name === "Home" && location.pathname === "/contact" ? (
                <RouterLink
                  key={link.id}
                  to="/"
                  className="cursor-pointer transition-colors duration-300 hover:text-[#6E5A4C]"
                >
                  {link.name}
                </RouterLink>
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

          {/* Center Logo (Desktop) */}
          <RouterLink to="/" className="mx-6 flex-shrink-0 hidden md:flex">
            <img src={Estreewala} alt="Logo" className="w-16 h-16" />
          </RouterLink>

          {/* Right Links */}
          <div className="flex items-center justify-evenly gap-6 flex-1">
            {rightLinks.map((link) =>
              link.name === "Contact Us" ? (
                <RouterLink
                  key={link.id}
                  to="/contact"
                  className="cursor-pointer transition-colors duration-300 hover:text-[#6E5A4C]"
                >
                  {link.name}
                </RouterLink>
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
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl p-2 text-[#2E2A53]"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="md:hidden absolute w-full z-50 bg-white shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col space-y-4 text-[#2E2A53]">
              {[...leftLinks, ...rightLinks].map((link) =>
                link.name === "Contact Us" ? (
                  <RouterLink
                    key={link.id}
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="py-2 border-b border-gray-200 text-lg hover:text-[#6E5A4C] transition-colors duration-300"
                  >
                    {link.name}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    key={link.id}
                    to={link.id}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setOpen(false)}
                    className="cursor-pointer py-2 border-b border-gray-200 text-lg hover:text-[#6E5A4C] transition-colors duration-300"
                  >
                    {link.name}
                  </ScrollLink>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
