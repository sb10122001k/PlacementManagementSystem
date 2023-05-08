import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'

const StudentProfile = () => {
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
                <h1 class="container text-center">My Profile</h1>

                <br></br>
                <h5 class="container text-justify">
                    <img align="right" src="https://img.freepik.com/free-icon/user-profile-icon_318-33925.jpg?w=2000" height="180" width="171" />

                    <b>NAME:</b>  Lakshmi B
                    <br></br>
                    <br></br>
                    <b>USN:</b>  1CD20CS001

                    <br></br>
                    <br></br>
                    <b>SEMISTER:</b>  8

                    <br></br>
                    <br></br>
                    <b>EMAIL:</b>  lakshmi.20cs001@cambridge.edu.in
                    <br></br>
                    <br></br>
                    <b>DATE OF BIRTH:</b>   20/04/2002

                    <br></br>
                    <br></br>
                    <b>COUNTRY:</b>   India

                    <br></br>
                    <br></br>
                    <b>STATE:</b>   Karnataka
                    <br></br>
                    <br></br>
                    <b>CITY:</b>   Bangalore
                    <br></br>
                    <br></br>
                    <b>ZIP:</b>   560036
                    <br></br>
                    <br></br>
                    <b>CONTACT NUMBER:</b>   8273561736
                    <br></br>
                    <br></br>
                    <b>ADDRESS:</b>  82-78-278, Near Cambridge Institute of Technology,Jai Bhuvaneshwari Layout,KR Puram,Bangalore.
                    <br></br>
                    <br></br>
                    <b>CAREER OBJECTIVE:</b>   Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings.
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>SCHOOL NAME:</b>   Narayana
                    <br></br>
                    <br></br>
                    <b>EDUCATION:</b>   10th
                    <br></br>
                    <br></br>
                    <b>COURSE:</b>   Science
                    <br></br>
                    <br></br>
                    <b>ADDRESS:</b>   Benz Circle,Vijayawada
                    <br></br>
                    <br></br>
                    <b>SCORE:</b>   9.8
                    <br></br>
                    <br></br>
                    <b>YEAR OF COMPLETION:</b>   2020
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>COLLEGE NAME:</b>   Narayana
                    <br></br>
                    <br></br>
                    <b>EDUCATION:</b>   12th
                    <br></br>
                    <br></br>
                    <b>COURSE:</b>   MPC
                    <br></br>
                    <br></br>
                    <b>ADDRESS:</b>   Benz Circle,Vijayawada
                    <br></br>
                    <br></br>
                    <b>SCORE:</b>   9.8
                    <br></br>
                    <br></br>
                    <b>YEAR OF COMPLETION:</b>   2022
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>COLLEGE NAME:</b>   Cambridge Institute Of Technology
                    <br></br>
                    <br></br>
                    <b>COURSE:</b>   BE
                    <br></br>
                    <br></br>
                    <b>SPECIFICATION:</b>   Computer Science Engineering
                    <br></br>
                    <br></br>
                    <b>ADDRESS:</b>   KR Puram,Bangalore
                    <br></br>
                    <br></br>
                    <b>SCORE:</b>   8.4
                    <br></br>
                    <br></br>
                    <b>YEAR OF COMPLETION:</b>   2020-2024
                    <br></br>
                    <br></br>
                    <br></br>
                    <b>KEY SKILLS:</b>   Creativity ,Communication ,Time management ,Teamwork & cooperation ,Analysis ,Organization ,Training and teaching.
                    <br></br>
                    <br></br>
                    <b>CAREER PREFERENCES:</b>   Machine Learning Analyst
                    <br></br>
                    <br></br>
                    <br></br>

                    <Button variant="dark" type="submit">Edit Profile </Button>


                </h5>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>

    );
}

export default StudentProfile;