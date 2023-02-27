import './Popup.css';
import React, { useState } from 'react';
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';



const Popup = () => {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return(
    <div style={{ display: 'block'}}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Thank you for visiting my website! Feel free to click around!</p>
        </Modal.Body>


      </Modal>
    </div>
    );

};
export default Popup
