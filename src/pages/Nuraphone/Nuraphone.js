import React from "react";
import styles from "./Nuraphone.module.scss";
import { Container } from "react-bootstrap";

const Nuraphone =() => {
  return (
    <Container fluid className={styles.nuraphoneWrapper}>
      <h1>Nuraphone page</h1>
    </Container>
  );
};

export default Nuraphone;