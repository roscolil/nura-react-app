import React from "react";
import "../styles/styles.scss";

export default function BlogList() {
  const blogItems = [
    "blog one",
    "blog two",
    "blog three",
    "blog four",
    "blog five",
    "blog six",
    "blog seven",
    "blog eight",
    "blog nine",
    "blog ten",
  ];

  return (
    <div className="blog-list__wrapper">
      <div className="blog-list__items">
        {blogItems.map((value, index) => {
          return (
            <a href="#">
              <div key={index}>{value}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
