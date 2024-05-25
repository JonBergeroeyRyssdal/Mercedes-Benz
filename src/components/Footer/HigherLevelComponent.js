import React from "react";
import ListComponent from "./ListComponent";

const HigherLevelComponent = () => {
  // Array of data for different lists
  const listsData = [
    {
      title: "Kjøp Mercedes-Benz",
      items: [
        "Våre modeller",
        "Anbefalte pakker og aktuelle tilbud",
        "Få tilbud",
        "Bilån og leasing",
        "Bruktbil",
        "Næringssalgfleet",
      ],
    },
    {
      title: "Kontakt og veiledning",
      items: [
        "Kundeservice og Mercedes me support",
        "Venterommet",
        "Bestill prøvekjøring",
        "Få tilbud",
        "Finn forhandler",
        "Hjemelevering",
      ],
    },
    {
      title: "Service og tjenester",
      items: [
        "Veihjelp og Service24h",
        "Mobilo",
        "Bestill service",
        "Serviceavtaler",
        "Originaldeler",
        "B2B Connect",
        "Tilbehør",
        "Lifestyle Collection",
      ],
    },
    {
      title: "Om oss",
      items: [
        "Om oss",
        "Merkevarens historie",
        "Innovasjoner",
        "Bertel O. Steen AS",
        "Meld deg på nyhetsbrevet",
      ],
    },
  ];

  return (
    <div className="row py-5 px-0">
      {listsData.map((list, index) => (
        <ListComponent key={index} title={list.title} items={list.items} />
      ))}
    </div>
  );
};

export default HigherLevelComponent;
