'esversion: 6';
import React, { Component } from 'react';
import SearchResults from './SearchResults';
import logo from '../public/logo.svg';
import '../public/css/normalize.css';
import '../public/css/skeleton.css';
import '../public/css/App.css';



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
      <div className="App-footer">
        <p>Created by <a href="jameshamann.com">James Hamann</a></p>
      </div>
</div>
    );
  }
}


export default App;
