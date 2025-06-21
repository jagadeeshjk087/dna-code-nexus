
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowAlert(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide alert after 5 seconds
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Contact Hero Section */}
      <section className="section-padding bg-gradient-secondary">
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h1 className="heading-primary mb-4">Contact Us</h1>
              <p className="lead">
                Ready to collaborate on your next DNA research project? Get in touch with our expert team today.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <Container>
          <Row className="g-5">
            {/* Contact Information */}
            <Col lg={4}>
              <h3 className="mb-4">Get In Touch</h3>
              <p className="text-muted mb-4">
                Have questions about our services or want to discuss a potential collaboration? 
                We're here to help and look forward to hearing from you.
              </p>
              
              <Card className="custom-card mb-4">
                <Card.Body className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <MapPin size={24} color="var(--dna-blue)" />
                  </div>
                  <div>
                    <h6 className="mb-1">Address</h6>
                    <p className="text-muted mb-0 small">
                      123 Research Blvd<br />
                      Science Park, CA 90210<br />
                      United States
                    </p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card mb-4">
                <Card.Body className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <Phone size={24} color="var(--dna-cyan)" />
                  </div>
                  <div>
                    <h6 className="mb-1">Phone</h6>
                    <p className="text-muted mb-0 small">+1 (555) 123-4567</p>
                  </div>
                </Card.Body>
              </Card>

              <Card className="custom-card mb-4">
                <Card.Body className="d-flex align-items-center p-3">
                  <div className="me-3">
                    <Mail size={24} color="var(--dna-purple)" />
                  </div>
                  <div>
                    <h6 className="mb-1">Email</h6>
                    <p className="text-muted mb-0 small">info@crcgroups.com</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Form */}
            <Col lg={8}>
              <Card className="custom-card">
                <Card.Body className="p-4">
                  <h3 className="mb-4">Send us a Message</h3>
                  
                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      Thank you for your message! We'll get back to you within 24 hours.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Full Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-control-custom"
                            required
                            placeholder="Enter your full name"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control-custom"
                            required
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Subject *</Form.Label>
                          <Form.Control
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="form-control-custom"
                            required
                            placeholder="Enter message subject"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="form-control-custom"
                            required
                            placeholder="Tell us about your project or inquiry..."
                          />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Button type="submit" className="btn-primary-custom">
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-4">
              <h3>Find Us</h3>
              <p className="text-muted">Visit our state-of-the-art research facility</p>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="ratio ratio-21x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5384892894897!2d-118.2436849!3d34.0522265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0, borderRadius: '15px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CRC Groups Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Office Hours */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={6} className="mx-auto text-center">
              <h3 className="mb-4">Office Hours</h3>
              <Card className="custom-card">
                <Card.Body className="p-4">
                  <Row className="text-center">
                    <Col>
                      <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                      <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                      <p><strong>Sunday:</strong> Closed</p>
                      <p className="text-muted small mt-3">
                        Emergency research support available 24/7
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
