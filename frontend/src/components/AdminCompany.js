import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table } from 'react-bootstrap'



const  AdminCompany = () => {
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
                            <Nav.Link href="AdminJobPosting">Job Posted</Nav.Link>
                            <Nav.Link href="AdminStudentsApplied">Applicants</Nav.Link>
                            <Nav.Link href="AdminPlacedStudent">Placed Students</Nav.Link>
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

                <h1 class="container text-center">Companies Registered</h1>
                <br></br>
                <div class="container ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>WebSite Link</th>
                                <th>Email</th>
                                <th>Know More</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Google</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">google@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Synthesis</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">synthesis@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Hitachi</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">hitachi@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Amazon</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">amazon@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Hitachi</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">hitachi@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>FedEx</td>
                                <td><a href="">Website Link</a></td>
                                <td type="email">fedex@gmail.com</td>
                                <td>      <Button variant="dark">View</Button>{' '}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
       );
    }
     
    export default AdminCompany;
