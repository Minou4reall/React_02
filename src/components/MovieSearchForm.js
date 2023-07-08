import React, { useState } from 'react';

const MovieSearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
        placeholder="Search for a movie..."
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default MovieSearchForm;
