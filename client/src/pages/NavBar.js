import React from "react";
import "./NavBar.scss";
import Logo from "./Logo.png"; //World Globe from Jeremiah https://icon-icons.com/users/HBim8QeWJzNQGY18PECJx/icon-sets/

import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="NavBar">
      <button className="logo">
        <Link to="/" or>
          <img src={Logo} alt="Logo" />
        </Link>
      </button>
      <div className="navButtons">
        <button className="navButton">
          <Link to="/SongDirectory">Song Directory</Link>
        </button>
        <button className="navButton">
          <Link to="/aboutus">About Us</Link>
        </button>
        <button className="navButton">
          <Link to="/contact">Contact</Link>
        </button>
        <button className="navButton">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};
