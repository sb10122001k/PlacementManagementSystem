import React, { useState ,useEffect} from 'react';
import { Card, Button, Modal, ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CompanyDashboard = () => {
  const [jobs, setJobs] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(localStorage.getItem('token'))
    const id = localStorage.getItem('token');

    fetch(`http://localhost:1337/api/getJobPosted/${id}`)
        .then((response) => {
            const reader = response.body.getReader();
            console.log(reader)
            reader.read().then(({ done, value }) => {
                if (done) {
                    console.log('end...')
                    return;
                }
                const decoder = new TextDecoder();
                const strData = decoder.decode(value)
                const data = JSON.parse(strData)
                console.log(data)
                setJobs(data)
            });
        })
}, [])
  const handleViewApplicants = (id) => {

    fetch(`http://localhost:1337/api/getCandidateList/${id}`)
    .then((response) => response.json())
    .then((data) => {
        navigate('/LOSA', { state: { data: data } });
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
    
  };

  

  return (
    <div>
      <h1>Company Dashboard</h1>
      <div className="card-container">
        {jobs?.map((job) => (
          <Card key={job._id}>
            <Card.Body>
              <Card.Title>{job.jobRole}</Card.Title>
              <Button variant="primary" onClick={() => handleViewApplicants(job._id)}>
                View Applicants
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default CompanyDashboard;
