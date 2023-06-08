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



// import React, { useState } from 'react';
// import {useNavigate, Link} from "react-router-dom";

// function FileUploadForm() {
  // const usn = `${localStorage.getItem('token')}`;
  // const [pdf, setPdf] = useState(null);
  // const navigate =useNavigate()
  // const handlePdfChange = (event) => {
  //   setPdf(event.target.files[0]);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('usn', usn);
  //   formData.append('pdf', pdf);

  //   try {
  //     await fetch('http://localhost:1337/api/Resumeupload', {
  //       method: 'POST',
  //       body: formData
  //     });
  //     console.log('USN and PDF data uploaded successfully');
  //     navigate('/StudentHome', { replace: true })
  //   } catch (error) {
  //     console.error('Error uploading USN and PDF data:', error);
  //   }
  // };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="pdf" className="form-label">
//           PDF:
//         </label>
//         <input type="file" id="pdf" className="form-control" onChange={handlePdfChange} />
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Upload
//       </button>
//     </form>
//   );
// }

// const ResumeForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [education, setEducation] = useState([{ schoolName: '', marks: '', yearOfJoining: '' }]);
//   const [experiences, setExperiences] = useState([
//     {
//       companyName: '',
//       jobRole: '',
//       dateOfJoining: '',
//       monthsOfExperience: '',
//       description: '',
//       skills: ''
//     }
//   ]);
//   const [selectedOption, setSelectedOption] = useState('create'); // Default option is 'create'

//   const handleOptionChange = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   const handleExperienceChange = (index, field, value) => {
//     const updatedExperiences = [...experiences];
//     updatedExperiences[index][field] = value;
//     setExperiences(updatedExperiences);
//   };

//   const handleEducationChange = (index, field, value) => {
//     const updatedEducation = [...education];
//     updatedEducation[index][field] = value;
//     setEducation(updatedEducation);
//   };

//   const addEducationField = () => {
//     setEducation([...education, { schoolName: '', marks: '', yearOfJoining: '' }]);
//   };

//   const addExperienceField = () => {
//     setExperiences([
//       ...experiences,
//       {
//         companyName: '',
//         jobRole: '',
//         dateOfJoining: '',
//         monthsOfExperience: '',
//         description: '',
//         skills: ''
//       }
//     ]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform actions with the form data, such as saving it to state or making an API call

//     // Reset form fields after submission
//     setName('');
//     setEmail('');
//     setPhone('');
//     setAddress('');
//     setEducation([{ schoolName: '', marks: '', yearOfJoining: '' }]);
//     setExperiences([
//       {
//         companyName: '',
//         jobRole: '',
//         dateOfJoining: '',
//         monthsOfExperience: '',
//         description: '',
//         skills: ''
//       }
//     ]);
//   };

//   return (
//     <div className="container">
//       <h1 className="mb-4">Create or Upload Resume</h1>
//       <div className="mb-3">
//         <label className="form-check-label me-3">
//           <input
//             type="radio"
//             value="create"
//             checked={selectedOption === 'create'}
//             onChange={handleOptionChange}
//             className="form-check-input"
//           />
//           Create Resume
//         </label>
//         <label className="form-check-label">
//           <input
//             type="radio"
//             value="upload"
//             checked={selectedOption === 'upload'}
//             onChange={handleOptionChange}
//             className="form-check-input"
//           />
//           Upload Resume
//         </label>
//       </div>
//       {selectedOption === 'create' ? (
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="phone" className="form-label">
//               Phone
//             </label>
//             <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="address" className="form-label">
//               Address
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Education</label>
//             {education.map((edu, index) => (
//               <div key={index}>
//                 <div className="mb-3">
//                   <label htmlFor={`schoolName${index}`} className="form-label">
//                     School Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`schoolName${index}`}
//                     value={edu.schoolName}
//                     onChange={(e) => handleEducationChange(index, 'schoolName', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`marks${index}`} className="form-label">
//                     Marks
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`marks${index}`}
//                     value={edu.marks}
//                     onChange={(e) => handleEducationChange(index, 'marks', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`yearOfJoining${index}`} className="form-label">
//                     Year of Joining
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`yearOfJoining${index}`}
//                     value={edu.yearOfJoining}
//                     onChange={(e) => handleEducationChange(index, 'yearOfJoining', e.target.value)}
//                   />
//                 </div>
//               </div>
//             ))}
//             <button type="button" className="btn btn-secondary" onClick={addEducationField}>
//               Add Education
//             </button>
//           </div>
//           <div className="mb-3">
//             <label className="form-label">Job Experiences</label>
//             {experiences.map((exp, index) => (
//               <div key={index}>
//                 <div className="mb-3">
//                   <label htmlFor={`companyName${index}`} className="form-label">
//                     Company Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`companyName${index}`}
//                     value={exp.companyName}
//                     onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`jobRole${index}`} className="form-label">
//                     Job Role
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`jobRole${index}`}
//                     value={exp.jobRole}
//                     onChange={(e) => handleExperienceChange(index, 'jobRole', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`dateOfJoining${index}`} className="form-label">
//                     Date of Joining
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`dateOfJoining${index}`}
//                     value={exp.dateOfJoining}
//                     onChange={(e) => handleExperienceChange(index, 'dateOfJoining', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`monthsOfExperience${index}`} className="form-label">
//                     Months of Experience
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`monthsOfExperience${index}`}
//                     value={exp.monthsOfExperience}
//                     onChange={(e) => handleExperienceChange(index, 'monthsOfExperience', e.target.value)}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`description${index}`} className="form-label">
//                     Description
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id={`description${index}`}
//                     value={exp.description}
//                     onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
//                   ></textarea>
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor={`skills${index}`} className="form-label">
//                     Skills
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id={`skills${index}`}
//                     value={exp.skills}
//                     onChange={(e) => handleExperienceChange(index, 'skills', e.target.value)}
//                   />
//                 </div>
//               </div>
//             ))}
//             <button type="button" className="btn btn-secondary" onClick={addExperienceField}>
//               Add Experience
//             </button>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       ) : (
//         <FileUploadForm />
//       )}
//     </div>
//   );
// }

// export default ResumeForm;
