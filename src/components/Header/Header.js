import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <>
        <Navbar bg="light" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className="text-black">Drink-Hospital-Ltd</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link   as= {Link} to="/home">Home</Nav.Link>
      <Nav.Link as=  {Link} to ="/services">Services</Nav.Link>
      <Nav.Link as= {Link} to ="/about">About Us</Nav.Link>
      <Nav.Link as= {Link} to ="/about">Contact Us</Nav.Link>
      <Nav.Link as= {Link} to ="/login">Login</Nav.Link>
      <Navbar.Text className="text-black">
        Signed in as: <a href="#login"></a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;