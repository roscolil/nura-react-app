import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Nura_Logo_Icon.png";
import styles from "./NavBar.module.scss";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <NavLink to="/" className={styles.navbarLogo}>
          <img src={Logo} alt="nura" />
        </NavLink>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/nuranow" activeClassName={styles.isActive}>
            nura<span>now</span>
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/nuraphone" activeClassName={styles.isActive}>
            nura<span>phone</span>
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/nuraloop" activeClassName={styles.isActive}>
            nura<span>loop</span>
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/how-it-works" activeClassName={styles.isActive}>
            How it Works
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/accessories" activeClassName={styles.isActive}>
            Accessories
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <NavLink to="/blog" activeClassName={styles.isActive}>
            Blog
          </NavLink>
        </li>
        <li className={styles.navbarLinkItem}>
          <a href="https://help.nuraphone.com">
            Support
          </a>
        </li>
        <li className={styles.navbarCart}>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
