import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table } from 'react-bootstrap'



const AdminStudent = () => {
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
                            navbarScroll>
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

            <h1 class="container text-center">Students Registered</h1>
            <br></br>
            <br></br>
            <div class="container ">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th> USN</th>
                            <th>Branch</th>
                            <th>Year of Graduation</th>
                            <th>Know More</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Priya lakshmi</td>
                            <td>1cd20cs007</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>Laya Sharma</td>
                            <td>1cd20cs207</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>Manikanta P</td>
                            <td>1cd20cs109</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>Vinay raj</td>
                            <td>1cd20cs107</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>Latitha V</td>
                            <td>1cd20cs047</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                        <tr>
                            <td>Priyansh Sharma</td>
                            <td>1cd20cs147</td>
                            <td>CSE</td>
                            <td>2024</td>
                            <td>      <Button variant="dark">Resume</Button>{' '}</td>

                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default AdminStudent;
