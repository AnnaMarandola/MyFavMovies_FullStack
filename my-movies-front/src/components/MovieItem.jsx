import React from 'react';

const MovieItem = ({idMovie, title, director, released, poster_url, rate, sum_up, genre, isUnder16}) => (
    <div className="MovieItem">
        <img alt={title} src={poster_url}/>
        <div>
            <h1>{title}</h1>
            <h3>Genre:  {genre}</h3>
            <h4>Director: {director}</h4>
            <h4> {released}</h4>
            <p>{sum_up}</p>
            <h4>rating: {rate}</h4>
            </div>
    </div>
);

export default MovieItem;