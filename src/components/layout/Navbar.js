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
  


  


  
// <body>

//   <nav className="navbar">
//     <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">.
//             <i className="fa fa-bars"></i>
//         </label>
//     <NavLink exact to="/" className="logo">Farmer Friend</NavLink>
//     <input type="checkbox" id="chkToggle"></input>
//     <ul className="main-nav" id="js-menu">
//       <li>
//         <NavLink exact to="/" className="nav-links">Home</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/help" className="nav-links">HelpLines</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/mandi" className="nav-links">Mandi</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/Impd" className="nav-links">ImportantAddres</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/schemes" className="nav-links">Schemes</NavLink>
//       </li>
//       <li>
//         <NavLink exact to="/contactus" className="nav-links">ContactUs</NavLink>
//       </li>
//     </ul>
//   </nav>
// </body>




  );
};

export default Navbar1;
