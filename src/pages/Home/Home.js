import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Container fluid>
        <h1>Home Page</h1>
        <img src="https://www.fillmurray.com/800/500" alt="" className={styles.homeHero} />
        <div>
          <h3>Home page hero heading</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            inventore mollitia ea odit, dolores necessitatibus cupiditate at eum
            magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam.
            Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ut inventore mollitia ea odit, dolores
            necessitatibus cupiditate at eum magni sint dignissimos, quo
            perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            inventore mollitia ea odit, dolores necessitatibus cupiditate at eum
            magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam.
            Quam quidem tempore alias.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            inventore mollitia ea odit, dolores necessitatibus cupiditate at eum
            magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam.
            Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ut inventore mollitia ea odit, dolores
            necessitatibus cupiditate at eum magni sint dignissimos, quo
            perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            inventore mollitia ea odit, dolores necessitatibus cupiditate at eum
            magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam.
            Quam quidem tempore alias.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Home;
