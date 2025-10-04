import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function LoginForm({ user, password, setUser, setPassword, handleSubmit }) {
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

export default LoginForm;
