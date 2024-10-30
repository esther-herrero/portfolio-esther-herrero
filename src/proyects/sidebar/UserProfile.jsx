import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="userProfile">
      <h4>Perfil de Usuario</h4>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
