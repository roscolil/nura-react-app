import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import styles from "./Blog.module.scss";
import data from "../../data.json";

export default function Blog() {
  return (
    <div className={styles.blogWrapper}>
      <Container fluid>
        <Row className={styles.blogHero}>
          <Col>
            <NavLink to={"/post/"}>
              <img src="https://www.fillmurray.com/1000/500" alt="" />
              <h2 className={styles.blogTitle}>Most recent blog post</h2>
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
            <Row key={value.id} className={styles.blogRow}>
              <Col lg={6} className={styles.blogColumn}>
                <NavLink to={"/post/" + value.title}>
                  <img src={value.image} alt="" />
                  <h2 className={styles.blogTitle}>{value.title}</h2>
                </NavLink>
                <p>{value.subheading + " for " + value.title}</p>
              </Col>
              <Col lg={{ span: 6, offset: 0 }} className={styles.blogColumn}>
                <NavLink to={"/post/" + value.title}>
                  <img src={value.image} alt="" />
                  <h2 className={styles.blogTitle}>{value.title}</h2>
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
        <Row className={styles.blogPaginateRow}>
          <Pagination className={styles.blogPaginateBtn}>
            <Pagination.Next>Next ></Pagination.Next>
          </Pagination>
        </Row>
      </Container>
    </div>
  );
}
