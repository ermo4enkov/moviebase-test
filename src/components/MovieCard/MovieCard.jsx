import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
const MovieCard = props => {
  return (
    <div className="MovieCard">
      {props['title']}
      <img src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" />
      {props['vote_average']}
      {props['release_date']}
      {props['overview']}
    </div>
  );
};

export default MovieCard;
