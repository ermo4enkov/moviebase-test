import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../../components/MovieCard';

class MovieList extends Component {
  render() {
    const { films_collection } = this.props;
    const MovieCards =
      films_collection.length > 0
        ? films_collection.map((item, index) => {
            return (
              <MovieCard
                key={index}
                title={item['title']}
                poster_path={item['poster_path']}
                vote_average={item['vote_average']}
                release_date={item['release_date']}
                overview={item['overview']}
              />
            );
          })
        : '...load';

    return <div>{MovieCards}</div>;
  }
}

function mapStateToProps(state) {
  return {
    films_collection: state.films_collection,
  };
}

export default connect(mapStateToProps)(MovieList);
