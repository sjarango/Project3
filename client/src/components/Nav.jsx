import React from "react";
// import { Editor } from './index';
import "../index.css";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { NavItem } from "reactstrap";
import { Register } from ".";
import { Login } from ".";

const Nav = () => {
  const navStyle = {
    color: "white"
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Home</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/note">
          <li>Note</li>
        </Link>
        <Link style={navStyle} to="*">
          <li>404</li>
        </Link>
        <NavItem style={navStyle}>
          <Logout />
        </NavItem>
        <NavItem style={navStyle}>
          <Register />
        </NavItem>
        <NavItem style={navStyle}>
          <Login />
        </NavItem>
      </ul>
    </nav>
  );
};

export default Nav;
