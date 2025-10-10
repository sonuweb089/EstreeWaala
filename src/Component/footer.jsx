import React from "react";
import Estreewala from "../assets/Estreewala.webp";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 font-sans border border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex ml-15 items-center mb-8">
              <img
                src={Estreewala}
                alt="Estreewala Logo"
                className="w-14 h-14 md:w-17 md:h-17 text-center object-contain drop-shadow-md transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex space-x-4 text-xl mb-4">
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

          <div>
            <h3 className="text-lg font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  About
                </a>
              </li>
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
                  Eco-Friendly
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

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
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Gmail
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-200"
                >
                  Address
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>

            <p className="text-gray-400 text-sm flex items-center">
              <FaPhoneAlt className="mr-2 text-white" />
              <a
                href="tel:+916789087656"
                className="hover:text-white transition duration-200"
              >
                +91-91188 11192
              </a>
            </p>

            <p className="text-gray-400 text-sm flex items-center mt-2">
              <FaEnvelope className="mr-2 text-base text-white" />
              <a
                href="mailto:info@estreewala.com"
                className="hover:text-white transition duration-200"
              >
                info@estreewala.com
              </a>
            </p>

            <p className="mt-4 text-gray-400 text-sm">
              <span className="">
                <FaMapMarkerAlt className="mr-2 font-semibold text-white flex items-center" />
                Estreewala HQ, A-4, Sector - 3, Noida, UP 201301
              </span>
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

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
