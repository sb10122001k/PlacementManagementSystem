import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, ProgressBar,Dropdown } from 'react-bootstrap'

const StudentAnalyticsandRepo = () => {
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
                        <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="container text-center">
                <br></br>
                <br></br>
                <h1 class="container text-center">Analytics and Reporting</h1>
                <br></br>
                <br></br>

                <ProgressBar variant='dark' now={60} />

                <br></br>
                <br></br>
                <h5 class="container text-justify">
                    <b>Step 1:</b>Appling to the Job.
                    <br></br>
                    <br></br>

                    <b>Step 2:</b>Slot selection for the Job.
                    <br></br>
                    <br></br>

                    <b>Step 3:</b>Attending the interview.
                    <br></br>
                    <br></br>

                    <b>Step 4:</b>Results
                    <br></br>
                    <br></br>



                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default StudentAnalyticsandRepo;
