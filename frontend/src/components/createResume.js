import React, { useState } from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StudentResume = () => {
  const usn = localStorage.getItem('token');
  const [pdf, setPdf] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const navigate = useNavigate();

  const handlePdfChange = (event) => {
    setPdf(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('usn', usn);
    formData.append('pdf', pdf);

    try {
      await fetch('http://localhost:1337/api/Resumeupload', {
        method: 'POST',
        body: formData,
      });
      console.log('USN and PDF data uploaded successfully');
      navigate('/StudentHome', { replace: true });
    } catch (error) {
      console.error('Error uploading USN and PDF data:', error);
    }
  };

  const handleCardClick = () => {
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
        <img src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png" height="40" width="110" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-1 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="StudentHome">Home</Nav.Link>
              <Nav.Link href="StudentSchedule">Schedule</Nav.Link>
              <Nav.Link href="StudentResume">Resume</Nav.Link>
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

      <div className="container text-center">
        <div className="row justify-content-start">
          <div className="d-flex justify-content-around">
            
            <a href="/">
              <Button bg="dark" variant="light">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://files.jotform.com/jotformapps/a0b5d7e5e5cce2962a6c722e8a0d4e78.png" />
                  <Card.Body>
                    <Card.Title>Download Resume</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </a>

            <a href="/ResumeCreate">
              <Button bg="dark" variant="light">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://files.jotform.com/jotformapps/a0b5d7e5e5cce2962a6c722e8a0d4e78.png" />
                  <Card.Body>
                    <Card.Title>Create Resume</Card.Title>
                  </Card.Body>
                </Card>
              </Button>
            </a>

           
            <Button bg="dark" variant="light" onClick={handleCardClick}>
              <Card style={{ width: '18rem', height: '22rem' }}>
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/remainder-icon-alarm-259563488.jpg" />
                <Card.Body>
                  <Card.Title>Upload Resume</Card.Title>
                </Card.Body>
              </Card>
            </Button>
          </div>
        </div>
        <br />
        <Button variant="dark">Download</Button>
      </div>

      {/* Upload Resume Dialog */}
      <Modal show={showDialog} onHide={handleCloseDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="pdf">Select a PDF file:</label>
              <input type="file" id="pdf" className="form-control" onChange={handlePdfChange} />
            </div>
            <Button variant="primary" type="submit">
              Upload
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default StudentResume;




