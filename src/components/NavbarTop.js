import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/NavLink';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';
function NavbarTop(){

  const navLinksStyle = {
   
    color: "white",
    textDecoration:"none",
    justifyContent:"space-around",
    minHeight:"3vh"
  }


    return (


      <nav >
      <Navbar bg="dark" variant="dark" sticky="top"  >

       <Navbar.Brand style={{textDecoration:"none",fontWeight:'bold',color:'white'}}>FOODY</Navbar.Brand>

       <Nav.Link>
       <Link to="/home" style={navLinksStyle}>Home</Link>
       </Nav.Link>

       <Nav.Link>
       <Link to="/cart" style={navLinksStyle}>Cart</Link>
       </Nav.Link>

       <Nav.Link>
       <Link to="/orders" style={navLinksStyle}>My Orders</Link>
       </Nav.Link>
      
       <Nav.Link style={{marginLeft:"60%"}}>
       <Link to="/admin" style={navLinksStyle}>ADMIN</Link>
       </Nav.Link>
    
     </Navbar>
     </nav>








      /*
      <Router>
        <Navbar bg="dark" variant="dark" sticky="top" >
        <Navbar.Brand style={{textDecoration:"none",fontWeight:'bold',color:'white'}}>FOODY</Navbar.Brand>
        <Nav className="mr-auto">
          <ul style={navLinksStyle}>
          &nbsp;&nbsp;&nbsp;&nbsp;
           <li>Home</li> &nbsp;&nbsp;&nbsp;&nbsp;
           <Link to="/Cart"> <li>Cart</li></Link>  &nbsp;&nbsp;&nbsp;&nbsp;
            <li>My Orders</li>  &nbsp;&nbsp;&nbsp;&nbsp;
          </ul>
        </Nav>
    
         </Navbar>
         </Router>
      */
    );
}

export default NavbarTop;