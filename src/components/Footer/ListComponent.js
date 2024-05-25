// ListComponent.js
import React from "react";

const ListComponent = ({ title, items }) => {
  return (
    <div className="col-12 col-xl-3 pe-5 " >
      <div className="text-white fs-5 pb-4 bold">{title}</div>
      <ul>
        {items.map((item, index) => (
          <li className="pb-2" key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListComponent;
