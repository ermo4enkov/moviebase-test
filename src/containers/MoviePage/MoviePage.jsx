import React, { Component } from 'react';
import request from '../../utils/request';
import { FILM_URL, TOKEN, IMAGE_URL } from '../../utils/constants';
import './MoviePage.css';

export class MoviePage extends Component {
  constructor() {
    super();
    this.state = {
      budget: '',
      genres: [],
      homepage: '',
      original_title: '',
      overview: '',
      poster_path: '',
      production_companies: [],
      release_date: '',
      tagline: '',
      vote_average: '',
      vote_count: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id.slice(3);
    request(`${FILM_URL}${id}?${TOKEN}`).then(res =>
      this.setState({
        budget: res.data['budget'],
        genres: res.data['genres'],
        homepage: res.data['homepage'],
        original_title: res.data['original_title'],
        overview: res.data['overview'],
        poster_path: res.data['poster_path'],
        production_companies: res.data['production_companies'],
        release_date: res.data['release_date'],
        tagline: res.data['tagline'],
        vote_average: res.data['vote_average'],
        vote_count: res.data['vote_count'],
      }),
    );
  }
  render() {
    const {
      budget,
      genres,
      homepage,
      original_title,
      overview,
      poster_path,
      production_companies,
      release_date,
      tagline,
      vote_average,
      vote_count,
    } = this.state;

    const imageUrl = `${IMAGE_URL}${poster_path}`;
    console.log(imageUrl)
    return (
      <div className="MoviePage container">
        <div>
          <img className="MoviePage__poster" src={imageUrl} alt="movie poster"/>
        </div>
        <div>
          <div><span className="MoviePage__title">Title:</span> {original_title}</div>
          <div><span className="MoviePage__title">Homepage:</span> <a href={homepage}>{homepage}</a></div>
          <div><span className="MoviePage__title">Budget:</span> {budget}</div>
          <div><span className="MoviePage__title">Overview:</span> {overview}</div>
          <div><span className="MoviePage__title">Release:</span> {release_date}</div>
          <div><span className="MoviePage__title">Tagline:</span> {tagline}</div>
          <div><span className="MoviePage__title">Vote:</span> {vote_average}</div>
          <div><span className="MoviePage__title">Vote count:</span> {vote_count}</div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
