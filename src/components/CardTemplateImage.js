import React from "react";
import { Card, Button } from "react-bootstrap";

/*
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          esse necessitatibus neque sequi doloribus.
*/

export default function CardTemplateImage(props) {
  return (
    <Card style={{ height: "100px" }}>
      <Card.Img variant="top" src={props.imgPath} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button>Find Out More!</Button>
      </Card.Body>
    </Card>
  );
}
