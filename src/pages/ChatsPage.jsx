import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ChatsPage.css';

const DATA_MOCK = [
  { author: 'yo', text: 'Hola, ¿cómo estás?', estado: 'visto', day: 'ayer', hora: '10:30' },
  { author: 'contacto', text: 'Bien, ¿y tú?', estado: 'visto', day: 'ayer', hora: '10:32' },
  { author: 'yo', text: 'Todo bien, gracias.', estado: 'visto', day: 'hoy', hora: '14:15' },
  { author: 'contacto', text: 'Me alegro.', estado: 'visto', day: 'hoy', hora: '14:16' },
];

const ChatsPage = () => {
  const { contactId } = useParams();
  const [messages, setMessages] = useState(DATA_MOCK);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const hora = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const day = now.toLocaleDateString([], { day: '2-digit', month: 'short' });
      setMessages([...messages, { author: 'yo', text: newMessage, estado: 'visto', day: 'hoy', hora }]);
      setNewMessage('');
    }
  };

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chats-page">
      <div className="chat-header">
        <h2>Chat con {contactId}</h2>
      </div>
      <div id="chat-window" className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.author === 'yo' ? 'yo' : 'contacto'}`}>
            <div className="message-text">{message.text}</div>
            <div className="message-info">
              <span className="message-time">{message.hora}</span>
              <span className="message-state">{message.estado}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="message-input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="message-input"
        />
        <button onClick={handleSendMessage} className="send-button">Enviar</button>
      </div>
    </div>
  );
};

export default ChatsPage;
