import React from "react";
// import { NavLink } from "react-router-dom";
import "../styles/styles.scss";
import { Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";

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
