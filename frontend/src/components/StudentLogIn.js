import React, { useState } from 'react'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'
import {useNavigate, Link} from "react-router-dom";  

const StudentLogIn = () => {
    const [usn, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
  async function LogInStudent(e) {
    e.preventDefault()
    console.log(`Email: ${usn} Password: ${password}`);
    const response = await fetch('http://localhost:1337/api/studentLogin', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
        usn, password
        }),
       
    })

    const data = await response.json();

    console.log(data)
    if(data.status === 'ok'){
      localStorage.setItem('token', data.token);
        navigate('/StudentHome', { replace: true })
    }
    else{
      alert(data.error)
    }

}


  return (
    <div className="Studentlog" >
      <div>

        <Col md={{ span: 7, offset: 4 }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <br></br>

          <Card border="success" style={{ width: '25rem' }}>
            <Card.Body>


              <Form onSubmit={LogInStudent}>
                <br></br>
                <h1 className="container text-center">Student LogIn</h1>
                <br></br>

                <div className="container">

                  <Row className="mb-1">



                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>USN</Form.Label>
                      <Form.Control type="text" onChange={(e) =>{setEmail(e.target.value)}} required placeholder="Enter USN " />
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
                  <Button className="mb-4 w-100" variant="dark" type="submit" onClick={LogInStudent}>LogIn </Button>
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

export default StudentLogIn;