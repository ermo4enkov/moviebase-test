import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../../components/MovieCard';

class MovieList extends Component {
  render() {
    const { data } = this.props;
    const MovieCards =
      data.length > 0
        ? data.map((item, index) => {
            return <MovieCard key={index} title={item['title']} />;
          })
        : '...load';

    return <div>{MovieCards}</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(MovieList);
