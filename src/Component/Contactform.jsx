import React from "react";

const InputField = ({ label, type = "text", name, isHalfWidth = false }) => (
  <div className={isHalfWidth ? "w-full md:w-1/2" : "w-full"}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6E5A4C] focus:border-[#6E5A4C] transition-colors duration-200 bg-white"
    />
  </div>
);

const ContactSection = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <button className="inline-block px-4 py-2 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase rounded-full shadow-md">
            Get in Touch
          </button>
          <p className="mt-4 text-lg text-gray-600">
            Need help with your laundry pickup, dry cleaning order, or
            fabric-specific care? Our support team is here to make your laundry
            experience quick, clean, and hassle-free.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Reach out anytime - we respond within minutes.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-[#2E2A53] mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <InputField
                label="First Name"
                name="firstName"
                isHalfWidth={true}
              />
              <InputField
                label="Last Name"
                name="lastName"
                isHalfWidth={true}
              />
            </div>

            <InputField label="Email" type="email" name="email" />
            <InputField label="Phone" type="tel" name="phone" />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your laundry requirements..."
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6E5A4C] focus:border-[#6E5A4C] resize-none transition-colors duration-200 bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-[#6E5A4C] hover:bg-[#57463e] text-white font-semibold rounded-lg shadow-md transition duration-300 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
