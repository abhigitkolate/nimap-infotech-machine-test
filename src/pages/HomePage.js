import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await axios.get(`http://www.omdbapi.com/?apikey=6369f75e&s=popular&type=movie`);
      setMovies(result.data.Search);
    };
    fetchMovies();
  }, []);

  return (
    <div className="container">
      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage
