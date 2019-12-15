import React, { Component } from 'react';
import MovieList from './components/MovieList';
import './App.css';


const movies = [
  {
    title: 'Kill Bill',
    genre:'Action',
    rate:'5',
    director:'Quentin Tarentino',
    released:'2003-11-26',
    sum_up:'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
    poster_url: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'


  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList movies={movies}/>
      </div>
    );
  }
}

  export default App;
