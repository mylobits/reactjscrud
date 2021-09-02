import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import AddMovie from "./movie/AddMovie";
import AddActor from "./actor/AddActor";
import { set } from "lodash";

function ModalDialog(props) {
    
    const [show, setShow] = useState(false);
    const [heading, setHeading] = useState("");
    
  
    const handleClose = () => setShow(false);
    const mhandleClose = () => props.setMovieDialog(false);
    const handleShow = (e) => {
        setShow(true);
    };

    switch (props.ChildModal) {
        case "AddMovie":
          console.log(props);
            return (
                <>            
                  <Modal show={props.movieDialog} onHide={mhandleClose} id={"AddMovie"}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add New Movie</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AddMovie/>
                    </Modal.Body>
                  </Modal>
                </>
              );
        case "AddActor":
            return (
                <>
                  <Button variant="primary" onClick={handleShow}>
                    Add Actor
                  </Button>
            
                  <Modal show={show} onHide={handleClose} id={"AddActor"}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add new Actor</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <AddActor/>
                    </Modal.Body>
                  </Modal>
                </>
              );  
    
        default:
            return (
                <>
                </>
            )
    }
  
    
}
  
export default ModalDialog;