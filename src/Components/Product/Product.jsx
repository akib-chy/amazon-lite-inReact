import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./Product.css";

const Product = (props) => {
  const { image, title, price, description, rating } = props.product;

  return (
    <div
      className="col mb-4"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className="card h-100 product shadow">
        <div className="text-center p-4">
          <img className="card-img-top" src={image} alt="" />
        </div>
        <div className="text-start mt-4 card-body">
          <h5 className="card-title">{title.slice(0, 40)}...</h5>
          <h5 className="mt-3 text-danger">$ {price} </h5>
          <p className="card-text">{description.slice(0, 100)}...</p>
          {/* <p className="text-warning icon">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <small className="ms-1 text-secondary">({rating.count})</small>
          </p> */}

          <Rating rate={rating}></Rating>
        </div>
        <div className="button-container border-0 bg-none card-footer p-4">
          <ReactModal product={props.product}></ReactModal>
          <button onClick={props.setCartCount} className="btn btn-warning">
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};
export const Rating = ({ rate }) => {
  if (rate.rate >= 4.5) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate >= 4) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate >= 3.5) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star gray"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate === 3) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate > 3) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
            <i className="fa-solid fa-star gray"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate >= 2.5) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half-stroke"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate >= 2) {
    return (
      <p className="text-warning icon">
        <div>
          <small className="text-success">{rate.rate}</small>
          <div>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star-half"></i>
            <i className="fa-solid fa-star gray"></i>
            <i className="fa-solid fa-star gray"></i>
            <small className="ms-1 text-secondary">({rate.count})</small>
          </div>
        </div>
      </p>
    );
  } else if (rate.rate) {
    return <p className="text-warning icon">No Rating</p>;
  }
  return <div></div>;
};

export default Product;
