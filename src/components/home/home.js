import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Form, Badge } from "react-bootstrap";
import "./home.css";

export default class HomeComponent extends Component {
  render() {
    return (
      <Container className="container">
        <Jumbotron className="jumbo">
          <h1>
            <Badge variant="light">Let's Explore!</Badge>
          </h1>
          <br />
          <Form>
            <Form.Control type="search" placeholder="ex. Houston, TX" />
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}
