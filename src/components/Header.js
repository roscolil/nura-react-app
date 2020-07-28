import React from "react";
import "../styles/styles.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>This is the header</h1>
      <a href="https://www.nuraphone.com" className="nav-logo">
        <img src="../../public/assets/nura-icon.png" alt="nura" />
      </a>
      <ul className="nav">
        <li className="nav__item">
          <a href="https://www.nuraphone.com">nuranow</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">nuraphone</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">nuraloop</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">How it Works</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">Accessories</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">Blog</a>
        </li>
        <li className="nav__item">
          <a href="https://www.nuraphone.com">Support</a>
        </li>
        <li className="cart">
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
}

// TODO Add NavLink react-router-dom
