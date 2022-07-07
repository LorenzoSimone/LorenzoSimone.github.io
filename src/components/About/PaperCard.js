import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

function PaperCard(props) {
  return (
    <Card style={{backgroundColor: "rgba(0,0,0,0)", marginBottom: "30px", border: "1px solid white"}}>
            <Card.Body>
              <Card.Title>{props.title} <strong className="pisacolor" style={{textAlign:"right"}}>{props.year} - {props.journal}</strong></Card.Title>
              <hr/>
              <Card.Subtitle className="mb-2 text-muted">{props.authors}</Card.Subtitle>
              <Card.Text>
              </Card.Text>
              <Button href={props.link} variant="primary">Link</Button>
            </Card.Body>
          </Card>
  );
}

export default PaperCard;
