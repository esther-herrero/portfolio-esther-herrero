const ProductList = ({ products, addToCart, goToDetails }) => (
  <div>
    {products.map((product) => (
      <div key={product.id} onClick={() => goToDetails(product)}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Precio: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Añadir al carrito</button>
      </div>
    ))}
  </div>
);

export default ProductList;
