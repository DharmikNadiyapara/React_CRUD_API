import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";

export default function Update() {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://6505e209ef808d3c66f094ad.mockapi.io/Person/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Name),
    })
      .then(() => {
        navi("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="m-auto" style={{ width: 300 }}>
      <div style={{ marginTop: 250 }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>URL</Form.Label>
            <Form.Control
              type="text"
              value={Name.avatar}
              onChange={(e) => setName({ ...Name, avatar: e.target.value })}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={Name.name}
              onChange={(e) => setName({ ...Name, name: e.target.value })}
            />
          </Form.Group>
          <Button className="mt-2" variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}
