import React, { useState, useEffect } from 'react';
import './ChatsPage.css';

const ChatsPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Alice', text: 'Hi Bob!' },
    { id: 2, sender: 'Bob', text: 'Hello Alice!' }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: 'You', text: newMessage }
      ]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chats-page">
      <div id="chat-window" className="chat-window">
        {messages.map(message => (
          <div key={message.id} className={`message ${message.sender === 'You' ? 'you' : 'other'}`}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatsPage;