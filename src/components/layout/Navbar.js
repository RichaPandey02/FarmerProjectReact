import React from "react";
import { NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  return (
    // <header
    //   id="body-header "
    //   style={{ backgroundColor: "black", lineHeight: "2" }}
    // >
    //   <header className="navbar navbar-expand-lg navbar-light">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <li className="nav-item richa">
    //       <NavLink className="nav-link" style={{ color: "white" }} exact to="/">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/help"
    //       >
    //         HelpLines
    //       </NavLink>
    //     </li>

    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/mandi"
    //       >
    //         Mandi
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/Impd"
    //       >
    //         ImportantAddress
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/schemes"
    //       >
    //         Schemes
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/contactus"
    //       >
    //         ContactUs
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink
    //         className="nav-link"
    //         style={{ color: "white" }}
    //         exact
    //         to="/about"
    //       >
    //         About
    //       </NavLink>
    //     </li>

    //     <div style={{ display: "block", width: 700, padding: 30 }}>
    //       <h4 style={{ color: "black" }}>React-Bootstrap Dropdown Component</h4>
    //       <Dropdown>
    //         <Dropdown.Toggle variant="success">Crops</Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           <Dropdown.Item href="./Rabi">Rabi</Dropdown.Item>
    //           <Dropdown.Item href="./Khareef">Khareef</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </div>
    //   </header>
    // </header>
    <div>
      

 <header id="body-header " style={{backgroundColor:'black'}}>
  <nav className="navbar navbar-expand-lg navbar-light" >

    <ul className="horizontal-list nav-menu">
    <li className="nav-item">
          <h5><NavLink className="nav-link" style={{ color: "white" }} exact to="/">
           Home
         </NavLink>
         </h5> 
         </li>
         
         <li className="nav-item">
         <h5><NavLink
           className="nav-link"
            style={{ color: "white" }}
            exact
            to="/help"
          >
            HelpLines
          </NavLink></h5>
        </li>
        <li className="nav-item">
          <h5> <NavLink
            className="nav-link"
            style={{ color: "white" }}
           exact
           to="/mandi"
           >
             Mandi
           </NavLink></h5>
      </li>
        <li className="nav-item">
          <h5><NavLink
           className="nav-link"
           style={{ color: "white" }}
            exact
            to="/Impd"
          >
             ImportantAddress
           </NavLink></h5>
         </li>
         <li className="nav-item">
          <h5> <NavLink
            className="nav-link"
           style={{ color: "white" }}
            exact
            to="/schemes"
          >
            Schemes
           </NavLink></h5>
        </li>
         <li className="nav-item">
          <h5> <NavLink
          className="nav-link"
             style={{ color: "white" }}
            exact
            to="/contactus"
          >
            ContactUs
           </NavLink></h5>
         </li>
        <li className="nav-item">
           <h5><NavLink
             className="nav-link"
            style={{ color: "white" }}
            exact
             to="/about"
           >
           About
           </NavLink></h5>
        </li>
<li>
  <li className="nav-item">
       {/* <div style={{ display: "block", width: 700, padding: 30 }}> */}
          <h4 style={{ color: "black" }}>React-Bootstrap Dropdown Component</h4>
          <Dropdown>
             <Dropdown.Toggle variant="success">Crops</Dropdown.Toggle>
          <Dropdown.Menu>
              <h5> <Dropdown.Item href="./Rabi" style={{color:'black'}}>Rabi</Dropdown.Item></h5>
              <h5> <Dropdown.Item href="./Khareef" style={{color:'black'}}>Khareef</Dropdown.Item></h5>
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
