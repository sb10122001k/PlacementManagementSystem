import React, { Component } from 'react';
import { Form, Row, Col, Button, InputGroup,Navbar ,Nav, Container } from 'react-bootstrap'





const StudentsAcademics = () => {
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
                            <Nav.Link href="StudentHome">Home</Nav.Link>
                            <Nav.Link href="StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="StudentResume">Resume</Nav.Link>
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
        <Form>
            <br></br>
            <h1 class="container text-center">Academics Skills</h1>
            <br></br>
            <br></br>

            <div class="container">
            <Form.Group as={Col} className="position-relative mb-3">
                <Form.Label>Courses Certificates</Form.Label>
                <Form.Control
                    type="file"
                    required
                />

            </Form.Group>
            </div>
        </Form>
        </div>
    )
}
export default StudentsAcademics;
