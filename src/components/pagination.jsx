import React from 'react';

function Pagination({ page, total, limit, onPageChange }) {
  const totalPages = Math.ceil(total / limit);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <span>Page:</span>
      <ul>
        {pages.map((pageNum) => (
          <li
            key={pageNum}
            onClick={() => onPageChange(pageNum)}
            className={pageNum === page ? 'active' : ''}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;