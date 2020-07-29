import React from "react";
import { NavLink } from "react-router-dom";
import data from "../data.json";

import "../styles/styles.scss";

export default function Blog() {
  return (
    <div className="blog__wrapper">
      <div className="blog__items">
        {data.map((value, index) => {
          return (
            <div key={index}>
              <NavLink to={value.title}>
                <img src={value.image} alt=""></img>
                <h2>{value.title}</h2>
              </NavLink>
              <p>{value.subheading}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
