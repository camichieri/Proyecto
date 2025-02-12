import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const { contactId } = useParams();
  const [user, setUser] = useState({
    name: 'Copper',
    status: 'Hey there! I am using WhatsApp.',
    phoneNumber: '+54 35655301',
    email: 'pollito@guamail.com',
    profilePicture: 'https://blog.dogfydiet.com/wp-content/uploads/2023/10/Caniche-toy-1.jpg'
  });

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-status">{user.status}</p>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-title">Phone Number:</span>
          <span className="detail-value">{user.phoneNumber}</span>
        </div>
        <div className="detail-item">
          <span className="detail-title">Email:</span>
          <span className="detail-value">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;