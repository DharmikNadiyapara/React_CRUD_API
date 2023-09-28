import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Details() {
  const [Name, setName] = useState([]);
  const navi = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    fetch("https://6505e209ef808d3c66f094ad.mockapi.io/Person/" + id)
      .then((response) => {
        return response.json();
      })
      .then((data) => setName(data));
  }, []);
  return (
    <div
      style={{ width: 300, position: "relative", left: "auto", right: "auto" }}
      className="text-center m-auto"
    >
      <Card style={{ top: 200 }}>
        <Card.Img variant="top" src={Name.avatar} />
        <Card.Body>
          <Card.Title>{Name.name}</Card.Title>
          {/* <Card.Text>Hola</Card.Text> */}
          <Button
            variant="primary"
            onClick={() => {
              navi("/Update/" + id);
            }}
          >
            Edit
          </Button>
          {"      "}
          <Button
            variant="danger"
            onClick={() => {
              fetch(
                "https://6505e209ef808d3c66f094ad.mockapi.io/Person/" + id,
                {
                  method: "DELETE",
                }
              ).then(() => navi("/"));
            }}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
