import React, { Component } from 'react';

import MovieList from '../../containers/MovieList';
import Pagination from '../../containers/Pagination';
import SearchFilm from '../../containers/SearchFilm';

const MoviesCollectionPage = () => {
  return (
    <div>
      <SearchFilm />
      <MovieList />
      <Pagination />
    </div>
  );
};

export default MoviesCollectionPage;
