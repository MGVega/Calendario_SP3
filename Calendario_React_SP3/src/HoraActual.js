// src/HoraActual.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HoraActual = () => {
    const [hora, setHora] = useState('');

    useEffect(() => {
        // Función para obtener la hora
        const obtenerHora = async () => {
            try {
                const respuesta = await axios.get('http://localhost:8080/calendario/hoy');
                setHora(respuesta.data); // Almacena la hora recibida
            } catch (error) {
                console.error('Error al obtener la hora:', error);
            }
        };

        obtenerHora(); // Llama a la función para obtener la hora
    }, []); // El arreglo vacío significa que se ejecuta una sola vez al montar el componente

    return (
        <div>
            <h2>Hora Actual en España</h2>
            <p>{hora}</p> {/* Muestra la hora */}
        </div>
    );
};

export default HoraActual;
