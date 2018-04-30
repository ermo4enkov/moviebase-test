import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import RaisedButton from 'material-ui/RaisedButton';

const MovieCard = props => {
  const link = `/movie/:id${props['id']}`;
  return (
    <Link className="MovieCard" to={link}>
      <img src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" to={link}/>
      <div className="MovieCard__about">
        <div className="MovieCard__title">{props['title']}</div>
        <div className="MovieCard__overview">{props['overview']}</div>
        <RaisedButton>Add to favorites</RaisedButton>
      </div>
    </Link>
  );
};

export default MovieCard;
