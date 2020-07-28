import React from "react";
import "../styles/styles.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>
      <a href="https://www.nuraphone.com" className="logo">
        <img src="../../public/assets/nura-icon.png" alt="nura" />
      </a>
      <div className="navlink-wrapper">
        <a href="https://www.nuraphone.com" className="navlink">
          nuranow
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          nuraphone
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          nuraloop
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          How it Works
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          Accessories
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          Blog
        </a>
        <a href="https://www.nuraphone.com" className="navlink">
          Support
        </a>
        <a href="https://www.nuraphone.com" className="cart">
          <img src="" alt="" />
        </a>
      </div>
    </div>
  );
}
