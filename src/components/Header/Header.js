import React from "react";
import styles from "./Header.module.scss";
import { Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className={styles.header}>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
      </Container>
    </div>
  );
};

export default Header;
