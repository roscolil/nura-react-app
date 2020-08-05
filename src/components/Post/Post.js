import React, { useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "./Post.module.scss";
// import data from "../data.json";

function Post() {
  let history = useHistory();
  const blogPost = {
    id: "1",
    title: "blog one",
    subheading: "Sub-heading text",
    image: "https://via.placeholder.com/500x260",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore unde dolor debitis deleniti illum quam eaque nostrum illo ipsa perspiciatis a, ex deserunt iste voluptatem distinctio modi in natus!",
  };

  useEffect(() => {});

  return (
    <Container fluid className="post-wrapper">
      <Row>
        <Col lg={2} className="post__sidebar">
          <Row className="post__social-links">
            <a href="/">
              <img src="https://via.placeholder.com/40x40" alt="" />
            </a>
            <a href="/">
              <img src="https://via.placeholder.com/40x40" alt="" />
            </a>
            <a href="/">
              <img src="https://via.placeholder.com/40x40" alt="" />
            </a>
          </Row>
          <Row>
            <span onClick={() => history.goBack()} className="post__back-link">
              <img src="https://via.placeholder.com/25x25" alt=""/>
              <span>Back to Articles</span>
            </span>
          </Row>
        </Col>
        <Col lg={10} className="post__body">
          <div className="post-header">
            <h1>{blogPost.title}</h1>
            <h4>{blogPost.subheading}</h4>
          </div>
          <img
            src="https://www.fillmurray.com/500/260"
            alt=""
            className="post-image"
          />
          <p>
            {blogPost.content}
            {blogPost.content}
          </p>
          <p>
            {blogPost.content}
            {blogPost.content}
          </p>
          <p>
            {blogPost.content}
            {blogPost.content}
          </p>
        </Col>
      </Row>
      <Row className="related-posts">
        <Col>
          <NavLink to={"/post/"}>
            <img src="https://www.fillmurray.com/480/260" alt="" />
            <h2 className="blog__title">Most recent blog post</h2>
          </NavLink>
          <p>Sub heading for hero post</p>
        </Col>
        <Col>
          <NavLink to={"/post/"}>
            <img src="https://www.fillmurray.com/480/260" alt="" />
            <h2 className="blog__title">Most recent blog post</h2>
          </NavLink>
          <p>Sub heading for hero post</p>
        </Col>
      </Row>
      <Row className="blog__paginate-row">
        <Pagination className="blog__paginate-btn">
          <Pagination.Next>Next ></Pagination.Next>
        </Pagination>
      </Row>
    </Container>
  );
}

export default Post;
