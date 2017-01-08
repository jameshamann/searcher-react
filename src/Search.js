import React, { Component } from 'react'
import '../public/App.css';

class Search extends Component {


  constructor(props) {
    super(props);
    this.state = {value: '',
                  result: ''};

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
            console.log(res.json())
        }).then(function(json) {
              self.setState({result: json})
          });
        console.log(this.state.result)

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
    </div>
  );
 }
}

export default Search;
