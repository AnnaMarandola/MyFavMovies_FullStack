import React, { Component, Fragment } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';

class MovieListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            movies: []
        };
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies() {
        axios.get('/api/movies')
            .then(res => res.data)
            .then(movies => this.setState({ movies }))
            .catch(error => this.setState({ error}));
    }

    render() {
        const { error, movies } = this.state;
        return (
            <Fragment>
            {
                error
                ?<div>{ error.message }</div>
                : <MovieList movies={movies} />
            }
            </Fragment>
        );
}

}


export default MovieListContainer;
