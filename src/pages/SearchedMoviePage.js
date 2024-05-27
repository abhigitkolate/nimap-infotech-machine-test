import React, { useEffect, useState } from 'react'
import axios from 'axios';
import MovieList from '../components/MovieList';

const SearchedMoviePage = () => {
  const [movies, setMovies] = useState([]);

  const getQuery = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q');
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const query = getQuery();
      if (query) {
        const result = await axios.get(`http://www.omdbapi.com/?apikey=6369f75e&s=${query}&type=movie`);
        setMovies(result.data.Search || []);
        console.log(result)
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  )
}

export default SearchedMoviePage
