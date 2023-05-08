import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'

const AdminStudentView = () => {
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
                            <Nav.Link href="Schedule">Schedule</Nav.Link>
                            <Nav.Link href="Resume">Resume</Nav.Link>
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
            <div class="container text-center">
                <br></br>
                <br></br>
                <h1 class="container text-center">Student Resume</h1>

                <br></br>

                <br></br>
                <br></br>
                <Button variant="dark" type="submit">Resume Feedback </Button>


                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default AdminStudentView;