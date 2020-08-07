import React from "react";
import styles from "./Footer.module.scss";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container fluid className={styles.footerWrapper}>
        <Row>
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
