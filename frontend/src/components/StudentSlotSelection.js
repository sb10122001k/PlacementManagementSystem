import React, { useEffect, useState } from 'react';
import InterviewScheduler from './InterviewScheduler';

const App = () => {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch interview data from the backend API
    fetch(`http://localhost:1337/api/inveriewSlotAvailability/${localStorage.getItem('token')}`)
      .then((response) => response.json())
      .then((data) => {
        setInterviews(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch interview data', error);
        setLoading(false);
      });
  }, []);

  const handleTimeSlotSelection = (slot) => {
    // Handle the selected time slot
    console.log('Selected time slot:', slot);
    // Add your logic here to handle the selected slot
  };

  return (
    <div>
      <h1>Interview Scheduler</h1>
      {loading ? (
        <p>Loading interview data...</p>
      ) : (
        <>
          {interviews.length > 0 ? (
            <InterviewScheduler interviews={interviews} handleTimeSlotSelection={handleTimeSlotSelection} />
          ) : (
            <p>No interviews available</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
