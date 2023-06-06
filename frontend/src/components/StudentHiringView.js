import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StudentHiringView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { postingData } = location.state;
  const usn = localStorage.getItem('token');
  const jobid = postingData._id;
  const [applicationStatus, setApplicationStatus] = useState('');

  const [applied, setApplied] = useState(false); // State to track if the student has applied

  useEffect(() => {
    // Check if the student has already applied for the job
    const checkApplicationStatus = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/checkApplicationStatus', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            usn,
            jobid,
          }),
        });
        const data = await response.json();
        setApplied(data.applied);
        setApplicationStatus(data.status);
        // setApplied(data.applied); // Update the applied state based on the response
      } catch (error) {
        console.error('Error checking application status:', error);
      }
    };

    checkApplicationStatus();
  }, [usn, jobid]);

  const handleApply = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:1337/api/newJobApplied', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        usn,
        jobid,
      }),
    });
    const data = await response.json();

    console.log(data);
    if (data.status === 'ok') {
      alert('Job Applied Successfully');
      setApplied(true); // Update the applied state to true
      navigate('/StudentHome', { replace: true });
    }
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <img
            src="https://www.igauge.in/admin/uploaded/rating/logo/CambridgeInstituteLatestLogo2_1623754797.png"
            height="40"
            width="110"
          />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-1 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="Home">Home</Nav.Link>
              <Nav.Link href="Schedule">Schedule</Nav.Link>
              <Nav.Link href="Resume">Resume</Nav.Link>
            </Nav>

            <div className="col-md-6 mx-auto">
              <Form className="d-flex ">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-light">Search</Button>
              </Form>
            </div>
            <Button variant="outline-dark">
              <img
                className="me-auto my-1 my-lg-0"
                src="https://icon-library.com/images/my-profile-icon-png/my-profile-icon-png-22.jpg"
                height="30"
                width="30"
              />
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container text-center">
        <br />
        <br />
        <h1 className="container text-center">{postingData.name}</h1>
        <br />
        <br />
        <h5 className="container text-justify">
          <img
            align="right"
            src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png"
            height="180"
            width="171"
          />
          <b>Job Role:</b> {postingData.jobRole}
          <br />
          <br />
          <b>Package:</b> {postingData.Package}
          <br />
          <br />
          <b>Qualification:</b> {postingData.Qualification}
          <br />
          <br />
          <b>Eligibility:</b> {postingData.Eligibility}
          <br />
          <br />
          <b>Specialization:</b>
          {postingData.Specialization}
          <br />
          <br />
          <b>Experience:</b> {postingData.Experiance}
          <br />
          <br />
          <b>Location:</b> {postingData.JobLocation}
          <br />
          <br />
          <b>Drive Date:</b> 26/04/23,27/04/23,28/04/23,29/04/23
          <br />
          <br />
          <b>Job Description:</b>
          <br />
          <br />
          {postingData.JobDescription}
          <br />
          <br />

          {applied && (
            <div>
              <Button variant="dark">Application Status: {applicationStatus}</Button>
              {/* Additional information related to application status can be displayed here */}
            </div>
          )}
          {!applied && (
            <Button variant="dark" onClick={handleApply}>
              Apply
            </Button>
          )}
        </h5>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default StudentHiringView;
