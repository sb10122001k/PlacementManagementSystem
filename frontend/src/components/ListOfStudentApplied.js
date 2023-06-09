import React, { useState } from 'react';
import { Table, Button, ButtonGroup, Modal, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const ApplicationTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  const [showModal, setShowModal] = useState(false);
  const [feedbackTitle, setFeedbackTitle] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedApplicationId, setSelectedApplicationId] = useState('');
  const companyName = localStorage.getItem('name');

  const handleViewResume = (usn) => {
    console.log(`View resume for application ${usn}`);
    localStorage.setItem('usn', usn);
    navigate('/viewCandidateResume', { replace: true });
  };

  const handleScheduleInterview = (id) => {
    console.log(`Schedule interview for application ${id}`);
  };

  const handleStatusChange = (id, status) => {
    console.log(`Change status for application ${id} to ${status}`);
  };

  async function handleSendFeedback  (e){
    e.preventDefault()
    console.log(`Send feedback for application ${selectedApplicationId}`);
    console.log(`Feedback Title: ${feedbackTitle}`);
    console.log(`Feedback Text: ${feedbackText}`);
    
    // Send feedback to the backend
    const feedbackData = {
      usn: selectedApplicationId,
      company: companyName,
      title: feedbackTitle,
      content: feedbackText,
    };
    console.log(feedbackData)
    
    fetch('http://localhost:1337/api/sendFeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response from the backend
      })
      .catch(error => {
        console.log(error);
        // Handle the error
      });

    // Reset the feedback fields
    setFeedbackTitle('');
    setFeedbackText('');
    
    // Close the modal
    setShowModal(false);
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name of Candidate Applied</th>
            <th>View Resume</th>
            <th>Schedule Interview</th>
            <th>Status</th>
            <th>Send Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((application) => {
            return (
              <tr key={application.id}>
                <td>{application.usn}</td>
                <td>
                  <Button variant="primary" onClick={() => handleViewResume(application.usn)}>
                    View Resume
                  </Button>
                </td>
                <td>
                  <Button variant="success" onClick={() => handleScheduleInterview(application.id)}>
                    Schedule Interview
                  </Button>
                </td>
                <td>
                  <ButtonGroup>
                    <Button
                      variant={application.status === 'pending' ? 'secondary' : 'outline-secondary'}
                      onClick={() => handleStatusChange(application.id, 'pending')}
                    >
                      Pending
                    </Button>
                    <Button
                      variant={application.status === 'accepted' ? 'success' : 'outline-success'}
                      onClick={() => handleStatusChange(application.id, 'accepted')}
                    >
                      Accepted
                    </Button>
                    <Button
                      variant={application.status === 'rejected' ? 'danger' : 'outline-danger'}
                      onClick={() => handleStatusChange(application.id, 'rejected')}
                    >
                      Rejected
                    </Button>
                  </ButtonGroup>
                </td>
                <td>
                  <Button variant="info" onClick={() => {
                    setSelectedApplicationId(application.usn);
                    setShowModal(true);
                  }}>
                    Send Feedback
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Send Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="feedbackTitle">
              <Form.Label>Feedback Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter feedback title"
                value={feedbackTitle}
                onChange={(e) => setFeedbackTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="feedbackText">
              <Form.Label>Feedback Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter feedback text"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendFeedback}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ApplicationTable;
