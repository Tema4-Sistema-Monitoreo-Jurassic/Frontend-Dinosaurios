import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import '../styles/isla.css';

function EnfermeriaPage() {
    const [enfermeria, setEnfermeria] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const enfermeriaId = '3'; // ID de la enfermería
            getIsla(enfermeriaId)
                .then(response => {
                    setEnfermeria(response.data);
                })
                .catch(error => {
                    console.error('Error al obtener la enfermería:', error);
                });
        };

        fetchData(); // Cargar los datos inicialmente
        const intervalId = setInterval(() => {
            window.location.reload();
        }, 7000); // Recargar cada 7 segundos

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonte
    }, []);

    if (!enfermeria) {
        return <div>Cargando...</div>;
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