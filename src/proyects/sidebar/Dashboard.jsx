import React from 'react';
import './styles.css'; // Asegúrate de crear estilos para tu dashboard

const Dashboard = () => {
  const data = [
    { id: 1, name: 'Esther', email: 'esther@example.com' },
    { id: 2, name: 'Juan', email: 'juan@example.com' },
    { id: 3, name: 'Ana', email: 'ana@example.com' },
  ];

  return (
    <div className="dashboard">
      <h4>Dashboard</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
