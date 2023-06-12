import React from 'react';
import { Navbar, Container, Nav, Form, Button, Card, Figure, Dropdown } from 'react-bootstrap'

const EngineeringSkillsTable = () => {
  const engineeringSkillsData = [
    {
      department: 'Mechanical Engineering',
      skills: [
        { jobPosition: 'Mechanical Engineer', requiredSkills: 'CAD, SolidWorks, Thermodynamics', averagePackage: '6 LPA' },
        { jobPosition: 'Design Engineer', requiredSkills: 'AutoCAD, Machine Design, FEA', averagePackage: '7 LPA' },
        { jobPosition: 'Manufacturing Engineer', requiredSkills: 'Lean Manufacturing, CNC Machining', averagePackage: '5.5 LPA' },
        { jobPosition: 'HVAC Engineer', requiredSkills: 'Refrigeration, Air Conditioning, HVAC Design', averagePackage: '6.5 LPA' },
        { jobPosition: 'Robotics Engineer', requiredSkills: 'Robot Programming, Controls, Automation', averagePackage: '8 LPA' },
      ],
    },
    {
      department: 'Electrical Engineering',
      skills: [
        { jobPosition: 'Electrical Engineer', requiredSkills: 'Circuit Design, Power Systems, PLC Programming', averagePackage: '5.8 LPA' },
        { jobPosition: 'Power Electronics Engineer', requiredSkills: 'Power Electronics, Motor Drives, PCB Design', averagePackage: '6.2 LPA' },
        { jobPosition: 'Control Systems Engineer', requiredSkills: 'Control Systems, PLC Programming, Instrumentation', averagePackage: '6.5 LPA' },
        { jobPosition: 'Renewable Energy Engineer', requiredSkills: 'Solar Power Systems, Wind Energy, Energy Management', averagePackage: '7 LPA' },
        { jobPosition: 'Automation Engineer', requiredSkills: 'PLC Programming, Robotics, SCADA', averagePackage: '6.8 LPA' },
      ],
    },
    {
      department: 'Civil Engineering',
      skills: [
        { jobPosition: 'Structural Engineer', requiredSkills: 'Structural Analysis, AutoCAD, Construction Management', averagePackage: '5.5 LPA' },
        { jobPosition: 'Transportation Engineer', requiredSkills: 'Traffic Engineering, Highway Design, GIS', averagePackage: '6 LPA' },
        { jobPosition: 'Environmental Engineer', requiredSkills: 'Water Treatment, Environmental Impact Assessment', averagePackage: '5.8 LPA' },
        { jobPosition: 'Geotechnical Engineer', requiredSkills: 'Soil Mechanics, Foundation Design, Slope Stability', averagePackage: '6.2 LPA' },
        { jobPosition: 'Project Manager', requiredSkills: 'Construction Planning, Risk Management, Contract Administration', averagePackage: '7 LPA' },
      ],
    },
    {
      department: 'Electronics Engineering',
      skills: [
        { jobPosition: 'Electronics Engineer', requiredSkills: 'Analog Electronics, Digital Electronics, PCB Design', averagePackage: '5.6 LPA' },
        { jobPosition: 'Embedded Systems Engineer', requiredSkills: 'Microcontrollers, Firmware Development, RTOS', averagePackage: '6 LPA' },
        { jobPosition: 'Telecommunication Engineer', requiredSkills: 'Wireless Communication, Network Protocols, RF Engineering', averagePackage: '6.5 LPA' },
        { jobPosition: 'VLSI Design Engineer', requiredSkills: 'ASIC Design, Verilog, FPGA Programming', averagePackage: '7.2 LPA' },
        { jobPosition: 'Signal Processing Engineer', requiredSkills: 'Digital Signal Processing, Image Processing, MATLAB', averagePackage: '6.8 LPA' },
      ],
    },
    {
        department: 'Computer Science',
        skills: [
          { jobPosition: 'Software Developer', requiredSkills: 'JavaScript, React, Node.js', averagePackage: '8 LPA' },
          { jobPosition: 'Data Scientist', requiredSkills: 'Python, Machine Learning, Data Visualization', averagePackage: '9 LPA' },
          { jobPosition: 'Cybersecurity Analyst', requiredSkills: 'Network Security, Ethical Hacking, Incident Response', averagePackage: '9.5 LPA' },
          { jobPosition: 'Cloud Engineer', requiredSkills: 'AWS, Azure, DevOps', averagePackage: '10 LPA' },
          { jobPosition: 'Artificial Intelligence Engineer', requiredSkills: 'Deep Learning, Natural Language Processing, Neural Networks', averagePackage: '12 LPA' },
        ],
      },
  ];

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
            <br></br>
            <br></br>
    <div style={{ textAlign: 'center' }}>
      <h1>Engineering Skills in Demand</h1>
      <br></br>
      {engineeringSkillsData.map((departmentData) => (
        <div key={departmentData.department}>
          <h2>{departmentData.department}</h2>
          <table
            style={{
              backgroundColor: '#f2f2f2',
              margin: '0 auto',
              borderCollapse: 'collapse',
              width: '80%',
              marginTop: '20px',
            }}
          >
            <thead>
              <tr>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Job Position</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Required Skills</th>
                <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Average Package (LPA)</th>
              </tr>
            </thead>
            <tbody>
              {departmentData.skills.map((skill) => (
                <tr key={skill.jobPosition}>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{skill.jobPosition}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{skill.requiredSkills}</td>
                  <td style={{ padding: '10px', border: '1px solid #ddd' }}>{skill.averagePackage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br></br>
        </div>
        
      ))}
    </div>
    </div>
  );
};

export default EngineeringSkillsTable;
