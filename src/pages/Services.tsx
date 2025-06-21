
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Search, FileText, Image } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "DNA Sequencing & Analysis",
      description: "Comprehensive DNA sequencing services using next-generation technology for accurate genetic analysis.",
      icon: <Search size={48} color="var(--dna-blue)" />,
      features: ["Whole Genome Sequencing", "Targeted Sequencing", "Variant Analysis", "Quality Control"]
    },
    {
      title: "CRISPR Gene Editing",
      description: "Advanced gene editing services using CRISPR technology for research and therapeutic applications.",
      icon: <FileText size={48} color="var(--dna-cyan)" />,
      features: ["Guide RNA Design", "Editing Validation", "Off-target Analysis", "Delivery Systems"]
    },
    {
      title: "Bioinformatics Solutions",
      description: "Comprehensive computational analysis and interpretation of genetic data using AI-powered tools.",
      icon: <Image size={48} color="var(--dna-purple)" />,
      features: ["Data Pipeline Development", "Custom Analysis Tools", "Machine Learning Models", "Visualization"]
    },
    {
      title: "Genetic Consulting",
      description: "Expert consultation services for research design, methodology, and result interpretation.",
      icon: <Search size={48} color="var(--dna-blue)" />,
      features: ["Research Design", "Protocol Development", "Data Interpretation", "Publication Support"]
    },
    {
      title: "Laboratory Services",
      description: "Full-service laboratory capabilities for sample processing and experimental procedures.",
      icon: <FileText size={48} color="var(--dna-cyan)" />,
      features: ["Sample Processing", "Quality Assurance", "Custom Protocols", "Equipment Access"]
    },
    {
      title: "Training & Education",
      description: "Professional development and training programs in modern DNA research techniques.",
      icon: <Image size={48} color="var(--dna-purple)" />,
      features: ["Workshops", "Certification Programs", "Online Courses", "Custom Training"]
    }
  ];

  const testimonials = [
    {
      name: "Dr. Amanda Williams",
      position: "Research Director, BioTech Institute",
      testimonial: "CRC Groups delivered exceptional results on our genome sequencing project. Their expertise and attention to detail exceeded our expectations."
    },
    {
      name: "Prof. David Martinez",
      position: "Harvard Medical School",
      testimonial: "The bioinformatics solutions provided by CRC Groups have revolutionized our research capabilities. Highly recommended for any genomics project."
    },
    {
      name: "Dr. Lisa Thompson",
      position: "Chief Scientist, GenHealth Corp",
      testimonial: "Working with CRC Groups has accelerated our research timeline significantly. Their CRISPR expertise is unmatched in the industry."
    }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Services Hero Section */}
      <section className="section-padding bg-gradient-secondary">
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h1 className="heading-primary mb-4">Our Services</h1>
              <p className="lead">
                Comprehensive DNA research and development services tailored to advance your scientific goals
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <Container>
          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="custom-card h-100">
                  <Card.Body className="p-4">
                    <div className="text-center mb-3">
                      {service.icon}
                    </div>
                    <h5 className="text-center mb-3">{service.title}</h5>
                    <p className="text-muted mb-3">{service.description}</p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <span className="text-primary me-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="heading-secondary">Our Process</h2>
              <p className="lead text-muted">
                A systematic approach to delivering exceptional research results
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            <Col md={3} className="text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold">1</span>
              </div>
              <h5>Consultation</h5>
              <p className="text-muted">Initial discussion to understand your research goals and requirements</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold">2</span>
              </div>
              <h5>Planning</h5>
              <p className="text-muted">Detailed project planning and methodology development</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold">3</span>
              </div>
              <h5>Execution</h5>
              <p className="text-muted">Professional execution of research using state-of-the-art technology</p>
            </Col>
            <Col md={3} className="text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold">4</span>
              </div>
              <h5>Delivery</h5>
              <p className="text-muted">Comprehensive results delivery with detailed analysis and interpretation</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="heading-secondary">Client Testimonials</h2>
              <p className="lead text-muted">
                What our clients say about working with CRC Groups
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {testimonials.map((testimonial, index) => (
              <Col lg={4} key={index}>
                <Card className="custom-card h-100">
                  <Card.Body className="p-4">
                    <p className="mb-4 fst-italic">"{testimonial.testimonial}"</p>
                    <div className="border-top pt-3">
                      <h6 className="mb-1">{testimonial.name}</h6>
                      <small className="text-muted">{testimonial.position}</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Services;
