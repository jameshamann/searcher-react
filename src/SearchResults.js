import React, { Component } from 'react'
import '../public/App.css';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
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
                error: json.Error,
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
      <div className="InputForm">
      <form onSubmit={this.handleSubmit}>
       <label className="form">
          <input type="text" placeholder="Enter a Movie or TV Show" id="searchBar" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search!" />
     </form>
    </div>
    <div className="SearchResults">
      <p>{this.state.error}</p>
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
