import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import "./../history.css"

const history = [
    {
        year: "2023 - Present",
        title: "Software Engineer - Namibra Inc.",
        description: "Frontend Development, Backend Development, DevOps, Agile Project Management, Business Development,GenAI/LLM"
    },
    {
        year: "2022 - 2023",
        title: "Knowledge Analyst - International Potato Center",
        description: "I developed and executed a data and knowledge management strategy that improved research accessibility and utilization. I designed a digital monitoring system with QR code-based participant tracking, automated data reporting workflows, and enhanced project evaluation efficiency. I also trained research staff on data structuring and archival practices, and conducted analysis and visualization to support evidence-based decision-making."
    },
    {
        year: "2018 - 2022",
        title: "Advisor on Monitoring and Evaluation - GIZ Ghana",
        description: "I designed and implemented automated dashboards and M&E frameworks using SQL, Excel, and Power BI to streamline reporting and align performance with strategic goals. I led data cleaning and transformation efforts, developed ETL processes and pipelines to ensure efficient data flow, and reduced manual reporting by 80%."
    }
];

const History = () => {
    return (
        <section className="history-section py-5" id="history">
            <Container>
            <h2 className="mb-4">Experience</h2>
            <Row>
                <Col md={12}>
                    <div className="main-timeline9">
                        {history.map((item, index) => (
                            <div className="timeline" key={index}>
                                <div className="timeline-content">
                                    <div className="circle"><span><FontAwesomeIcon icon={faBriefcase} className="me-2" /></span></div>
                                    <div className="content">
                                        <span className="year">{item.year}</span>
                                        <h4 className="title">{item.title}</h4>
                                        <p className="description">{item.description}</p>
                                        <div className="icon"><span></span></div>
                                    </div>
                                </div>
                            </div>
                        ))}
               
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    )
}


export default History;