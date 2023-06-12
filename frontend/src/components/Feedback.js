import React, { useEffect, useState } from 'react';

const FeedbackTable = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/getfeedback/1CD19EC055')
      .then((response) => response.json())
      .then((data) => {
        setFeedback(data);
      })
      .catch((error) => {
        console.error('Error getting feedback:', error);
      });
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div>
        <h2>Feedback</h2>
        <table style={{ borderCollapse: 'collapse', border: '1px solid #ccc' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Company</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Title</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Content</th>
            </tr>
          </thead>
          <tbody>
            {feedback.map((item) => (
              <tr key={item._id}>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.company}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.title}</td>
                <td style={{ border: '1px solid #ccc', padding: '8px' }}>{item.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedbackTable;
