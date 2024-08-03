import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BottomNavbar from './components/BottomNavbar.jsx';
import HomePage from './pages/HomePage.jsx';
import ContactsPage from './pages/ContactsPage.jsx';
import ChatsPage from './pages/ChatsPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/chats/:contactId" element={<ChatsPage />} />
        <Route path="/profile/:contactId" element={<ProfilePage />} />
        <Route path="/novedades" element={<div>Novedades</div>} />
        <Route path="/llamadas" element={<div>Llamadas</div>} />
        <Route path="/configuracion" element={<div>Configuración</div>} />
      </Routes>
      <BottomNavbar />
    </div>
  );
}


export default App;
