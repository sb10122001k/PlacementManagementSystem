import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';

const AdminLogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a JSON object with email and password
    const data = {
      email,
      password
    };

    // Make the POST request to the Express server
    fetch('http://localhost:1337/api/adminLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      // Handle the response from the server
      if (response.ok) {
        // Successful login, do something
        console.log('Login successful');
      } else {
        // Login failed, handle the error
        console.error('Login failed');
      }
    })
    .catch(error => {
      // Handle any network or server errors
      console.error('Error:', error);
    });
  };

  return (
    <div className="Adminlog">
      <div>
        <Col md={{ span: 7, offset: 4 }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Card border="success" style={{ width: '25rem' }}>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <br></br>
                <h1 className="container text-center">Admin LogIn</h1>
                <br></br>
                <div className="container">
                  <Row className="mb-1">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        required
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <br></br>
                  <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        required
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <div className="text-right">
                    <a href="!#">Forgot password?</a>
                  </div>
                  <br></br>
                  <Button className="mb-4 w-100" variant="dark" type="submit">
                    LogIn
                  </Button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="text-right">
                    Not a member? <a href="#!">Register</a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default AdminLogIn;
