import React from "react";
import { NavLink } from "react-router-dom";
 import Nav from "../styles/Nav.css";

 


const Navbar1 = () => {

 
  return (
    <body className="navbody">
      <nav>
        <ul>
          <li >
            <NavLink  className="navbody__navbar  " exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbody__navbar" exact to="/help">
              Helplines
            </NavLink>
          </li>
          <li>
            <NavLink className="navbody__navbar" exact to="/mandi">
              Mandi
            </NavLink>
          </li>
          <li>
            <NavLink className="navbody__navbar" exact to="/Impd">
              ImportantAddres
            </NavLink>
          </li>
          <li>
            <NavLink className="navbody__navbar" exact to="/schemes">
              Schemes
            </NavLink>
          </li>
          <li>
            <NavLink className="navbody__navbar" exact to="/contactus">
              ContactUs
            </NavLink>
          </li>
            {/* <li>
            <NavLink className="navbar" exact to="/about">
              About
            </NavLink>
          </li>     */}
        </ul>
      </nav>
    </body>
    










    


  

 
 



  );
};

export default Navbar1;
