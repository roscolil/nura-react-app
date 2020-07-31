import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/styles.scss";
import data from "../data.json";

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
    <Container fluid>
      <Row className="post-wrapper">
        <Button onClick={() => history.goBack()} variant="outline-primary">
          Back
        </Button>
        <div className="post-header">
          <h1>{blogPost.title}</h1>
          <h4>{blogPost.subheading}</h4>
        </div>
        <img
          src="https://via.placeholder.com/800x500"
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
      </Row>
      <Row className="related-posts">
        <Col lg={6}>Post Tile</Col>
        <Col lg={6}>Post Tile</Col>
      </Row>
    </Container>
  );
}

export default Post;
