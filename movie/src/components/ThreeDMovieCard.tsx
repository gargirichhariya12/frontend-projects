
import React, { useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Play } from 'lucide-react';

interface ThreeDMovieCardProps {
  movie: {
    id: string;
    title: string;
    posterPath: string;
    year?: string;
    genre?: string;
  };
  className?: string;
}

const ThreeDMovieCard: React.FC<ThreeDMovieCardProps> = ({ movie, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={cardRef}
      className={cn(
        "w-[250px] h-[370px] relative perspective-1000 cursor-pointer group",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
    >
      <div 
        style={{ 
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: isHovered ? 'none' : 'transform 0.5s ease-out'
        }}
        className="w-full h-full preserve-3d shadow-xl rounded-xl overflow-hidden"
      >
        {/* Poster */}
        <div className="absolute inset-0 backface-hidden">
          <img 
            src={movie.posterPath} 
            alt={movie.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Glass overlay with information */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end">
            <h3 className="text-xl font-bold text-white">{movie.title}</h3>
            <div className="flex items-center gap-2 text-sm text-white/70 mt-1">
              {movie.year && <span>{movie.year}</span>}
              {movie.genre && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/70"></span>
                  <span>{movie.genre}</span>
                </>
              )}
            </div>
            
            <button className="mt-4 bg-white/90 hover:bg-white text-black rounded-full py-2 px-4 flex items-center gap-2 self-start">
              <Play size={16} className="fill-black" /> 
              <span className="font-medium">Play</span>
            </button>
          </div>
        </div>
        
        {/* Reflection/Shadow effect */}
        <div 
          className="absolute bottom-[-20px] left-0 right-0 h-[40px] mx-auto w-[90%] rounded-[50%] bg-black/40 blur-md transform -translate-y-4 opacity-0 group-hover:opacity-70 transition-opacity"
        ></div>
      </div>
    </div>
  );
};

export default ThreeDMovieCard;
