import React from 'react';

const MovieDetails = ({ movie }) => {
    return (
        <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Release Date</h4>
            <p>{movie.release_date}</p>
            
        </div>
    );
};

export default MovieDetails;
