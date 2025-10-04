import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import './App.js';

const API_URL = 'http://localhost:8000/api/token/';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: user,
      password: password,
    };

    console.log('Enviando al backend:', userData);

    axios
      .post(API_URL, userData)
      .then((response) => {
        console.log('¡Login exitoso!', response.data);
        localStorage.setItem('access_token', response.data.access);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.error('Hubo un error en el login:', error.response.data);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
          <>
            <h1>Iniciar Sesión</h1>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                width: '300px',
              }}
            >
              <TextField
                label="User"
                variant="outlined"
                type="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button variant="contained" type="submit">
                Entrar
              </Button>
            </Box>
          </>
      </header>
    </div>
  );
}

export default Login;
