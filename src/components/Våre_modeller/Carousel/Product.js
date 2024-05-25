import React from "react";

export default function Product(props) {
  return (
    <div className="card border-0 text-center card-carousel">
      <img className="product--image enlarge-image" src={props.url} alt="product image" />
      <h4 className="mb-3">{props.name}</h4>
      <p className="mb-0">Pris fra kr {props.price},-</p>
      <a href="" className="link-primary mb-4">
        Les mer
      </a>
      <div className="center-btn">
        <button href="#" class="btn btn-outline-dark rounded-pill py-2 fw-bold hidden-button">
          {props.button}
        </button>
      </div>
    </div>
  );
}
