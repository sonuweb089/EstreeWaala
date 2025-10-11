import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const InputField = ({
  label,
  placeholder,
  type = "text",
  name,
  isHalfWidth = false,
}) => (
  <div className={isHalfWidth ? "w-full md:w-1/2" : "w-full"}>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 sr-only"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className="mt-1 block w-full border-b border-gray-300 py-3 bg-white focus:ring-[#2E2A53] focus:border-[#2E2A53] transition-colors duration-200"
    />
  </div>
);

const ContactInfoCard = ({ icon, title, value }) => (
  <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
    <div className="text-[#2E2A53] pt-1 text-xl">{icon}</div>
    <div>
      <h3 className="text-sm font-semibold text-gray-900 sr-only">{title}</h3>
      <p className="text-base text-gray-700">{value}</p>
    </div>
  </div>
);

const ContactSection = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="inline-block px-4 py-2 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 mb-3 rounded-full shadow-md">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Need help with your laundry service, pickup schedule, or special
            fabric care? We’re here to make your laundry experience quick,
            clean, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-xl font-semibold text-[#2E2A53] mb-8 border-b pb-2 tracking-wide">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <InputField
                  label="First Name"
                  name="firstName"
                  placeholder="Your first name"
                  isHalfWidth={true}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  placeholder="Your last name"
                  isHalfWidth={true}
                />
              </div>

              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
              />

              <InputField
                label="Phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
              />

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 sr-only"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your laundry requirements..."
                  className="mt-1 block w-full border-b border-gray-300 py-3 bg-white focus:ring-[#2E2A53] focus:border-[#2E2A53] resize-none transition-colors duration-200"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#2E2A53] hover:bg-[#1F1B40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2E2A53] transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#2E2A53] mb-6 border-b pb-2 tracking-wide">
              Contact Information
            </h2>

            <div className="space-y-4">
              <ContactInfoCard
                icon={<FaPhoneAlt />}
                title="Phone"
                value="+91 98765 43210"
              />

              <ContactInfoCard
                icon={<FaEnvelope />}
                title="Email"
                value="support@laundrywala.com"
              />

              <ContactInfoCard
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Sector 45, Gurugram, Haryana"
              />
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-semibold text-[#2E2A53] mb-6 border-b pb-2 tracking-wide">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                {["Instagram", "Facebook", "Twitter", "WhatsApp"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href={`#${platform.toLowerCase()}`}
                      className="h-10 w-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#2E2A53] hover:bg-[#2E2A53] hover:text-white transition duration-300"
                      title={platform}
                    >
                      <span className="text-sm font-semibold">
                        {platform[0]}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
