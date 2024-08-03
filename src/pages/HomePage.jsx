import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to WhatsApp Clone</h1>
      <p>Select a contact to start chatting.</p>
      <Link to="/contacts">Go to Contacts</Link>
    </div>
  );
};

export default HomePage;
