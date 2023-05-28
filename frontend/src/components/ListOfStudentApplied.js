import React, { useState,useEffect } from 'react';
import { Table, Button, ButtonGroup } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const ApplicationTable = () => {
  const [applications, setApplications] = useState();
  // const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  console.log('HI')
  console.log(data);

//   useEffect(() => {
//     console.log(localStorage.getItem('userid'))
//     fetch('http://localhost:1337/api/getStudentApplicationList/')
//         .then((response) => {
//             const reader = response.body.getReader();
//             console.log(reader)
//             reader.read().then(({ done, value }) => {
//                 if (done) {
//                     console.log('end...')
//                     return;
//                 }
//                 const decoder = new TextDecoder();
//                 const strData = decoder.decode(value)
//                 const data = JSON.parse(strData)
//                 console.log(data)
//                 setPostingData(data)
//             });
//         })
// }, [])


  const handleViewResume = (id) => {
    // Logic to view the resume of the candidate with the given id
    // You can open a modal or navigate to a different page here
    console.log(`View resume for application ${id}`);
  };

  const handleScheduleInterview = (id) => {
    // Logic to schedule an interview for the candidate with the given id
    console.log(`Schedule interview for application ${id}`);
  };

  const handleStatusChange = (id, status) => {
    
    fetch(`http://localhost:1337/api/updateApplicationStatus/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, status })
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log('Status update successful:', data);
      // Perform any additional actions if needed
    })
    .catch((error) => {
      // Handle any errors
      console.error('Status update failed:', error);
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name of Candidate Applied</th>
          <th>View Resume</th>
          <th>Schedule Interview</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((application) => (
          <tr key={application.id}>
            <td>{application.usn}</td>
            <td>
              <Button variant="primary" onClick={() => handleViewResume(application.id)}>
                View Resume
              </Button>
            </td>
            <a href="/scheduleInterview">
            <td>
              <Button variant="success" onClick={() => handleScheduleInterview(application.id)}>
                Schedule Interview
              </Button>
            </td>
            </a>
            <td>
              <ButtonGroup>
                <Button
                  variant={application.status === 'pending' ? 'secondary' : 'outline-secondary'}
                  onClick={() => handleStatusChange(application._id, 'pending')}
                >
                  Pending
                </Button>
                <Button
                  variant={application.status === 'accepted' ? 'success' : 'outline-success'}
                  onClick={() => handleStatusChange(application._id, 'accepted')}
                >
                  Accepted
                </Button>
                <Button
                  variant={application.status === 'rejected' ? 'danger' : 'outline-danger'}
                  onClick={() => handleStatusChange(application._id, 'rejected')}
                >
                  Rejected
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ApplicationTable;
