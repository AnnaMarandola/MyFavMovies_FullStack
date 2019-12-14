import React, { Component } from 'react';
import './App.css';
import MovieItem from './components/MovieItem';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieItem 
        title="Kill Bill"
        genre="Action"
        rate="5"
        director="Quentin Tarentino"
        released="2003-11-26"
        sum_up="After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her."
        poster_url="https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
        />
      </div>
    );
  }
}

  export default App;
