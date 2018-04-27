import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from '../../assets/logo.svg';
import './App.css';
import MovieList from '../MovieList';
import Pagination from '../Pagination';
import SearchFilm from '../SearchFilm';
import MoviesCollectionPage from '../../components/MoviesCollectionPage/MoviesCollectionPage';

import getFilmsCollection from '../../redux/actions/getFilmsCollection';

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
            <h1 className="App-title">Welcome to Films base</h1>
            {/* <SearchFilm /> */}
          </header>
          {/* <MovieList />
          <Pagination /> */}
          <MoviesCollectionPage />
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
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
