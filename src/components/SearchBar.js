import React, { useState } from 'react';

const SearchBar = (props) => {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState('');

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  // All you need to do to get result is "ENTER KEY"
  const handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchText);
    }
  };

  return (
    <div>
      <div className="control">
        <input
          className="input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          type="text"
          value={searchText}
          placeholder="Search your movies"
        />
      </div>
    </div>
  );
}

export default SearchBar;
