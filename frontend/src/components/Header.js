import { Switch } from "@mui/material";
import React, {} from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <h4>DATA VISUALIZER</h4>
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
                  
              <li className="nav-item">
                <NavLink className="nav-link" to="/Signup">
                  Signup
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/Dashboard">
                  Dashboard
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/AddProduct">
                  AddProduct
                </NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/AddOrder">
                  AddOrder
                </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Header;