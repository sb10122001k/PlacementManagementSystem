// App.js
import React, { useEffect, useState } from 'react';
import InterviewScheduler from './InterviewScheduler';
import { Card } from 'react-bootstrap';

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

  const handleTimeSlotSelection = (slot, index, usn, meetingLink, companyEmail) => {
    // Handle the selected time slot along with usn, meetingLink, and companyEmail
    console.log('Selected time slot:', slot);
    console.log('USN:', usn);
    console.log('Meeting Link:', meetingLink);
    console.log('Company Email:', companyEmail);

    

    const response = fetch('http://localhost:1337/api/finalScheduleSelection', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        slot,
        usn,
        meetingLink,
        companyEmail
      }),
    });

    // const data = response.json();

    // if (data.status === 'ok') {
    //   // Handle successful response
    // }
  };

  return (
    <div>
      <h1>Interview Scheduler</h1>
      {loading ? (
        <p>Loading interview data...</p>
      ) : (
        <>
          {interviews && interviews.length > 0 ? (
            <Card border='2' style={{ border: '2px solid' }}>
              <InterviewScheduler
                interviews={interviews}
                handleTimeSlotSelection={handleTimeSlotSelection}
              />
            </Card>
          ) : (
            <p>No interviews available</p>
          )}
        </>
      )}
    </div>
  );
};

export default App;
