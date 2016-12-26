'esversion: 6';

import React, { Component } from 'react';
import SearchForm from './SearchForm';

class SearchResults extends Component {

  constructor(props) {
    super(props);
    this.state = {results: []};

    this.updateResults = this.updateResults.bind(this)
  }

  updateResults() {

  }

  render() {
    return (
      <div className="Results">

      </div>
  );
  }

}

export default SearchResults;
