import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'

const StudentHiringView = () => {
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
                <div class="container text-center">
                    <br></br>
                    <br></br>
                    <h1 class="container text-center">Google</h1>
                    <br></br>
                    <br></br>
                    <h5 class="container text-justify">
                        <img align="right" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png" height="180" width="171" />

                        <b>Job Role:</b>  Software Developer
                        <br></br>
                        <br></br>
                        <b>Package:</b> 10 LPA
                        <br></br>
                        <br></br>
                        <b>Qualification:</b> BE
                        <br></br>
                        <br></br>
                        <b>Eligibility:</b> 70%
                        <br></br>
                        <br></br>
                        <b>Specialization:</b>CSE,ISE,ECE,EEE
                        <br></br>
                        <br></br>
                        <b>Experience:</b> Fresher,0-11 months
                        <br></br>
                        <br></br>
                        <b>Location:</b>Bangalore
                        <br></br>
                        <br></br>
                        <b>Drive Date:</b> 26/04/23,27/04/23,28/04/23,29/04/23

                        <br></br>
                        <br></br>

                        <b>Job Description:</b>
                        <br></br>
                        <br></br>
                        We are looking for a Software Developer to build and implement functional programs. You will work with other Developers and Product Managers throughout the software development life cycle.

                        In this role, you should be a team player with a keen eye for detail and problem-solving skills. If you also have experience in Agile frameworks and popular coding languages (e.g. JavaScript), we’d like to meet you.

                        Your goal will be to build efficient programs and systems that serve user needs.
                        <br></br>
                        <br></br>

                        <ul>
                            <li>Proven experience as a Software Developer, Software Engineer or similar role</li>
                            <li>Familiarity with Agile development methodologies</li>
                            <li>Experience with software design and development in a test-driven environment</li>
                            <li>Knowledge of coding languages (e.g. C++, Java, JavaScript) and frameworks/systems (e.g. AngularJS, Git)</li>
                            <li>Experience with databases and Object-Relational Mapping (ORM) frameworks (e.g. Hibernate)</li>
                            <li>Ability to learn new languages and technologies</li>
                            <li>Excellent communication skills</li>
                            <li>Resourcefulness and troubleshooting aptitude</li>
                            <li>Attention to detail</li>
                            <li>BSc/BA in Computer Science, Engineering or a related field</li>
                        </ul>
                        <br></br>
                        <br></br>

                        <Button variant="dark">Apply</Button>


                    </h5>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
);
}
 
export default StudentHiringView;
