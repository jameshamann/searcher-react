import React, { Component } from 'react'
import SearchResults from './SearchResults';
import '../public/App.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

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

export default Search;
