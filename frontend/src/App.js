import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'http://localhost:8000/api/saludo/';

function App() {
  const [mensaje, setMensaje] = useState('Cargando...');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setMensaje(response.data.mensaje + ' 🎉');
      })
      .catch((err) => {
        console.error('Error de CORS/Conexion:', err.message);
        setMensaje('¡ERROR DE CONEXIÓN! ❌');
        setError(
          'Revisa si Django está activo (Terminal 1) y si CORS_ALLOWED_ORIGINS en settings.py incluye http://localhost:3000.'
        );
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Backend Check: Django y React</h1>
        <p
          className="App-message"
          style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
        >
          {mensaje}
        </p>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </header>
    </div>
  );
}

export default App;
