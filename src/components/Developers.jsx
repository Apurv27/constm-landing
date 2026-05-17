import React from "react";

const Developers = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Meet The Builder Behind Const_M
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Built By Developers Who Understand Construction
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          We are building technology solutions that help construction businesses
          reduce losses, improve operations and scale faster.
        </p>

        {/* Centered Founder Card */}
        <div className="flex justify-center">
          <div className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm max-w-md w-full">
            <img
              src="/your-photo.jpg"
              alt="Apurv"
              className="w-56 h-56 rounded-full mx-auto mb-4 object-cover scale-110"
            />

            <h3 className="text-2xl font-bold text-gray-900">
              Apurv R. Jambhulkar
            </h3>

            <p className="text-gray-500 mt-2">Founder & Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
