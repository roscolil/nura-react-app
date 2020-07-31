import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Nura_Logo_Icon.png";
import "../styles/styles.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="navbar">
        <NavLink to="/" className="navbar__logo">
          <img src={Logo} alt="nura" />
        </NavLink>
        <li className="navbar__link-item">
          <NavLink to="/nuranow" activeClassName="is-active">
            nura<span>now</span>
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/nuraphone" activeClassName="is-active">
            nura<span>phone</span>
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/nuraloop" activeClassName="is-active">
            nura<span>loop</span>
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/how-it-works" activeClassName="is-active">
            How it Works
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/accessories" activeClassName="is-active">
            Accessories
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/blog" activeClassName="is-active">
            Blog
          </NavLink>
        </li>
        <li className="navbar__link-item">
          <NavLink to="/support" activeClassName="is-active">
            Support
          </NavLink>
        </li>
        <li className="navbar__cart">
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
