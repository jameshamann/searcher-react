'esversion: 6';
import React, { Component } from 'react';
import SearchResults from './SearchResults';
import logo from '../public/logo.svg';
import '../public/css/normalize.css';
import '../public/css/skeleton.css';
import '../public/css/App.css';
require('dotenv').config()


class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
          <h2>Searcher</h2>
        </div>
    <div className="Search-Results">
      <SearchResults />
    </div>
</div>
    );
  }
}


export default App;
