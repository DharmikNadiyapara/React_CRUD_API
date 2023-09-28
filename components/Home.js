import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function Home() {
  const [Name, setName] = useState([]);
  const navi = useNavigate();
  useEffect(() => {
    fetch("https://6505e209ef808d3c66f094ad.mockapi.io/Person")
      .then((response) => {
        return response.json();
      })
      .then((data) => setName(data));
  }, []);
  return (
    <Row>
      {Name.map((data, index) => {
        return (
          <>
            <Col xs={6} sm={3} md={2} lg={2} key={index} className="p-3">
              <Card className="mb-3">
                <Card.Img variant="top" src={data.avatar} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  {/* <Card.Text>Hola</Card.Text> */}
                  <Button
                    variant="primary"
                    onClick={() => {
                      navi("/Details/" + data.id);
                    }}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </Row>
  );
}
