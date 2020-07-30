import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/styles.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="nav-logo">
        {/* <img src="../../public/assets/Nura_Logo_Icon.png" alt="nura" /> */}
        <img src="https://via.placeholder.com/60x30" alt="nura" />
      </NavLink>
      <ul className="nav">
        <li className="nav__item">
          <NavLink to="/nuranow" activeClassName="is-active">nuranow</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/nuraphone" activeClassName="is-active">nuraphone</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/nuraloop" activeClassName="is-active">nuraloop</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/how-it-works" activeClassName="is-active">How it Works</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/accessories" activeClassName="is-active">Accessories</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/blog" activeClassName="is-active">Blog</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/support" activeClassName="is-active">Support</NavLink>
        </li>
        <li className="cart">
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
}

export default Header;
