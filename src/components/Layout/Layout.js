import React from "react";
import "normalize.css";
import styles from "./Layout.module.scss";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Container fluid>
      <div className={styles.bodyWrapper}>{children}</div>
    </Container>
  );
}
