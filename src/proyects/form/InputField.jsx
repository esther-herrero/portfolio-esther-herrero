import React from 'react';

const InputField = ({ label, name, value, onChange, error }) => (
  <div className="input-field">
    <label>{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default InputField;
