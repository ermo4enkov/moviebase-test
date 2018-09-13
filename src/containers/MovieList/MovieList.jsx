import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard';
import './MovieList.css';

class MovieList extends Component {
  render() {
    const { films_collection, search_text, filtered_collection } = this.props;

    const MovieCards =
      films_collection.length > 0
        ? films_collection.map((item, index) => {
            return (
              <MovieCard
                key={index}
                num={index}
                title={item['title']}
                poster_path={item['poster_path']}
                id={item['id']}
                overview={item['overview']}
              />
            );
          })
        : 'load...';

    const filteredCards =
      filtered_collection.length > 0
        ? filtered_collection.map((item, index) => {
            return (
              <MovieCard
                key={index}
                num={index}
                title={item['title']}
                poster_path={item['poster_path']}
                id={item['id']}
                overview={item['overview']}
              />
            );
          })
        : 'load...';

    return !search_text.length > 0 ? (
      <div className="MovieList">{MovieCards}</div>
    ) : (
      <div className="MovieList">{filteredCards}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    films_collection: state.films_collection,
    search_text: state.search_text,
    filtered_collection: state.filtered_collection,
  };
}

export default connect(mapStateToProps)(MovieList);
