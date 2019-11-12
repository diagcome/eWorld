import React from 'react';
import { Modal } from 'react-bootstrap';
import './PopUp.scss';

function PopUp(props) {
    const [show, setShow] = React.useState(props.statusError);
  
    return (
      <>
        <Modal
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Error message
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.messageError}
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default PopUp;