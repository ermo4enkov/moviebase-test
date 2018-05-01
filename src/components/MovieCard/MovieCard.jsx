import React, { Component } from 'react';
import { IMAGE_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import RaisedButton from 'material-ui/RaisedButton';

const MovieCard = props => {
  const link = `/movie/:id${props['id']}`;
  console.log(props.num);
  return (
    <div className="MovieCard" >
      <img src={`${IMAGE_URL}${props['poster_path']}`} alt="poster" to={link}/>
      <div className="MovieCard__about">
        <div className="MovieCard__title">{props['title']}</div>
        <div className="MovieCard__overview">{props['overview']}</div>
        <Link to={link}>
            <RaisedButton>More detail...</RaisedButton>
        </Link>
        <RaisedButton>Add to favorites</RaisedButton>
      </div>
    </div>
  );
};

export default MovieCard;
