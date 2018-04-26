import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';

import SearchInput from '../../components/SearchInput';

export class SearchFilm extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { searchFilmsInCollection } = this.props;
    setTimeout(function() {
      searchFilmsInCollection('zoo');
    }, 3000);
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
export default connect(null, mapDispatchToProps)(SearchFilm);
