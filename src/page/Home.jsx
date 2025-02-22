import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.body}>
        <Navbar />
        <div className="main">
          <div className={styles.homeContainer}>
            <img src="/img/logo.png" alt="logo" className={styles.logo} />
            <div className={styles.homeContent}>
              HaxBall is a physics-based multiplayer soccer game where teamwork
              is key.
              <NavLink to="/play" className={styles.btn_play_now}>
                <p>Play now!</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
