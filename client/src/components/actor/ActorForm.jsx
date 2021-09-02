import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const ActorForm = (props) => {
  const [Actor, setActor] = useState({
    actorName: props.Actor ? props.Actor.actorName : '',
    description: props.Actor ? props.Actor.description : '',
    date: props.Actor ? props.Actor.date : '',
    createdAt: props.Actor ? props.Actor.createdAt : '',
    updatedAt: props.Actor ? props.Actor.updatedAt : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { actorName, description } = Actor;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [actorName, description];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const Actor = {
        id: uuidv4(),
        actorName,
        description,
        date: new Date()
      };
      props.handleOnSubmit(Actor);
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
      //     setActor((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      // case 'price':
      //   if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
      //     setActor((prevState) => ({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      //   break;
      default:
        setActor((prevState) => ({
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
          <Form.Label>Actor Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="actorName"
            value={actorName}
            placeholder="Enter name of Actor"
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
            placeholder="Enter Actor description"
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

export default ActorForm;