import React from "react";
import Card from "react-bootstrap/Card";
import CountUp from "react-countup";

export const CardComponent = ({ title, color, data }) => {
  let card;
  if (data) {
    card = (
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <CountUp start={0} end={data} duration={1} />
      </Card.Body>
    );
  } else {
    card = (
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <CountUp start={0} end={0} />
      </Card.Body>
    );
  }

  return (
    <Card bg={color} text="white" className="card-container">
      {card}
    </Card>
  );
};
