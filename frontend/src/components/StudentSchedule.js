import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card } from 'react-bootstrap'

const StudentSchedule = () => {
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">

                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://files.jotform.com/jotformapps/a0b5d7e5e5cce2962a6c722e8a0d4e78.png" />
                                <Card.Body>
                                    <Card.Title>Slot Selection</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>

                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/remainder-icon-alarm-259563488.jpg" />
                                <Card.Body>
                                    <Card.Title>Scheduled Slot</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>

                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}

export default StudentSchedule;