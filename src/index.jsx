import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import AuthProvider from './context/AuthProvider';
import TeaProvider from './context/TeaProvider';

render(
  <React.StrictMode>
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
