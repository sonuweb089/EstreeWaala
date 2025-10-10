import React from "react";

const LaundryWalaContactMap = () => {
  const contactItems = [
    {
      title: "CAREERS",
      subtitle: "Would you like to join our growing team?",
      linkText: "CAREERS@ESTREEWALA.IN",
      link: "mailto:careers@estreewala.in",
    },
    {
      title: "FEEDBACK",
      subtitle: "Need assistance with our laundry services? Send a message.",
      linkText: "INFO@ESTREEWALA.IN",
      link: "mailto:info@estreeWala.in",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      <div className="mb-12 border-l-8 border-[#ffff] pl-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#6E5A4C]">
          Get To Know Us
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug mb-4 text-[#2E2A53] break-words">
            Have a concern or suggestion?
          </h2>

          <p className="text-sm sm:text-base text-[#1A1A1A] mb-6 break-words whitespace-normal">
            Contact us, and we'll address it promptly.
          </p>

          <a
            href="https://goo.gl/maps/fk6xUmqZp9t9Shtx9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm sm:text-base font-semibold uppercase tracking-wider underline text-[#2E2A53] hover:text-[#6E5A4C] transition duration-300 break-words"
          >
            View larger map →
          </a>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((contact, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#C9B9A5]/40 shadow-lg backdrop-blur-sm transition-all duration-500 hover:bg-[#6E5A4C] hover:shadow-2xl hover:scale-[1.03] w-full"
            >
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-[#E9DDC9] transition-all duration-500"></div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 uppercase tracking-wide text-[#6E5A4C] group-hover:text-black transition-colors duration-500 break-words">
                {contact.title}
              </h3>
              <p className="text-sm sm:text-base mb-4 text-[#1A1A1A] group-hover:text-black transition-colors duration-500 break-words whitespace-normal">
                {contact.subtitle}
              </p>
              <a
                href={contact.link}
                className="text-base sm:text-lg font-extrabold text-[#2E2A53] group-hover:text-black transition-colors duration-500 break-words whitespace-normal"
              >
                {contact.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-16 h-[450px] border-t-8 border-[#E9DDC9]">
        <iframe
          title="LaundryWala Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.9093525026474!2d75.83907121500863!3d26.798010983178794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6b3be1f3e1b%3A0x42793b930aba1e39!2sLaundrywala!5e0!3m2!1sen!2sin!4v1691740045782!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-none grayscale-[20%]"
        ></iframe>
      </div>
    </section>
  );
};

export default LaundryWalaContactMap;
