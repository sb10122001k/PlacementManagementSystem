import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Table, Button } from 'react-bootstrap'



const CompanyInterview = () => {
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
                        <Dropdown className="me-auto my-1 my-lg-0">
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-Login">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/StudentLogIn">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <br></br>
            <br></br>

            <h1 class="container text-center">Interview Schedule</h1>
            <br></br>
            <Form>
                <div class="container ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Slot</th>
                                <th>Candidate Name</th>
                                <th>Email</th>
                                <th>Branch</th>
                                <th>Resume</th>
                                <th>Selected/Not</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Priyansh Sharma</td>
                                <td>priyansh.20cs147@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success">Accept</Button>{' '}
                                    <Button variant="danger">Reject</Button></td>
                            </tr>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Latitha V</td>
                                <td>lalitha.20cs047@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success" disabled>Accepted</Button>{' '}
                                    <Button variant="danger">Reject</Button></td>
                            </tr>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Vinay raj</td>
                                <td>vinay.20cs107@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success">Accept</Button>{' '}
                                    <Button variant="danger" disabled>Rejected</Button></td>
                            </tr>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Manikanta P</td>
                                <td>manikanta.20cs109@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success">Accept</Button>{' '}
                                    <Button variant="danger">Reject</Button></td>
                            </tr>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Laya Sharma</td>
                                <td>laya.20cs207@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success">Accept</Button>{' '}
                                    <Button variant="danger">Reject</Button></td>
                            </tr>
                            <tr>
                                <td>14/05/2023</td>
                                <td>9:00-9:20 PM</td>
                                <td>1</td>
                                <td>Priya lakshmi</td>
                                <td>priya.20cs007@cambridge.edu.in</td>
                                <td>CSE</td>
                                <td><a href="">Resume</a></td>
                                <td>      <Button variant="success">Accept</Button>{' '}
                                    <Button variant="danger">Reject</Button></td>
                            </tr>
                        </tbody>
                    </Table>


                </div>
            </Form>
        </div>
    );
}

export default CompanyInterview;
