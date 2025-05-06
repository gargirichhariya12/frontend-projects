
import React, { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-16 py-4 flex items-center justify-between',
        isScrolled 
          ? 'bg-[#13294b]/90 backdrop-blur-md' 
          : 'bg-gradient-to-b from-[#13294b]/90 to-transparent'
      )}
    >
      <div className="flex items-center space-x-8">
        <h1 className="text-netflix-red font-bold text-2xl md:text-3xl">MOVIEFIX</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#" className="text-sm text-white/80 hover:text-white">Home</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">TV Shows</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">Movies</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">New & Popular</a>
          <a href="#" className="text-sm text-white/80 hover:text-white">My List</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          {showSearch ? (
            <SearchBar onClose={() => setShowSearch(false)} />
          ) : (
            <button 
              onClick={() => setShowSearch(true)}
              className="p-2 text-white/80 hover:text-white"
            >
              <Search size={20} />
            </button>
          )}
        </div>
        <button className="p-2 text-white/80 hover:text-white">
          <Bell size={20} />
        </button>
        <button className="p-2 text-white/80 hover:text-white">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
