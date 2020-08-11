import React from "react";
import styles from "./HowItWorks.module.scss";
import { Container } from "react-bootstrap";

const HowItWorks =() => {
  return (
    <Container fluid className={styles.howItWorksWrapper}>
      <h1>How it Works page</h1>
    </Container>
  );
};

export default HowItWorks;