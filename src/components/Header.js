import React from "react";
import { Link } from "react-router-dom";
import { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = () => {
    setExpanded(false);
  };

    return (
      <Navbar
      className='navbar'
      expanded={expanded}
      onToggle={setExpanded}
      expand='false'
    >
        <Navbar.Brand as={Link} to='/' className='navbar-brand-link'>SJL</Navbar.Brand>
        <Navbar.Toggle
          className='hamburger'
          aria-controls='basic-navbar-nav'
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto hamburger-menu' onClick={handleLinkClick}>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/projects'>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to='/resume'>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default Header;