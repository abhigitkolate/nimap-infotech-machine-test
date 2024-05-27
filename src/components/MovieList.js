import React from 'react'
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies && movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item">
          <Link to={`/singleMovie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </Link>
        </div>  
      ))}
    </div>
  );
};

export default MovieList;
