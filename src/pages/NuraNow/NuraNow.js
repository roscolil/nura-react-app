import React from "react";
import styles from "./NuraNow.module.scss";
import { Container } from "react-bootstrap";

const NuraNow =() => {
  return (
    <Container fluid className={styles.nuranowWrapper}>
      <h1>Nuranow page</h1>
    </Container>
  );
};

export default NuraNow;