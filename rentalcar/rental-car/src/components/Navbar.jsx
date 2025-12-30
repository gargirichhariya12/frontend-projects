import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = ({ setShowLogin }) => {

    const location = useLocation()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <div className={`flex item-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative bg-blue transition-all ${location.pathname === '/' && 'bg-[var(--color-light)]'}`}>
            <Link to="/">
                <img src={assets.logo} alt="Logo" className=" h-8" />
            </Link>

            <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8  max-sm:p-4 transition-all duration-300 z-50
            ${location.pathname === '/' ? 'bg-[var(--color-light)]' : 'bg-white'} ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}`}
            >
                {menuLinks.map((link, index) => (
                    <Link key={index} to={link.path} >
                        {link.name}
                    </Link>
                ))}

                <div className='hidden lg:flex item-center text-sm gap gap-2 border borderColor px-3 rounded-full max-w-56'>
                    <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='Search your car'></input>
                    <img src={assets.search_icon} alt='search' />
                </div>

                <div className="flex max-sm:flex-col item-start sm:item-center gap-6">
                    <button onClick={() => navigate('/owner')} className='cursor-pointer'>Dashboard</button>

                    <button onClick={() => setShowLogin(true)}
                        className="bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white cursor-pointer px-8 py-2 rounded-lg transition"
                    >
                        Log In
                    </button>

                </div>
            </div>
            <button onClick={() => setOpen(!open)} className="sm:hidden">
                {open ? (
                    <X size={28} className ="cursor-pointer text-gray-700" />
                ) : (
                    <Menu size={28} className ="cursor-pointer text-gray-700" />
                )}
            </button>
        </div>
    )
}

export default Navbar
