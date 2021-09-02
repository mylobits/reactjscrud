import React, { useEffect, useState } from 'react';
import {Alert, Button } from "react-bootstrap";
import { connect } from 'react-redux';



const msgTime = 5000;

const mapStateToProps = (state) => {
  return {
      notifications: state.notifications
  }
}
function closeDialog(){
  return false;
}



function AlertDialog(props) {
  

     
    return (
        <Alert show={props.notifications.show} variant="success">
        <Alert.Heading>{props.notifications.title}</Alert.Heading>
        <hr />
        <p>
        {props.notifications.msg}
        </p>
        
        <div className="d-flex justify-content-end">
          <Button onClick={closeDialog} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    )
}

export default connect(mapStateToProps)(AlertDialog);