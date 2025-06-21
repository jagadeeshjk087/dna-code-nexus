
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-custom ${scrolled ? 'shadow-lg' : ''}`}
      style={{ backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)' }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom">
          CRC Groups
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={location.pathname === '/' ? 'active fw-bold' : ''}
              style={{ color: 'var(--text-primary)', fontWeight: '500' }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className={location.pathname === '/about' ? 'active fw-bold' : ''}
              style={{ color: 'var(--text-primary)', fontWeight: '500' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/services" 
              className={location.pathname === '/services' ? 'active fw-bold' : ''}
              style={{ color: 'var(--text-primary)', fontWeight: '500' }}
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/projects" 
              className={location.pathname === '/projects' ? 'active fw-bold' : ''}
              style={{ color: 'var(--text-primary)', fontWeight: '500' }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active fw-bold' : ''}
              style={{ color: 'var(--text-primary)', fontWeight: '500' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
