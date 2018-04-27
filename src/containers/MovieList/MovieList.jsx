import React, { Component } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../../components/MovieCard';

class MovieList extends Component {
  render() {
    const { films_collection, search_text, filtered_collection } = this.props;

    console.log(filtered_collection);

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
        : 'load...';

    // const filteredCards =
    //   filtered_collection.length > 0
    //     ? filtered_collection.map((item, index) => {
    //         return (
    //           <MovieCard
    //             key={index}
    //             title={item['title']}
    //             poster_path={item['poster_path']}
    //             vote_average={item['vote_average']}
    //             release_date={item['release_date']}
    //             overview={item['overview']}
    //           />
    //         );
    //       })
    //     : 'load...';

    // return !search_text.length > 0 ? (
    //   <div>{MovieCards}</div>
    // ) : (
    //   <div>{filteredCards}</div>
    // );
    return <div>{MovieCards}</div>;
  }
}

function mapStateToProps(state) {
  return {
    films_collection: state.films_collection,
    search_text: state.search_text,
    filtered_collection: state.search_text,
  };
}

export default connect(mapStateToProps)(MovieList);
