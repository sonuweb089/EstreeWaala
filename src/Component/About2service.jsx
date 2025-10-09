import React from "react";
import SerAb3 from "../assets/serAb3.webp";
import SerAb4 from "../assets/serAb4.webp";
import SerAb5 from "../assets/serAb5.webp";

const LaundryWalaServices = ({ setShowForm }) => {
  const services = [
    {
      title: "Wash & Fold Service",
      description:
        "Quick, convenient washing and folding tailored to your fabric care needs.",
      image: SerAb4,
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Expert dry cleaning for delicate garments, ensuring texture preservation.",
      image: SerAb3,
    },
    {
      title: "Ironing & Pressing",
      description:
        "Professional pressing to remove every wrinkle and provide a crisp finish.",
      image: SerAb5,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Tag */}
        <p className="inline-block px-4 py-2 mb-3 bg-[#E9DDC9] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
          Our Services
        </p>

        {/* Section Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-[#2E2A53]">
          Comprehensive Laundry Services for Every Need
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
                loading="lazy"
              />

              {/* Text Section */}
              <div className="p-6 bg-[#2E2A53] text-[#E9DDC9]">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaServices;
