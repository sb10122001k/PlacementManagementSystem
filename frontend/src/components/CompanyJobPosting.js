import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap'



const CompanyJobPosting = () => {
    return (
        <div>

            <Navbar bg="dark" variant='dark' expand="lg">
                <Container fluid>
                    <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-1 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="Home">Home</Nav.Link>
                            <Nav.Link href="Schedule">Job Posting</Nav.Link>
                            <Nav.Link href="Resume">Interviews</Nav.Link>
                        </Nav>


                        <div className="col-md-6 mx-auto" >
                            <Form className="d-flex ">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </div>
                        <Button variant="outline-dark">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                        </Button>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <br></br>

            <h1 class="container text-center">Job Posting</h1>
            <br></br>

            <div class="container ">

                <Form>
                    <Form.Group className="mb-3" controlId="JobRole">
                        <Form.Label>Job Role</Form.Label>
                        <Form.Control type="String" required placeholder="Job Role" />
                    </Form.Group>
                    <br></br>
                    <Form.Group className="mb-3" controlId="JobDescription">
                        <Form.Label>Job Description</Form.Label>
                        <Form.Control required as="textarea" rows={3} />
                    </Form.Group>
                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Package">
                            <Form.Label>Package</Form.Label>
                            <Form.Control type="Strings" required placeholder="Package" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Qualification">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Control type="String" required placeholder="Qualification" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Eligibility">
                            <Form.Label>Eligibility</Form.Label>
                            <Form.Control type="String" required placeholder="Eligibility" />
                        </Form.Group>
                    </Row>
                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="Specialization">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control type="Strings" required placeholder="Specialization" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Experiance">
                            <Form.Label>Experiance</Form.Label>
                            <Form.Control type="String" required placeholder="Experiance" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="JobLocation">
                            <Form.Label>Job Location</Form.Label>
                            <Form.Control type="String" required placeholder="Job Location" />
                        </Form.Group>
                    </Row>

                    <br></br>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="LastDate">
                            <Form.Label>Last Date</Form.Label>
                            <Form.Control type="date" required placeholder="Last Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="DriveDate">
                            <Form.Label>Drive Date</Form.Label>
                            <Form.Control type="date" required placeholder="Drive Date" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="Venue">
                            <Form.Label>Venue</Form.Label>
                            <Form.Control type="String" required placeholder="Venue" />
                        </Form.Group>
                    </Row>

                    <br></br>
                    <Button variant="dark" type="submit">Submit </Button>

                </Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>
    );
}

export default CompanyJobPosting;

