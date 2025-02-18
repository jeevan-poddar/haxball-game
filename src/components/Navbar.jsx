import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const activeTab = (e)=>{
 return e.isActive ? "activeTab" : "";
  };
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className={activeTab+ " gameName"} to="/">
              HaxBall
            </NavLink>
          </li>
          <li>
            <NavLink className={activeTab} to="/news">
              News
            </NavLink>
          </li>
          <li>
            <NavLink className={activeTab} to="/play">
              Play
            </NavLink>
          </li>
          <li>
            <NavLink className={activeTab} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={activeTab} to="/community">
              Community
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
