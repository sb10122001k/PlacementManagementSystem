import React, { Component } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'

const AdminLogIn = () => {
  return (
    <div className="Adminlog" >
      <div>

        <Col md={{ span: 7, offset: 4 }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>

          <Card border="success" style={{ width: '25rem' }}>
            <Card.Body>


              <Form>
                <br></br>
                <h1 class="container text-center">Admin LogIn</h1>
                <br></br>

                <div class="container">

                  <Row className="mb-1">



                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" required placeholder="Enter email" />
                    </Form.Group>

                  </Row>
                  <br></br>

                  <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" required placeholder="Password" />
                    </Form.Group>
                  </Row>

                  <div className="text-right" >
                    <a href="!#" >Forgot password?</a>
                  </div>

                  <br></br>
                  <Button className="mb-4 w-100" variant="dark" type="submit">LogIn </Button>
                  <br></br>
                  <br></br>
                  <br></br>
                  <p className="text-right">Not a member? <a href="#!">Register</a></p>


                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default AdminLogIn;
