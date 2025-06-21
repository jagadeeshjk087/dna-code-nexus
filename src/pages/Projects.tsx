
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Cancer Genome Mapping Initiative",
      category: "oncology",
      description: "Comprehensive genome sequencing and analysis of cancer cells to identify therapeutic targets.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      status: "Completed",
      goals: "Map genetic mutations in various cancer types",
      methods: "Next-generation sequencing, bioinformatics analysis",
      outcomes: "Identified 15 new therapeutic targets"
    },
    {
      title: "Rare Disease Gene Discovery",
      category: "rare-diseases",
      description: "Identification of genetic causes for rare inherited diseases through advanced DNA analysis.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      status: "Ongoing",
      goals: "Discover genes responsible for rare diseases",
      methods: "Whole exome sequencing, family studies",
      outcomes: "10 new disease genes identified"
    },
    {
      title: "CRISPR Therapeutic Development",
      category: "gene-therapy",
      description: "Development of CRISPR-based therapeutic approaches for genetic disorders.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=250&fit=crop",
      status: "Ongoing",
      goals: "Develop safe and effective gene therapies",
      methods: "CRISPR-Cas9, delivery system optimization",
      outcomes: "3 therapies in clinical trials"
    },
    {
      title: "Pharmacogenomics Database",
      category: "pharmacogenomics",
      description: "Building a comprehensive database of genetic variants affecting drug response.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      status: "Completed",
      goals: "Create personalized medicine resource",
      methods: "Population genetics, drug response studies",
      outcomes: "Database with 100,000+ variants"
    },
    {
      title: "Infectious Disease Genomics",
      category: "infectious-diseases",
      description: "Genomic analysis of pathogens to understand transmission and develop countermeasures.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=250&fit=crop",
      status: "Ongoing",
      goals: "Track pathogen evolution and spread",
      methods: "Viral sequencing, phylogenetic analysis",
      outcomes: "Real-time pandemic monitoring system"
    },
    {
      title: "Agricultural Genomics Program",
      category: "agriculture",
      description: "Genetic improvement of crop species for enhanced yield and disease resistance.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      status: "Completed",
      goals: "Improve crop genetics for sustainability",
      methods: "Plant breeding, marker-assisted selection",
      outcomes: "5 improved crop varieties released"
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'oncology', label: 'Oncology' },
    { key: 'rare-diseases', label: 'Rare Diseases' },
    { key: 'gene-therapy', label: 'Gene Therapy' },
    { key: 'pharmacogenomics', label: 'Pharmacogenomics' },
    { key: 'infectious-diseases', label: 'Infectious Diseases' },
    { key: 'agriculture', label: 'Agriculture' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Projects Hero Section */}
      <section className="section-padding bg-gradient-primary">
        <Container>
          <Row className="text-center text-white">
            <Col lg={8} className="mx-auto">
              <h1 className="heading-primary mb-4">Our Projects</h1>
              <p className="lead">
                Showcasing groundbreaking research and innovative solutions in DNA analysis and genetic engineering
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Section */}
      <section className="py-4 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <Container>
          <Row className="g-4">
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} key={index}>
                <Card className="custom-card h-100">
                  <Card.Img 
                    variant="top" 
                    src={project.image} 
                    alt={project.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title">{project.title}</h5>
                      <span className={`badge ${project.status === 'Completed' ? 'bg-success' : 'bg-primary'}`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted mb-3">{project.description}</p>
                    
                    <div className="mt-auto">
                      <div className="mb-2">
                        <strong>Goals:</strong>
                        <p className="small mb-1">{project.goals}</p>
                      </div>
                      <div className="mb-2">
                        <strong>Methods:</strong>
                        <p className="small mb-1">{project.methods}</p>
                      </div>
                      <div className="mb-3">
                        <strong>Outcomes:</strong>
                        <p className="small mb-0">{project.outcomes}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-light">
        <Container>
          <Row className="text-center">
            <Col md={3}>
              <h3 className="text-primary mb-2">50+</h3>
              <p className="text-muted">Completed Projects</p>
            </Col>
            <Col md={3}>
              <h3 className="text-primary mb-2">100+</h3>
              <p className="text-muted">Research Partners</p>
            </Col>
            <Col md={3}>
              <h3 className="text-primary mb-2">500+</h3>
              <p className="text-muted">Publications</p>
            </Col>
            <Col md={3}>
              <h3 className="text-primary mb-2">15+</h3>
              <p className="text-muted">Awards</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Projects;
