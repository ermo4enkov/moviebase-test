import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput';

import getFilmsCollection from '../../redux/actions/getFilmsCollection';
import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';
import { bindActionCreators } from 'redux';

export class SearchFilm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <SearchInput searchFilmsInCollection={searchFilmsInCollection} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchFilmsInCollection: bindActionCreators(
      searchFilmsInCollection,
      dispatch,
    ),
  };
}
export default connect(mapDispatchToProps)(SearchFilm);
