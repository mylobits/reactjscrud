import React from 'react';
import MovieForm from './MovieForm';
import MovieDataService from "../../services/movie.service";

const AddMovie = (props) => {
  const handleOnSubmit = (movie) => {
    //console.log(movie);
    // Moviename: props.Movie ? props.Movie.Moviename : '',
    // author: props.Movie ? props.Movie.author : '',
    // quantity: props.Movie ? props.Movie.quantity : '',
    // price: props.Movie ? props.Movie.price : '',
    // date: props.Movie ? props.Movie.date

    MovieDataService.create(movie)
    .then(response => {
      this.setState({
        id: response.data.id,
        movieName: response.data.movieName,
        description: response.data.description,
        published: response.data.published,
        submitted: true
        
      });
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <React.Fragment>
      <div className="col-md-8">
        <MovieForm handleOnSubmit={handleOnSubmit} />
      </div>
    </React.Fragment>
  );
};

export default AddMovie;