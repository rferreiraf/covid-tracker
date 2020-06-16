import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import { CardComponent } from "./CardComponent";

export const CardsListComponent = ({ cases, deaths, recovered, update }) => {
  return (
    <CardDeck className="carddeck-container">
      <CardComponent
        title="Cases"
        color="secondary"
        data={cases}
        updated={update}
      ></CardComponent>
      <CardComponent
        title="Deaths"
        color="danger"
        data={deaths}
        updated={update}
      ></CardComponent>
      <CardComponent
        title="Recovered"
        color="success"
        data={recovered}
        updated={update}
      ></CardComponent>
    </CardDeck>
  );
};
