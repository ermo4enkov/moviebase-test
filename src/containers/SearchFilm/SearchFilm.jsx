import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PageSelector from '../../components/PageSelector';

import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';
import { bindActionCreators } from 'redux';

export class SearchFilm extends Component {
  constructor() {
    super();
  }
  searchFilmByTitle(event) {
    const { searchFilmsInCollection } = this.props;
    searchFilmsInCollection(event.target.value);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <input type="text" onChange={this.searchFilmByTitle.bind(this)} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // searchFilmsInCollection: bindActionCreators(
    //   searchFilmsInCollection,
    //   dispatch,
    // ),
    searchFilmsInCollection: value => {
      dispatch(searchFilmsInCollection(value));
    },
  };
};
export default connect(mapDispatchToProps)(SearchFilm);
