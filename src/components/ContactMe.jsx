import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

    useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(''), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Sending...');

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((response) => {
      setStatus('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      console.log('Thanks for your email! I will reach', response.status, response.text);
    })
    .catch((error) => {
      setStatus(`Failed to send email: ${error.text}`);
    });
  };

   return (
    <section className="contact-me bg-light py-5">
      <Container>
        <Row className="mt-5 justify-content-center text-center">
          <Col md={6}>
            <h4>Connect With Me</h4>
            <p>IGot a project waiting to be realized? Let's collaborate and make it happen!</p>
     
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

              <Button variant="primary" type="submit" disabled={status === 'Sending your message...'}>
                {status === 'Sending your message...' ? 'Sending...' : 'Send Email'}
              </Button>

              {status && (
                <div
                  className={`mt-3 alert ${
                    status.includes("successfully")
                      ? "alert-success"
                      : status.includes("Sending")
                      ? "alert-info"
                      : "alert-danger"
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
