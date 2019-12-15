import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer';
import NewMovieContainer from './containers/NewMovieContainer';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NewMovieContainer />
        <MovieListContainer />
      </div>
    );
  }
}

  export default App;
