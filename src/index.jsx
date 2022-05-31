import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './context/AuthProvider';
import TeaProvider from './context/TeaProvider';

render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <AuthProvider>
        <TeaProvider>
          <App />
        </TeaProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
