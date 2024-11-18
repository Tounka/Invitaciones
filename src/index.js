import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextoGeneralProvider } from './recursos/ContextoGeneral';
import ModalGenerico from './secciones/Modal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextoGeneralProvider>
      <React.StrictMode>
        <App />
        <ModalGenerico />
      </React.StrictMode>
  </ContextoGeneralProvider>

);


