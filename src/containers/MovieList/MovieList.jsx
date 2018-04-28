import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from '../../components/MovieCard';

class MovieList extends Component {
  render() {
    const { films_collection, search_text, filtered_collection } = this.props;

    const MovieCards =
      films_collection.length > 0
        ? films_collection.map((item, index) => {
            return (
              <MovieCard
                key={index}
                title={item['title']}
                poster_path={item['poster_path']}
                id={item['id']}
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
                title={item['title']}
                poster_path={item['poster_path']}
                id={item['id']}
              />
            );
          })
        : 'load...';

    return !search_text.length > 0 ? (
      <div>{MovieCards}</div>
    ) : (
      <div>{filteredCards}</div>
    );
    // return <div>{MovieCards}</div>;
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
