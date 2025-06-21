
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Chief Research Officer",
      bio: "Leading geneticist with 15+ years in DNA sequencing and analysis.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      position: "Director of Innovation",
      bio: "Pioneering researcher in CRISPR technology and gene editing.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Head of Bioinformatics",
      bio: "Expert in computational biology and genetic data analysis.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop&crop=center"
    }
  ];

  const milestones = [
    { year: "2010", achievement: "Founded CRC Groups with a vision to revolutionize DNA research" },
    { year: "2015", achievement: "Breakthrough in rapid DNA sequencing technology" },
    { year: "2018", achievement: "Partnered with leading medical institutions worldwide" },
    { year: "2021", achievement: "Developed AI-powered genetic analysis platform" },
    { year: "2024", achievement: "Launched next-generation CRISPR research program" }
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Company History Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h1 className="heading-secondary">About CRC Groups</h1>
              <p className="lead text-muted">
                Pioneering DNA research and development for over a decade
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <h3 className="mb-4">Our Story</h3>
              <p className="mb-3">
                Founded in 2010, CRC Groups emerged from a passion to unlock the mysteries of human genetics 
                and DNA. Our journey began with a small team of dedicated scientists who believed that 
                understanding DNA could transform healthcare and improve lives worldwide.
              </p>
              <p className="mb-3">
                Over the years, we have grown into a leading research organization, developing cutting-edge 
                technologies and methodologies that have advanced the field of genetic research significantly.
              </p>
              <p>
                Today, CRC Groups continues to push the boundaries of what's possible in DNA research, 
                working with institutions and organizations globally to create a better future through science.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" 
                alt="DNA Research Lab" 
                className="img-fluid rounded-3 shadow-lg"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="heading-secondary">Our Mission</h2>
              <p className="lead">
                To advance human understanding of genetics through innovative research, cutting-edge technology, 
                and collaborative partnerships that drive meaningful discoveries and improve global health outcomes.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 g-4">
            <Col md={4} className="text-center">
              <h4 className="text-primary mb-3">Innovation</h4>
              <p>Continuously developing new technologies and methodologies to advance genetic research.</p>
            </Col>
            <Col md={4} className="text-center">
              <h4 className="text-primary mb-3">Collaboration</h4>
              <p>Working with global partners to share knowledge and accelerate scientific discovery.</p>
            </Col>
            <Col md={4} className="text-center">
              <h4 className="text-primary mb-3">Excellence</h4>
              <p>Maintaining the highest standards of scientific rigor and research methodology.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="heading-secondary">Our Team</h2>
              <p className="lead text-muted">
                Meet the brilliant minds driving innovation at CRC Groups
              </p>
            </Col>
          </Row>
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col md={4} key={index}>
                <Card className="custom-card h-100 text-center">
                  <div className="p-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="rounded-circle mb-3"
                      style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                    />
                    <h5 className="mb-1">{member.name}</h5>
                    <p className="text-primary mb-2">{member.position}</p>
                    <p className="text-muted small">{member.bio}</p>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Milestones Section */}
      <section className="section-padding bg-gradient-primary">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="heading-secondary text-white">Our Journey</h2>
              <p className="lead text-white opacity-75">
                Key milestones in our quest to advance DNA research
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              {milestones.map((milestone, index) => (
                <div key={index} className="d-flex mb-4 align-items-start">
                  <div 
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center me-4"
                    style={{ width: '60px', height: '60px', minWidth: '60px' }}
                  >
                    <strong className="text-primary">{milestone.year}</strong>
                  </div>
                  <div className="text-white">
                    <p className="mb-0">{milestone.achievement}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
