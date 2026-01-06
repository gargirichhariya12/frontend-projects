import React from "react";
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="w-full bg-black px-2 py-2">
      <div className="w-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
        <img src = {logo} alt="Logo" className="h-15 w-30 object-contain"/>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex items-center gap-8 px-8 py-3 border border-white/40 rounded-full">
          <a href="#" className="text-white hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
           Fleeds
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition">
          My Booking
          </a>
          
        </div>

        <div  className="">
        {/* Book Now Button */}
        <button className="text-white px-6 py-2 rounded-full border-2  m-2 border-dashed border-white hover:bg-white hover:text-black transition">
          Book Now
        </button>
          <a href="#" className="text-white hover:text-gray-300 transition">
          Dashboard
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition bg-orange-600 px-2 py-1 rounded-xl ml-4">
          G
          </a>

        </div>
      </div>
    </nav>
  );
}
