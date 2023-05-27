import React, { Component ,useState} from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import {useNavigate, Link} from "react-router-dom";  



const CompanyRegister = () => {

    const [companyName,setCompanyName]=useState('');
    const [companyWebsite, setCompanyWebsite] = useState('');
    const [password, setPassword] = useState('');
    const [country,setCountry]=useState('');
    const [email, setEmail] = useState('');
    const [state, setState] = useState('');
    const [city,setCity]=useState('');
    const [ZIPCode, setZIPCode] = useState('');
    const [address, setAddress] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [logo, setLogo] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');

    const navigate = useNavigate();
  async function registerCompany(e) {
    e.preventDefault()
    console.log(`Email: ${email} Password: ${password}`);
    const response = await fetch('http://localhost:1337/api/registerCompany', {
        method: 'POST',
        headers: {
        'Content-type': 'application/json'
        },
        body: JSON.stringify({
        companyName,companyWebsite,email, password,country,state,city,ZIPCode,address,contactNumber,logo,companyDescription
        }),
       
    })

    const data = await response.json();

    console.log(data)
    if(data.status === 'ok'){
        
        navigate('/login', { replace: true })
     }
    }


    return (

        <Form onSubmit={registerCompany}>
            <br></br>
            <h1 className="container text-center">Company Register</h1>
            <br></br>

            <div className="container">

                <Row className="mb-2">

                    <Form.Group as={Col} controlId="formGridCompanyname" className="position-relative"
                    >
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type='text' required placeholder="Company name" onChange={(e) =>{setCompanyName(e.target.value)}}
                        />

                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCompanywebsitelink">
                        <Form.Label>Company Website link</Form.Label>
                        <Form.Control type='text' required placeholder="Company website link" onChange={(e) =>{setCompanyWebsite(e.target.value)}}
                        />

                    </Form.Group>


                </Row>
                <br></br>


                <Row className="mb-2">



                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) =>{setEmail(e.target.value)}} required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) =>{setPassword(e.target.value)}} required placeholder="Password" />
                    </Form.Group>
                </Row>
                <br></br>
                <Row className="mb-2">



                    <Form.Group as={Col} controlId="formGridCountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Control required placeholder="Country" onChange={(e) =>{setCountry(e.target.value)}} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control required placeholder="State" onChange={(e) =>{setState(e.target.value)}}
                            type="text"
                        />

                    </Form.Group>
                </Row>

                <br></br>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="City" onChange={(e) =>{setCity(e.target.value)}}
                            type="text"
                            required
                        />

                    </Form.Group>

                    <Form.Group
                        as={Col}
                        controlId="validationFormik105"
                        className="position-relative"
                    >
                        <Form.Label>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"  onChange={(e) =>{setZIPCode(e.target.value)}} />

                    </Form.Group>
                </Row>
                <br></br>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control as="textarea" onChange={(e) =>{setAddress(e.target.value)}} required rows={3} />
                </Form.Group>
                <br></br>
                <Row className="mb-2">

                    <Form.Group as={Col} controlId="formBasicContactnumber">
                        <Form.Label>Contact Number </Form.Label>
                        <Form.Control type="text" onChange={(e) =>{setContactNumber(e.target.value)}} required placeholder="Contact number" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formFile" className="mb-3">
                        <Form.Label>Company Logo</Form.Label>
                        <Form.Control required type="file" onChange={(e) =>{setLogo(e.target.value)}} />
                    </Form.Group>


                </Row>
                <br></br>

                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Company Description</Form.Label>
                    <Form.Control as="textarea" onChange={(e) =>{setCompanyDescription(e.target.value)}} required rows={3} />
                </Form.Group>
                <br></br>





                <Form.Group className="position-relative mb-3">
                    <Form.Check
                        required
                        name="terms"
                        label="The information given by me is correct"

                    />
                </Form.Group>



                <br></br>

                <Button variant="dark" type="submit">Submit </Button>{' '}
                <Button variant="dark" type="reset">Cancel </Button>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </Form>

    );
}

export default CompanyRegister;

