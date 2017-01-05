import React, { Component } from 'react'
import SearchResults from './SearchResults';

import '../public/App.css';

class ResultsDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = SearchResults.state.value
  }

  render() {
    return (
    <div className="SearchResults">
      <img src={this.state.poster} alt="Title Poster"></img>
      <p>Title: {this.state.title}</p>
      <p>Released: {this.state.released}</p>
      <p>Metacritic Rating: {this.state.metacritic}</p>
      <p>IMDB Rating: {this.state.imdb}</p>
      <p>Rotten Tomato Meter: {this.state.rotten}%</p>
    </div>
  );
 }
}

export default ResultsDisplay;
