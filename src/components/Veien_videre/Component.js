// ListComponent.js
import React from "react";

const ItemComponent = ({ id, title, className }) => {
  return (
    <div className={className} >
      <a  className="d-flex justify-content-center align-items-center" href="#" id={`item-${id}`}>
        {title}
      </a>
    </div>
  );
};

export default ItemComponent;
