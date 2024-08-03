import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsPage.css';

const ContactsPage = () => {
  const contacts = [
    { id: 1, name: 'Alice', lastMessage: 'Hey, how are you?', time: '10:30 AM' },
    { id: 2, name: 'Bob', lastMessage: 'See you soon!', time: '9:45 AM' },
    { id: 3, name: 'Charlie', lastMessage: 'What\'s up?', time: 'Yesterday' },
    { id: 4, name: 'David', lastMessage: 'Let\'s catch up later.', time: 'Monday' },
    { id: 5, name: 'Eva', lastMessage: 'Meeting at 5 PM.', time: 'Sunday' },
  ];

  return (
    <div className="contacts-page">
      <h1>Contacts</h1>
      <div className="contacts-list">
        {contacts.map(contact => (
          <Link to={`/chats/${contact.id}`} key={contact.id} className="contact-item">
            <div className="contact-avatar">{contact.name.charAt(0)}</div>
            <div className="contact-info">
              <div className="contact-name">{contact.name}</div>
              <div className="contact-last-message">{contact.lastMessage}</div>
            </div>
            <div className="contact-time">{contact.time}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
