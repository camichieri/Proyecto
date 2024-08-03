import React from 'react';
import { Link } from 'react-router-dom';
import './ContactsPage.css';

const ContactsPage = () => {
  const contacts = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
  ];

  return (
    <div className="contacts-page">
      <h1>Contacts</h1>
      <div className="contacts-list">
        {contacts.map(contact => (
          <Link to={`/chats/${contact.id}`} key={contact.id} className="contact-item">
            <div className="contact-name">{contact.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;
  