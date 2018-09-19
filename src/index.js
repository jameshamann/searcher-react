'esversion: 6';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './Footer';



import '../public/css/skeleton.css';
import '../public/css/normalize.css';
import '../public/css/index.css';



ReactDOM.render(
  <div>
    <App/>
    <Footer>  <p>Created by <a href="jameshamann.com">James Hamann</a></p> <p> Data provided by  <a href="https://www.omdbapi.com"> OMDb API </a></p></Footer>
  </div>,
  document.getElementById('root')

);
