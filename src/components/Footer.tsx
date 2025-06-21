
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">CRC Groups</h5>
            <p className="text-light">
              Leading the future of DNA research and development with cutting-edge 
              technology and innovative solutions for genetic analysis.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light text-decoration-none">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-light text-decoration-none">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">About</Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="text-light text-decoration-none">Services</Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="text-light text-decoration-none">Projects</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
              </li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-light">DNA Sequencing</span>
              </li>
              <li className="mb-2">
                <span className="text-light">Genetic Analysis</span>
              </li>
              <li className="mb-2">
                <span className="text-light">Research Consulting</span>
              </li>
              <li className="mb-2">
                <span className="text-light">Laboratory Services</span>
              </li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="fw-bold mb-3">Contact Info</h6>
            <div className="text-light">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                123 Research Drive, Science City, SC 12345
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +1 (555) 123-4567
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@crcgroups.com
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col md={6}>
            <p className="mb-0 text-light">
              &copy; 2024 CRC Groups. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0 text-light">
              Privacy Policy | Terms of Service | Cookie Policy
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
