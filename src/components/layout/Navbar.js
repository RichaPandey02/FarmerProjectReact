import React from "react";
import {  NavLink } from "react-router-dom";

import Dropdown from 'react-bootstrap/Dropdown';

const Navbar = () => {
  return (
 <header id="body-header " style={{backgroundColor:'black', lineHeight:'2'}}>
    <header className="navbar navbar-expand-lg navbar-light">

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/Helplines">
                HelpLines
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/mandi">
              Mandi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/importantAddress">
              ImportantAddress
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/schemes">
                Schemes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{color:'white'}} exact to="/contactus">
                ContactUs
              </NavLink>
            </li>
            <li className="nav-item" >
              <NavLink className="nav-link"  style={{color:'white'}} exact to="/about">
                About
              </NavLink>
            </li>
            
          
  
  <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <h4 style={{color:'black'}}>React-Bootstrap Dropdown Component</h4>
      <Dropdown>
        <Dropdown.Toggle variant="success">
          Crops
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="./Rabi">
            Rabi
          </Dropdown.Item>
          <Dropdown.Item href="./crops">
            Khareef
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
                                
          



{/* <li className="nav-item" >
              <NavLink className="nav-link"  style={{color:'white', marginLeft:'800%'}} exact to="/login">
                Login
              </NavLink>
            </li> */}
            <li className="nav-item" >
              <NavLink className="nav-link"  style={{color:'white', marginLeft:'500%'}} exact to="/signup">
                Signup
              </NavLink>
            </li>
            {/* <li className="nav-item" >
              <NavLink className="nav-link"  style={{color:'white', marginLeft:'650%'}} exact to="/about">
                About
              </NavLink>
            </li> */}
            
          
          
          
          </header>
          
        

       
      </header>
      
    
  
  );
};

export default Navbar;
