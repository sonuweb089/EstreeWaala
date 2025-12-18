import React, { useState } from "react";

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
    console.log("Contact Form Submitted:", formData);
    alert("Message sent successfully! We will get back to you shortly.");
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 text-center sm:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#2E2A53]">
            Send a Message
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12 rounded-xl shadow-2xl bg-[#FFFFFF] border border-[#E9DDC9]"
        >
          <h3 className="text-2xl font-bold mb-8 text-[#2E2A53]">
            Get in Touch with Our Team
          </h3>

   
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#C9B9A5] focus:ring-2 focus:ring-[#2E2A53] focus:border-[#2E2A53] focus:outline-none bg-transparent text-[#1A1A1A] placeholder-[#C9B9A5]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#C9B9A5] focus:ring-2 focus:ring-[#2E2A53] focus:border-[#2E2A53] focus:outline-none bg-transparent text-[#1A1A1A] placeholder-[#C9B9A5]"
            />
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="tel"
              name="phone"
              placeholder="Your Mobile Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#C9B9A5] focus:ring-2 focus:ring-[#2E2A53] focus:border-[#2E2A53] focus:outline-none bg-transparent text-[#1A1A1A] placeholder-[#C9B9A5]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject (e.g., General Query, Franchise Interest)"
              required
              value={formData.subject}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#C9B9A5] focus:ring-2 focus:ring-[#2E2A53] focus:border-[#2E2A53] focus:outline-none bg-transparent text-[#1A1A1A] placeholder-[#C9B9A5]"
            />
          </div>


          <textarea
            name="message"
            placeholder="Your detailed message or question..."
            rows="6"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-[#C9B9A5] focus:ring-2 focus:ring-[#2E2A53] focus:border-[#2E2A53] focus:outline-none mb-8 resize-y bg-transparent text-[#1A1A1A] placeholder-[#C9B9A5]"
          ></textarea>

       
          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg font-bold text-lg bg-[#2E2A53] text-[#E9DDC9] shadow-xl hover:bg-[#1A1A1A] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default LaundryWalaContactForm;
