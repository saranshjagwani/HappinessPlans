import { Award, Calendar, Heart, MapPin, Plane, Briefcase, Globe, Users, Star } from 'lucide-react'

import React from 'react'

const About = () => {
  return (
    <div>
      <div className="py-20 bg-gradient-to-br from-cream-100 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 px-6 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Our Story</span>
          </div>
          <h2 className="text-5xl font-bold text-navy-900 mb-6">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-navy-900" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Established 2021</h3>
              </div>
              <p className="text-navy-700 leading-relaxed">
                Founded in the vibrant city of Indore, Madhya Pradesh, <span className="font-semibold text-yellow-600">Happiness Plans</span> has emerged as a leading travel agency in Vijay Nagar. Our journey began with a simple vision: to transform travel dreams into extraordinary realities.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-yellow-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-navy-900">Prime Location</h3>
              </div>
              <p className="text-navy-700 leading-relaxed">
                Strategically located at <span className="font-semibold text-yellow-600">Vijay Nagar Square, Apollo Premier</span>, our office is easily accessible to travelers from across Indore. We've built our reputation as a one-stop destination for all travel needs.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl p-8 shadow-xl border border-yellow-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-10 h-10 text-navy-900" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">Our Mission</h3>
              </div>
              <p className="text-navy-700 text-center leading-relaxed">
                We believe that <span className="font-semibold text-yellow-600">customer satisfaction</span> is as important as our products and services. This philosophy has helped us build a vast and loyal customer base that continues to grow every day.
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-navy-200 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-4">Our Expertise</h3>
            <p className="text-xl text-navy-600">Comprehensive travel solutions tailored to your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Plane, title: "Travel Agents", desc: "Expert guidance for all your travel planning needs" },
              { icon: Briefcase, title: "Car Rental Services", desc: "Reliable vehicles for comfortable journeys" },
              { icon: Globe, title: "Tour Packages", desc: "Curated experiences for unforgettable adventures" },
              { icon: Users, title: "Group Travel", desc: "Specialized packages for corporate and leisure groups" },
              { icon: MapPin, title: "Local Expertise", desc: "Deep knowledge of destinations across India" },
              { icon: Star, title: "Premium Service", desc: "Luxury travel options for discerning travelers" }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mb-4 group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-navy-800 group-hover:text-navy-900" />
                </div>
                <h4 className="text-lg font-bold text-navy-900 mb-2">{service.title}</h4>
                <p className="text-navy-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Values */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-3xl p-12 text-black text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-navy-900" />
            </div>
            <h3 className="text-3xl font-bold mb-6 text-yellow-400">Our Vision for the Future</h3>
            <p className="text-xl text-black-200 leading-relaxed mb-8">
              We aim to expand our services and cater to a larger client base while maintaining our core values of excellence, dedication, and customer-first approach. Our team of passionate professionals works tirelessly to achieve our common vision of making travel accessible, enjoyable, and memorable for everyone.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-yellow-400 font-semibold">Excellence</span>
              </div>
              <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-yellow-400 font-semibold">Dedication</span>
              </div>
              <div className="bg-yellow-400/20 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="text-yellow-400 font-semibold">Trust</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About