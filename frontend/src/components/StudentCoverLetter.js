import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StudentCoverLetter = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    phno: '',
    linkedIn: '',
    email: '',
    address: '',
    toName: '',
    designation: '',
    companyName: '',
    companyAddress: '',
    letterContent: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to the /CoverLetter page
    navigate('/CoverLetter', { state: {data:formData} });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <h1 className="container text-center">Cover Letter</h1>
      <br />

      <div className="container">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formGridName" className="position-relative">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Name" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGridBranch">
            <Form.Label>Branch</Form.Label>
            <Form.Control type="text" name="branch" placeholder="Branch" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhno">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" name="phno" placeholder="Phno" required onChange={handleChange} />
          </Form.Group>
        </Row>
        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLinkedIn">
            <Form.Label>LinkedIn</Form.Label>
            <Form.Control type="text" name="linkedIn" placeholder="LinkedIn" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name="address" placeholder="Address" required onChange={handleChange} />
          </Form.Group>
        </Row>
        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridToName">
            <Form.Label>Letter is To</Form.Label>
            <Form.Control type="text" name="toName" placeholder="Name" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDesignation">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" name="designation" placeholder="Designation" required onChange={handleChange} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCompanyName">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" name="companyName" placeholder="Company Name" required onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCompanyAddress">
            <Form.Label>Company Address</Form.Label>
            <Form.Control type="text" name="companyAddress" placeholder="Company Address" required onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <Row className="mb-3">
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Letter Content</Form.Label>
            <Form.Control as="textarea" name="letterContent" required rows={10} onChange={handleChange} />
          </Form.Group>
        </Row>

        <br />

        <br />
        <Button variant="dark" type="submit">
          Submit
        </Button>{' '}
        <Button variant="dark" type="reset">
          Cancel
        </Button>
        <br />
        <br />
        <br />
      </div>
    </Form>
  );
};

export default StudentCoverLetter;
