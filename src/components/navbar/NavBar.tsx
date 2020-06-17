/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from 'react-router-dom';
import '../../styles/Navigation.css';

const NavBar = () => {
  return (
     <>
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand bg-none">
        <NavLink to='/'  >
          Francisco
        </NavLink>
        </a>
        
        <div>
          <a>
          <NavLink to='/projects'>
        Projects
        </NavLink>
          </a>
        <a>
        <NavLink to='/studies'>
        Studies
        </NavLink>
        </a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
