import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card } from 'react-bootstrap'

const StudentScheduled = () => {
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
            <br></br>
            <div class="container ">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                            <Card.Body>
                                <Card.Title>Microsoft</Card.Title>
                                <Card.Text>
                                    28/04/2023
                                    <br></br>
                                    2.00-3.00 pm
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png" />
                            <Card.Body>
                                <Card.Title>Google</Card.Title>
                                <Card.Text>
                                    08/05/2023
                                    <br></br>
                                    1.00-2.00 pm
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pngmart.com/files/Amazon-Logo-PNG-Free-Download.png" height="280" />
                            <Card.Body>
                                <Card.Title> Amazon </Card.Title>
                                <Card.Text>
                                    14/09/2023
                                    <br></br>
                                    10.00-11.00 am
                                </Card.Text>
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
                                    16/09/2023
                                    <br></br>
                                    4.00-5.00 pm
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C510BAQFDEH8-9Iq7cg/company-logo_200_200/0/1545386571486?e=1687392000&v=beta&t=gf0yJZVdIUsjVno9ixbegCfFVbQtigypqxfQ1ZarPdk" height="280" />
                            <Card.Body>
                                <Card.Title>Synthesis</Card.Title>
                                <Card.Text>
                                    06/10/2023
                                    <br></br>
                                    2.30-3.30 pm
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png" height="280" />
                            <Card.Body>
                                <Card.Title>Hitachi</Card.Title>
                                <Card.Text>
                                    08/11/2023
                                    <br></br>
                                    10.30-11.30 pm
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </div>
    );
}

export default StudentScheduled;