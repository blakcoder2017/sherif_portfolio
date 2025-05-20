import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../Projects.css';
const projects = [
  {
    icon: faChartLine,
    title: "Nutrition Training Dashboard",
    description: "React-based web app for managing and visualizing data, featuring seamless SheetDB integration and centralized state with Redux. It simplifies dashboard development with a robust backend, responsive UI, and built-in error handling.",
    image: "https://res.cloudinary.com/dj80qtezw/image/upload/v1747663635/Image_02-05-2025_at_12.04_PM_qf3mcy.jpg",
    github: "https://github.com/blakcoder2017/training_dashboard_React-VIte",

  },

  
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body className="text-center">
                    <FontAwesomeIcon icon={project.icon} size="2x" className="mb-2 text-primary" />
                    <Card.Title className="mt-2">{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div className="d-flex justify-content-center gap-3 mt-2">
                        {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        )}
                        {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live App">
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="lg" />
                        </a>
                        )}
                    </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
