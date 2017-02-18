import React, { Component } from 'react'
import '../public/css/skeleton.css';
import '../public/css/normalize.css';


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
                title:  json.Title,
                actors: 'Actors: ' + json.Actors,
                released: 'Released: '+ json.Released,
                metacritic: 'Metacritic Score: ' + json.Metascore,
                imdb: 'IMDB Rating: ' + json.imdbRating,
                rotten: 'Rotten Tomato Meter: ' + json.tomatoMeter + '%',
                plot: 'Plot: ' + json.Plot
              });

          });
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearcherApp">
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
      <img src={this.state.poster} alt=""></img>
      <p><b>{this.state.title}</b></p>
      <p>{this.state.actors}</p>
      <p>{this.state.released}</p>
      <p>{this.state.metacritic}</p>
      <p>{this.state.imdb}</p>
      <p>{this.state.rotten}</p>
      <p><b>{this.state.plot}</b></p>
      </div>
    </div>
  );
 }
}

export default SearchResults;
