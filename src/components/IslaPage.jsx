// src/components/IslaPage.jsx
import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/api';
import { useParams } from 'react-router-dom';
import '../styles/Isla.css';

function IslaPage() {
    const { id } = useParams();
    const [isla, setIsla] = useState(null);

    useEffect(() => {
        getIsla(id)
            .then(response => {
                setIsla(response.data);
            })
            .catch(error => {
                console.error('Error al obtener la isla:', error);
            });
    }, [id]);

    if (!isla) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="islapage">
            <h1>{isla.nombre}</h1>
            <p>Capacidad Máxima: {isla.capacidadMaxima}</p>
            <h2>Dinosaurios:</h2>
            <ul>
                {isla.dinosaurios && isla.dinosaurios.map(dino => (
                    <li key={dino.id}>{dino.nombre} - Edad: {dino.edad}</li>
                ))}
            </ul>
            <h2>Tablero:</h2>
            <table>
                <tbody>
                {isla.tablero && isla.tablero.map((fila, indexFila) => (
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

export default IslaPage;
