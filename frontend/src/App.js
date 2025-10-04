import React, { useState, useEffect } from 'react';
import Login from './features/login/login.jsx';
import Dashboard from './features/dashboard/dashboad.jsx';
import PageLayout from './components/pageLayout.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme.js';

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {token ? (
          <PageLayout>
            <Dashboard token={token} onLogout={handleLogout} />
          </PageLayout>
        ) : (
          <PageLayout>
            <Login onLoginSuccess={handleLoginSuccess} />
          </PageLayout>
        )}
      </ThemeProvider>
    </div>
  );
}

export default App;
