import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import GoogleApi from "./GoogleApi";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink
            className="nav-link"
            exact
            activeClassName="active-link"
            to="/"
          >
            Streamery
          </NavLink>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              activeClassName="active-link"
              to="/"
            >
              Stream List
            </NavLink>
          </li>
          <ul className="nav justify-content-end">
            <NavLink exact activeClassName="active-link" to="/">
              <GoogleApi />
            </NavLink>
          </ul>
          {/* </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
