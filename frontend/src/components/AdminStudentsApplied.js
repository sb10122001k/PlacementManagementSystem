import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table } from 'react-bootstrap'


const AdminStudentsApplied = () => {
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

                <h1 class="container text-center">Students Applied</h1>
                <br></br>
                <h3 class="container text-left">Google</h3>
                <br></br>
                <div class="container ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>USN</th>
                                <th>Branch</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Resume</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Swetha Krishna</td>
                                <td type="email">swetha.20cs048@cambridge.edu.in</td>
                                <td>1cd20cs048</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>2:00-2:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Sushmitha B</td>
                                <td type="email">sushmitha.20cs118@cambridge.edu.in</td>
                                <td>1cd20cs118</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>11:00-11:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td> fahaad</td>
                                <td type="email">fahaad.20cs148@cambridge.edu.in</td>
                                <td>1cd20cs148</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>9:00-9:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>G Mahesh</td>
                                <td type="email">mahesh.20cs068@cambridge.edu.in</td>
                                <td>1cd20cs068</td>
                                <td>CSE</td>
                                <td>29/05/23</td>
                                <td>8:00-8:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td> Veena N</td>
                                <td type="email">veena.20cs006@cambridge.edu.in</td>
                                <td>1cd20cs006</td>
                                <td>CSE</td>
                                <td>29/05/23</td>
                                <td>2:00-2:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Priya</td>
                                <td type="email">priya.20cs008@cambridge.edu.in</td>
                                <td>1cd20cs008</td>
                                <td>CSE</td>
                                <td>28/05/23</td>
                                <td>9:00-9:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <br></br>
                    <br></br>

                <h3 class="container text-left">Microsoft</h3>
                <br></br>
                <div class="container ">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>USN</th>
                                <th>Branch</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Resume</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Swetha Krishna</td>
                                <td type="email">swetha.20cs048@cambridge.edu.in</td>
                                <td>1cd20cs048</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>2:00-2:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Sushmitha B</td>
                                <td type="email">sushmitha.20cs118@cambridge.edu.in</td>
                                <td>1cd20cs118</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>11:00-11:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td> fahaad</td>
                                <td type="email">fahaad.20cs148@cambridge.edu.in</td>
                                <td>1cd20cs148</td>
                                <td>CSE</td>
                                <td>27/05/23</td>
                                <td>9:00-9:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>G Mahesh</td>
                                <td type="email">mahesh.20cs068@cambridge.edu.in</td>
                                <td>1cd20cs068</td>
                                <td>CSE</td>
                                <td>29/05/23</td>
                                <td>8:00-8:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td> Veena N</td>
                                <td type="email">veena.20cs006@cambridge.edu.in</td>
                                <td>1cd20cs006</td>
                                <td>CSE</td>
                                <td>29/05/23</td>
                                <td>2:00-2:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                            <tr>
                                <td>Priya</td>
                                <td type="email">priya.20cs008@cambridge.edu.in</td>
                                <td>1cd20cs008</td>
                                <td>CSE</td>
                                <td>28/05/23</td>
                                <td>9:00-9:20 PM</td>
                                <td><a href="">Resume</a></td>
                                <td><Button variant="danger">Delete</Button>{' '}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                </div>
                <br></br>
                <br></br>
                <br></br>


            </div>
        );
    }
     
    export default AdminStudentsApplied ;