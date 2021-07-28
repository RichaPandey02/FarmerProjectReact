import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    <div>
      <header id="body-header " style={{ backgroundColor: "black" }}>
      
        <nav className="navbar navbar-expand-lg navbar-light">
          <ul className="horizontal-list nav-menu " >
            <li className="nav-item">
              <h5>
                <NavLink
                   className="nav-link"
                  style={{ color: "white"}}
                  style={{hover:'red'}}
                   
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </h5>
            </li>

            <li className="nav-item">
              <h5>
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/help"
                >
                  HelpLines
                </NavLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                {" "}
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/mandi"
                >
                  Mandi
                </NavLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/Impd"
                >
                  ImportantAddress
                </NavLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                {" "}
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/schemes"
                >
                  Schemes
                </NavLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                {" "}
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/contactus"
                >
                  ContactUs
                </NavLink>
              </h5>
            </li>
            <li className="nav-item">
              <h5>
                <NavLink
                  className="nav-link"
                  // style={{ color: "white" }}
                  exact
                  to="/about"
                >
                  About
                </NavLink>
              </h5>
            </li>
            <li>
              <li className="nav-item">
                {/* <div style={{ display: "block", width: 700, padding: 30 }}> */}
                <h4 style={{ color: "black" }}>
                  React-Bootstrap Dropdown Component
                </h4>
                <Dropdown>
                  <Dropdown.Toggle variant="success">Crops</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <h5>
                      {" "}
                      <Dropdown.Item href="./Rabi" style={{ color: "black" }}>
                        Rabi
                      </Dropdown.Item>
                    </h5>
                    <h5>
                      {" "}
                      <Dropdown.Item
                        href="./Khareef"
                        style={{ color: "black" }}
                      >
                        Khareef
                      </Dropdown.Item>
                    </h5>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
