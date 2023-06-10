import React, { Component } from 'react';
import { Form, Row, Col, Button, InputGroup } from 'react-bootstrap'
import * as yup from "yup";
import { Formik } from 'formik'





const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});


const EditStudentProfile = () => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form>
          <br></br>
          <h1 class="container text-center">Editing The Profile</h1>
          <br></br>

          <div class="container">

            <Row className="mb-3">

              <Form.Group as={Col} md="4" controlId="formGridFirstname" className="position-relative"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder="First name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  required
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName} />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="4" controlId="formGridLastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder="Last name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridUSN">
                <Form.Label>USN</Form.Label>
                <Form.Control type='usn' placeholder="USN"
                  name="string"
                  value={values.usn}
                  onChange={handleChange}
                  required
                  isValid={touched.usn && !errors.usn}
                  isInvalid={!!errors.usn} />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.usn}
                </Form.Control.Feedback>
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
                <Form.Control required placeholder="State"
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  isInvalid={!!errors.state} />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.state}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <br></br>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City"
                  type="text"
                  name="city"
                  required
                  value={values.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city} />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
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
                  name="zip"
                  required
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
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


              <Form.Group controlId="formFileMultiple" as={Col} className="mb-3">
                <Form.Label>Certifications</Form.Label>
                <Form.Control required type="file" multiple />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Career Preferences</Form.Label>
                <Form.Control type="text" placeholder="Career Preferences" />
              </Form.Group>

            </Row>
            <br></br>


            <Row className="mb-3">

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Project Name </Form.Label>
                <Form.Control type="text" required placeholder="First Project" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Key skills used</Form.Label>
                <Form.Control type="text" required placeholder="Skills" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>About the Project</Form.Label>
                <Form.Control type="text" required
                  placeholder="About the project" />
              </Form.Group>

            </Row>
            <br></br>

            <Row className="mb-3">

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Project Name </Form.Label>
                <Form.Control type="text" placeholder="Second Project" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Key skills used</Form.Label>
                <Form.Control type="text" placeholder="Skills" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>About the Project</Form.Label>
                <Form.Control type="text" placeholder="About the project" />
              </Form.Group>

            </Row>
            <br></br>
            <Row className="mb-3">

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Project Name </Form.Label>
                <Form.Control type="text" placeholder="Third Project" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>Key skills used</Form.Label>
                <Form.Control type="text" placeholder="Skills" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicKeyskills">
                <Form.Label>About the Project</Form.Label>
                <Form.Control type="text" placeholder="About the project" />
              </Form.Group>

            </Row>
            <br></br>
            <Form.Group className="position-relative mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                required
                name="file"
                onChange={handleChange}
                isInvalid={!!errors.file}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.file}
              </Form.Control.Feedback>
            </Form.Group>



            <Form.Group className="position-relative mb-3">
              <Form.Check
                required
                name="terms"
                label="The information given by me is correct"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik106"
                feedbackTooltip
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
      )}
    </Formik>
  );
}

export default EditStudentProfile;
