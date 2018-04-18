import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../assets/logo.svg';
import './App.css';
import request from '../../utils/request';
import { TOKEN, POPULAR_FILMS } from '../../utils/constants';
import SideBar from '../SideBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }
  componentDidMount() {
    let page = '1';
    request(`${POPULAR_FILMS}${page}`).then(data => {
      this.initialData = JSON.parse(data);
      this.setState({
        data: this.initialData.results,
      });
    });
  }
  render() {
    this.state.data ? this.state.data.map(item => console.log(item)) : false;
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <SideBar />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
