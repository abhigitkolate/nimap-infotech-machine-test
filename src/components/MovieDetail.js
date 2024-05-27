import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const result = await axios.get(`http://www.omdbapi.com/?apikey=6369f75e&i=${id}`);
      setMovie(result.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <Link to="/" className="back-btn">
        Go Back
      </Link>
    </div>
  );
};

export default MovieDetail;
