import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import data from "../data.json";

import "../styles/styles.scss";

export default function Blog() {
  return (
    <div className="blog__wrapper">
      <Container>
        {data.map((value, index) => {
          return (
            <Row key={index} className="blog__items">
              <Col>
                <NavLink to={"/post/" + value.title}>
                  <img src={value.image} alt=""></img>
                  <h2>{value.title}</h2>
                </NavLink>
                <p>{value.subheading}</p>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
}