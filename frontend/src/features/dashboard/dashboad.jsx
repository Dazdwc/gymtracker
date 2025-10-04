import React from 'react';

const Dashboard = ({ token, onLogout }) => {
  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <p>Tu token es: {token}</p>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;
