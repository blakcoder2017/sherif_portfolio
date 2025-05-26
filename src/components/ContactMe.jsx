import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus('');
        setStatusType('');
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setStatus('Sending your message...');
    setStatusType('info');

    fetch("https://formcarry.com/s/YnYA2H9Nlqn", {
      method: 'POST',
      headers: { 
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        setStatus("I have received your submission. I will reach out to you, thank you!");
        setStatusType('success');
        setName('');
        setEmail('');
        setMessage('');
      } else if (response.code === 422) {
        setStatus(response.message);
        setStatusType('error');
      } else {
        setStatus(response.message);
        setStatusType('error');
      }
    })
    .catch(error => {
      setStatus(error.message ? error.message : 'Something went wrong!');
      setStatusType('error');
    });
  };

  return (
    <section className="contact-me bg-light py-5">
      <Container>
        <Row className="mt-5 justify-content-center text-center">
          <Col md={6}>
            <h4>Connect With Me</h4>
            <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="btn btn-outline-secondary" type="submit" disabled={statusType === 'info'}>
                {statusType === 'info' ? 'Sending...' : 'Send Email'}
              </Button>

              {status && (
                <div
                  className={`mt-3 alert ${
                    statusType === 'success'
                      ? 'alert-success'
                      : statusType === 'info'
                      ? 'alert-info'
                      : 'alert-danger'
                  }`}
                  role="alert"
                >
                  {status}
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactMe;
