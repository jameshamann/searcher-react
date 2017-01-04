import React, { Component } from 'react'
import Search from './Search';
import '../public/App.css';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  setValue() {
    this.setState({value: Search.state.value})
  }

  handleSubmit(event) {
    this.setValue();
    console.log(this)
    var results;
    var self = this;
    console.log(self);
    fetch('https://www.omdbapi.com/?tomatoes=true&t=' + this.state.value)
        .then(function(res) {
            return res.json();
        }).then(function(json) {
              console.log(json)
              self.setState({
                poster: json.Poster,
                title: json.Title,
                released: json.Released,
                metacritic: json.Metascore,
                imdb: json.imdbRating,
                rotten: json.tomatoMeter
              });

          });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form>  <input type="submit" value="Search!" /></form>


    <div className="SearchResults">
      <img src={this.state.poster} alt="Title Poster"></img>
      <p>Title: {this.state.title}</p>
      <p>Released: {this.state.released}</p>
      <p>Metacritic Rating: {this.state.metacritic}</p>
      <p>IMDB Rating: {this.state.imdb}</p>
      <p>Rotten Tomato Meter: {this.state.rotten}%</p>
    </div>
    </div>
  );
 }
}

export default SearchResults;
