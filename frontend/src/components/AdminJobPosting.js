import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

const AdminJobPosting = () => {
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
                <div class="container ">
                <br></br>
                <h1 class="container text-center">Jobs Posted</h1>
                <br></br>
                <br></br>
                    <div class="row justify-content-start">
                        <div className="d-flex justify-content-around">
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                                <Card.Body>
                                    <Card.Title>Microsoft</Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 6 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 14/02/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>

                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png" />
                                <Card.Body>
                                    <Card.Title>Google</Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 10 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 25/03/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>

                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.pngmart.com/files/Amazon-Logo-PNG-Free-Download.png" height="280" />
                                <Card.Body>
                                    <Card.Title> Amazon </Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 16 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 04/03/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="container ">
                    <div class="row justify-content-start">
                        <div className="d-flex justify-content-around">
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://www.ideaz.si/wp-content/uploads//fedex-logotip-576x360.jpg" height="280" />
                                <Card.Body>
                                    <Card.Title>FedEx</Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 8 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 21/02/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>

                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://media.licdn.com/dms/image/C510BAQFDEH8-9Iq7cg/company-logo_200_200/0/1545386571486?e=1687392000&v=beta&t=gf0yJZVdIUsjVno9ixbegCfFVbQtigypqxfQ1ZarPdk" height="280" />
                                <Card.Body>
                                    <Card.Title>Synthesis</Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 9 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 10/05/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>

                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png" height="280" />
                                <Card.Body>
                                    <Card.Title>Hitachi</Card.Title>
                                    <Card.Text>
                                        Job Role: Software Developer
                                        <br></br>
                                        CTC: 5 LPA
                                        <br></br>
                                        Specialization: CSE,ISE,ECE,EEE
                                        <br></br>
                                        Last Date: 14/05/2023
                                        <br></br>
                                    </Card.Text>
                                    <Button variant="dark">View</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>

            </div>
       );
    }
     
    export default AdminJobPosting;
