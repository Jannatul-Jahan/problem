import React from 'react';
import "./seach.style.css";

function Sorting({ sortField, sortOrder, onSortChange }) {
  return (
    <div className="search-container">
      <span>Sort by:</span>
      <select
        value={sortField}
        onChange={(e) => onSortChange(e.target.value, sortOrder)}
      >
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => onSortChange(sortField, e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;