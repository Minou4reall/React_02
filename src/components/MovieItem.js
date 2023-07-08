import React from 'react';

const MovieItem = ({ movie, onSelectMovie }) => {
  const handleClick = () => {
    onSelectMovie(movie);
  };

  return (
    <div className="movie-item" onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
      <h3 className="movie-title">{movie.title}</h3>
    </div>
  );
};

export default MovieItem;
