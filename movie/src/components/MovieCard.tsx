
import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    posterPath: string;
    year?: string;
    rating?: string;
  };
  className?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn("movie-card group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={movie.posterPath} 
        alt={movie.title} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      
      {isHovered && (
        <div className="movie-card-content flex flex-col space-y-2">
          <h3 className="font-semibold text-white">{movie.title}</h3>
          
          <div className="flex items-center space-x-2 text-xs">
            {movie.rating && <span className="text-green-500">{movie.rating} Match</span>}
            {movie.year && <span className="text-white/70">{movie.year}</span>}
          </div>
          
          <div className="flex items-center space-x-2 mt-2">
            <button className="p-1 bg-white rounded-full">
              <Play size={16} className="fill-black" />
            </button>
            <button className="p-1 bg-white/20 hover:bg-white/30 rounded-full border border-white/40">
              <Plus size={16} />
            </button>
            <button className="p-1 bg-white/20 hover:bg-white/30 rounded-full border border-white/40">
              <ThumbsUp size={16} />
            </button>
            <div className="flex-grow"></div>
            <button className="p-1 bg-white/20 hover:bg-white/30 rounded-full border border-white/40">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
