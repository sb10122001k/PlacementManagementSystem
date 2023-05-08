import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Table } from 'react-bootstrap'

const StudentSlotSelection = () => {
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
            <h1 class="container text-center">Huron Slot Sletection</h1>
            <br></br>
            <br></br>
            <div class="container ">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan={5}>14/05/2023</td>
                            <td>9:00-9:20 PM</td>

                            <td>      <Button variant="dark">Apply</Button>{' '}</td>
                        </tr>
                        <tr>
                            <td>9:20-9:40 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>


                        </tr>
                        <tr>
                            <td>10:00-10:20 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>10:30-10:50 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>11:00-11:20 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td rowSpan={5}>15/05/2023</td>

                            <td>9:00-9:20 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>9:20-9:40 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>


                        </tr>
                        <tr>
                            <td>10:00-10:20 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>10:30-10:50 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>11:00-11:20 PM</td>
                            <td>      <Button variant="dark">Apply</Button>{' '}</td>

                        </tr>
                    </tbody>
                </Table>
            </div>
            <br></br>
            <br></br>
            <br></br>


        </div>
    );
}

export default StudentSlotSelection;