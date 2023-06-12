import React, { useState } from 'react';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminLogIn = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    fetch('http://localhost:1337/api/adminLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        const token = 'admin';
      localStorage.setItem('token', token);
        navigate('/admin/home')

        console.log('Login successful');
      } else {

        console.error('Login failed');
      }
    })
    .catch(error => {
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
