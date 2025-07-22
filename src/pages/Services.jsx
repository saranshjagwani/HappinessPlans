import { Plane, Hotel, Calendar, MapPin, Wallet, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book domestic and international flights at the best prices with ease.",
    features: ["24/7 Support", "Best Price Guarantee", "Instant Confirmation"],
    color: "from-blue-500 to-cyan-500",
    stats: "10K+ Flights Booked"
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "Find and reserve the best hotels, homestays, and luxury resorts worldwide.",
    features: ["Free Cancellation", "50K+ Properties", "Exclusive Deals"],
    color: "from-purple-500 to-pink-500",
    stats: "25K+ Happy Guests"
  },
  {
    icon: Calendar,
    title: "Holiday Packages",
    description: "Choose from curated holiday packages or create your own custom trip.",
    features: ["Customizable Itineraries", "Local Guides", "All-Inclusive Options"],
    color: "from-green-500 to-emerald-500",
    stats: "500+ Destinations"
  },
  {
    icon: MapPin,
    title: "Local Experiences",
    description: "Discover offbeat destinations and unique local experiences.",
    features: ["Hidden Gems", "Cultural Tours", "Adventure Activities"],
    color: "from-orange-500 to-red-500",
    stats: "1000+ Experiences"
  },
  {
    icon: Wallet,
    title: "Travel Insurance",
    description: "Secure your trip with comprehensive travel insurance options.",
    features: ["Medical Coverage", "Trip Cancellation", "24/7 Claims Support"],
    color: "from-indigo-500 to-blue-500",
    stats: "99% Claim Settlement"
  },
  {
    icon: Users,
    title: "Group Tours",
    description: "Join affordable and fun group tours with expert guides.",
    features: ["Small Groups", "Expert Guides", "Social Travel"],
    color: "from-teal-500 to-cyan-500",
    stats: "95% Satisfaction Rate"
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen py-20 px-4 md:px-10 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="w-4 h-4" />
          Award-Winning Services
        </div>
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
          Your Journey, Our Expertise
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          We offer a comprehensive suite of travel services designed to transform your wanderlust into unforgettable memories.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            {/* Content */}
            <div className="relative p-8">
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                <div className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-2xl font-bold mb-3 text-slate-800 group-hover:text-slate-900">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  {service.stats}
                </span>
                <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 font-medium group-hover:gap-3 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                 style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of satisfied travelers who trust us with their journeys.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <Link to="/contact">
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;