import React from "react";
import "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid>
        <Row className="footer__row">
          <Col>Column 1 of 2</Col>
          <Col>Column 2 of 2</Col>
          <Col>Column 3 of 2</Col>
          <Col>Column 4 of 2</Col>
          </Row>
          </Container>
    </div>
  );
};

export default Footer;
