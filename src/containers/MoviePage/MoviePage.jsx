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
    return (
      <div>
        Film page
        <img src={`${IMAGE_URL}${this.state['poster_path']}`} alt="poster" />
      </div>
    );
  }
}

export default MoviePage;
