import React, { useEffect, useState } from 'react';

const App = () => {
  const [interviews, setInterviews] = useState([]);
  const usn = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://localhost:1337/api/sechdule/${usn}`)
      .then(response => response.json())
      .then(data => {
        setInterviews(data);
      })
      .catch(error => {
        console.error('Error fetching interview data:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '50px' }}>
      <h1 style={{ textAlign: 'center' }}>Interview Schedule</h1>
      <table style={{ backgroundColor: '#eaeaea', width: '80%', border: '1px solid #ccc', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Company Email</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Date</th>
            <th style={{ border: '1px solid #ccc', padding: '10px' }}>Time</th>
            <th ></th>
          </tr>
        </thead>
        <tbody>
          {interviews?.map(interview => (
            <tr key={interview._id}>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{interview.companyEmail}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{interview.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>{interview.time}</td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                <a href={interview.meetingLink} target="_blank" rel="noopener noreferrer">
                  <button variant="dark">Join</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
