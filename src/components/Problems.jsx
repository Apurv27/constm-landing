import React from "react";
import { AlertTriangle } from "lucide-react";

const Problems = () => {
  const problems = [
    "Managing projects through Excel sheets",
    "Payment confusion & missing records",
    "Manual labor attendance tracking",
    "Material wastage & poor inventory tracking",
    "Booking mismanagement",
    "Delayed reports for clients & owners",
    "expense leakage",
    "procurement inefficiency",
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Tag */}
        <p className="text-yellow-500 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Problems We Solve
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 max-w-3xl mx-auto">
          Still Managing Construction Work Manually?
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          Builders lose time, money and control because of outdated systems.
          Const_M helps streamline projects, payments, bookings and reports in
          one platform.
        </p>

        {/* Cards */}
        <div
          className="grid gap-6 mt-12"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100 p-8 min-h-[180px] flex flex-col justify-center items-center text-center"
            >
              <AlertTriangle className="text-red-500 mb-4" size={28} />

              <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                {problem}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;
