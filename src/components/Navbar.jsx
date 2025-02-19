import React from "react";
import { NavLink } from "react-router";
import styles from "./Navbar.module.css"; // Import CSS Module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.activeTab : ""} ${styles.gameName}`
            }
            to="/"
          >
            HaxBall
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.link
            }
            to="/news"
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.link
            }
            to="/play"
          >
            Play
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.link
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeTab : styles.link
            }
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
