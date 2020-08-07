import React, { useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import styles from "./Post.module.scss";
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
    <div className={styles.post}>
      <Container fluid className={styles.postWrapper}>
        <Row>
          <Col lg={2} className={styles.postSidebar}>
            <Row className={styles.postSocialLinks}>
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
              <span
                onClick={() => history.goBack()}
                className={styles.postBackLink}
              >
                <img src="https://via.placeholder.com/25x25" alt="" />
                <span>Back to Articles</span>
              </span>
            </Row>
          </Col>
          <Col lg={10} className={styles.postBody}>
            <div className={styles.postHeader}>
              <h1>{blogPost.title}</h1>
              <h4>{blogPost.subheading}</h4>
            </div>
            <img
              src="https://www.fillmurray.com/500/260"
              alt=""
              className={styles.postImage}
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
      </Container>
      <Container className={styles.relatedPostsSection}>
        <Row className={styles.relatedPost}>
          <Col lg={6}>
            <NavLink to={"/post/"}>
              <img src="https://www.fillmurray.com/480/260" alt="" />
              <h2 className={styles.blogTitle}>Most recent blog post</h2>
            </NavLink>
            <p>Sub heading for hero post</p>
          </Col>
          <Col lg={6}>
            <NavLink to={"/post/"}>
              <img src="https://www.fillmurray.com/480/260" alt="" />
              <h2 className={styles.blogTitle}>Most recent blog post</h2>
            </NavLink>
            <p>Sub heading for hero post</p>
          </Col>
        </Row>
        <Row className={styles.blogPaginateRow}>
          <Pagination className={styles.blogPaginateBtn}>
            <Pagination.Next>Next ></Pagination.Next>
          </Pagination>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
