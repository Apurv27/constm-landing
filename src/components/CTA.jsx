import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-[#0F172A] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-yellow-400 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Get Started
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Ready To Simplify Your Construction Business?
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Manage projects, bookings, payments, BOQ, vendors, labor and reports
          from one powerful platform.
        </p>

        <div className="flex flex-wrap justify-center gap-5">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917304272743"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Demo
          </a>

          {/* Email Button */}
          <a
            href="mailto:constM789@gmail.com"
            className="border border-gray-500 px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
