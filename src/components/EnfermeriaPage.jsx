// src/components/EnfermeriaPage.jsx
import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/api';
import '../styles/Isla.css';

function EnfermeriaPage() {
    const [enfermeria, setEnfermeria] = useState(null);

    useEffect(() => {
        const enfermeriaId = '3'; // ID de la enfermería
        getIsla(enfermeriaId)
            .then(response => {
                setEnfermeria(response.data);
            })
            .catch(error => {
                console.error('Error al obtener la enfermería:', error);
            });
    }, []);

    if (!enfermeria) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="enfermeriapage">
            <h1>{enfermeria.nombre}</h1>
            <p>Capacidad Máxima: {enfermeria.capacidadMaxima}</p>
            <h2>Dinosaurios en Enfermería:</h2>
            <ul>
                {enfermeria.dinosaurios && enfermeria.dinosaurios.map(dino => (
                    <li key={dino.id}>{dino.nombre} - Edad: {dino.edad}</li>
                ))}
            </ul>
            <h2>Tablero:</h2>
            <table>
                <tbody>
                {enfermeria.tablero && enfermeria.tablero.map((fila, indexFila) => (
                    <tr key={indexFila}>
                        {fila.map((celda, indexCelda) => (
                            <td key={indexCelda} className={celda === 1 ? 'occupied' : ''}></td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default EnfermeriaPage;
