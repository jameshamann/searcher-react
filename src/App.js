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
        <img src={logo} className="App-logo" alt="logo"></img>
          <h2>Welcome to Searcher</h2>
        </div>
      <div className="Search-form">
     <form onSubmit={this.handleSubmit}>
       <label className="form">
          <input type="text" placeholder="Enter a Movie or TV Show" id="searchBar" value={this.state.value} onChange={this.handleChange} />
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
