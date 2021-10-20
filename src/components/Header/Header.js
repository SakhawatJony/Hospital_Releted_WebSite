
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logOut} = useAuth();
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
      <Nav.Link as= {Link} to ="/contacts">Contact Us</Nav.Link>
      <Navbar.Text className="text-black">
       {

          user.email?
          <div className="mx-2" >
            {user.displayName}
            <img src={user.photoUrl} alt="" />

            <button className="btn btn-outline-success" onClick={logOut}>LogOut</button>
          </div> : <div className="d-flex">
            <Nav.Link as= {Link} to ="/login"><Button  className="btn btn-outline-success" variant="outline-success">LogIn</Button></Nav.Link>
          <Nav.Link as= {Link} to ="/register"><Button className="btn btn-outline-success" variant="outline-success">Register</Button></Nav.Link>
          </div>

        }
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;