import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Const_M</h2>

          <p className="text-gray-400 leading-relaxed">
            Modern construction management platform for builders, developers and
            real estate businesses.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <div className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 7304272743</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span>constm789@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <span>Nagpur, India</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

          <div className="space-y-3 text-gray-400">
            <a
              href="#features"
              className="block hover:text-yellow-400 transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block hover:text-yellow-400 transition"
            >
              Pricing
            </a>
            <a
              href="https://wa.me/917304272743"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-yellow-400 transition"
            >
              Book Demo
            </a>
            <a
              href="https://wa.me/917304272743"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-yellow-400 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 Const_M. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
