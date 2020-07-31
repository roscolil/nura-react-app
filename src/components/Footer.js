import React from "react";
import "../styles/styles.scss";
import { Container, Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <Container fluid className="footer">
      <h1>This is the footer</h1>
      <Row>
        <Col>Column 1 of 2</Col>
        <Col>Column 2 of 2</Col>
      </Row>
    </Container>
  );
};

export default Footer;
