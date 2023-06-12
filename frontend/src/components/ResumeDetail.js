import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

function ResumeForm() {
  const navigate = useNavigate();
  const usn=localStorage.getItem('token')
  const [linkedinId, setLinkedinId] = useState('');
  const [projects, setProjects] = useState([{ name: '', technology: '', details: '' }]);
  const [hobbies, setHobbies] = useState('');

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
  };

  const addProjectField = () => {
    const { name, technology, details } = projects[projects.length - 1];
    if (name !== '' || technology !== '' || details !== '') {
      setProjects([...projects, { name: '', technology: '', details: '' }]);
    }
  };

  const removeProjectField = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const data = {
      usn,
      linkedinId,
      projects,
      hobbies,
    };

    navigate('/Resume', { state: { resumedata: data } })

    // try {
    //   // Make a POST request to localhost
    //   const response = await fetch(`http://localhost:1337/api/createresume/${usn}`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (response.ok) {
    //     console.log('Resume data submitted successfully');
    //     navigate('/StudentHome', { replace: true });
    //   } else {
    //     console.error('Error submitting resume data');
    //   }
    // } catch (error) {
    //   console.error('Error submitting resume data:', error);
    // }

    // Reset form fields after submission
    setLinkedinId('');
    setProjects([{ name: '', technology: '', details: '' }]);
    setHobbies('');
  };

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
                            <Nav.Link href="/createResume">Resume</Nav.Link>
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
    <div className="container" style={{ backgroundColor: '#f0f0f0' }}>
      <h1 className="mb-4">Create Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="linkedinId" className="form-label">
            LinkedIn ID
          </label>
          <input
            type="text"
            className="form-control"
            id="linkedinId"
            value={linkedinId}
            onChange={(e) => setLinkedinId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Projects</label>
          {projects.map((project, index) => (
            <div key={index}>
              <div className="mb-3">
                <label htmlFor={`projectName${index}`} className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`projectName${index}`}
                  value={project.name}
                  onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`projectTechnology${index}`} className="form-label">
                  Technology used
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`projectTechnology${index}`}
                  value={project.technology}
                  onChange={(e) => handleProjectChange(index, 'technology', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`projectDetails${index}`} className="form-label">
                  Details
                </label>
                <textarea
                  className="form-control"
                  id={`projectDetails${index}`}
                  value={project.details}
                  onChange={(e) => handleProjectChange(index, 'details', e.target.value)}
                ></textarea>
              </div>
              {index !== 0 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeProjectField(index)}
                >
                  Remove Project
                </button>
              )}
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addProjectField}>
            Add Project
          </button>
        </div>
        <div className="mb-3">
          <label htmlFor="hobbies" className="form-label">
            Hobbies
          </label>
          <input
            type="text"
            className="form-control"
            id="hobbies"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}

export default ResumeForm;
