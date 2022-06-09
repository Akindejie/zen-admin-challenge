import React, { useState } from 'react';

// Component import
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';

// API import
import MovieSource from './api/MovieSource';

const App = () => {
  const [state, setState] = useState({
    results: [],
  });

  const onSearch = async (text) => {
    const results = await MovieSource.get('/', {
      params: { s: text, i: 'tt3896198', apiKey: 'e7187387' },
    });

    setState((prevState) => {
      return { ...prevState, results: results };
    });
  };

  return (
    <div className="App">
      <h2>
        I did a simple search components that will return arrays of movies
      </h2>
      <SearchBar onSearch={onSearch} />
      <MovieList results={state.results} />
    </div>
  );
};

export default App;
