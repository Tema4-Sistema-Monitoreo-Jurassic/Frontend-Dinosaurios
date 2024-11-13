import React, { useEffect, useState } from 'react';
import { getIsla } from '../services/apiService';
import '../styles/isla.css';
import '../styles/spinner.css';
import { Link } from 'react-router-dom';

function EnfermeriaPage() {
    const [enfermeria, setEnfermeria] = useState(null);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

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

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(() => {
            setRefreshing(true);
            setTimeout(() => {
                fetchData();
                setRefreshing(false);
            }, 2000);
        }, 9000); // Refresh every 9 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="enfermeriapage">
            <Link to="/user" className="back-button">Regresar</Link>
            {refreshing ? (
                <div className="spinner-container">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <div className="text-content">
                        <h1>{enfermeria ? enfermeria.nombre : 'Enfermería'}</h1>
                        <p>Capacidad Máxima: {enfermeria ? enfermeria.capacidadMaxima : 'Cargando...'}</p>
                        <ul>
                            {enfermeria && enfermeria.dinosaurios ? (
                                enfermeria.dinosaurios.map(dino => (
                                    <li key={dino.id}>{dino.nombre} - Edad: {dino.edad}</li>
                                ))
                            ) : (
                                <td colSpan="5"></td>
                            )}
                        </ul>
                    </div>
                    <div className="table-container">
                        <table>
                            <tbody>
                            {enfermeria && enfermeria.tablero ? (
                                enfermeria.tablero.map((fila, indexFila) => (
                                    <tr key={indexFila}>
                                        {fila.map((celda, indexCelda) => (
                                            <td key={indexCelda} className={celda === 1 ? 'occupied' : ''}></td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Cargando...</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}

export default EnfermeriaPage;