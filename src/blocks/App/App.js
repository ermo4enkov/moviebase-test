import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from '../../assets/logo.svg';
import './App.css';
import request from '../../utils/request';
import { TOKEN } from '../../utils/constants';
import SideBar from '../SideBar';

class App extends Component {
  componentDidMount() {
    request(`https://api.themoviedb.org/3/movie/550?${TOKEN}`).then(data => {
      this.initialData = JSON.parse(data);
      console.log(this.initialData);
    });
  }
  render() {
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
