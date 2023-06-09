import React, { Component,useState } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom'
const CompanyLogIn = () => {

  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
  async function loginCompany(e) {
    e.preventDefault()
    console.log(`Email: ${email} Password: ${password}`);
    
    const response = await fetch('http://localhost:1337/api/companyLogin', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
        email, password
        }),
       
    })
  

    const data = await response.json();

    console.log(data)
    if(data.status === 'ok'){
      localStorage.setItem('token', data.user);
      localStorage.setItem('name', data.name);
        navigate('/CompanyHome', { replace: true })
    }

}

  return (
    <div className="Companylog" >
      <div>

        <Col md={{ span: 7, offset: 4 }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>

          <Card border="success" style={{ width: '25rem' }}>
            <Card.Body>


              <Form onSubmit={loginCompany}>
                <br></br>
                <h1 class="container text-center">Company LogIn</h1>
                <br></br>

                <div class="container">

                  <Row className="mb-1">



                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" onChange={(e) =>{setEmail(e.target.value)}} required placeholder="Enter email" />
                    </Form.Group>

                  </Row>
                  <br></br>

                  <Row className="mb-2">
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" onChange={(e) =>{setPassword(e.target.value)}} required placeholder="Password" />
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

export default CompanyLogIn;