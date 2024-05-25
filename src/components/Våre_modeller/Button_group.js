import React, { useState } from 'react';

function Button_group() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  return (
    
      <div className="row">
        <div className="d-flex justify-content-center">
          <div
            class="btn-group btn-group-no-shadow d-xl-block d-none"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio1"
              autocomplete="off"
              onClick={toggleVisibility}
            />
            <label
              class="btn btn-outline-dark p-3 rounded-pill-start"
              for="btnradio1"
            >
              Sedan
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio2"
              autocomplete="off"
            />
            <label class="btn btn-outline-dark p-3" for="btnradio2">
              SUV/Gelandewagen
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
            />
            <label class="btn btn-outline-dark p-3" for="btnradio3">
              Coupe
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio4"
              autocomplete="off"
            />
            <label class="btn btn-outline-dark p-3" for="btnradio4">
              Cabriolet/Roadster
            </label>

            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio5"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-dark p-3 rounded-pill-end"
              for="btnradio5"
            >
              Storbillimousin
            </label>
          </div>
        </div>
      </div>
  );
}

export default Button_group;
