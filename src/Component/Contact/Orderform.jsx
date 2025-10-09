import React, { useState } from "react";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "Wash & Fold",
    weight: "",
    pickupDate: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Wash & Fold",
    "Premium Dry Cleaning",
    "Ironing & Pressing",
    "All Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => {}, 5000);
  };

  if (isSubmitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 sm:px-6 lg:px-8 bg-green-50 rounded-xl shadow-2xl mt-10">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="mt-2 text-3xl font-extrabold text-green-800">
            Order Placed Successfully!
          </h3>
          <p className="mt-1 text-lg text-green-700">
            Thank you, {formData.name}. We'll call you shortly at{" "}
            {formData.phone} to confirm the pickup details.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 bg-[#2E2A53] text-white text-md font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#1A1A1A] transition-colors duration-300"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-[#2E2A53]">
          Place Your Laundry Order
        </h2>
        <p className="mt-2 text-lg text-[#6E5A4C]">
          Schedule a pickup for a quick, professional, and reliable service.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 p-8 bg-[#F5F0E8] rounded-xl shadow-2xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#2E2A53]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#2E2A53]"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-[#2E2A53]"
          >
            Pickup Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={formData.address}
            onChange={handleChange}
            placeholder="House/Flat No, Street, City, Pincode"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-[#2E2A53]"
            >
              Select Service
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C] bg-white"
            >
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-[#2E2A53]"
            >
              Estimated Load (in kg)
            </label>
            <input
              type="number"
              name="weight"
              id="weight"
              required
              min="1"
              max="50"
              value={formData.weight}
              onChange={handleChange}
              placeholder="e.g., 5"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="pickupDate"
            className="block text-sm font-medium text-[#2E2A53]"
          >
            Preferred Pickup Date
          </label>
          <input
            type="date"
            name="pickupDate"
            id="pickupDate"
            required
            min={new Date().toISOString().split("T")[0]}
            value={formData.pickupDate}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
          />
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-[#2E2A53]"
          >
            Special Instructions (Stains, delicate items, etc.)
          </label>
          <textarea
            id="notes"
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Please use gentle detergent for the shirts..."
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 focus:ring-[#6E5A4C] focus:border-[#6E5A4C]"
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#2E2A53] hover:bg-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6E5A4C] transition duration-300"
          >
            CONFIRM ORDER & SCHEDULE PICKUP
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
