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
      bgColorClass: "bg-[#6E5A4C]",
      textColorClass: "text-[#F5F0E8]",
      image: SerAb4,
    },
    {
      title: "Premium Dry Cleaning",
      description:
        "Expert dry cleaning for delicate garments, ensuring texture preservation.",
      bgColorClass: "bg-[#6E5A4C]",
      textColorClass: "text-[#F5F0E8]",
      image: SerAb3,
    },
    {
      title: "Ironing & Pressing",
      description:
        "Professional pressing to remove every wrinkle and provide a crisp finish.",
      bgColorClass: "bg-[#6E5A4C]",
      textColorClass: "text-[#F5F0E8]",
      image: SerAb5,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#2E2A53] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
          OUR SERVICES
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 text-[#2E2A53]">
          Comprehensive Laundry services for every need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-2xl relative flex flex-col bg-white"
            >
              <div className="h-48 sm:h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className={`p-4 sm:p-6 rounded-lg -mt-8 sm:-mt-10 mx-4 sm:mx-6 relative ${service.bgColorClass}`}
              >
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1 ${service.textColorClass}`}
                >
                  {service.title}
                </h3>
                <p className={`text-sm ${service.textColorClass}`}>
                  {service.description}
                </p>
              </div>

              <div className="p-4 sm:p-6 flex justify-start items-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 shadow-lg hover:opacity-90 bg-[#6E5A4C] text-[#F5F0E8]"
                >
                  BOOK SERVICE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaServices;
