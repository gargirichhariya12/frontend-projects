import "./MovieCard.css";

const MovieCard =({movie}) => {
    const posterUrl= movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://via.placeholder.com/300x450?text=No+Image`;

    return(
        <div className="movie-card">
            <img src ={posterUrl} alt= {movie.title}/>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>⭐ {movie.vote_average}</p>
            </div>
        </div>
    );
};
export default MovieCard;