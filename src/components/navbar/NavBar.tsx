import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Navigation.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <NavLink to="/">Francisco</NavLink>

          <div>
            <NavLink to="/projects">Projects</NavLink>

            <NavLink to="/studies">Studies</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
