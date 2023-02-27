import './NavBar.css';
import React from "react";
//bootstrap dependencies
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return(
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Leonardo Conroy</Navbar.Brand>
      </Container>
    </Navbar>
    );

};
export default NavBar
