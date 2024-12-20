import { useState } from 'react';
import './style.css';

// Datos de ejemplo
const items = Array.from({ length: 100 }).map((_, i) => `Item ${i + 1}`);

const PaginatedItems = ({ itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular los índices de inicio y final
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <ul>
        {currentItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          disabled={indexOfLastItem >= items.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="paginationContenedor">
      <h3>Paginación en React</h3>
      <PaginatedItems itemsPerPage={10} />
    </div>
  );
};

export default Pagination;
