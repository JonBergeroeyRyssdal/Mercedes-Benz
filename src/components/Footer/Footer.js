import facebook from "../../images/facebook.png"; // Import the image file
import youtube from "../../images/youtube.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import up from "../../images/up.png";
import HigherLevelComponent from "./HigherLevelComponent";

function Footer() {
  return (
    <footer className="container-fluid p-4 p-xl-5">
      <div class=" row text-center">
        <a href="#nav" className="text-white">
          <img src={up} alt="" class="" />
          <br></br>
          Opp
        </a>
      </div>
      <HigherLevelComponent></HigherLevelComponent>
      <div className="row border-top border-white pt-4 pb-4">
        <div className="col-12 mb-4 text-center col-xl-4 text-white px-xl-0">
          © Bertel O. Steen AS 2024. Alle rettigheter forbeholdt
        </div>
        <a href="#" className="col-12 mb-4 text-center col-xl-2">Juridiske merknader</a>
        <a href="#" className="col-12 mb-4 text-center col-xl-2">
          Cookie retningslinjer
        </a>
        <a href="#" className="col-12 mb-4 text-center col-xl-2">Personvern</a>
        <div className="col-12 col-xl-2 text-center text-end-xl">
          <a href="#" className="px-3 px-xl-2 ">
            <img src={facebook} alt="" class="" />
          </a>
          <a href="#" className="px-3 px-xl-2">
            <img src={youtube} alt="" class="" />
          </a>
          <a href="#" className="px-3 px-xl-2">
            <img src={instagram} alt="" class="" />
          </a>
          <a href="#" className="px-3 px-xl-2">
            <img src={linkedin} alt="" class="" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
