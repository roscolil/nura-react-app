import React from "react";
import styles from "./Accessories.module.scss";
import { Container } from "react-bootstrap";

const Accessories =() => {
  return (
    <Container fluid className={styles.accessoriesWrapper}>
      <h1>Accessories page</h1>
    </Container>
  );
};

export default Accessories;