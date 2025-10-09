import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a1c32] text-white pt-12 pb-6 font-sans border border-gray-700">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex space-x-4 text-xl mb-4">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-red-500">
                <FaYoutube />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Your expert ironing and pressing service. Affordable, high-quality
              care with convenience and efficiency.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Ironing & Pressing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dry Cleaning (Soon)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Express Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Corporate Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Home Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">📞 6789087656</p>
            <p className="mt-3 text-gray-400 text-sm">
              <span className="font-semibold text-white">Office:</span>
              <br />
              Estreewala HQ, A-4, Sector - 3, Noida, UP 201301
            </p>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex space-x-4 mb-3 md:mb-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
          </div>
          <p>© 2025 Estreewala Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
