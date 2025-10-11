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
      name: "Ananya S.",
      time: "2 weeks ago",
      text: "Finally found a laundry service in Gurgaon that’s fast, affordable, and reliable. My clothes come back smelling fresh and perfectly folded. I highly recommend Estreewala!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Rohit K.",
      time: "1 month ago",
      text: "I booked a same-day laundry pickup and couldn’t believe how quick it was. Shirts were neatly pressed and stain-free. Definitely the best dry cleaning near me!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Nisha T.",
      time: "3 weeks ago",
      text: "Estreewala made my life easier. Their doorstep laundry service saves so much time, and the clothes always come back soft and crease-free.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Aditya P.",
      time: "2 months ago",
      text: "I used to worry about my expensive suits, but Estreewala’s professional dry cleaning made them look brand new. They’re experts in handling delicate fabrics.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Sneha R.",
      time: "1 week ago",
      text: "I switched from another laundry app and never looked back. Transparent pricing, eco-friendly detergents, and super-fast delivery that actually happens!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Manoj D.",
      time: "4 weeks ago",
      text: "The pickup and drop-off were perfectly on time. Great customer service and quality. Estreewala is easily the most trusted laundry service near me.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Priya L.",
      time: "2 weeks ago",
      text: "I had a silk saree with tough stains - Estreewala’s premium dry cleaning restored it beautifully. Can’t thank their team enough!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Aarav J.",
      time: "1 month ago",
      text: "I run a cafe and use their commercial laundry service for linens and aprons. The quality and consistency are unbeatable, and delivery is always prompt.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Kavita M.",
      time: "5 days ago",
      text: "Their eco-friendly laundry process really stands out. My clothes feel cleaner and softer, and I love that they care about sustainability too.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Sameer V.",
      time: "3 weeks ago",
      text: "Affordable, reliable, and fast - exactly what a busy person needs. Estreewala’s wash and fold service has been a lifesaver for my weekly routine.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?img=10",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowWidth < 1024 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className=" md:pb-30 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-block px-4 py-2 mb-3 bg-[#F5F0E8] text-[#6E5A4C] font-semibold tracking-wider uppercase mt-8 rounded-full shadow-md">
          TESTIMONIALS
        </p>

        <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#2E2A53]">
          Satisfied customers sing our praises
        </h2>

        <p className="text-lg mb-12 text-gray-600 my-4">
          See why homes, hostels, and offices trust Estreewala for quick,
          reliable, and eco-friendly laundry and dry cleaning services - every
          single day.
        </p>

        <div className="mx-4 sm:mx-0">
          <Slider key={windowWidth} {...sliderSettings}>
            {reviews.map((review, index) => (
              <div key={index} className="focus:outline-none">
                <div className="m-4 rounded-xl p-6 shadow-xl text-left flex flex-col h-full bg-white border border-[#C9B9A5] transition-transform duration-300 hover:scale-[1.02]">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full mr-3 object-cover"
                      loading="lazy"
                    />
                    <p className="font-semibold text-lg text-[#1A1A1A]">
                      {review.name}
                    </p>
                  </div>

                  <p className="text-base text-[#1A1A1A] italic leading-relaxed">
                    “{review.text}”
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
