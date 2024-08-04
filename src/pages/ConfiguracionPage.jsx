import React, { useState } from 'react';
import './ConfiguracionPage.css';

const ConfiguracionPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const items = [
    'Listas de difusión',
    'Mensajes destacados',
    'Dispositivos vinculados',
    'Cuenta',
    'Privacidad',
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="configuracion-page">
      <div className="configuracion-header">
        <input
          type="text"
          placeholder="Buscar"
          className="configuracion-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="configuracion-profile">
        <img src="https://doctoravanevet.com/wp-content/uploads/2020/04/Servicios-vectores-consulta-integral-150x150.png" alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2> Tu Vet preferida! </h2>
          <p>Hey there! Estoy atendiendo! </p>
        </div>
      </div>
      <div className="configuracion-items">
        {filteredItems.map((item, index) => (
          <div key={index} className="configuracion-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default ConfiguracionPage;
