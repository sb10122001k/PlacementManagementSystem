import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    usn: '',
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
      console.log(data); // Handle the response from the backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      <br></br>
      <h1 class="container text-center">Student Register</h1>
      <br></br>

      <div class="container">

        <Row className="mb-3">

          <Form.Group as={Col} md="4" controlId="formGridFirstname" className="position-relative"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder="First name" required/>
           
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="formGridLastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder="Last name"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridUSN">
            <Form.Label>USN</Form.Label>
            <Form.Control type='string' placeholder="USN"  required  />
          </Form.Group>
        </Row>
        <br></br>


        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridCurrentSem">
            <Form.Label>Current Semister</Form.Label>
            <Form.Control type='number' required placeholder="Current Semister" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required placeholder="Password" />
          </Form.Group>
        </Row>
        <br></br>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridDateofBirth">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control required placeholder="Date Of Birth" />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Label>Country</Form.Label>
            <Form.Control required placeholder="Country" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control required placeholder="State" type="text" />
          </Form.Group>
        </Row>

        <br></br>

        <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="City" type="text"  required  />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="validationFormik105"
            className="position-relative"
          >
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridContactnum">
            <Form.Label>Contact number</Form.Label>
            <Form.Control type='text' required placeholder="Contact number" />
          </Form.Group>
        </Row>
        <br></br>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" required rows={3} />
        </Form.Group>
        <br></br>

        <Form.Group controlId="exampleForm.ControlTextarea2">
          <Form.Label>Career Objective</Form.Label>
          <Form.Control as="textarea" required rows={3} />
        </Form.Group>
        <br></br>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formBasicSchoolname">
            <Form.Label>School Name </Form.Label>
            <Form.Control type="text" required placeholder="SchoolName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicEducation">
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" required placeholder="Education" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" required placeholder="Courses" />
          </Form.Group>


        </Row>
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" required placeholder="Address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicScore">
            <Form.Label>Score</Form.Label>
            <Form.Control type="text" required placeholder="Score" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicYear">
            <Form.Label>Year of Completion</Form.Label>
            <Form.Control type="text" required placeholder="Year" />
          </Form.Group>
        </Row>
        <br></br>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formBasicSchoolname">
            <Form.Label>College Name </Form.Label>
            <Form.Control type="text" required placeholder="SchoolName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicEducation">
            <Form.Label>Education</Form.Label>
            <Form.Control type="text" required placeholder="Education" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" required placeholder="Courses" />
          </Form.Group>
        </Row>
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" required placeholder="Address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicScore">
            <Form.Label>Score</Form.Label>
            <Form.Control type="text" required placeholder="Score" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicYear">
            <Form.Label>Year of Completion</Form.Label>
            <Form.Control type="text" required placeholder="Year" />
          </Form.Group>
        </Row>
        <br></br>
        <Row className="mb-3">

          <Form.Group as={Col} controlId="formBasicSchoolname">
            <Form.Label>College Name </Form.Label>
            <Form.Control type="text" required placeholder="SchoolName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCourse">
            <Form.Label>Course</Form.Label>
            <Form.Control type="text" required placeholder="Courses" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicSpecialization">
            <Form.Label>Specialization</Form.Label>
            <Form.Control type="text" required placeholder="Specialization" />
          </Form.Group>
        </Row>
        <br></br>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" required placeholder="Address" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicScore">
            <Form.Label>Score</Form.Label>
            <Form.Control type="text" required placeholder="Score" />
          </Form.Group>

          <Form.Group as={Col} controlId="formBasicCourseduration">
            <Form.Label>Course Duration</Form.Label>
            <Form.Control type="text" required placeholder="Course Duration" />
          </Form.Group>
        </Row>

        <br></br>
        <Row className="mb-3">

          <Form.Group className="mb-3" as={Col} controlId="formBasicKeyskills">
            <Form.Label>Key Skills</Form.Label>
            <Form.Control type="text" required placeholder="Skills" />
          </Form.Group>


          <Form.Group as={Col} controlId="formBasicKeyskills">
            <Form.Label>Career Preferences</Form.Label>
            <Form.Control type="text" placeholder="Career Preferences" />
          </Form.Group>


          <Form.Group as={Col} className="position-relative mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              required                  
            />
           
          </Form.Group>
        </Row>
        <br></br>



        <Form.Group className="position-relative mb-3">
          <Form.Check
            required
            name="terms"
            label="The information given by me is correct"
            
          />
        </Form.Group>



        <br></br>

        <Button variant="dark" type="submit">Submit </Button>{' '}
        <Button variant="dark" type="reset">Cancel </Button>
        <br></br>
        <br></br>
        <br></br>

      </div>
    </Form>
  );
};

export default StudentRegister;
