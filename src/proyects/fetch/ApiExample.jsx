import React, { useState, useEffect } from 'react';
import './styles.css';
import ErrorMessage from './ErrorMessage';  // Importar el componente de error
import LoadingSpinner from './LoadingSpinner';  // Importar el spinner

export const ApiExample = () => {
  const [data, setData] = useState([]); // Estado para almacenar los datos de la lista
  const [newPost, setNewPost] = useState({
    title: '',
    body: '',
    userId: 1,
  }); // Estado para almacenar el nuevo post
  const [error, setError] = useState(null); // Estado para manejar errores
  const [isLoading, setIsLoading] = useState(false); // Estado para manejar la carga

  // URL de la API real en JSONBIN
  const apiUrl = 'https://api.jsonbin.io/v3/b/66e72bd2ad19ca34f8a68870';
  const apiKey = '$2a$10$7MW2QDKG201IgXNcrcOwbu.phdMfzXTJkh/hqLIdk7VvYDSZW1Qzu'; // Clave API de JSONBIN

  // Efecto para cargar datos al inicio (GET)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Empezamos la carga
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': apiKey,
          },
        });
        if (!response.ok) throw new Error('Error al cargar los datos');

        const result = await response.json();
        const fetchedData = result.record;
        setData(Array.isArray(fetchedData) ? fetchedData : []); // Solo establece datos si es un array
        setIsLoading(false); // Terminamos la carga
      } catch (error) {
        setError(error.message); // Capturamos el error
        setIsLoading(false);
      }
    };

    fetchData();  // Ejecutamos la función para cargar los datos
  }, [apiUrl, apiKey]);

  // Manejar los cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  // Enviar los datos (POST) y agregar el nuevo post a la lista
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario

    try {
      const response = await fetch(apiUrl, {
        method: 'PUT', // Usamos PUT para actualizar los datos en JSONBIN
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key': apiKey,
        },
        body: JSON.stringify({
          record: [newPost, ...data], // Agregamos el nuevo post al inicio de la lista
        }),
      });

      if (!response.ok) throw new Error('Error al agregar el post');

      const newData = await response.json();
      setData([newPost, ...data]); // Actualizamos la lista de posts en el estado
      setNewPost({
        title: '',
        body: '',
        userId: 1,
      }); // Limpiar el formulario
      alert('Post agregado correctamente');
    } catch (error) {
      console.error('Error al agregar el post:', error);
    }
  };

  return (
      <div className="apiContainer">
        <div className="post-it">
          <p>
            <strong>Proyecto <br/>  Ejemplo de Consumo de API con React (API JSONBIN)</strong> <br/> <br/>
            Este proyecto es un ejemplo de cómo consumir una API real utilizando React, donde se pueden realizar
            peticiones para obtener y enviar datos a una API RESTful. <br/> <br/>Se basa en el uso de fetch para realizar
            peticiones GET y PUT, además de gestionar la carga y posibles errores en la interacción con la API.
          </p>
        </div>

        <div className="apiContainer1">
          <h5>Ejemplo de Fetch con React (API real)</h5>

          {/* Mostrar estado de carga */}
          {isLoading && <LoadingSpinner/>}

          {/* Mostrar errores si los hay */}
          {error && <ErrorMessage message={error}/>}
          <div>
            {/* Formulario para agregar un nuevo post */}
            <div className="apiDiv">
              <h6>Agregar nuevo post</h6>
              <form onSubmit={handleSubmit}>
                <div className="apiInput">
                  <label>Título:</label>
                  <input
                      type="text"
                      name="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <div className="apiInput">
                  <label>Contenido:</label>
                  <textarea
                      name="body"
                      value={newPost.body}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <button type="submit">Agregar Post</button>
              </form>
            </div>

            {/* Mostrar lista de posts */}
            <ul>
              {Array.isArray(data) && data.slice(0, 10).map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}</strong>: {item.body}
                  </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  );
};
