import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBarMenu ({ items }) {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        {items.map((item) => (
          <Nav.Link 
            as={Link} 
            to={item.path} 
            key={item.id}
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)};

export default NavBarMenu;