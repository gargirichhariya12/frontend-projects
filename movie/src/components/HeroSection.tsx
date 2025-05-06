
import React from 'react';
import { Play, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  movie: {
    title: string;
    description: string;
    backdropPath: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ movie }) => {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url(${movie.backdropPath})`,
          backgroundPosition: 'center top',
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-24 px-4 md:px-16 space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-stroke">{movie.title}</h1>
        <p className="text-lg text-white/90 line-clamp-3">{movie.description}</p>
        
        <div className="flex flex-wrap gap-3">
          <Button className="flex items-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-2">
            <Play size={20} className="fill-black" />
            <span>Play</span>
          </Button>
          
          <Button variant="outline" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-6 py-2">
            <Info size={20} />
            <span>More Info</span>
          </Button>
          
          <Button variant="ghost" className="flex items-center justify-center h-10 w-10 rounded-full bg-black/30 hover:bg-black/50 p-0">
            <Plus size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
