
import React, { Component } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

const Home = () => {
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
                            <Nav.Link href="/StudentHome">Home</Nav.Link>
                            <Nav.Link href="/StudentSchedule">Schedule</Nav.Link>
                            <Nav.Link href="/Resume">Resume</Nav.Link>
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

            <Figure>
                <Figure.Image
                    width={1520}
                    height={500}
                    alt="1520x500"
                    src="https://blog.admissions.illinois.edu/wp-content/uploads/2019/11/feature-1500x500-how-to-ace-your-job-interview.png"
                />

            </Figure>
            <br></br>
            <br></br>

            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">

                        <a href='/ALLJobRole'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/round-simple-recruitment-logo-round-simple-recruitment-logo-abstract-flat-style-trend-modern-unique-logotype-graphic-design-115857436.jpg" />
                                <Card.Body>
                                    <Card.Title>Hiring Companies</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>
                      
                        <a href='/StudentSchedule'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/notification-icon-template-black-bell-ring-alarm-social-media-symbol-mobile-app-ui-flat-simple-isolated-white-178124150.jpg" />
                                <Card.Body>
                                    <Card.Title>Schedule</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>

                        <a href='/analytics-reporting'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/feedback-icon-writing-article-blog-logo-feedback-icon-writing-article-blog-logo-white-background-150649773.jpg" />
                                <Card.Body>
                                    <Card.Title>Analytics and Reporting</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
</a>
                    </div>
                </div>
            </div>

            <br></br>
            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href='/createResume'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/resume-icon-vector-job-application-cv-sign-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-resume-icon-215388315.jpg" />
                                <Card.Body>
                                    <Card.Title> Resume</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>



                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://careercenter.tamu.edu/Images/Icon-Images/mail" />
                                <Card.Body>
                                    <Card.Title>Cover Letter</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        <a href='/CareerCounseling'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHlfhHOZXZ-tH6azfOqEHBH0wpkFvhgJsqQA1EhgqU3Q7nKguziE8D2ZwBQvw9RnGoLCsrfXUv1Q&usqp=CAU&ec=48665701" />
                                <Card.Body>
                                    <Card.Title>Career Counselling</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>
                    </div>
                </div>
            </div>


            <br></br>
            <div class="container text-center">
                <div class="row justify-content-start">
                    <div className="d-flex justify-content-around">
                        <a href="/chat">
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg" />
                                <Card.Body>
                                    <Card.Title>Chat</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>
                        <a href='/student-academics'>
                        <Button bg='dark' variant="light">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://media.istockphoto.com/id/1326051977/vector/academic-hat-and-stack-of-textbooks-abstract-educational-icon.jpg?s=612x612&w=0&k=20&c=Dyu5bhmZLmLC_Zbe-vAAtke2WojPjO5ECSD_LjfPpa8=" />
                                <Card.Body>
                                    <Card.Title>Academics</Card.Title>
                                </Card.Body>
                            </Card>
                        </Button>
                        </a>
                        
                        <a href="/StudentProfile" >
                        <Button bg='dark' variant="light">
                            
                            <Card style={{ width: '18rem' }} >
                                <Card.Img variant="top" src="https://www.uww.edu/images/icit/staff/profile-square.png" />
                                <Card.Body>
                                    <Card.Title>Profile</Card.Title>
                                </Card.Body>
                            </Card>
                        
                        </Button>
</a>





                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>

        </div>

    );
}

export default Home;
// import React, { Component } from 'react';
// import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

// const Home = () => {
//     return (
//         <div>
//             <Navbar bg="dark" variant='dark' expand="lg">
//                 <Container fluid>
//                     <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-1 my-lg-0"
//                             style={{ maxHeight: '100px' }}
//                             navbarScroll
//                         >
//                             <Nav.Link href="Home">Home</Nav.Link>
//                             <Nav.Link href="/StudentSchedule">Schedule</Nav.Link>
//                             <Nav.Link href="Resume">Resume</Nav.Link>
//                         </Nav>


