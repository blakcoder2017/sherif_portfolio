import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons"; // Brand icons
import { faChartBar  } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import './../Expert.css'
const ExpertiseSection = () => {
    return (
        <section className="expertise-section py-5" id="expertise">
            <Container>
                <h2 className="mb-4">Expertise</h2>
                <Row className="gy-4">
                    <Col md={4} >
                        <FontAwesomeIcon icon={faReact} className="mb-2 mx-auto" size="2x" />
                        <h4>Software Engineer</h4>
                        <p>
                            I have built a diverse array of web applications from scratch using modern technologies such
                            as React and Node. I have a strong proficiency in the SDLC process and frontend + backend
                            development.
                        </p>
                        <div className="tech-stack">
                            <strong>Tech stack:</strong>
                            <span className="badge text-bg-secondary">React</span>
                            <span className="badge text-bg-secondary">JavaScript</span>
                            <span className="badge text-bg-secondary">HTML5</span>
                            <span className="badge text-bg-secondary">CSS3</span>
                            <span className="badge text-bg-secondary">Node.js</span>
                            <span className="badge text-bg-secondary">MongoDB</span>
                            <span className="badge text-bg-secondary">Express.js</span>
                            <span className="badge text-bg-secondary">Postman</span>
                            <span className="badge text-bg-secondary">PostgreSQL</span>
                            <span className="badge text-bg-secondary">Firebase</span>
        
                        </div>
                    </Col>

                    <Col md={4}>
                        <FontAwesomeIcon icon={faChartBar} className="mb-2 mx-auto" size="2x" />
                        <h4>Data Analytics</h4>
                        <p>
                            Experienced in transforming raw data into actionable insights. I leverage statistical methods, data visualization techniques, and tools like Python and SQL to identify trends, patterns, and opportunities that drive informed decision-making.
                        </p>
                        <div className="tech-stack">
                            <strong>Tech stack:</strong>
                             <span className="badge text-bg-secondary">SQL</span>
                            <span className="badge text-bg-secondary">Microsoft Excel</span>
                            <span className="badge text-bg-secondary">R</span>
                            <span className="badge text-bg-secondary">Python</span>
                            <span className="badge text-bg-secondary">Power BI</span>
                            <span className="badge text-bg-secondary">Tableau</span>
                            <span className="badge text-bg-secondary">Looker Studio</span>
                            <span className="badge text-bg-secondary">Google BiqQuery</span>
                       
        
                        </div>
                    </Col>

                    <Col md={4} >
                        <FontAwesomeIcon icon={faPython} className="mb-2 mx-auto" size="2x" />
                        <h4>GenAI & LLM</h4>
                        <p>
                            Stay relevant in the market by leveraging the latest AI models in your projects. I have
                            professional experience building enterprise-grade GenAI-enabled solutions to empower
                            intelligent decision-making.
                        </p>
                        <div className="tech-stack">
                            <strong>Tech stack:</strong>
                            <span className="badge text-bg-secondary">OpenAI</span>
                            <span className="badge text-bg-secondary">Groq</span>
                            <span className="badge text-bg-secondary">Streamlit</span>
                            <span className="badge text-bg-secondary">Odrannt</span>
                         
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ExpertiseSection;