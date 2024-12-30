import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function Navb() {

      return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            
            <Link className='link text-dark fs-4'  to="/" >Products Store</Link >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link className='link text-dark '  to="/" >link1</Link >
              <Link className='link text-dark '  to="/" >link2</Link >

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
