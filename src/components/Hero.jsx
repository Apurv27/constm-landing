import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#0F172A] text-white pt-32 md:pt-28 pb-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-yellow-400 font-semibold mb-4 uppercase tracking-widest text-xs md:text-sm">
            Construction Management Simplified
          </p>

          <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-6">
            Manage Projects, Bookings & Payments
            <span className="text-yellow-400"> in One Platform</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            Track projects, labor, materials, bookings, client payments,
            reports, BOQ, vendors and site operations — all from one dashboard.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917304272743"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-center"
            >
              Book Demo →
            </a>

            {/* Email Button */}
            <a
              href="https://youtu.be/Kngs6grFgCY"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition text-center"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-4 w-full max-w-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="dashboard preview"
              className="rounded-xl w-full h-[220px] md:h-[320px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
