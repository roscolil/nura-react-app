import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "../styles/styles.scss";
import data from "../data.json";

export default function Blog() {
  return (
    <Container fluid className="blog__wrapper">
      <Row className="blog__hero-section">
        <Col>
          <NavLink to={"/post/"}>
            <img src="https://www.fillmurray.com/1000/500" alt="" />
            <h2 className="blog__title">Most recent blog post</h2>
          </NavLink>
          <p>Sub heading for hero post</p>
        </Col>
      </Row>
      {/*
    {data.map((value) => {
      let postId = value.id[0]
      return (
      <Row {postId.id} className="blog__row">
        <Col className="blog__col">
          <NavLink to={"/post/" + postId.title}>
            <img src={postId.image} alt="" />
            <h2 className="blog__title">{postId.title}</h2>
          </NavLink>
          <p>{postId.subheading + " for " +postId.title}</p>
        </Col>
      </Row>
      );
      })}
    */}
      {data.map((value) => {
        return (
          <Row key={value.id} className="blog__row">
            <Col lg={6} className="blog__col">
              <NavLink to={"/post/" + value.title}>
                <img src={value.image} alt="" />
                <h2 className="blog__title">{value.title}</h2>
              </NavLink>
              <p>{value.subheading + " for " + value.title}</p>
            </Col>
            <Col lg={{ span: 6, offset: 0 }} className="blog__col">
              <NavLink to={"/post/" + value.title}>
                <img src={value.image} alt="" />
                <h2 className="blog__title">{value.title}</h2>
              </NavLink>
              <p>{value.subheading + " for " + value.title}</p>
            </Col>
          </Row>
          // <Row>
          //   <Col className="blog__col">
          //     <NavLink to={"/post/" + value.title}>
          //       <img src={value.image} alt="" />
          //       <h2 className="blog__title">{value.title}</h2>
          //     </NavLink>
          //     <p>{value.subheading + " for " + value.title}</p>
          //   </Col>
          //   <Col className="blog__col">
          //     <NavLink to={"/post/" + value.title}>
          //       <img src={value.image} alt="" />
          //       <h2 className="blog__title">{value.title}</h2>
          //     </NavLink>
          //     <p>{value.subheading + " for " + value.title}</p>
          //   </Col>
          // </Row>
        );
      })}
      <Row className="blog__paginate-row">
        <Pagination className="blog__paginate-btn">
          <Pagination.Next>Next ></Pagination.Next>
        </Pagination>
      </Row>
    </Container>
  );
}
