import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from '../../components/SearchInput';

import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';
import { bindActionCreators } from 'redux';

export class SearchFilm extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const { dispatch } = this.props;
    setTimeout(function() {
      dispatch(searchFilmsInCollection('zoo'));
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
export default connect(mapDispatchToProps)(SearchFilm);
