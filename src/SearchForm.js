import React, { Component } from 'react'
import '../public/App.css';

class SearchForm extends Component {

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
      <div className="InputForm">
      <form onSubmit={this.handleSubmit}>
       <label className="form">
          <input type="text" placeholder="Enter a Movie or TV Show" id="searchBar" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Search!" />
     </form>
    </div>
  );
 }
}

export default SearchForm;
