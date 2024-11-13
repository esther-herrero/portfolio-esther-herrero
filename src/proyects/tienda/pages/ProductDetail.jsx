const ProductDetails = ({ product, addToCart }) => (
  <div>
    <h2>{product.name}</h2>
    <img src={product.image} alt={product.name} />
    <p>{product.description}</p>
    <p>Precio: ${product.price}</p>
    <button onClick={() => addToCart(product)}>Añadir al carrito</button>
  </div>
);

export default ProductDetails;
