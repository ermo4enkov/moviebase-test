import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../../components/MovieCard';

class MovieList extends Component {
  render() {
    const { filmsCollection } = this.props;
    const MovieCards =
      filmsCollection.length > 0
        ? filmsCollection.map((item, index) => {
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
    filmsCollection: state.filmsCollection,
  };
}

export default connect(mapStateToProps)(MovieList);
