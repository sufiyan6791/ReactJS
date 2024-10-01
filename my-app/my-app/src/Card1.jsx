import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Card1({ img, title, price }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} width="200px" />
        <Card.Body>
          <Card.Title>Card Title : {title}</Card.Title>
          <Card.Text>price : {price}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
