import React from "react";
import "./Header.module.scss";
import { Container, Row } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <div className="header">
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
      </Container>
    </div>
  );
};

export default Header;
