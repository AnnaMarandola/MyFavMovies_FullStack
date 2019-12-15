import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class NewMovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            director: "",
            released: "",
            sum_up: "",
            poster_url: "",
            rate: "",
            genre: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange({target}) {
        const {name, value} = target;
        this.setState({ [name]: value });

    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/movies', this.state)
        .then(result => console.log(result.data));
    }

    render() {
        return (
            <form className="NewMovie" onSubmit={this.handleSubmit}>
                <h2>Add a new movie</h2>
                <label>Movie title</label>
                <input type="text" name="title" onChange={this.handleChange}/>

                <label>Director</label>
                <input type="text" name="director" onChange={this.handleChange}/>

                <label>Released date</label>
                <input type="text" name="released" onChange={this.handleChange}/>

                <label>Genre</label>
                <input type="text" name="genre" onChange={this.handleChange}/>

                <label>Sum up</label>
                <input type="text" name="sum_up" onChange={this.handleChange}/>

                <label>Poster</label>
                <input type="text" name="poster_url" onChange={this.handleChange}/>

                <label>Rating (score out of 5)</label>
                <input type="text" name="rate" onChange={this.handleChange}/>

                <button type="submit">Add movie</button>




            </form>
        )
    }
}

export default NewMovieContainer;
