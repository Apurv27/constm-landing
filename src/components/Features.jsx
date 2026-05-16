import React from "react";
import { Building2, Wallet, Users, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Project & Site Management",
    desc: "Track multiple projects, sites, teams and progress in real time.",
    icon: <Building2 size={30} />,
  },
  {
    title: "Payments & Bookings",
    desc: "Manage bookings, client payments and overdue tracking.",
    icon: <Wallet size={30} />,
  },
  {
    title: "Labor & Vendor Management",
    desc: "Track workforce attendance, vendors and contractors.",
    icon: <Users size={30} />,
  },
  {
    title: "Reports & Analytics",
    desc: "Get complete visibility on profits, expenses and project health.",
    icon: <BarChart3 size={30} />,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Features
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Everything You Need To Run Construction Operations
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          From bookings to BOQ tracking, manage your complete construction
          business from one centralized dashboard.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-yellow-500 mb-4 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
