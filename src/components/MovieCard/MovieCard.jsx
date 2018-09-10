import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import RaisedButton from 'material-ui/RaisedButton';
import FavoritesButton from '../../containers/FavoritesButton';

const MovieCard = props => {
  const link = `/movie/:id${props['id']}`;
  return (
    <div className="MovieCard" >
      <img className="MovieCard__img" src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" to={link}/>
      <div className="MovieCard__about">
        <div className="MovieCard__title">{props['title']}</div>
        <div className="MovieCard__overview">{props['overview']}</div>
        <Link to={link}>
            <RaisedButton>More detail...</RaisedButton>
        </Link>
          <FavoritesButton num={props.num}/>
      </div>
    </div>
  );
};

export default MovieCard;
