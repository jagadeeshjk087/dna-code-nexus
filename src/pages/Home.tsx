
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Search, FileText, Image } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-decoration dna-animation">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 100 Q 100 50 150 100 Q 100 150 50 100" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M50 80 Q 100 30 150 80" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M50 120 Q 100 170 150 120" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="50" cy="100" r="4" fill="var(--dna-blue)"/>
            <circle cx="75" cy="75" r="3" fill="var(--dna-cyan)"/>
            <circle cx="100" cy="100" r="4" fill="var(--dna-purple)"/>
            <circle cx="125" cy="125" r="3" fill="var(--dna-blue)"/>
            <circle cx="150" cy="100" r="4" fill="var(--dna-cyan)"/>
          </svg>
        </div>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6}>
              <div className="hero-content text-white fade-in-up">
                <h1 className="heading-primary mb-4">
                  Unlocking the Secrets of <span className="pulse-animation">DNA</span>
                </h1>
                <p className="lead mb-4">
                  CRC Groups is at the forefront of DNA research and development, 
                  pioneering innovative solutions that transform healthcare and advance scientific understanding.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/services" className="btn-primary-custom">
                    Explore Services
                  </Link>
                  <Link to="/projects" className="btn-outline-custom" style={{ color: 'white', borderColor: 'white' }}>
                    View Projects
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                  alt="DNA Research" 
                  className="img-fluid rounded-3 shadow-lg"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="heading-secondary">About CRC Groups</h2>
              <p className="lead text-muted">
                Leading the future of DNA research with cutting-edge technology and innovative methodologies
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={4}>
              <Card className="custom-card h-100 text-center p-4">
                <div className="mb-3">
                  <Search size={48} color="var(--dna-blue)" />
                </div>
                <Card.Body>
                  <h5>Advanced Research</h5>
                  <p className="text-muted">
                    Utilizing state-of-the-art technology to unlock the mysteries of genetic information and cellular mechanisms.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="custom-card h-100 text-center p-4">
                <div className="mb-3">
                  <FileText size={48} color="var(--dna-cyan)" />
                </div>
                <Card.Body>
                  <h5>Scientific Excellence</h5>
                  <p className="text-muted">
                    Our team of world-class scientists and researchers push the boundaries of what's possible in DNA analysis.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="custom-card h-100 text-center p-4">
                <div className="mb-3">
                  <Image size={48} color="var(--dna-purple)" />
                </div>
                <Card.Body>
                  <h5>Innovation Focus</h5>
                  <p className="text-muted">
                    Constantly developing new methodologies and technologies to advance the field of genetic research.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-secondary">
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h2 className="heading-secondary text-white mb-4">Ready to Advance Your Research?</h2>
              <p className="lead mb-4">
                Partner with CRC Groups to unlock the potential of DNA research and drive innovation in your field.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn-primary-custom">
                  Get Started Today
                </Link>
                <Link to="/about" className="btn-outline-custom" style={{ color: 'white', borderColor: 'white' }}>
                  Learn More
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
