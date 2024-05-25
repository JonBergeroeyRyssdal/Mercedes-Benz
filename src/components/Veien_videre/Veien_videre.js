import React from "react";
import ItemComponent from "./Component";

const Veien_videre = () => {
  // Array of data for different lists
  const listsData = [
    {
      title: "Alle modeller",
      className: "col-lg-6 col-12 order-first",
      id: "alle_modeller",
    },
    {
      title: "Bestill service",
      className: "col-lg-3 col-md-6 col-12 order-3 order-lg-1",
      id: "bestill_service",
    },
    {
      title: "Finn forhandler",
      className: "col-lg-3 col-md-6 col-12 order-5 order-lg-2",
      id: "finn_forhandler",
    },
    {
      title: "Aktuelle tilbud og kampanjer",
      className: "col-lg-3 col-md-6 col-12 order-1 order-lg-3",
      id: "aktuelle_tilbud",
    },
    {
      title: "Bestill prøvekjøring",
      className: "col-lg-3 col-md-6 col-12 order-2 order-lg-4",
      id: "bestill_prøvekjøring",
    },
    {
      title: "Nyttekjøretøy og varebiler",
      className: "col-lg-3 col-md-6 col-12 order-4 order-lg-5",
      id: "nyttekjøretøy_varebiler",
    },
    {
      title: "Mercedes me",
      className: "col-lg-3 col-md-6 col-12 order-last",
      id: "mercedes_me",
    },
  ];

  return (
    <section className="container-fluid px-4">
      <h2 className="my-5">Veien videre</h2>
      <div className="row text-white g-4">
        {listsData.map((item) => (
          <ItemComponent
            key={item.id}
            title={item.title}
            className={item.className}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );

  
};

export default Veien_videre;


