import Mercedes_svg from "../../images/Mercedes_svg";
import Slogan_svg from "../../images/Slogan_svg";
import carfront from "../../images/carfront.png"; // Import the image file
import sedan from "../../images/sedan.png"; // Import the image file
import suv from "../../images/suv.png"; // Import the image file
import coupe from "../../images/coupe.png"; // Import the image file
import cabriolet from "../../images/cabriolet.png"; // Import the image file
import limousine from "../../images/limousine.png"; // Import the image file
import electric from "../../images/electric.png"; // Import the image file
import van from "../../images/van.png"; // Import the image file

function Navbar2() {
  return (
    <nav>
      <div id="" class="row px-5 py-3 " style={{ height: '100px' }}>
        <a class="col-12 col-lg-1 d-flex d-lg-block justify-content-center" href="#">
          <Mercedes_svg></Mercedes_svg>
        </a>
        <a class="col-lg-2 d-none d-lg-block" href="#"style={{ transform: 'translateY(50%)'}} >
          <Slogan_svg></Slogan_svg>
        </a>
      </div>
      <div class="row navbar-expand-lg  px-5 border-top d-none d-lg-block">
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            {/* Våre modeller */}
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={carfront} alt="" class="" /> Våre modeller
              </a>
              <ul
                class="dropdown-menu custom-dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={sedan} alt="" class="pr-2" />
                    Sedan
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={suv} alt="" class="pr-2" />
                    SUV/Geländewagen
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={coupe} alt="" class="pr-2" />
                    Coupé
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={cabriolet} alt="" class="pr-2" />
                    Cabriolet
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={limousine} alt="" class="pr-2" />
                    Storbillimousin
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={electric} alt="" class="pr-2" /> Elektrisk
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src={van} alt="" class="" /> Nyttekjøretøy/varebiler
                  </a>
                </li>
              </ul>
            </li>
            {/* Kjøpsveiledning */}
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kjøpsveiledning
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Venterommet
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Finansiering/billån/leasing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Hjemlevering
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Næringssalg
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Bruktbil
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Bestill prøvekjøring
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Finn forhandler
                  </a>
                </li>
              </ul>
            </li>
            {/* Service og tjenseter */}
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Service og tjenester
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Oversikt
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Veihjelp/Service24h/Mobilo
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Bestill service
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Service 5 år +
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Eu-kontroll/PKK
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Skadet frontrite
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Serviceavtaler
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Mercedes me
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Digitale tilleggsfunksjoner
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Originaldeler og B2B Connect
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Originaltilbehør
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Instruksjonsbøker
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Lifestyle Collection
                  </a>
                </li>
              </ul>
            </li>
            {/* Våre varemerker */}
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Våre varemerker
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    Oversikt
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Mercedes-AMG
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Mercedes-Maybach
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Night Series
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    MANUFAKTOR
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Lead In Intelligence
                  </a>
                </li>
              </ul>
            </li>
            {/* Mer Mercedes */}
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mer Mercedes
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    SUV fra Mercedes-Benz
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Elektriske modeller
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Elektromobilitet og lading
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Artikler
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Innovasjon
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Historikk og Brand World
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Concept Cars
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Dolby Atmos
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    AMG E PERFORMANCE
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Klassedefinisjoner
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Meld deg på nyhetsbrev
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    smart
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar2;
