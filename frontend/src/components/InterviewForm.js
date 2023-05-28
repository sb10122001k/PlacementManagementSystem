import React, { useState } from 'react';

const InterviewForm = () => {
  const [intervieweeName, setIntervieweeName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [preferredTime, setPreferredTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform API call to schedule the interview
    // You can use axios or the built-in fetch API to make the request

    // Reset form fields after submission
    setIntervieweeName('');
    setContactDetails('');
    setPreferredTime('');
  };

  return (
    <div className="container">
      <h1>Schedule an Interview</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="intervieweeName" className="form-label">Interviewee Name</label>
          <input type="text" className="form-control" id="intervieweeName" value={intervieweeName} onChange={(e) => setIntervieweeName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="contactDetails" className="form-label">Contact Details</label>
          <input type="text" className="form-control" id="contactDetails" value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="preferredTime" className="form-label">Preferred Time</label>
          <input type="datetime-local" className="form-control" id="preferredTime" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Schedule Interview</button>
      </form>
    </div>
  );
};

export default InterviewForm;
