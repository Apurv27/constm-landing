import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0F172A]/95 backdrop-blur-md text-white px-4 md:px-16 py-3 md:py-6 flex justify-between items-center fixed top-0 left-0 z-50 border-b border-gray-800">
      {/* Logo */}
      <a
        href="/"
        className="text-2xl md:text-4xl font-bold tracking-wide cursor-pointer"
      >
        Const<span className="text-yellow-400">_M</span>
      </a>

      {/* Nav Links (Desktop Only) */}
      <ul className="hidden md:flex gap-12 text-base font-medium items-center">
        <li>
          <a
            href="#features"
            className="hover:text-yellow-400 transition duration-300"
          >
            Features
          </a>
        </li>

        <li>
          <a
            href="#pricing"
            className="hover:text-yellow-400 transition duration-300"
          >
            Pricing
          </a>
        </li>

        <li>
          <a
            href="mailto:constM789@gmail.com"
            className="hover:text-yellow-400 transition duration-300"
          >
            Demo
          </a>
        </li>

        <li>
          <a
            href="mailto:constM789@gmail.com"
            className="hover:text-yellow-400 transition duration-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* CTA Button */}
      <a
        href="https://wa.me/917304272743"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-black px-4 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg"
      >
        Book Demo
      </a>
    </nav>
  );
};

export default Navbar;