//                         <div className="col-md-6 mx-auto" >
//                             <Form className="d-flex ">
//                                 <Form.Control
//                                     type="search"
//                                     placeholder="Search"
//                                     className="me-2"
//                                     aria-label="Search"
//                                 />
//                                 <Button variant="outline-light">Search</Button>
//                             </Form>
//                         </div>

//                         <Button variant="outline-dark">
//                             <img className="me-auto my-1 my-lg-0" src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg" height="30" width="30" />

//                         </Button>
                        
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             <Figure>
//                 <Figure.Image
//                     width={1520}
//                     height={500}
//                     alt="1520x500"
//                     src="https://blog.admissions.illinois.edu/wp-content/uploads/2019/11/feature-1500x500-how-to-ace-your-job-interview.png"
//                 />

//             </Figure>
//             <br></br>
//             <br></br>

//             <div class="container text-center">
//                 <div class="row justify-content-start">
//                     <div className="d-flex justify-content-around">

//                         <a href='/ALLJobRole'>
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/round-simple-recruitment-logo-round-simple-recruitment-logo-abstract-flat-style-trend-modern-unique-logotype-graphic-design-115857436.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Hiring Companies</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         </a>
//                         <a href='/StudentSlotSelection'>
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/notification-icon-template-black-bell-ring-alarm-social-media-symbol-mobile-app-ui-flat-simple-isolated-white-178124150.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Interview Slot Booking</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         </a>
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/notification-icon-template-black-bell-ring-alarm-social-media-symbol-mobile-app-ui-flat-simple-isolated-white-178124150.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Schedule</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>


//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/feedback-icon-writing-article-blog-logo-feedback-icon-writing-article-blog-logo-white-background-150649773.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Analytics and Reporting</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>

//                     </div>
//                 </div>
//             </div>

//             <br></br>
//             <div class="container text-center">
//                 <div class="row justify-content-start">
//                     <div className="d-flex justify-content-around">
//                         <a href='/createResume'>
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/resume-icon-vector-job-application-cv-sign-graphic-design-logo-web-site-social-media-mobile-app-ui-illustration-resume-icon-215388315.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Create Resume</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         </a>



//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://careercenter.tamu.edu/Images/Icon-Images/mail" />
//                                 <Card.Body>
//                                     <Card.Title>Cover Letter</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         <a href='/CareerCounseling'>
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHlfhHOZXZ-tH6azfOqEHBH0wpkFvhgJsqQA1EhgqU3Q7nKguziE8D2ZwBQvw9RnGoLCsrfXUv1Q&usqp=CAU&ec=48665701" />
//                                 <Card.Body>
//                                     <Card.Title>Career Counselling</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         </a>
//                     </div>
//                 </div>
//             </div>


//             <br></br>
//             <div class="container text-center">
//                 <div class="row justify-content-start">
//                     <div className="d-flex justify-content-around">
//                         <a href="/chat">
//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/005/337/802/original/icon-symbol-chat-outline-illustration-free-vector.jpg" />
//                                 <Card.Body>
//                                     <Card.Title>Chat</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>
//                         </a>

//                         <Button bg='dark' variant="light">
//                             <Card style={{ width: '18rem' }}>
//                                 <Card.Img variant="top" src="https://media.istockphoto.com/id/1326051977/vector/academic-hat-and-stack-of-textbooks-abstract-educational-icon.jpg?s=612x612&w=0&k=20&c=Dyu5bhmZLmLC_Zbe-vAAtke2WojPjO5ECSD_LjfPpa8=" />
//                                 <Card.Body>
//                                     <Card.Title>Academics</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </Button>

//                         <Button bg='dark' variant="light">
//                             <a href="/StudentProfile" style={{ textDecoration: 'none' }}>
//                             <Card style={{ width: '18rem' }} >
//                                 <Card.Img variant="top" src="https://www.uww.edu/images/icit/staff/profile-square.png" />
//                                 <Card.Body>
//                                     <Card.Title>Profile</Card.Title>
//                                 </Card.Body>
//                             </Card>
//                         </a>
//                         </Button>






//                     </div>
//                 </div>
//             </div>
//             <br></br>
//             <br></br>
//             <br></br>

//         </div>

//     );
// }

// export default Home;
