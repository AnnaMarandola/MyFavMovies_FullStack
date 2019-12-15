const express = require ('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.json());



app.get('/api/movies', (req, res) => {
    db.query('SELECT * FROM myMovies', (err, movies) => {
        res.json(movies);
    })
});

app.post('/api/movies', (req, res) => {
    db.query('INSERT INTO myMovies SET ?', req.body, (err, results) => {
        if(err) {
            return res.status(500).send(err.message);
        }
        res.json(results);
    })
})


app.listen(8000);
