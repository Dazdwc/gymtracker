import React, { useState, useEffect } from 'react';
import Login from './features/login/login.jsx';
import Dashboard from './features/dashboard/dashboad.jsx';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('access_token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLoginSuccess = (data) => {
    localStorage.setItem('access_token', data.access);
    setToken(data.access);
  };

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setToken(null);
  };

  return (
    <div>
      {token ? (
        <Dashboard token={token} onLogout={handleLogout} />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
