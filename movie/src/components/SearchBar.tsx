
import React, { useRef, useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface SearchBarProps {
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    inputRef.current?.focus();
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="animate-slide-from-right absolute right-0 flex items-center glass-effect rounded-md overflow-hidden">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies or TV shows..."
        className="bg-transparent text-white py-2 px-4 outline-none w-64"
      />
      <button onClick={onClose} className="p-2 text-white/80 hover:text-white">
        <X size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
