'esversion: 6';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  getInitialState() {
    return { showResults: false };
  }

  onSubmit() {
    return { showResults: true };
  }


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
    var _this = this;
    fetch('https://www.omdbapi.com/?t=' + this.state.value)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
              console.log(json)
              _this.setState({
                poster: json.Poster,
                title: json.Title,
                released: json.Released,
                metacritic: json.Metascore,
                imdb: json.imdbRating

              });
          });
    event.preventDefault();
  }

  showResults() {
    return (
    <div className="Title-info">
      <img src={this.state.poster} alt="Title Poster"></img>
      <p>Title: {this.state.title}</p>
      <p>Released: {this.state.released}</p>
      <p>Metacritic Rating: {this.state.metacritic}</p>
      <p>IMDB Rating: {this.state.imdb}</p>
    </div>
  );
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Searcher</h2>
        </div>
      <div className="Search-form">
     <form onSubmit={this.handleSubmit}>
       <label>
         Movie Title:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
       </label>
        <input type="submit" value="Submit" />
     </form>
    </div>
  </div>
    );
  }
}


export default App;
