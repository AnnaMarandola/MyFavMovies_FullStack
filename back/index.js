const express = require ('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());



app.get('/api/movies', (req, res) => {
  let sql = 'SELECT * FROM myMovies';
  const sqlValues = [];

  if (req.query.rating) {
    sql += ' WHERE rating =?';
    sqlValues.push(req.query.rating);
  }

  if (req.query.genre) {
    sql += ' WHERE genre =?';
    sqlValues.push(req.query.genre);
  }

  db.query(sql, sqlValues, (err, results) => {
    if (err) {
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(results);
    }
  });
});

app.post('/api/movie', (req, res) => {
    db.query('INSERT INTO myMovies SET ?', req.body, (err, results) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(results);
    })
})


app.listen(8000);
