
import React, { useState } from 'react';

const Search = ({ query, setQuery }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles = {
    backgroundColor: isFocused ? '#f0f8ff' : 'white',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    transition: 'background-color 0.3s',
  };

  return (
    <input
      type="text"
      placeholder="Search by breed..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={inputStyles}
    />
  );
};

export default Search;