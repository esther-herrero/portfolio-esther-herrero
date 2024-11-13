import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
    <button onClick={() => addToCart(product)}>Agregar al carrito</button>
  </div>
);

export default ProductCard;