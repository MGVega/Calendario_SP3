// src/App.js
import React from "react";
import HoraActual from "./HoraActual"; // Importa el componente HoraActual

function App() {
  return (
    <div>
      <h1>Calendario React</h1>
      <p>La fecha de hoy es: {new Date().toLocaleDateString()}</p>
      <HoraActual /> {/* Incluye el componente para mostrar la hora */}
    </div>
  );
}

export default App;
