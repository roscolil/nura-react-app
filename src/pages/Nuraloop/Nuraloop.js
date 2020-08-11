import React from "react";
import styles from "./Nuraloop.module.scss";
import { Container } from "react-bootstrap";

const Nuraloop =() => {
  return (
    <Container fluid className={styles.nuraloopWrapper}>
      <h1>Nuraloop page</h1>
    </Container>
  );
};

export default Nuraloop;