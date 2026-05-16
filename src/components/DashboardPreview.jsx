import React from "react";

const DashboardPreview = () => {
  return (
    <section className="py-20 px-6 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-400 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Product Preview
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Built For Modern Builders & Developers
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-14 text-lg">
          Get complete visibility into your projects, finances, bookings and
          operations from one centralized dashboard.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="dashboard"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="analytics"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
