
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MovieRow from '@/components/MovieRow';
import ThreeDMovieCard from '@/components/ThreeDMovieCard';

// Sample data - in a real app, this would come from an API
const featuredMovie = {
  title: "The Matrix Resurrections",
  description: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to follow the white rabbit once more.",
  backdropPath: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
};

const trendingNow = [
  { id: "1", title: "Stranger Things", posterPath: "https://images.unsplash.com/photo-1642053200868-aee9e554a489?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2022", rating: "98%" },
  { id: "2", title: "The Witcher", posterPath: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", rating: "92%" },
  { id: "3", title: "Breaking Bad", posterPath: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2020", rating: "96%" },
  { id: "4", title: "Money Heist", posterPath: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", rating: "90%" },
  { id: "5", title: "Squid Game", posterPath: "https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", rating: "95%" },
  { id: "6", title: "Dark", posterPath: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2020", rating: "94%" },
  { id: "7", title: "Ozark", posterPath: "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2022", rating: "93%" },
];

const popularMovies = [
  { id: "8", title: "Inception", posterPath: "https://images.unsplash.com/photo-1523207911345-32501502db22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2010", rating: "94%" },
  { id: "9", title: "The Dark Knight", posterPath: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2008", rating: "96%" },
  { id: "10", title: "Interstellar", posterPath: "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2014", rating: "92%" },
  { id: "11", title: "Parasite", posterPath: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2019", rating: "98%" },
  { id: "12", title: "Joker", posterPath: "https://images.unsplash.com/photo-1604916288252-1ff21fed263e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2019", rating: "91%" },
  { id: "13", title: "Avengers: Endgame", posterPath: "https://images.unsplash.com/photo-1624469600145-50890adbf1a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2019", rating: "94%" },
];

const recommendedMovies = [
  { id: "14", title: "Dune", posterPath: "https://images.unsplash.com/photo-1547700055-b61cacebece9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", genre: "Sci-Fi" },
  { id: "15", title: "No Time to Die", posterPath: "https://images.unsplash.com/photo-1512070679279-8988d32161be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", genre: "Action" },
  { id: "16", title: "Black Widow", posterPath: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", year: "2021", genre: "Action" },
];

const Index = () => {
  return (
    <div className="relative min-h-screen bg-netflix-dark text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <HeroSection movie={featuredMovie} />
        
        <section className="pb-20">
          <MovieRow title="Trending Now" movies={trendingNow} />
          <MovieRow title="Popular on Moviefix" movies={popularMovies} />
          
          <div className="px-4 md:px-16 space-y-4 mb-12 mt-16">
            <h2 className="text-2xl font-semibold text-white">Featured 3D Selection</h2>
            <p className="text-white/70">Hover to interact with our immersive 3D movie cards</p>
            
            <div className="flex flex-wrap justify-center gap-6 py-8">
              {recommendedMovies.map(movie => (
                <ThreeDMovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-4 md:px-16 text-white/50 text-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Get Help</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Devices</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Cookies</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Facebook</a></li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8">© 2023 Moviefix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
