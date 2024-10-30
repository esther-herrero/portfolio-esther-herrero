import React from 'react';
import { useLocation } from 'react-router-dom';
import './FormConfirmation.css';  // Importa aquí el CSS

const FormConfirmation = () => {
  const location = useLocation();
  const formData = location.state;

  return (
    <div className="confirmation">
      <h1>El formulario ha sido enviado</h1>
      <h2>Resumen de los datos enviados:</h2>
      <ul>
        {formData && Object.entries(formData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormConfirmation;

