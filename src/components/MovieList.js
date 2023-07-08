import React, { useState } from 'react';
import MovieItem from './MovieItem';

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const selectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieItem movie={movie} onSelectMovie={selectMovie} />
          {selectedMovie && selectedMovie.id === movie.id && (
            <div className="movie-details">
              <h2 className="movie-title">{selectedMovie.title}</h2>
              <h4>Overview</h4>
              <div className='pr'><p>{selectedMovie.overview}</p></div>

              <h4>Release Date</h4>
              <p>{selectedMovie.release_date}</p>
              <div className="movie-info">
              </div>
            </div>

          )}
        </div>
      ))}
    </div>
  );
};

export default MovieList;




