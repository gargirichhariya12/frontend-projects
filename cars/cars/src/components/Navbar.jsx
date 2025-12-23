import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-black px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-red-500 text-2xl font-semibold italic">K</span>
          <span className="text-white text-lg font-light">RentaCar</span>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 px-8 py-3 border border-white/40 rounded-full">
          <a href="#" className="text-white hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            About us
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            Contact Us
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
            Location
          </a>
        </div>

        {/* Book Now Button */}
        <button className="text-white px-6 py-2 rounded-full border-2 border-dashed border-white hover:bg-white hover:text-black transition">
          Book Now
        </button>
      </div>
    </nav>
  );
}
