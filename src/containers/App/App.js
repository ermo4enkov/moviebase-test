import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MoviesCollectionPage from '../../components/MoviesCollectionPage/MoviesCollectionPage';
import MoviePage from '../../containers/MoviePage/MoviePage';
import getFilmsCollection from '../../redux/actions/getFilmsCollection';

import { bindActionCreators } from 'redux';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.getFilmsCollection();
  }
  render() {
    return (
      <MuiThemeProvider>
        <header>
          Movie Base test example
        </header>
        <Router>
          <Switch>
            <Route path="/" exact component={MoviesCollectionPage} />
            <Route path="/movie/:id" component={MoviePage} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>
        <footer>
          @ermo4enkov
        </footer>
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
