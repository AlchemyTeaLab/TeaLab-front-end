import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import AuthProvider from './context/AuthProvider';
import TeaProvider from './context/TeaProvider';
import { TourProvider } from '@reactour/tour'
import steps from './fixtures/TourSteps';

render(
  <React.StrictMode>
    <Toaster />
    <Router>
      <TourProvider steps={steps}>
        <AuthProvider>
          <TeaProvider>
            <App />
          </TeaProvider>
        </AuthProvider>
      </TourProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
