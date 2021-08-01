import React from "react";
import { Link } from 'react-router-dom';
//   import Nav from '../styles/Nav.css'
import Dropdown from "react-bootstrap/Dropdown";


import { NavDropdown, Nav, Navbar, NavLink } from "react-bootstrap";


const Navbar1 = () => {
    
  return (
      

    // My code
    // <div>
    //   <header id="body-header " style={{ backgroundColor: "black" }}>

    //     <nav className="navbar navbar-expand-lg navbar-light">
    //       <ul className="horizontal-list nav-menu " >
    //         <li className="nav-item">
    //           <h5>
    //             <NavLink
    //                className="nav-link"
    //               style={{ color: "white"}}
    //               style={{hover:'red'}}

    //               exact
    //               to="/"
    //             >
    //               Home
    //             </NavLink>
    //           </h5>
    //         </li>

    //         <li className="nav-item">
    //           <h5>
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/help"
    //             >
    //               HelpLines
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li className="nav-item">
    //           <h5>
    //             {" "}
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/mandi"
    //             >
    //               Mandi
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li className="nav-item">
    //           <h5>
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/Impd"
    //             >
    //               ImportantAddress
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li className="nav-item">
    //           <h5>
    //             {" "}
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/schemes"
    //             >
    //               Schemes
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li className="nav-item">
    //           <h5>
    //             {" "}
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/contactus"
    //             >
    //               ContactUs
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li className="nav-item">
    //           <h5>
    //             <NavLink
    //               className="nav-link"
    //               // style={{ color: "white" }}
    //               exact
    //               to="/about"
    //             >
    //               About
    //             </NavLink>
    //           </h5>
    //         </li>
    //         <li>
    //           <li className="nav-item">
    //             {/* <div style={{ display: "block", width: 700, padding: 30 }}> */}
    //             <h4 style={{ color: "black" }}>

    //             </h4>
    //             <Dropdown>
    //               <Dropdown.Toggle variant="success">Crops</Dropdown.Toggle>
    //               <Dropdown.Menu>
    //                 <h5>
    //                   {" "}
    //                   <Dropdown.Item href="./Rabi" style={{ color: "black" }}>
    //                     Rabi
    //                   </Dropdown.Item>
    //                 </h5>
    //                 <h5>
    //                   {" "}
    //                   <Dropdown.Item
    //                     href="./Khareef"
    //                     style={{ color: "black" }}
    //                   >
    //                     Khareef
    //                   </Dropdown.Item>
    //                 </h5>
    //               </Dropdown.Menu>
    //             </Dropdown>
    //           </li>
    //         </li>
    //       </ul>
    //     </nav>
    //   </header>
    // </div>



//Snehil code



    // <div>
    //     <header>
    //         <Navbar bg="dark" variant="dark">
    //                 <Navbar.Brand href="/"></Navbar.Brand>
    //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //                 <Navbar.Collapse id="basic-navbar-nav">
    //                 <Nav className="me-auto">
    //                     <Nav.Link href="/">Home</Nav.Link>
    //                     <Nav.Link href="/help">HelpLines</Nav.Link>
    //                     <Nav.Link href="/mandi">Mandi</Nav.Link>
    //                     <Nav.Link href="/Impd">ImportantAddress</Nav.Link>
    //                     <Nav.Link href="/schemes">Schemes</Nav.Link>
    //                     <Nav.Link href="/contactus">ContactUs</Nav.Link>
    //                     <Nav.Link href="/about"> About</Nav.Link>
    //                     <NavDropdown title="Crop" id="basic-nav-dropdown">
    //                     <NavDropdown.Item href="/Rabi">Rabi</NavDropdown.Item>
    //                     <NavDropdown.Item href="/Khareef">Khareef</NavDropdown.Item>

    //                     </NavDropdown>
    //                 </Nav>
    //                 </Navbar.Collapse>
                   
    //         </Navbar>
    //     </header>
    // </div>





// Aman sir

    // <div className="ric">
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     {/* <a className="navbar-brand" href="#">Navbar</a> */}
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav">
    //         <li className="nav-item active">
    //           <NavLink className="nav-link" exact to="/">
    //             Home <span className="sr-only"></span>
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/help">
    //             HelpLines
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/mandi">
    //             Mandi
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/Impd">
    //             ImportantAddress
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/schemes">
    //             Schemes
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/contactus">
    //             ContactUs
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink className="nav-link" exact to="/about">
    //             About
    //           </NavLink>
    //         </li>
    //         <Dropdown>
    //               <Dropdown.Toggle variant="success">Crops</Dropdown.Toggle>
    //               <Dropdown.Menu>
    //                 <h5>
    //                   {" "}
    //                    <Dropdown.Item href="./Rabi" style={{ color: "black" }}>
    //                      Rabi
    //                   </Dropdown.Item>
    //                 </h5>
    //                 <h5>
    //                   {" "}
    //                    <Dropdown.Item
    //                     href="./Khareef"
    //                     style={{ color: "black" }}
    //               >
    //                    Khareef
    //                   </Dropdown.Item>
    //                 </h5>
    //              </Dropdown.Menu>
    //            </Dropdown>
    //             </ul>
    //     </div>
    //   </nav>
    // </div>












<div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/" style={{ color: 'white ' }}></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link as= {Link} to="/" style={{ color: 'white ' }}> <b>Home</b> </Nav.Link>
                            <Nav.Link as= {Link} to="/help" style={{ color: 'white ' }}> <b>Helplines</b> </Nav.Link>
                            <Nav.Link as= {Link} to="/mandi" style={{ color: 'white ' }}><b>Mandi</b></Nav.Link>
                            <Nav.Link as= {Link} to="/Impd" style={{ color: 'white ' }}><b>ImportantAddres</b></Nav.Link>
                            <Nav.Link as= {Link} to="/schemes" style={{ color: 'white ' }}><b>Schemes</b></Nav.Link>
                            <Nav.Link  as= {Link} to="/contactus" style={{ color: 'white ' }}><b>ContactUs</b></Nav.Link>
                            <Nav.Link as= {Link} to="/about" style={{ color: 'white ' }}><b>About</b></Nav.Link>
                            <NavDropdown title="Crops" id="collasible-nav-dropdown" style={{ color: 'white ' }}>
                                <NavDropdown.Item href="/Rabi" style={{ color: 'black ' }}><b>Rabi</b></NavDropdown.Item>
                                <NavDropdown.Item href="/Khareef" style={{ color: 'black ' }}><b>Khareef</b></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                            
                    </Navbar.Collapse>

               
            </Navbar>
        </div>






      
    
      
   
  );
};

export default Navbar1;