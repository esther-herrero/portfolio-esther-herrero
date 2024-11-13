import { useState } from 'react';
import './Shop.css';

function Shop() {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: '$10', image: './img/tienda/prod1.png' },
    { id: 2, name: 'Producto 2', price: '$20', image: './img/tienda/prod2.png' },
    { id: 4, name: 'Producto 2', price: '$20', image: './img/tienda/prod2.png' },
    { id: 3, name: 'Producto 3', price: '$30', image: './img/tienda/prod3.png' }
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
      <div className="shop-container">
        <div>
          <h1>Tienda de Productos</h1>
          <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                  <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                </div>
            ))}
          </div>
        </div>

        <div className="cart">
          <h2>Carrito de Comprasssss</h2>
          {cartItems.length === 0 ? (
              <p>No hay productos en el carrito.</p>
          ) : (
              <div>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                      <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                ))}
              </div>
          )}
        </div>
      </div>
  );
}

export default Shop;
