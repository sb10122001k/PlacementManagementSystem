import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      linkedinId,
      projects,
      hobbies,
    };

    try {
      // Make a POST request to localhost
      const response = await fetch(`http://localhost:1337/api/createresume/${usn}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Resume data submitted successfully');
        navigate('/StudentHome', { replace: true });
      } else {
        console.error('Error submitting resume data');
      }
    } catch (error) {
      console.error('Error submitting resume data:', error);
    }

    // Reset form fields after submission
    setLinkedinId('');
    setProjects([{ name: '', technology: '', details: '' }]);
    setHobbies('');
  };

  return (
    <div className="container" style={{ backgroundColor: '#f0f0f0' }}>
      <h1 className="mb-4">Create or Upload Resume</h1>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ResumeForm;
