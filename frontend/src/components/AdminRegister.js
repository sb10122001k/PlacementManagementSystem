import React, { Component, useState } from 'react';
import { Form, Row, Col, Button, Stack } from 'react-bootstrap'
import {useNavigate, Link} from "react-router-dom";  


const AdminRegister = () => {
    const [username,setCollegeId]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
  async function registerAdmin(e) {
    e.preventDefault()
    console.log(`Email: ${email} Password: ${password}`);
    const response = await fetch('http://localhost:1337/api/registerAdmin', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
        username,email, password
        }),
       
    })

    const data = await response.json();

    console.log(data)
    if(data.status === 'ok'){
        navigate('/login', { replace: true })
    }

}


    return (
        <Form onSubmit={registerAdmin}>
            <br></br>
            <h1 className="container text-center">Admin Register</h1>
            <br></br>

            <div class="container ">
                <br></br>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form.Group controlId="formGridCollegeid">
                            <Form.Label>College ID</Form.Label>
                            <Form.Control type='text' onChange={(e) =>{setCollegeId(e.target.value)}} required placeholder="College ID"
                            />
                        </Form.Group>

                        <br></br>
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email"  onChange={(e) =>{setEmail(e.target.value)}} required placeholder="Enter email" />
                        </Form.Group>
                        <br></br>
                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" onChange={(e) =>{setPassword(e.target.value)}} required placeholder="Password" />
                        </Form.Group>

                        <br></br>
                        <br></br>

                        <Stack gap={2} className="col-md-5 mx-auto">

                            <Button variant="dark" type="submit">Register </Button>{' '}
                        </Stack>

                    </Col>
                </Row>

            </div>
        </Form>

    );
}

export default AdminRegister;

