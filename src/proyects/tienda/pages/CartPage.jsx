import React from 'react';
import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart }) => (
  <div>
    <h1>Carrito de Compras</h1>
    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
  </div>
);

export default CartPage;
