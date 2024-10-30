import React from 'react';

const SelectField = ({ label, name, value, onChange, error, options }) => (
  <div className="select-field">
    <label>{label}</label>
    <select name={name} value={value} onChange={(e) => onChange(name, e.target.value)}>
      <option value="">Selecciona una opción</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default SelectField;
