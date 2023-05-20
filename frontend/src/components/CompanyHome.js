import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Row, Col, Button, Figure, Card } from 'react-bootstrap'



const CompanyHome = () => {
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
                        <Button variant="outline-dark">
                            <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

                        </Button>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Figure>
                <Figure.Image
                    width={1540}
                    height={500}
                    alt="1520x500"
                    src="https://blog.admissions.illinois.edu/wp-content/uploads/2019/11/feature-1500x500-how-to-ace-your-job-interview.png"
                />

            </Figure>
            <br></br>
            <br></br>
            <br></br>

            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href='/NewJobPosting'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/015/280/523/non_2x/job-logo-icon-with-tie-image-free-vector.jpg" />
                                <Card.Body>
                                    <Card.Title>Job Posting</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem', height: '22rem' }}>
                                <Card.Img variant="top" src="https://cdn.vectorstock.com/i/preview-1x/15/78/interview-icon-on-white-background-vector-26901578.jpg" />
                                <Card.Body>
                                    <Card.Title>Interviews</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>

                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>
        </div>

    );
}

export default CompanyHome;
