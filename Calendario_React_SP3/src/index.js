import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Asegúrate de tener un componente App

const root = ReactDOM.createRoot(document.getElementById('root')); // Crear el root
root.render(
  <React.StrictMode>
    <App />  {/* Aquí se renderiza tu componente principal */}
  </React.StrictMode>
);
