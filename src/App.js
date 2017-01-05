'esversion: 6';
import React, { Component } from 'react';
import Search from './Search';
import Results from './Results';

import logo from '../public/logo.svg';
import '../public/App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
          <h2>Welcome to Searcher</h2>
        </div>
    <div className="Search">
      <Search />
    </div>
    <div className="Results">
      <Results />
    </div>
  </div>
    );
  }
}


export default App;
