'esversion: 6';

import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchResults from '../src/SearchResults.js';
import App from '../src/App.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders the search results', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(SearchResults).length).toEqual(1);
});
