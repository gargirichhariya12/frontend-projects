import { useState } from 'react';
import React  from "react";
import logo from '../assets/logo.png';
import { Link , useNavigate , useLocation } from 'react-router-dom';

export default function Navbar({setShowLogin}) {
  const menuLinks = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "My Bookings", path: "/my-bookings" },
  ]
 const navigate = useNavigate()
 const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="w-full bg-black px-2 py-2 sticky">
      <div className="w-full flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-15 w-30 object-contain" />
          </Link>
        </div>

        {/* Center Navigation */}
        <div className="border border-white rounded-[2.5rem] p-2">

        <div
          className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-white/40 right-0
  flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 
  transition-all duration-300 z-50
  ${location.pathname === '/' ? 'bg-[var(--color-light)]' : 'bg-black'} 
  ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
        >
          {menuLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-white hover:text-gray-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        </div>
        <div className="">
          {/* Book Now Button */}
          <button className="text-white px-6 py-2 rounded-full border-2  m-2 border-dashed border-white hover:bg-white hover:text-black transition">
            Book Now
          </button>
          
                    <button onClick={() => navigate('/owner')} className='cursor-pointer text-white'>Dashboard</button>

                    <button onClick={() => setShowLogin(true)}
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white cursor-pointer px-8 py-2 rounded-lg transition"
                    >
                        Log In
                    </button>
                    
        </div>
      </div>
    </nav>
  );
}
