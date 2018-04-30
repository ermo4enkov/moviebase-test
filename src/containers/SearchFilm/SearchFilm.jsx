import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';
import TextField from 'material-ui/TextField';

const styles = {
  textAlign: 'center'
};

const stylesTextField ={
  width: "100%"
};

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
      <div style={styles}>
        <TextField hintText="find film by title" onChange={this.findmeAFilm} value={search_text} style={stylesTextField}/>
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
