import Sedan_carousel from "./Carousel/Sedan/Sedan_carousel";
import SUV_carousel from "./Carousel/SUV/SUV_carousel";
import Coupe_carousel from "./Carousel/Coupe/Coupe_carousel";
import React from "react";
import Buttom_info from "./Buttom_info";
import Title_våre_modeller from "./Title_våre_modeller";

function Våre_modeller_sm_screen() {
  return (
    <section className="container-fluid m-4 d-lg-none">
      <Title_våre_modeller />
      <div class="accordion row" id="accordionPanelsStayOpenExample">
        <div class="accordion-item ps-0">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Sedan
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <Sedan_carousel />
            </div>
          </div>
        </div>
        <div class="accordion-item ps-0">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              SUV/Gelanderwagen
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <SUV_carousel />
            </div>
          </div>
        </div>
        <div class="accordion-item ps-0">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button
              class="accordion-button collapsed px-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Coupe
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div class="accordion-body">
              <Coupe_carousel />
            </div>
          </div>
        </div>
      </div>
      <Buttom_info />
    </section>
  );
}

export default Våre_modeller_sm_screen;
