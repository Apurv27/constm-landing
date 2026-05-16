import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Starter",
    subtitle: "For Small Builders",
    features: [
      "Bookings Management",
      "Payment Tracking",
      "Client Management",
      "Basic Reports",
    ],
  },
  {
    title: "Growth",
    subtitle: "For Growing Developers",
    features: [
      "Everything in Starter",
      "Material Tracking",
      "Labor Management",
      "Expense Tracking",
      "BOQ Management",
    ],
  },
  {
    title: "Enterprise",
    subtitle: "For Large Construction Firms",
    features: [
      "Everything in Growth",
      "Vendor Comparison",
      "Work Orders",
      "Geo Tracking",
      "Advanced Analytics",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-yellow-500 font-semibold uppercase tracking-[4px] mb-4 text-sm">
          Pricing Plans
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Flexible Plans For Every Builder
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          Whether you're managing one site or multiple large-scale projects,
          Const_M scales with your business.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#F8FAFC] rounded-2xl p-8 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-500 mb-6">{plan.subtitle}</p>

              <div className="space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="text-green-500" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/917304272743"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition text-center"
              >
                Book Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
