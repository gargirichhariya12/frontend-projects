import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async () => {
    try {
        const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
        );
        setMovies(res.data.results);
    } catch (error) {
        console.error("Failed to fetch movies", error);
    }
};

useEffect(() => {
    fetchMovies();
    }, []);

return (
    <div className="home">
        <h1 style={{ textAlign: "center" }}>Trending Movies 🎥</h1>
        <MovieList movies={movies} />
    </div>
    );
};

export default Home;