import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';

const MovieCard = props => {
  const link = `/movie/:id${props['id']}`;
  return (
    <Link className="MovieCard" to={link}>
      {props['title']}
      <img src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" />
      {props['vote_average']}
      {props['release_date']}
      {props['overview']}
    </Link>
  );
};

export default MovieCard;
