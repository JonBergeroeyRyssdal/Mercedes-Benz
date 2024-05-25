import Mer_mercedes_carousel from "./Carousel/Our_models_carousel";

function Mer_mercedes() {
  return (
    <section className="container-fluid mb-5 pb-5 px-4">
      <div className="row">
        <h2 className="">Mer Mercedes</h2>
        <p className=" mt-4 text-secondary fs-5">
          Utforsk enda mer i Mercedes-Benz sin spennende verden. Her kan du
          fordype deg i spesielle temaer og lese mer om historikk, design,
          teknologi og nyheter.
        </p>
      </div>
      <div className="row mt-4">
      <Mer_mercedes_carousel />
      </div>
      
    </section>
  );
}

export default Mer_mercedes;
