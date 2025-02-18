import React from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router";
import "./Home.css";


const Home = () => {
  return (
    <>
      <div className="body">
        <Navbar />
        <div className="homeContainer">
          <img src="/img/logo.png" alt="logo" className="logo" />
          <div className="homeContent">
            HaxBall is a physics-based multiplayer soccer game where teamwork is
            key.
            <NavLink to="/play" className="btn_play_now">
              <p>Play now!</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
