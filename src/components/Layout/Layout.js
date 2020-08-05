import React from "react";
import "normalize.css";
import "./Layout.module.scss";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    // <div className="layout-wrapper">
      <Container fluid className="layout-wrapper">
        <div className="body-wrapper">{children}</div>
      </Container>
    // </div>
  );
}
