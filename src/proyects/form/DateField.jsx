import React from 'react';

const DateField = ({ label, name, value, onChange, error }) => (
  <div className="date-field">
    <label>{label}</label>
    <input
      type="date"
      name={name}
      value={value}
      onChange={(e) => onChange(name, e.target.value)}
    />
    {error && <p className="error-message">{error}</p>}
  </div>
);

export default DateField;
