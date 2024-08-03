import React from 'react';
import { Link } from 'react-router-dom';
import './BottomNavbar.css';

const BottomNavbar = () => {
  return (
    <nav className="bottom-navbar">
      <Link to="/llamadas" className="navbar-item">
        <i className="fa fa-phone"></i>
        <span>Llamadas</span>
      </Link>
      <Link to="/chats" className="navbar-item">
        <i className="fa fa-comments"></i>
        <span>Chats</span>
      </Link>
      <Link to="/configuracion" className="navbar-item">
        <i className="fa fa-cog"></i>
        <span>Configuración</span>
      </Link>
    </nav>
  );
};

export default BottomNavbar;