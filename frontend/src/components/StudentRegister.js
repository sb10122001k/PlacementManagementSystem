import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const StudentRegister = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    usn: '',
    firstName: '',
    lastName: '',
    currentSemester: '',
    email: '',
    password: '',
    dateOfBirth: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    contactNumber: '',
    address: '',
    careerObjective: '',
    schoolName1: '',
    education1: '',
    course1: '',
    address1: '',
    score1: '',
    yearOfCompletion1: '',
    schoolName2: '',
    education2: '',
    course2: '',
    address2: '',
    score2: '',
    yearOfCompletion2: '',
    collegeName: '',
    education3: '',
    course3: '',
    specialization: '',
    address3: '',
    score3: '',
    courseDuration: '',
    keySkills: '',
    careerPreferences: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:1337/api/studentRegister', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if(data.message=='ok'){
        navigate('/StudentLogIn')
      }
      console.log(data); // Handle the response from the backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <br />
      <h1 className="container text-center">Student Register</h1>
      <br />

      <div className="container">
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="formGridUSN">
            <Form.Label>USN</Form.Label>
            <Form.Control
              type="string"
              name="usn"
              placeholder="USN"
              required
              value={formData.usn}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGridFirstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCurrentSem">
            <Form.Label>Current Semester</Form.Label>
            <Form.Control
              type="number"
              name="currentSemester"
              placeholder="Current Semester"
              required
              value={formData.currentSemester}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              required
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Country"
              required
              value={formData.country}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="State"
              required
              value={formData.state}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              name="zip"
              placeholder="Zip"
              required
              value={formData.zip}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              required
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="address"
              placeholder="Address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCareerObjective">
            <Form.Label>Career Objective</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="careerObjective"
              placeholder="Career Objective"
              value={formData.careerObjective}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
<br></br>

        <h3>Educational Qualification</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSchoolName1">
            <Form.Label>Institute Name </Form.Label>
            <Form.Control
              type="text"
              name="schoolName1"
              placeholder="Institute Name"
              value={formData.schoolName1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEducation1">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              name="education1"
              placeholder="Education"
              value={formData.education1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCourse1">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              name="course1"
              placeholder="Course"
              value={formData.course1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address1"
              placeholder="Address"
              value={formData.address1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridScore1">
            <Form.Label>Score</Form.Label>
            <Form.Control
              type="text"
              name="score1"
              placeholder="Score"
              value={formData.score1}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYearOfCompletion1">
            <Form.Label>Year of Completion</Form.Label>
            <Form.Control
              type="text"
              name="yearOfCompletion1"
              placeholder="Year of Completion"
              value={formData.yearOfCompletion1}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridSchoolName2">
            <Form.Label>Institute Name</Form.Label>
            <Form.Control
              type="text"
              name="schoolName2"
              placeholder="Institute Name"
              value={formData.schoolName2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEducation2">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              name="education2"
              placeholder="Education"
              value={formData.education2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCourse2">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              name="course2"
              placeholder="Course"
              value={formData.course2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress2">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address2"
              placeholder="Address"
              value={formData.address2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridScore2">
            <Form.Label>Score</Form.Label>
            <Form.Control
              type="text"
              name="score2"
              placeholder="Score"
              value={formData.score2}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYearOfCompletion2">
            <Form.Label>Year of Completion</Form.Label>
            <Form.Control
              type="text"
              name="yearOfCompletion2"
              placeholder="Year of Completion"
              value={formData.yearOfCompletion2}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
<br></br>

        <h3>College Qualification</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCollegeName">
            <Form.Label>College Name</Form.Label>
            <Form.Control
              type="text"
              name="collegeName"
              placeholder="College Name"
              value={formData.collegeName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEducation3">
            <Form.Label>Education</Form.Label>
            <Form.Control
              type="text"
              name="education3"
              placeholder="Education"
              value={formData.education3}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCourse3">
            <Form.Label>Course</Form.Label>
            <Form.Control
              type="text"
              name="course3"
              placeholder="Course"
              value={formData.course3}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridAddress3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address3"
              placeholder="Address"
              value={formData.address3}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridScore3">
            <Form.Label>Score</Form.Label>
            <Form.Control
              type="text"
              name="score3"
              placeholder="Score"
              value={formData.score3}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCourseDuration">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control
              type="text"
              name="courseDuration"
              placeholder="Course Duration"
              value={formData.courseDuration}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridKeySkills">
            <Form.Label>Key Skills</Form.Label>
            <Form.Control
              type="text"
              name="keySkills"
              placeholder="Key Skills"
              value={formData.keySkills}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCareerPreferences">
            <Form.Label>Career Preferences</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="careerPreferences"
              placeholder="Career Preferences"
              value={formData.careerPreferences}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </Form>
  );
};

export default StudentRegister;
