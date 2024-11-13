// Navbar.jsx
function Navbar({ navigateTo }) {
  return (
    <nav>
      <button onClick={() => navigateTo('home')}>Inicio</button>
      <button onClick={() => navigateTo('cart')}>Carrito</button>
    </nav>
  );
}

export default Navbar;
