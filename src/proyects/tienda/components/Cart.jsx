const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <h2>Carrito de Compras</h2>
    {cartItems.length > 0 ? (
      cartItems.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Precio: ${item.price} x {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))
    ) : (
      <p>El carrito está vacío.</p>
    )}
  </div>
);

export default Cart;
