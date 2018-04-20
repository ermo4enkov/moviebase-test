import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from '../../assets/logo.svg';
import './App.css';
import MovieList from '../MovieList';
import Pagination from '../Pagination';

import getFilmsCollection from '../../redux/actions/getFilmsCollection';
import searchFilmsInCollection from '../../redux/actions/searchFilmsInCollection';

import { bindActionCreators } from 'redux';

class App extends Component {
  componentDidMount() {
    this.props.getFilmsCollection();
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <MovieList />
          <Pagination />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    films_collection: state.films_collection,
    fetching: state.fetching,
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getFilmsCollection: bindActionCreators(getFilmsCollection, dispatch),
    searchFilmsInCollection: bindActionCreators(
      searchFilmsInCollection,
      dispatch,
    ),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
