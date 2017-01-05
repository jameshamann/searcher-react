'esversion: 6';
import React, { Component } from 'react';
import SearchResults from './SearchResults';
import ResultsDisplay from './Display';

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
    <div className="Search-Results">
    <SearchResults />
    </div>
  </div>
    );
  }
}


export default App;
