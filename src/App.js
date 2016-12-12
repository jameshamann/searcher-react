'esversion: 6';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this)
    var self = this;
    fetch('https://www.omdbapi.com/?t=' + this.state.value)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
              console.log(json)
              self.setState({
                poster: json.Poster,
                title: json.Title,
                released: json.Released,
                metacritic: json.Metascore,
                imdb: json.imdbRating

              });
          });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Searcher</h2>
          <h4>Type in a Movie or TV Show Title to get started!</h4>
        </div>
      <div className="Search-form">
     <form onSubmit={this.handleSubmit}>
       <label>
         Movie Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
        <input type="submit" value="Search!" />
     </form>
    </div>
    <div className="Title-info">
      <img src={this.state.poster} alt="Title Poster"></img>
      <p>Title: {this.state.title}</p>
      <p>Released: {this.state.released}</p>
      <p>Metacritic Rating: {this.state.metacritic}</p>
      <p>IMDB Rating: {this.state.imdb}</p>
    </div>
  </div>
    );
  }
}


export default App;
