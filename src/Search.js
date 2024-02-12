import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
