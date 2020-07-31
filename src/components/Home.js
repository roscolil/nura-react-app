import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/styles.scss";

const Home = () => {
  return (
    <Container className="home-wrapper">
      <h1>Home Page</h1>
      <img src="https://via.placeholder.com/800x500" alt="" className="hero"/>
      <div>
      <h3>Home page hero heading</h3>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut inventore mollitia ea odit, dolores necessitatibus cupiditate at eum magni sint dignissimos, quo perspiciatis ipsam! Ipsum, quisquam. Quam quidem tempore alias.</p>
      </div>
    </Container>
  );
};

export default Home;