import React from "react";
import "./Navbar.css";
import { Button, FormControl, InputGroup } from "react-bootstrap";
const Navbar = (props) => {
  return (
    <div>
      <div className="container mt-4 text-start ">
        <nav className="d-flex align-items-center justify-content-between">
          <div>
            <a
              href="./Navbar"
              className="navbar-brand fs-5 fw-bold text-success"
            >
              Amazon <small className="fs-3 text-danger">Lite</small>
            </a>
          </div>
          <ul className="navbar-item">
            <li className="nav-item">
              <a className="navbar-link" href="./Navbar">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a href="./navbar">
                <i className="fa-solid fa-cart-arrow-down me-2 text-danger"></i>
                <button type="button" className="cart-button position-relative">
                  Inbox
                  <span className="position-absolute top-5 start-0 translate-middle badge rounded-pill bg-danger">
                    {props.count}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </button>
              </a>
            </li>
          </ul>
        </nav>
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            id="input"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="border-primary outline-none"
          />
          <Button onClick={InputValue} variant="outline-primary">
            Search
          </Button>
        </InputGroup>
        <p id="alert" className="fw-bold text-danger text-center d-none">
          Thanks For Using. But It Doesn't Work.
        </p>
      </div>
    </div>
  );
};
const InputValue = () => {
  const input = document.getElementById("input");
  input.value = "";
  document.getElementById("alert").classList =
    "fw-bold text-danger text-center d-block";
};
export default Navbar;
