import React, { useState } from 'react';
import './styles.css'

function ToogleBlackWhite() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="containerMode"
      style={{
        backgroundColor: isDarkMode ? 'black' : 'white',
        color: isDarkMode ? 'white' : 'black',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.5s ease',
      }}
    >
      <div className="containerMode">
        <h1>{isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}</h1>
        <button onClick={toggleBackground}>
          Cambiar a {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
    </div>
  );
}

export default ToogleBlackWhite;
