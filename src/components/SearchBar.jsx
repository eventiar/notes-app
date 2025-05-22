import React from "react";
import PropTypes from "prop-types";

export default function SearchBar({ keyword, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari berdasarkan judul ..."
        value={keyword}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
