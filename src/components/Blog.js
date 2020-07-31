import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/styles.scss";
import data from "../data.json";

export default function Blog() {
  return (
    <Container fluid className="blog__wrapper">
    {data.map((value, index) => {
        return (
          <Row key={index} className="blog__row">
            <Col className="blog__col">
              <NavLink to={"/post/" + value.title}>
                <img src={value.image} alt="" />
                <h2>
                  {value.title}
                </h2>
              </NavLink>
              <p>{value.subheading + " for " + value.title}</p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
