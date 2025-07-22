import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Happiness Plans made our dream vacation come true! Every detail was perfectly organized.",
    location: "New York, USA"
  },
  {
    name: "Marco Rodriguez",
    rating: 5,
    text: "Outstanding service and unforgettable experiences. Highly recommend for anyone seeking adventure!",
    location: "Madrid, Spain"
  },
  {
    name: "Aisha Patel",
    rating: 5,
    text: "From booking to return, everything was seamless. The memories we made will last forever!",
    location: "Mumbai, India"
  },
  {
    name: "Daniela Costa",
    rating: 4,
    text: "Loved every second of our South India trip. Especially the food and Kerala backwaters!",
    location: "Lisbon, Portugal"
  },
  {
    name: "Ravi Mehra",
    rating: 5,
    text: "The bike rental was smooth and easy. Loved exploring Leh-Ladakh with it!",
    location: "Delhi, India"
  },
  {
    name: "Emily Turner",
    rating: 5,
    text: "Car rental in Jaipur was top-class. Great service and very affordable.",
    location: "London, UK"
  }
];

const TestimonialsSection = () => {
  const [page, setPage] = useState(0);
  const perPage = 3;

  const paginated = testimonials.slice(page * perPage, (page + 1) * perPage);
  const totalPages = Math.ceil(testimonials.length / perPage);

  return (
    <div className="py-20 bg-gradient-to-br from-yellow-50 to-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Happy Travelers</h2>
          <p className="text-xl text-navy-600">Real experiences from real adventurers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {paginated.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-navy-700 mb-6 italic">"{testimonial.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-navy-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-900">{testimonial.name}</h4>
                  <p className="text-sm text-navy-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full ${
                page === i ? "bg-yellow-500" : "bg-yellow-200"
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
