function Header() {
  return (
    <div>
      <div id="background-header" className="d-lg-none"></div>
      <header className="container-fluid p-4 px-lg-5 d-flex align-items-center">
        <div className="col-lg-5 text-white">
          <h1 className="fs-1 d-lg-none pb-4">EQA og EQB fra Mercedes-Benz</h1>
          <h1 className="d-none d-lg-block">EQA og EQB fra Mercedes-Benz</h1>
          <p className="pb-4">
            Oppdag Mercedes-Benz innovasjoner for den helelektriske tidsalderen
            og den luksuriøse kjøreopplevelsen.
          </p>
          <div className="row d-lg-none">
            <div className="col-12 d-flex justify-content-center mb-2 ">
              <button
                type="button "
                class="btn btn-primary rounded-pill fw-bold py-2 custom-bigger-btn"
              >
                Til EQA
              </button>
            </div>
            <div className="col-12 d-flex justify-content-center ">
              <button
                type="button"
                class="btn btn-outline-light rounded-pill fw-bold py-2 custom-bigger-btn"
              >
                Til EQB
              </button>
            </div>
          </div>
          <div className="d-none d-lg-block">
          <button
            type="button "
            class="btn btn-primary rounded-pill fw-bold px-5 me-lg-3"
          >
            Til EQA
          </button>
          <button
            type="button"
            class="btn btn-outline-light rounded-pill fw-bold px-5"
          >
            Til EQB
          </button>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Header;
