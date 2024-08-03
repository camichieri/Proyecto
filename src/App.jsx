import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import ChatsPage from './pages/ChatsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/chats/:contactId" element={<ChatsPage />} />
        <Route path="/profile/:contactId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
