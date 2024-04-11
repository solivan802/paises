import React from "react";
import { useState } from "react";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent({ isOpen, onClose, infoData }) {
  const [show, setShow] = useState(isOpen);
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={isOpen} onHide={onClose} className="mw-100">
        <Modal.Header closeButton>
          <Modal.Title>{infoData?.name?.official}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row d-flex justify-content-center align-items-center text-center">
              <div className="col-md-12">
                <img src={infoData?.flags?.png} />
              </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center text-center">
              <div className="col-md-12">
                <h1>{infoData?.capital}</h1>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default ModalComponent;
