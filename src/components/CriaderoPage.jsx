// src/components/CriaderoPage.jsx
import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/api';
import { useParams } from 'react-router-dom';

function CriaderoPage() {
    const { id } = useParams();
    const [criadero, setCriadero] = useState(null);

    useEffect(() => {
        getIsla(id)
            .then(response => {
                setCriadero(response.data);
            })
            .catch(error => {
                console.error('Error al obtener el criadero:', error);
            });
    }, [id]);

    if (!criadero) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>{criadero.nombre}</h1>
            <p>Capacidad Máxima: {criadero.capacidadMaxima}</p>
            <h2>Dinosaurios:</h2>
            <ul>
                {criadero.dinosaurios && criadero.dinosaurios.map(dino => (
                    <li key={dino.id}>{dino.nombre} - Edad: {dino.edad}</li>
                ))}
            </ul>
            <h2>Tablero:</h2>
            <table>
                <tbody>
                {criadero.tablero && criadero.tablero.map((fila, indexFila) => (
                    <tr key={indexFila}>
                        {fila.map((celda, indexCelda) => (
                            <td key={indexCelda}>{celda}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default CriaderoPage;
