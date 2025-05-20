import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faBootstrap,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <h5>Built With</h5>
            <ul className="list-unstyled">
              <li><FontAwesomeIcon icon={faReact} className="me-2 text-info" />React</li>
              <li><FontAwesomeIcon icon={faBootstrap} className="me-2 text-primary" />Bootstrap</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="me-2 text-success" />React-Bootstrap</li>
              <li><FontAwesomeIcon icon={faCheckCircle} className="me-2 text-warning" />EmailJS</li>
            </ul>
          </Col>

          <Col md={6} className="text-md-end">
            <h5>Connect</h5>
            <div>
              <a
                href="https://www.linkedin.com/in/abubakari-sherifdeen-b67a6864/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a
                href="https://github.com/blakcoder2017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
      
            </div>
            <p className="mt-3 mb-0">&copy; {currentYear} Abubakari Sherifdeen. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
