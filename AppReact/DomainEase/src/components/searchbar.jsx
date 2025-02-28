import React from "react";

const SearchBar = ({ onSearch, setQuery, query }) => {
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      placeholder="Search for a domain..."
      className="w-full p-4 rounded-lg shadow-md text-black"
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
