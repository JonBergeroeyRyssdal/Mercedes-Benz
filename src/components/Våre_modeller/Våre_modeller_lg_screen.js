import Sedan_carousel from "./Carousel/Sedan/Sedan_carousel";
import SUV_carousel from "./Carousel/SUV/SUV_carousel";
import Coupe_carousel from "./Carousel/Coupe/Coupe_carousel";
import React, { useState } from "react";
import Buttom_info from "./Buttom_info";
import Title_våre_modeller from "./Title_våre_modeller";

function Våre_modeller_lg_screen() {
  const [showContent, setShowContent] = useState(1);

  const handleRadioChange = (contentNumber) => {
    setShowContent(contentNumber);
  };

  return (
    <section className="container-fluid p-5 d-none d-lg-block">
      <Title_våre_modeller />
      <div className="row">
        <div className="d-flex justify-content-center">
          <div
            class="btn-group d-xl-block d-none"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="content"
              id="content1"
              autoComplete="off"
              checked={showContent === 1}
              onChange={() => handleRadioChange(1)}
            />
            <label
              className="btn btn-outline-dark rounded-pill-start p-3 shadow-none"
              htmlFor="content1"
            >
              Sedan
            </label>

            <input
              type="radio"
              className="btn-check"
              name="content"
              id="content2"
              autoComplete="off"
              checked={showContent === 2}
              onChange={() => handleRadioChange(2)}
            />
            <label
              className="btn btn-outline-dark p-3 shadow-none"
              htmlFor="content2"
            >
              SUV
            </label>

            <input
              type="radio"
              className="btn-check"
              name="content"
              id="content3"
              autoComplete="off"
              checked={showContent === 3}
              onChange={() => handleRadioChange(3)}
            />
            <label
              className="btn btn-outline-dark rounded-pill-end p-3 shadow-none"
              htmlFor="content3"
            >
              Coupé
            </label>
          </div>
        </div>
      </div>
      {showContent == 1 && (
        <div className="mt-3">
          <Sedan_carousel />
        </div>
      )}

      {showContent == 2 && (
        <div className="mt-3">
          <SUV_carousel />
        </div>
      )}

      {showContent == 3 && (
        <div className="mt-3">
          <Coupe_carousel />
        </div>
      )}

      
    <Buttom_info />
      
    </section>
  );
}

export default Våre_modeller_lg_screen;
