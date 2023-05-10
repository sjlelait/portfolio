import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const Header = (props) => {
  const [expanded, setExpanded] = useState(false);

    return (
      <Navbar
        className='navbar'
        expanded={expanded}
        expand='md'
      >
        <Navbar.Brand as={Link} to='/' className='navbar-brand-link'>
          <img className='brand-img'src="https://disperse-sjl.s3.us-east-2.amazonaws.com/milk.png" alt='SJL' />
        </Navbar.Brand>
        <Navbar.Toggle
          className='navbar-toggler'
          aria-controls='responsive-navbar-nav'
          onClick={() => {
            setExpanded(expanded ? false : 'expanded');
          }}>
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav' className='responsive-navbar'>
          <Nav className='ms-auto nav-links justify-content-between'>    
            <Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>     
            <Nav.Link as={Link} to='/projects' onClick={() => setExpanded(false)}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to='/about' onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default Header;