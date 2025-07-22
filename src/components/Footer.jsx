import { Plane } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-16"> {/* <- Fixed background */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Plane className="w-5 h-5 text-gray-900 transform rotate-45" />
              </div>
              <span className="text-xl font-bold text-yellow-400">Happiness Plans</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating unforgettable travel experiences that bring joy and lasting memories to every journey.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/contact" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Destinations</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Travel Packages</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Custom Tours</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Group Travel</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Adventure Trips</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Luxury Travel</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📧 hello@happinessplans.com</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Travel Street, Adventure City</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Happiness Plans. All rights reserved. Made with ❤️ for travelers worldwide.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
