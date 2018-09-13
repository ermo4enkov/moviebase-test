import React, { Component } from 'react';
import './moviesCollectionPage.css'

import MovieList from '../../containers/MovieList';
import Pagination from '../../containers/Pagination';
import SearchFilm from '../../containers/SearchFilm';

const MoviesCollectionPage = () => {
  return (
    <div className="moviesCollectionPage container">
      <SearchFilm />
      <MovieList />
      <Pagination />
    </div>
  );
};

export default MoviesCollectionPage;
