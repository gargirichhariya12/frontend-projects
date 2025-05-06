
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  movies: Array<{
    id: string;
    title: string;
    posterPath: string;
    year?: string;
    rating?: string;
  }>;
}

const MovieRow: React.FC<MovieRowProps> = ({ title, movies }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.clientWidth - 100;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.clientWidth - 100;
    }
  };

  return (
    <div className="px-4 md:px-16 space-y-4 mb-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      
      <div className="group relative">
        <button 
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous movies"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div
          ref={sliderRef}
          className="flex space-x-2 overflow-x-scroll scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {movies.map((movie) => (
            <div key={movie.id} className="flex-shrink-0 w-[170px] md:w-[200px]">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
        
        <button 
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-40 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next movies"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default MovieRow;
