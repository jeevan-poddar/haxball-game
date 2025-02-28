import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import styles from "../styles/Navbar.module.css"; // Import CSS Module

const Navbar = (props) => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Set active tab based on current path
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveTab("HaxBall");
        break;
      case "/news":
        setActiveTab("News");
        break;
      case "/play":
        setActiveTab("Play");
        break;
      case "/about":
        setActiveTab("About");
        break;
      case "/community":
        setActiveTab("Community");
        break;
      default:
        setActiveTab("HaxBall");
    }
  }, [location]);
  return (
    <nav className={`${styles.navbar} ${props.navbarHide ? styles.hide : ""}`}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={`${styles.gameName} ${styles.navbarTab}`} to="/">
            HaxBall
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActiveTab("News")}
            className={`${styles.navbarTab} ${
              activeTab === "News" ? styles.activeTab : ""
            }`}
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActiveTab("Play")}
            className={`${styles.navbarTab} ${
              activeTab === "Play" ? styles.activeTab : ""
            }`}
            to="/play"
          >
            Play
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActiveTab("About")}
            className={`${styles.navbarTab} ${
              activeTab === "About" ? styles.activeTab : ""
            }`}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActiveTab("Community")}
            className={`${styles.navbarTab} ${
              activeTab === "Community" ? styles.activeTab : ""
            }`}
            to="/community"
          >
            Community
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
