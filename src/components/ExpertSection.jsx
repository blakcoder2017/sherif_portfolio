import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import "./../Expert.css";

// Reusable badge component
const CredlyBadge = ({ badgeId }) => (
  <div
    data-iframe-width="150"
    data-iframe-height="270"
    data-share-badge-id={badgeId}
    data-share-badge-host="https://www.credly.com"
  ></div>
);

const ExpertiseSection = () => {
  useEffect(() => {
    const scriptId = "credly-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.src = "https://cdn.credly.com/assets/utilities/embed.js";
      script.async = true;
      script.id = scriptId;
      document.body.appendChild(script);
    }
  }, []);

  const expertiseData = [
    {
      icon: faReact,
      title: "Software Engineer",
      description:
        "I have built a diverse array of web applications from scratch using modern technologies such as React and Node. I have a strong proficiency in the SDLC process and frontend + backend development.",
      techStack: [
        "React", "JavaScript", "HTML5", "CSS3", "Node.js", "MongoDB",
        "Express.js", "Postman", "PostgreSQL", "Firebase"
      ],
      badgeId: "d1aecdb9-d12d-4fab-9a72-50b0d2432020",
    },
    {
      icon: faChartBar,
      title: "Data Analytics",
      description:
        "Experienced in transforming raw data into actionable insights. I leverage statistical methods, data visualization techniques, and tools like Python and SQL to identify trends, patterns, and opportunities that drive informed decision-making.",
      techStack: [
        "SQL", "Microsoft Excel", "R", "Python", "Power BI", "Tableau",
        "Looker Studio", "Google BiqQuery"
      ],
      badgeId: "f500948f-2f7f-4614-a7e3-81c410138895",
    },
    {
      icon: faPython,
      title: "GenAI & LLM",
      description:
        "Stay relevant in the market by leveraging the latest AI models in your projects. I have professional experience building enterprise-grade GenAI-enabled solutions to empower intelligent decision-making.",
      techStack: ["OpenAI", "Groq", "Streamlit", "Odrannt"],
    },
  ];

  return (
    <section className="expertise-section py-5" id="expertise">
      <Container>
        <h2 className="mb-4">Expertise</h2>
        <Row className="gy-4">
          {expertiseData.map(({ icon, title, description, techStack, badgeId }, idx) => (
            <Col md={4} key={idx}>
              <FontAwesomeIcon icon={icon} className="mb-2 mx-auto" size="2x" />
              <h4>{title}</h4>
              <p>{description}</p>
              <div className="tech-stack">
                <strong>Tech stack:</strong>{" "}
                {techStack.map((tech, i) => (
                  <span key={i} className="badge text-bg-secondary me-1">
                    {tech}
                  </span>
                ))}
              </div>
              <br/>
              {badgeId && <CredlyBadge badgeId={badgeId} />}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExpertiseSection;
