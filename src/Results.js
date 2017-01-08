import React, { Component } from 'react'
import Search from './Search';

import '../public/App.css';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {result: ''};
  }


  render() {
    return (
    <div className="Results">
      <img src={this.state.result.poster} alt="Title Poster"></img>
      <p>Title: {this.state.result.title}</p>
      <p>Released: {this.state.released}</p>
      <p>Metacritic Rating: {this.state.metacritic}</p>
      <p>IMDB Rating: {this.state.imdb}</p>
      <p>Rotten Tomato Meter: {this.state.rotten}%</p>
    </div>
  );
 }
}

export default Results;
