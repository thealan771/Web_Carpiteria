// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">Carpintería Del Centro</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <LinkContainer to="/">
            <Nav.Link>Inicio</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link>Nosotros</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/services">
            <Nav.Link>Servicios</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <Nav.Link>Galería</Nav.Link>
          </LinkContainer>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
