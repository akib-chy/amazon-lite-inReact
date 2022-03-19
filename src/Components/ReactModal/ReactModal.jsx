import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Rating } from "../Product/Product";

const ReactModal = (props) => {
  const { image, title, price, description, rating, category } = props.product;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Details
      </Button>

      <Modal
        className="shadow"
        size="lg"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{category}</Modal.Title>
        </Modal.Header>
        <div className="text-center mt-4">
          <img className="w-50" src={image} alt="" />
        </div>
        <Modal.Body>
          <h4 className="mt-4 text-center text-success">{title}</h4>
          <p className="mt-3 lead">{description}</p>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <Rating rate={rating}></Rating>
            <p className="me-5 fw-bold fs-5 text-success">Price:$ {price}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReactModal;
