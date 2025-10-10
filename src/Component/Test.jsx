import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LaundryWalaTestimonials = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      name: "Jessica L.",
      time: "2 months ago",
      text: "Exceptional stain removal! I thought my favorite shirt was ruined, but LaundryWala brought it back to life. Truly impressed with the results.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Robert H.",
      time: "1 week ago",
      text: "Great value for money and incredibly convenient. The pick-up and drop-off service is a game-changer for my busy schedule. Five stars!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Emily C.",
      time: "3 days ago",
      text: "The delivery person was so polite, and my laundry smelled amazing. It feels like a high-end service at an affordable price. Fantastic!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=10",
    },
    {
      name: "Kevin B.",
      time: "1 month ago",
      text: "Always on time, and they pay attention to my specific instructions. It's the little details that make this laundry service stand out.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Maria G.",
      time: "5 months ago",
      text: "Used them for dry cleaning and regular wash. Everything came back perfect. They are reliable and consistently deliver quality work.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Chris W.",
      time: "1 day ago",
      text: "Needed a last-minute rush job and they delivered without any fuss. The clothes were immaculate. Super helpful service!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    {
      name: "Laura K.",
      time: "3 weeks ago",
      text: "The website is easy to use, and the service is even better. I love how simple it is to schedule a pick-up. Highly satisfied customer.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=18",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 1024 ? 1 : 3, // 👈 force based on current width
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#6E5A4C] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-12 leading-tight text-[#2E2A53]">
          Satisfied customers sing our praises
        </h2>

        <div className="mx-4 sm:mx-0">
          <Slider key={windowWidth} {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="focus:outline-none">
                <div className="m-4 rounded-xl p-6 shadow-xl text-left flex flex-col h-full bg-white border border-[#C9B9A5]">
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
                    </div>
                  </div>

                  <p className="text-base flex-grow mb-6 italic text-[#1A1A1A]">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default LaundryWalaTestimonials;
