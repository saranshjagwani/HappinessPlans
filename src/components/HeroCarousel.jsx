import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/taj.jpeg";
import Image2 from '../assets/raj.jpeg';
import Image3 from '../assets/him.jpg';
import { Link } from "react-router-dom";

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  };

  const slides = [
    {
      img: Image1, 
      heading: "Explore India, Festivals & Culture",
      subtext: "Explore India with Our Package",
      color: "from-yellow-500 to-orange-500"
    },
    {
      img: Image3,
      heading: "Adventure Awaits in the Mountains",
      subtext: "Travel with Comfort and Style",
      color: "from-orange-500 to-red-500"
    },
    {
      img: Image2,
      heading: "Royal Rajasthan Awaits You",
      subtext: "Your Journey, Our Wheels",
      color: "from-yellow-400 to-yellow-600"
    },
  ];

  return (
    <div className="relative w-full h-[25%]  overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            <img
              src={slide.img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
              <p className="text-lg md:text-xl lg:text-2xl mb-2 font-light tracking-wide">
                {slide.subtext}
              </p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
                {slide.heading}
              </h1>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-pink-500 to-pink-600 px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:from-pink-600 hover:to-pink-700 transform hover:-translate-y-1"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-yellow-400 px-5 py-2 sm:px-6 sm:py-3 rounded-lg text-white font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 hover:text-black transform hover:-translate-y-1"
                >
                  View Packages
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;