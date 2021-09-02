import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import ReactTags from 'react-tag-autocomplete';

const MovieForm = (props) => {
  const [Movie, setMovie] = useState({
    movieName: props.Movie ? props.Movie.movieName : '',
    actor: props.Movie ? props.Movie.actor : '',
    description: props.Movie ? props.Movie.description : '',
    price: props.Movie ? props.Movie.price : '',
    date: props.Movie ? props.Movie.date : '',
    createdAt: props.Movie ? props.Movie.createdAt : '',
    updatedAt: props.Movie ? props.Movie.updatedAt : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { movieName, actor, price, description } = Movie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [movieName, actor, price, description];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const Movie = {
        id: uuidv4(),
        movieName,
        actor,
        price,
        description,
        date: new Date()
      };
      props.handleOnSubmit(Movie);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      // case 'description':
      //   if (value === '') {
      //     setMovie((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setMovie((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setMovie((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="movieName"
            value={movieName}
            placeholder="Enter name of Movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="actor">
          <Form.Label>Movie Actor</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="actor"
            value={actor}
            placeholder="Enter name of actor"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>description</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="description"
            value={description}
            placeholder="Enter Movie description"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Movie Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of Movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MovieForm;