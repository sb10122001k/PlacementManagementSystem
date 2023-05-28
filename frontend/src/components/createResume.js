import React, { useState } from 'react';

const ResumeForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState([
    { schoolName: '', marks: '', yearOfJoining: '' }
  ]);
  const [experiences, setExperiences] = useState([
    { companyName: '', jobRole: '', dateOfJoining: '', monthsOfExperience: '', description: '', skills: '' }
  ]);

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducationField = () => {
    setEducation([
      ...education,
      { schoolName: '', marks: '', yearOfJoining: '' }
    ]);
  };

  const addExperienceField = () => {
    setExperiences([
      ...experiences,
      { companyName: '', jobRole: '', dateOfJoining: '', monthsOfExperience: '', description: '', skills: '' }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data, such as saving it to state or making an API call

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setEducation([{ schoolName: '', marks: '', yearOfJoining: '' }]);
    setExperiences([{ companyName: '', jobRole: '', dateOfJoining: '', monthsOfExperience: '', description: '', skills: '' }]);
  };

  return (
    <div className="container">
      <h1>Create Resume</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Education</label>
          {education.map((edu, index) => (
            <div key={index}>
              <div className="mb-3">
                <label htmlFor={`schoolName${index}`} className="form-label">School Name</label>
                <input
                  type="text"
                  className="form-control"
                  id={`schoolName${index}`}
                  value={edu.schoolName}
                  onChange={(e) => handleEducationChange(index, 'schoolName', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`marks${index}`} className="form-label">Marks</label>
                <input
                  type="text"
                  className="form-control"
                  id={`marks${index}`}
                  value={edu.marks}
                  onChange={(e) => handleEducationChange(index, 'marks', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor={`yearOfJoining${index}`} className="form-label">Year of Joining</label>
                <input
                  type="text"
                  className="form-control"
                  id={`yearOfJoining${index}`}
                  value={edu.yearOfJoining}
                  onChange={(e) => handleEducationChange(index, 'yearOfJoining', e.target.value)}
                />
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addEducationField}>Add Education</button>
        </div>
        <div className="mb-3">
          <label className="form-label">Job Experiences</label>
          {experiences.map((experience, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Experience {index + 1}</h5>
                <div className="mb-3">
                  <label htmlFor={`companyName${index}`} className="form-label">Company Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`companyName${index}`}
                    value={experience.companyName}
                    onChange={(e) => handleExperienceChange(index, 'companyName', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`jobRole${index}`} className="form-label">Job Role</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`jobRole${index}`}
                    value={experience.jobRole}
                    onChange={(e) => handleExperienceChange(index, 'jobRole', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`dateOfJoining${index}`} className="form-label">Date of Joining</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`dateOfJoining${index}`}
                    value={experience.dateOfJoining}
                    onChange={(e) => handleExperienceChange(index, 'dateOfJoining', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`monthsOfExperience${index}`} className="form-label">Months of Experience</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`monthsOfExperience${index}`}
                    value={experience.monthsOfExperience}
                    onChange={(e) => handleExperienceChange(index, 'monthsOfExperience', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`description${index}`} className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id={`description${index}`}
                    rows="3"
                    value={experience.description}
                    onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor={`skills${index}`} className="form-label">Skills</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`skills${index}`}
                    value={experience.skills}
                    onChange={(e) => handleExperienceChange(index, 'skills', e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={addExperienceField}>Add Experience</button>
        </div>
        <button type="submit" className="btn btn-primary">Create Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
