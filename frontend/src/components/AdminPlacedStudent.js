import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card, Table,Dropdown } from 'react-bootstrap'



const AdminPlacedStudent = () => {
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
                          <Nav.Link href="AdminHome">Home</Nav.Link>
                            <Nav.Link href="AdminJobPosting">Job Posted</Nav.Link>
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
                                <Dropdown.Item href="/">Log Out</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <br></br>
            <br></br>

            <h1 class="container text-center">Placed Students</h1>
            <br></br>
            <h3 class="container">Google</h3>
            <br></br>
            <div class="container ">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Job Role</th>
                            <th>Student Name</th>
                            <th>USN</th>
                            <th>CTC</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Date of Selection</th>
                            <th>Selected By</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2734</td>
                            <td>Software Developer</td>
                            <td>Vinayak V</td>
                            <td>1CD19CV078</td>
                            <td>9LPA</td>
                            <td>2734937482</td>
                            <td type="email">vinayak.19CV078@cambridge.edu.in</td>
                            <td>09/04/23</td>
                            <td>Amole</td>
                        </tr>
                        <tr>
                            <td>2735</td>
                            <td>Software Developer</td>
                            <td>Manasa C</td>
                            <td>1CD19CS118</td>
                            <td>9LPA</td>
                            <td>2938470682</td>
                            <td type="email">manasa.19CS118@cambridge.edu.in</td>
                            <td>09/04/23</td>
                            <td>Amole</td>
                        </tr>
                        <tr>
                            <td>2289</td>
                            <td>Software Developer</td>
                            <td>Veena Priya</td>
                            <td>1CD19CS182</td>
                            <td>9LPA</td>
                            <td>7298394882</td>
                            <td type="email">veena.19CS182@cambridge.edu.in</td>
                            <td>09/04/23</td>
                            <td>Kiran</td>
                        </tr>
                        <tr>
                            <td>2738</td>
                            <td>Software Developer</td>
                            <td>Guru P</td>
                            <td>1CD19CS102</td>
                            <td>9LPA</td>
                            <td>9302839882</td>
                            <td type="email">guru.19CS102@cambridge.edu.in</td>
                            <td>10/04/23</td>
                            <td>Bhanu</td>
                        </tr>
                        <tr>
                            <td>8394</td>
                            <td>Software Developer</td>
                            <td>Harish B</td>
                            <td>1CD19CS202</td>
                            <td>9LPA</td>
                            <td>9308294882</td>
                            <td type="email">harish.19CS202@cambridge.edu.in</td>
                            <td>10/04/23</td>
                            <td>Bhanu</td>
                        </tr>
                        <tr>
                            <td>8398</td>
                            <td>Software Developer</td>
                            <td>Shivani N</td>
                            <td>1CD19CS089</td>
                            <td>9LPA</td>
                            <td>9303948821</td>
                            <td type="email">shivani.19CS089@cambridge.edu.in</td>
                            <td>10/04/23</td>
                            <td>Kiran</td>
                        </tr>
                    </tbody>
                </Table>
                <br></br>
                <h3 class="container">Synthesis</h3>
                <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Job ID</th>
                            <th>Job Role</th>
                            <th>Student Name</th>
                            <th>USN</th>
                            <th>CTC</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Date of Selection</th>
                            <th>Selected By</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>9304</td>
                            <td>Software Developer</td>
                            <td>Harika P</td>
                            <td>1CD19CV118</td>
                            <td>8LPA</td>
                            <td>3928493023</td>
                            <td type="email">harika.19CV118@cambridge.edu.in</td>
                            <td>11/05/23</td>
                            <td>Veena</td>
                        </tr>
                        <tr>
                            <td>9302</td>
                            <td>Software Developer</td>
                            <td>Pallavi M</td>
                            <td>1CD19CS111</td>
                            <td>8LPA</td>
                            <td>3902323490</td>
                            <td type="email">pallavi.19CS111@cambridge.edu.in</td>
                            <td>11/05/23</td>
                            <td>Venna</td>
                        </tr>
                        <tr>
                            <td>9403</td>
                            <td>Software Developer</td>
                            <td>Priya S</td>
                            <td>1CD19CS002</td>
                            <td>9LPA</td>
                            <td>9223145267</td>
                            <td type="email">priya.19CS02@cambridge.edu.in</td>
                            <td>12/05/23</td>
                            <td>Veena</td>
                        </tr>
                        <tr>
                            <td>8392</td>
                            <td>Software Developer</td>
                            <td>Jay satya</td>
                            <td>1CD19CS100</td>
                            <td>9LPA</td>
                            <td>8829389203</td>
                            <td type="email">jay.19CS100@cambridge.edu.in</td>
                            <td>12/05/23</td>
                            <td>Bhanu Mathi</td>
                        </tr>
                        <tr>
                            <td>2934</td>
                            <td>Software Developer</td>
                            <td>Kaveri M</td>
                            <td>1CD19CS321</td>
                            <td>9LPA</td>
                            <td>7382748590</td>
                            <td type="email">harish.19CS321@cambridge.edu.in</td>
                            <td>12/05/23</td>
                            <td>Bhanu Mathi</td>
                        </tr>
                        <tr>
                            <td>8898</td>
                            <td>Software Developer</td>
                            <td>Poorvika M</td>
                            <td>1CD19CS009</td>
                            <td>9LPA</td>
                            <td>4920394020</td>
                            <td type="email">poorvika.19CS009@cambridge.edu.in</td>
                            <td>12/05/23</td>
                            <td>Kiran A</td>
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

export default AdminPlacedStudent;
