const express = require ('express');
const db = require('./db');

const app = express();

// const movies = [
//     { 
//       id: 1,
//       title: 'Kill Bill',
//       genre:'Action',
//       rate:'5',
//       director:'Quentin Tarentino',
//       released:'2003-11-26',
//       sum_up:'After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.',
//       poster_url: 'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'
  
  
//     }
//   ]

app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM myMovies', (err, movies) => {
        res.json(movies);
    })
});




app.listen(8000);
