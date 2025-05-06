
import React from 'react';
import MovieCard from './MovieCard';

interface MovieCardGridProps {
  title: string;
  movies: Array<{
    id: string;
    title: string;
    posterPath: string;
    year?: string;
    rating?: string;
  }>;
}

const MovieCardGrid: React.FC<MovieCardGridProps> = ({ title, movies }) => {
  return (
    <div className="px-4 md:px-16 space-y-4 mb-8">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardGrid;
