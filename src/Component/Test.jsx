import React from "react";

import { FaStar, FaRegStar } from "react-icons/fa";

const LaundryWalaTestimonials = () => {
  const reviews = [
    {
      name: "Sarah M.",
      time: "1 month ago",
      text: "Fast, reliable, and professional! My clothes were fixed the same day, and now they're perfectly clean. Highly recommend their service!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael T.",
      time: "14 days ago",
      text: "I was in a rush, and they arrived quickly to pick up my laundry. Their expertise saved me from a major headache. Will definitely use them again.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "David R.",
      time: "24 days ago",
      text: "My garments were handled with care and returned perfectly folded. Fast, reliable, and professional service every time. They're my new go-to!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={`star-${i}`} className="inline-block" />);
    }

    for (let i = rating; i < totalStars; i++) {
      stars.push(<FaRegStar key={`star-reg-${i}`} className="inline-block" />);
    }

    return <div className="text-xl space-x-0.5 text-[#FACC15]">{stars}</div>;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center">
          <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#6E5A4C] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-tight text-[#2E2A53]">
            Satisfied customers sing our praises
          </h2>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <button className="font-bold py-1 border-b-2 border-[#6E5A4C] text-[#6E5A4C]">
            All Reviews
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-xl p-6 shadow-xl text-left flex flex-col h-full bg-white border border-[#C9B9A5]"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3 object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-base text-[#1A1A1A]">
                    {review.name}
                  </p>
                  <p className="text-sm text-[#C9B9A5]">{review.time}</p>
                </div>
              </div>

              <div className="mb-3">{renderStars(review.rating)}</div>

              <p className="text-base flex-grow mb-6 italic text-[#1A1A1A]">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="pt-4 border-t w-full border-[#C9B9A5]">
                <p className="flex items-center text-sm font-semibold text-[#1A1A1A]">
                  <span className="text-xl mr-2">G</span> Posted on{" "}
                  <span className="ml-1 text-[#2E2A53]">Google</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaTestimonials;
