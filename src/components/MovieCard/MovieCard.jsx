import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = props => {
  const link = `/movie/:id${props['id']}`;
  console.log(props)
  return (
    <Link className="MovieCard" to={link}>
      <img src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" />
      <div className="MovieCard__about">
        <div className="MovieCard__title">{props['title']}</div>
        <div className="MovieCard__overview">{props['overview']}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
