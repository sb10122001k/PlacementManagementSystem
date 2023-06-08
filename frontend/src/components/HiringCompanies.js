import React, { Component, useEffect, useState } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const HiringCompanies = () => {

    const [postingData, setPostingData] = useState()

    const navigate = useNavigate();


    const handleClick = (e,posting) => {
        e.preventDefault()
        // console.log(posting)
        navigate('/JobDescription', { state: { postingData: posting } });
    }

    useEffect(() => {
        console.log(localStorage.getItem('userid'))
        fetch('http://localhost:1337/api/getposting')
            .then((response) => {
                const reader = response.body.getReader();
                console.log(reader)
                reader.read().then(({ done, value }) => {
                    if (done) {
                        console.log('end...')
                        return;
                    }
                    const decoder = new TextDecoder();
                    const strData = decoder.decode(value)
                    const data = JSON.parse(strData)
                    console.log(data)
                    setPostingData(data)
                });
            })
    }, [])

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
            {<div class="container ">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                    {postingData?.map((posting) =>
                        <div>
                            <Card border="dark" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                                <Card.Body>
                                    <Card.Title>{posting.jobRole}</Card.Title>
                                    <Card.Text>
                                        {posting.Name}
                                    </Card.Text>
                                    <Button variant="dark" onClick={(e) => handleClick(e,posting)}>Click Here</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
                </div>
                </div>
            }
            {/* <div class="container ">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/microsoft-logo.png" />
                            <Card.Body>
                                <Card.Title>Microsoft</Card.Title>
                                <Card.Text>
                                    Microsoft develop and market software, services, and hardware that deliver new opportunities,
                                    greater convenience, and enhanced value to people's lives.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png" />
                            <Card.Body>
                                <Card.Title>Google</Card.Title>
                                <Card.Text>
                                    Google is a multinational technology corporation that offers users
                                    free services and goods relating to the Internet.It also focuses on improving the ways people connect with information.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pngmart.com/files/Amazon-Logo-PNG-Free-Download.png" height="280" />
                            <Card.Body>
                                <Card.Title> Amazon </Card.Title>
                                <Card.Text>
                                    Amazon providing e-commerce, cloud computing, digital streaming and artificial intelligence (AI) services.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
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
                                    FedEx Corporation, formerly Federal Express Corporation and later FDX Corporation, is an American multinational conglomerate holding company focused on
                                    transportation, e-commerce and business services based in Memphis, Tennessee.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C510BAQFDEH8-9Iq7cg/company-logo_200_200/0/1545386571486?e=1687392000&v=beta&t=gf0yJZVdIUsjVno9ixbegCfFVbQtigypqxfQ1ZarPdk" height="280" />
                            <Card.Body>
                                <Card.Title>Synthesis</Card.Title>
                                <Card.Text>
                                    Synthesis is the industry-leader in the digital transformation of companies committed to the subscription industry.
                                    The subscription industry is for companies looking to deliver customer-centric products, services, and experiences through a recurring revenue business model.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
                            </Card.Body>
                        </Card>

                        <Card border="dark" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://1000logos.net/wp-content/uploads/2017/12/Hitachi-Logo.png" height="280" />
                            <Card.Body>
                                <Card.Title>Hitachi</Card.Title>
                                <Card.Text>
                                    Hitachi is a multinational conglomerate with presence in Information & Telecommunication systems,
                                    Social infrastructure, Automotive Systems & Equipment, Digital Media and Financial Services, among others.
                                </Card.Text>
                                <Button variant="dark">Click Here</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br> */}
        </div>
    );
}

export default HiringCompanies;
