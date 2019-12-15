import React, { Component } from 'react';
import MovieListContainer from './containers/MovieListContainer';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieListContainer />
      </div>
    );
  }
}

  export default App;
