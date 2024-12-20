import React from "react";

import "./styles.css";

const Pagination = ({ currPage, totalPages, handlePageNumber }) => (
  <nav className="nav-wrapper">
    <button
      disabled={currPage === 0}
      onClick={() => handlePageNumber(currPage - 1)}
      className="nav-btn"
      aria-label="Previous Page"
    >
      {"<"}
    </button>

    {[...Array(totalPages)].map((_, key) => (
      <button
        key={key}
        onClick={() => handlePageNumber(key)}
        className={currPage === key ? "active" : ""}
        aria-label={`Go to page ${key}`}
      >
        {key}
      </button>
    ))}

    <button
      disabled={currPage === totalPages - 1}
      onClick={() => handlePageNumber(currPage + 1)}
      className="nav-btn"
      aria-label="Next Page"
    >
      {">"}
    </button>
  </nav>
);

export default Pagination;
