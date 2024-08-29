import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={onSearchChange}
        className="p-2 border border-gray-300 rounded w-full max-w-md"
      />
      <button className="ml-2 bg-black text-white py-2 px-4 rounded">→</button>
    </div>
  );
};

export default SearchBar;
