import React, { useState } from 'react';
import './Autocomplete.css'; // Asegúrate de tener este archivo para los estilos

const Autocomplete = () => {
  const options = [
    'Manzana', 'Banana', 'Naranja', 'Uvas', 'Fresa', 'Piña', 'Arándano', 'Mango', 'Melón',
    'Pera', 'Cereza', 'Durazno', 'Sandía', 'Frambuesa', 'Kiwi', 'Papaya', 'Lima', 'Limón',
    'Lechuga', 'Tomate', 'Cebolla', 'Zanahoria', 'Pepino', 'Espinaca', 'Brócoli', 'Coliflor',
    'Ajo', 'Pimiento', 'Calabacín', 'Berenjena', 'Chícharo', 'Papa', 'Camote', 'Jitomate',
    'Pollo', 'Carne de res', 'Cerdo', 'Pescado', 'Camarones', 'Chuletas de cerdo', 'Salchichas',
    'Tocino', 'Jamón', 'Pavo', 'Atún', 'Salmón', 'Tilapia',
    'Leche', 'Yogur', 'Queso', 'Mantequilla', 'Crema', 'Queso crema', 'Leche de almendra',
    'Leche de soja', 'Helado',
    'Pan', 'Arroz', 'Pasta', 'Harina', 'Tortillas', 'Avena', 'Quinoa', 'Cereal', 'Frijoles',
    'Garbanzos', 'Lentejas', 'Harina de maíz',
    'Huevos', 'Azúcar', 'Sal', 'Aceite de oliva', 'Vinagre', 'Miel', 'Café', 'Té', 'Jugo de naranja',
    'Refresco', 'Agua mineral', 'Cerveza', 'Vino',
    'Galletas', 'Chocolate', 'Caramelos', 'Papitas', 'Palomitas', 'Nueces', 'Almendras', 'Pasas',
    'Shampoo', 'Jabón', 'Papel higiénico', 'Pasta de dientes', 'Detergente', 'Suavizante',
    'Toallas de cocina', 'Bolsas de basura', 'Limpiador multiusos', 'Esponjas'
  ];

  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [activeOption, setActiveOption] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()) && !shoppingList.includes(option)
      )
    );
    setActiveOption(0);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    if (!shoppingList.includes(option)) {
      setShoppingList([...shoppingList, option]);
    }
    setInputValue('');
    setShowOptions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setActiveOption((prevActive) => (prevActive === filteredOptions.length - 1 ? 0 : prevActive + 1));
    } else if (e.key === 'ArrowUp') {
      setActiveOption((prevActive) => (prevActive === 0 ? filteredOptions.length - 1 : prevActive - 1));
    } else if (e.key === 'Enter') {
      if (showOptions && filteredOptions.length > 0) {
        handleOptionClick(filteredOptions[activeOption]);
      }
    } else if (e.key === 'Escape') {
      setShowOptions(false);
    }
  };

  const handleRemoveItem = (item) => {
    setShoppingList(shoppingList.filter((i) => i !== item));
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="autocomplete-input"
        placeholder="Escribe para buscar..."
      />
      {showOptions && inputValue && (
        <ul className="autocomplete-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                className={index === activeOption ? 'option active' : 'option'}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))
          ) : (
            <li className="no-option">No hay opciones disponibles</li>
          )}
        </ul>
      )}
      <div className="shopping-list-container">
        <h4>Lista de la compra:</h4>
        <p>Qué necesito para esta semana? 🤔📝</p>
        {shoppingList.length > 0 ? (
          <ul className="shopping-list">
            {shoppingList.map((item, index) => (
              <li key={index}>
                {item}
                <button onClick={() => handleRemoveItem(item)} className="remove-btn">Eliminar</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No has añadido productos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Autocomplete;
