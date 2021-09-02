import React from 'react';
import ActorForm from './ActorForm';
import ActorDataService from "../../services/actor.service";

const AddActor = () => {
  const handleOnSubmit = (actor) => {


    ActorDataService.create(actor)
    .then(response => {
      this.setState({
        id: response.data.id,
        actorName: response.data.actorName,
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
      <ActorForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddActor;