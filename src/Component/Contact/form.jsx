import React, { useState } from "react";
// Removed: import { motion } from "framer-motion";

const colors = {
  taupe: "#6E5A4C",
  cream: "#E9DDC9",
  navy: "#2E2A53",
  charcoal: "#1A1A1A",
  graywarm: "#C9B9A5",
  offwhite: "#F5F0E8",
  white: "#FFFFFF",
  lightGreenBorder: "#85E0A3",
  goldenYellow: "#FFBF00",
};

// Removed all framer-motion variants (container, item, formItem)

const LaundryWalaContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 💡 In a real app, this is where you would send the data to your API/backend service.
    console.log("Contact Form Submitted:", formData);
    alert("Message sent successfully! We will get back to you shortly.");
    // Optionally reset form here:
    // setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <sectiong className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 `}>
      <div className="max-w-4xl mx-auto">
        {/* Header - Consolidated and Static */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 text-center sm:text-left">
          <h2
            className={`text-4xl md:text-5xl font-extrabold leading-tight text-[${colors.navy}]`}
          >
            Send a Message
          </h2>
        </div>

        {/* Single Consolidated Form Area */}
        <form
          onSubmit={handleSubmit}
          className={`p-8 md:p-12 rounded-xl shadow-2xl bg-[${colors.white}] border border-[${colors.cream}]`}
        >
          <h3 className={`text-2xl font-bold mb-8 text-[${colors.navy}]`}>
            Get in Touch with Our Team
          </h3>

          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className={`p-3 rounded-lg border border-[${colors.graywarm}] focus:ring-2 focus:ring-[${colors.navy}] focus:border-[${colors.navy}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`p-3 rounded-lg border border-[${colors.graywarm}] focus:ring-2 focus:ring-[${colors.navy}] focus:border-[${colors.navy}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
          </div>

          {/* Phone and Subject (or City for Franchise/General split) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Mobile Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className={`p-3 rounded-lg border border-[${colors.graywarm}] focus:ring-2 focus:ring-[${colors.navy}] focus:border-[${colors.navy}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (e.g., General Query, Franchise Interest)"
              required
              value={formData.subject}
              onChange={handleChange}
              className={`p-3 rounded-lg border border-[${colors.graywarm}] focus:ring-2 focus:ring-[${colors.navy}] focus:border-[${colors.navy}] focus:outline-none bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
            />
          </div>

          {/* Message Area */}
          <textarea
            name="message"
            placeholder="Your detailed message or question..."
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border border-[${colors.graywarm}] focus:ring-2 focus:ring-[${colors.navy}] focus:border-[${colors.navy}] focus:outline-none mb-8 resize-y bg-transparent text-[${colors.charcoal}] placeholder-[${colors.graywarm}]`}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-lg font-bold text-lg bg-[${colors.navy}] text-[${colors.white}] shadow-xl hover:bg-[${colors.charcoal}] transition duration-300`}
          >
            Send Message
          </button>
        </form>
      </div>
    </sectiong>
  );
};

export default LaundryWalaContactForm;
