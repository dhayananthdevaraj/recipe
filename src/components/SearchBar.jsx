import React from 'react';

function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar" data-testid="search-input">
      <input type="text" placeholder="Search recipes..."  onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
