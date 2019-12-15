import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({ movies }) => (
    <div className="AlbumList">
        {
            movies.map((movie, index) =>
                <MovieItem
                key={index}
                {...movie}
                />
            )
        }
    </div>
);

export default MovieList;
