import React, { useState } from 'react';
import LoginForm from './loginForm.jsx';
import { api } from './../../api/apiClient.js';

const Login = ({ onLoginSuccess }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      username: user,
      password: password,
    };

    try {
      const response = await api.login(userData);
      if (response.data) {
        console.log('¡Login exitoso!');
        onLoginSuccess(response.data);
      }
    } catch (error) {
      console.error('Hubo un error en el login:', error);
    }
  };

  return (
    <LoginForm
      user={user}
      password={password}
      setUser={setUser}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
