import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import ChatsPage from './pages/ChatsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import LlamadasPage from './pages/LlamadasPage.jsx';
import ConfiguracionPage from './pages/ConfiguracionPage.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
      <Route path="/" element={<Navigate to="/chats" />} />
        <Route path="/chats" element={<ContactsPage />} />
        <Route path="/chats/:contactId" element={<ChatsPage />} />
        <Route path="/profile/:contactId" element={<ProfilePage />} />
        <Route path="/llamadas" element={<LlamadasPage />} />
        <Route path="/configuracion" element={<ConfiguracionPage />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
