import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import SelectField from './SelectField';
import DateField from './DateField';
import SubmitButton from './SubmitButton';
import './styles.css';

const FormContainer = () => {
  const navigate = useNavigate(); // Hook para la navegación
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    birthDate: '',
    selection: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Nombre es requerido";
    if (!formData.email) formErrors.email = "Correo electrónico es requerido";
    if (!formData.address) formErrors.address = "Dirección es requerida";
    if (!formData.birthDate) formErrors.birthDate = "Fecha de nacimiento es requerida";
    if (!formData.selection) formErrors.selection = "Seleccionar una opción es requerido";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/form-confirmation', { state: formData });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <InputField label="Nombre" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
      <InputField label="Correo Electrónico" name="email" value={formData.email} onChange={handleChange} error={errors.email} />
      <InputField label="Dirección" name="address" value={formData.address} onChange={handleChange} error={errors.address} />
      <DateField label="Fecha de Nacimiento" name="birthDate" value={formData.birthDate} onChange={handleChange} error={errors.birthDate} />
      <SelectField label="Selecciona una opción" name="selection" value={formData.selection} onChange={handleChange} error={errors.selection} options={['Opción 1', 'Opción 2', 'Opción 3']} />
      <SubmitButton />
    </form>
  );
};

export default FormContainer;
