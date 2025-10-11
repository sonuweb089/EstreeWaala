import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import LaundryBg from "../../assets/Pricehero.webp"; // replace with your laundry background image

const BRAND_ACCENT = "#78350F"; // bronze accent
const BRAND_PRIMARY = "#1A56DB"; // deep blue for hover/action

const HiMail = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.916A2.25 2.25 0 012.25 6.993V6.75"
    />
  </svg>
);

const HiPhone = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.45 1.173-1.748 1.87-3.09 1.87-2.673 0-5.022-1.28-6.417-3.375-1.396-2.095-1.928-4.577-1.572-7.042L6.9 7.172c.381-.513.064-1.219-.504-1.219H5.25A2.25 2.25 0 003 7.875v1.372c0 .516.351.966.852 1.091l4.423 1.106c.44.11.902-.055 1.173-.417l.97-1.293c.45-1.173 1.748-1.87 3.09-1.87-2.673 0-5.022 1.28-6.417 3.375-1.396 2.095-1.928 4.577-1.572 7.042l-1.004 5.378c-.356 1.897-1.554 3.05-3.232 3.05h-2.25c-8.284 0-15-6.716-15-15v-2.25z"
    />
  </svg>
);

const HiLocationMarker = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const LaundryContact = () => {
  const contactItems = [
    {
      icon: HiMail,
      title: "Email us",
      detail:
        "Have questions or special requests? Reach out via email. Our dedicated team typically responds promptly.",
      cta: "contact@estreewala.com",
      link: "mailto:contact@estreewala.com",
    },
    {
      icon: HiPhone,
      title: "Call us",
      detail:
        "Need help booking your quick pickup or drop-off? Call our dedicated service team for immediate assistance.",
      cta: "Call our expert team",
      link: "#",
    },
    {
      icon: HiLocationMarker,
      title: "Our Service Area",
      detail:
        "We service your local region, with operations across all major zones. See our map for details.",
      cta: "Check your local area",
      link: "#",
    },
  ];

  return (
    <div className="font-sans">
      {/* --- Hero Section --- */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(${LaundryBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            Experience the ease of expert care, on-time delivery, and
            fabric-friendly cleaning with Estreewala.
          </p>
        </div>
      </section>

      {/* --- Middle Message --- */}
      <section className="py-16  px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-[#2E2A53] font-medium leading-relaxed">
            We're here for you — questions, feedback, or order assistance,
            <br />
            <span className="text-[#6E5A4C] italic font-semibold">
              just a message away.
            </span>
          </p>
        </div>
      </section>

      {/* --- Contact Details Section --- */}
      <section className="pb-14 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {contactItems.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`text-4xl mb-4`} style={{ color: BRAND_ACCENT }}>
                <item.icon />
              </div>
              <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-3 max-w-xs mx-auto text-sm">
                {item.detail}
              </p>
              <a
                href={item.link}
                className="text-sm font-semibold hover:text-[#1A56DB] transition-colors duration-200"
                style={{ color: BRAND_ACCENT }}
              >
                {item.cta}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LaundryContact;
