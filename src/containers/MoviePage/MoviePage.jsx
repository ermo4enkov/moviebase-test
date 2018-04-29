import React, { Component } from 'react';
import request from '../../utils/request';
import { FILM_URL, TOKEN, IMAGE_URL } from '../../utils/constants';

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
    return (
      <div>
        Film page
        <div>Budget {budget}</div>
        <div>Homepage {homepage}</div>
        <div>Title {original_title}</div>
        <div>Overview {overview}</div>
        <div>Release {release_date}</div>
        <div>Tagline {tagline}</div>
        <div>Vote {vote_average}</div>
        <div>Vote count {vote_count}</div>
        <img src={`${IMAGE_URL}${poster_path}`} alt="poster" />
      </div>
    );
  }
}

export default MoviePage;
