import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';

// import SearchInput from '../../components/SearchInput';

export class SearchFilm extends Component {
  constructor() {
    super();
    this.findmeAFilm = this.findmeAFilm.bind(this);
  }

  findmeAFilm(event) {
    const { searchFilmsInCollection } = this.props;
    searchFilmsInCollection(event.target.value);
  }

  render() {
    const { search_text } = this.props;
    return (
      <div>
        <input type="text" onChange={this.findmeAFilm} value={search_text} />
        {/* <SearchInput searchFilmsInCollection={searchFilmsInCollection()} /> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    search_text: state.search_text,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      searchFilmsInCollection: searchFilmsInCollection,
    },
    dispatch,
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchFilm);
