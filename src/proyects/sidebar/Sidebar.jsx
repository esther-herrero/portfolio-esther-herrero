import React from 'react';
import './styles.css'; // Asegúrate de crear estilos para tu sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h4>Menú</h4>
      <ul>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contactos</li>
        <li>Configuraciones</li>
      </ul>
    </div>
  );
};

export default Sidebar;
