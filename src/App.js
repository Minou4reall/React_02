import React, { useState } from 'react';
import './App.css';
import MovieSearchForm from './components/MovieSearchForm';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const API_KEY = '4080b308e87d77d49c83efbce4d8826d';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const searchMovies = (searchTerm) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        setSelectedMovie(null); 
      })
      .catch((error) => {
        console.error('An error occurred while fetching movies:', error);
      });
  };

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app">
      <h1 className="app-title">Movie Search</h1>
      <div className="app-content">
        <MovieSearchForm onSearch={searchMovies} />
        <MovieList movies={movies} onSelectMovie={selectMovie} />
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </div>
    </div>
  );
}

export default App;
