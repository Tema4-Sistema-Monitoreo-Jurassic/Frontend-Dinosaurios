import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import '../styles/isla.css';
import '../styles/spinner.css';

function EnfermeriaPage() {
    const [enfermeria, setEnfermeria] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            const enfermeriaId = '3';
            getIsla(enfermeriaId)
                .then(response => {
                    setEnfermeria(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error al obtener la enfermería:', error);
                    setLoading(false);
                });
        };

        fetchData();
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 7000);

        return () => clearInterval(intervalId);
    }, []);

    if (loading) {
        return (
            <div className="spinner-container">
                <div className="spinner"></div>
                <p>Cargando...</p>
            </div>
        );
    }

    return (
        <div className="enfermeriapage">
            <div className="text-content">
                <h1>{enfermeria.nombre}</h1>
                <p>Capacidad Máxima: {enfermeria.capacidadMaxima}</p>
                <h2>Dinosaurios en Enfermería:</h2>
                <ul>
                    {enfermeria.dinosaurios && enfermeria.dinosaurios.map(dino => (
                        <li key={dino.id}>{dino.nombre} - Edad: {dino.edad}</li>
                    ))}
                </ul>
            </div>
            <div className="table-container">
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
        </div>
    );
}

export default EnfermeriaPage;