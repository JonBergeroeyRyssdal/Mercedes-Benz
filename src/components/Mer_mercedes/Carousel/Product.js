import React from "react";

export default function Product(props) {
  return (
    <div className="pe-3">
      <div
        className="card card-carousel d-flex"
        style={{
          height: "450px",
          backgroundImage: `url(${props.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mt-auto mb-5 mx-3 text-white">
          <h4 className=" ">{props.name}</h4>
          <p className=" ">{props.info}</p>
          <a href="#" class="btn btn-primary rounded-pill w-100 py-2">
            Utforsk nå
          </a>
        </div>
      </div>
    </div>
  );
}
