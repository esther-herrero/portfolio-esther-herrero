import React from 'react';

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {
  const { id, name, price, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item__details">
        <h4 className="cart-item__name">{name}</h4>
        <p className="cart-item__price">Precio: ${price.toFixed(2)}</p>
        <p className="cart-item__quantity">Cantidad: {quantity}</p>
      </div>
      <div className="cart-item__actions">
        {/* Botones para ajustar la cantidad del producto */}
        <button onClick={() => onAdd(id)} className="cart-item__button">+</button>
        <button onClick={() => onRemove(id)} className="cart-item__button">-</button>
        {/* Botón para eliminar el producto del carrito */}
        <button onClick={() => onDelete(id)} className="cart-item__delete">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
