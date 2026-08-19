import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Los estilos globales (base + utilidades) deben ir ANTES que los de los
// componentes, para que estos últimos ganen en la cascada y no al revés.
import './index.css';
import App from './components/App/App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
