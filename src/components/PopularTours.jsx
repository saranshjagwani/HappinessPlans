import React from "react";
import { Link } from "react-router-dom";

const popularItems = [
  
  {
    title: "Splendour",
    subtitle: "of Kerala",
    img: "//media.assettype.com/newindianexpress%2F2025-05-19%2F6dx7aki2%2FGUL-6064559.JPG?rect=273%2C0%2C2990%2C1682&amp;w=480&amp;auto=format%2Ccompress&amp;fit=max",
    link: "/kerala-tour"
  },
  {
    title: "Complete India Tour",
    subtitle: "",
    img: "https://www.thegrandindianroute.com/wp-content/uploads/2024/02/Untitled-design-2024-07-17T005119.143.jpg",
    link: "/complete-india-tour"
  },
  {
    title: "Bike Rentals",
    subtitle: "Ride Anywhere",
    img: "https://cdn.bikedekho.com/processedimages/royal-enfield/roadstar/source/roadstar680f55f6e6091.jpg",
    link: "/bike-rentals"
  },
  {
    title: "Car Rentals",
    subtitle: "Comfort on Wheels",
    img: "https://img.autocarindia.com/ExtraImages/20241205062334_20240606032223_Creta showroom shot _1_.jpg?w=700&amp;c=1",
    link: "/car-rentals"
  }
];

const PopularTours = () => {
  return (
    <div className="px-4 md:px-10 py-10 bg-white text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Most <span className="text-yellow-500 font-cursive italic">Popular Tour</span> of India
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {popularItems.map((item, index) => (
          <Link to={item.link} key={index} className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <div className="relative h-64">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularTours;
