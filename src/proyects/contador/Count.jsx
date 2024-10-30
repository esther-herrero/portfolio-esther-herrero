import React, { useState } from 'react';
import './styles.css'

const Counter = () => {
  const [contador, setContador] = useState(0);
  const [step, setStep] = useState(1);
  const max = 100;
  const min = -100;

  const incrementar = () => {
    if (contador < max) setContador(contador + step);
  };

  const decrementar = () => {
    if (contador > min) setContador(contador - step);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <div className="counter-container">
      <h2>Contador: {contador}</h2>
      <div className="counter-buttons">
        <button onClick={incrementar} disabled={contador >= max}>
          Incrementar
        </button>
        <button onClick={decrementar} disabled={contador <= min}>
          Decrementar
        </button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
      <div className="counter-buttons">
        <label>Incremento: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Counter;
