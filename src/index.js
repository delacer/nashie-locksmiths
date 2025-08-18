import React from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import App from './App.js';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HelmetProvider>
    <>
      <App />
      <ToastContainer position='top-right' autoClose={3000} />
    </>
  </HelmetProvider>
);
