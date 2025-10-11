import React from "react";
import { FaTruckPickup, FaClock, FaTshirt } from "react-icons/fa";
import LaundryHero from "../assets/Pricehero.webp"; // your image

const Hero = () => {
  return (
    <section className=" h-auto overflow-hidden bg-white">
      {/* Background image */}
      {/*    <img
        src={LaundryHero}
        alt="Laundry Hero"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        {/* H1 */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#2E2A53] tracking-tight">
          Dry Cleaning & Laundry Experts –{" "}
          <span className="text-[#6E5A4C]">Free Pickup, 24-Hour Delivery</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-[#1A1A1A] max-w-3xl mx-auto leading-relaxed">
          Get your clothes professionally washed, dry-cleaned, and steam-pressed
          by trusted laundry experts. We offer doorstep pickup, hygienic
          cleaning, and on-time delivery - all at transparent per-kg and
          per-piece pricing.
        </p>

        {/* CTA Button */}
        <button className="mt-8 px-8 py-4 bg-[#6E5A4C] text-white font-semibold rounded-lg shadow-md hover:bg-[#57463e] transition">
          Book Free Pickup
        </button>

        {/* Micro-USP line */}
        <p className="mt-4 text-sm md:text-base text-[#1A1A1A] max-w-2xl mx-auto">
          Serving homes, hostels, hotels & offices with express laundry, dry
          cleaning, and ironing services near you.
        </p>
      </div>
    </section>
  );
};

export default Hero;
