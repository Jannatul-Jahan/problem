import React from 'react';
import "./seach.style.css";

function Search({ searchText, onSearchChange }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Books"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;