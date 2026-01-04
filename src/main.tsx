import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ScrollToTop from './components/ScrollToTop.tsx';
import { HelmetProvider } from 'react-helmet-async';
import './lib/setupFetchAuth';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <HelmetProvider>
        <AuthProvider>
          <ScrollToTop />
          <App />
        </AuthProvider>
      </HelmetProvider>
    </Router>
  </React.StrictMode>,
);
