import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import styles from "../styles/RoomNav.module.css"; // Import CSS Module

const RoomNav = (props) => {
  return (
    <div
      className={`${styles.roomNav} ${!props.navbarHide ? styles.hide : ""}`}
    >
      <div className={styles.roomNavContainer}>
        <div className={styles.roomNavElement}>Volume Button</div>
        <div className={styles.roomNavElement}>Menu</div>
        <div className={styles.roomNavElement}>Setting Button</div>
      </div>
    </div>
  );
};

export default RoomNav;
