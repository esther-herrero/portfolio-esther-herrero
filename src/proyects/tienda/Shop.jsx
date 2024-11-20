import { useState } from 'react';
import './Shop.css';

// Productos de ejemplo
const productsData = [
  { id: 1, name: 'Producto 1', price: 10, image: './img/tienda/prod1.png', category: 'Categoria 1', reviews: 4 },
  { id: 2, name: 'Producto 2', price: 20, image: './img/tienda/prod3.png', category: 'Categoria 2', reviews: 5 },
  { id: 3, name: 'Producto 3', price: 30, image: './img/tienda/prod2.png', category: 'Categoria 1', reviews: 3 },
];

const Shop = () => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Filtrar productos
  const filteredProducts = products.filter(product => {
    return (
      (!categoryFilter || product.category === categoryFilter) &&
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice)
    );
  });

  // Calcular total
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="shopContainer">
      <div className="filters">
        <h5>Proyecto Tienda</h5>
        <select onChange={(e) => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="">Filtrar por categoría</option>
          <option value="Categoria 1">Categoria 1</option>
          <option value="Categoria 2">Categoria 2</option>
        </select>

        <input
          type="number"
          placeholder="Precio mínimo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="productList">
        {filteredProducts.map(product => (
          <div key={product.id} className="productCard">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.category}</p>
            <p>Precio: ${product.price}</p>
            <p>Reseñas: {product.reviews} ★</p>
            <button onClick={() => addToCart(product)}>Añadir al carrito</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h3>Carrito</h3>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h4>Total: ${calculateTotal()}</h4>
      </div>
    </div>
  );
};

export default Shop;
