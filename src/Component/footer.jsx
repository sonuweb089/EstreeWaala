import React from "react";
import Estreewala from "../assets/Estreewala.webp";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  // --- New Import for Location Icon ---
  FaMapMarkerAlt,
  FaEnvelope, // New Import for Email Icon
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 font-sans border border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex justify-start items-center mb-8">
          <img
            src={Estreewala}
            alt="Estreewala Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
          />
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Social Media & Description */}
          <div>
            <div className="flex space-x-4 text-xl mb-4">
              {/* ... (Social media links remain the same) ... */}
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-500 transition duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-sky-400 transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-red-500 transition duration-200"
              >
                <FaYoutube />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Your expert ironing and pressing service. Affordable, high-quality
              care with convenience and efficiency.
            </p>
          </div>

          {/* Column 2: Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Pick-up & Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Other Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Media Kit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Partner With Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact (MODIFIED) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            {/* Phone Number 1 (Removed Duplicate) */}
            <p className="text-gray-400 text-sm flex items-center">
              <FaPhoneAlt className="mr-2 text-white" />
              <a
                href="tel:+916789087656"
                className="hover:text-white transition duration-200"
              >
                +91-67890 87656
              </a>
            </p>

            {/* Added Email */}
            <p className="text-gray-400 text-sm flex items-center mt-2">
              <FaEnvelope className="mr-2 text-base text-white" />
              <a
                href="mailto:info@estreewala.com"
                className="hover:text-white transition duration-200"
              >
                info@estreewala.com
              </a>
            </p>

            {/* Location (Previously Address) */}
            <p className="mt-4 text-gray-400 text-sm">
              <span className="font-semibold text-white flex items-center">
                <FaMapMarkerAlt className="mr-2" /> Location:
              </span>
              Estreewala HQ, A-4, Sector - 3, Noida, UP 201301
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-3 md:mb-0">
            <p>
              Created by{" "}
              <a
                href="https://www.webseeder.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition duration-200 font-semibold"
              >
                Webseeder Technology
              </a>
            </p>
          </div>
          <p>© 2025 Estreewala. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
