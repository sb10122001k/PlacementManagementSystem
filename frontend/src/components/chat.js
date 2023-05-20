import React, { useState } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div>
      <div
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px'
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#f2f2f2',
              padding: '5px',
              marginBottom: '5px'
            }}
          >
            {message}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: '10px'
        }}
      >
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          style={{
            flex: '1',
            padding: '5px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            marginLeft: '5px',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
