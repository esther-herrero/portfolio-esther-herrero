import React from 'react';
import ProductList from '../components/ProductList';

const Home = ({ products, addToCart }) => (
  <div>
    <h1>Tienda de Productos</h1>
    <ProductList products={products} addToCart={addToCart} />
  </div>
);

export default Home;
